import axios from "axios"
import qs from "qs"
import { getDecodeString } from "../script"
// import { schema2data } from "../utils"
import { cloneDeep } from "../utils/lodash"

interface IOptions {
  method: string
  url: string
  data: any
  params: any
  headers: any
  [key: string]: any
}

interface IConfig {
  before: (options: IOptions) => any
  onResponseInterception?(response): any
}

const defaultFn = (options: IOptions, ...args: any) => ({
  ...options,
  ...args,
})

const httpRegExp = new RegExp("^(http|https)://")

const setData = (data, keys, val) => {
  const len = keys.length
  function dfs(res, index, val) {
    if (!res || index === len) {
      return res
    }
    const key = keys[index]
    if (Array.isArray(res)) {
      return res.map((item, i) => {
        const curVal = val[i]
        let obj
        if (curVal === void 0) {
          obj = {}
          val.push(obj)
        } else {
          obj = curVal
        }
        return dfs(item, index, obj)
      })
    } else {
      if (index === len - 1) {
        val[key] = res[key]
        return res[key]
      }
      res = res[key]
      if (Array.isArray(res)) {
        val[key] = val[key] || []
      } else {
        val[key] = val[key] || {}
      }
    }
    return dfs(res, index + 1, Array.isArray(val) ? val : val[key])
  }
  return dfs(data, 0, val)
}
const del = (data, keys) => {
  const len = keys.length
  function dfs(data, index) {
    if (!data || index === len) return
    const key = keys[index]
    if (index === len - 1) {
      Reflect.deleteProperty(data, key)
    }
    if (Array.isArray(data)) {
      data.forEach((item) => {
        dfs(item, index)
      })
    } else {
      dfs(data[key], index + 1)
    }
  }
  dfs(data, 0)
}
const pluginRun = (functionString) =>
  eval(
    `(() => { return ${
      functionString ? getDecodeString(functionString) : "_ => _;"
    }})()`
  )
const getFetch = (connector) => {
  return (params, { then, onError }, config) => {
    const method = connector.method
    const path = connector.path.trim()
    const outputKeys = connector.outputKeys || []
    const excludeKeys = connector.excludeKeys || []
    const showLog = connector.mode === "test"
    try {
      showLog &&
        console.log("【连接器调试日志】接口传入参数：", cloneDeep(params))

      const url = path
      const originParams = method.startsWith("GET")
        ? { params, url, method }
        : { data: params, url, method }

      showLog &&
        console.log(
          "【连接器调试日志】全局入参拦截器(执行前配置)：",
          cloneDeep(originParams)
        )

      /** 全局入参处理 */
      const newParams = pluginRun(connector.globalParamsFn)(originParams)

      showLog &&
        console.log(
          "【连接器调试日志】全局入参拦截器(执行后配置)：",
          cloneDeep(newParams)
        )
      newParams.url = newParams.url || url
      newParams.method = newParams.method || method
      showLog &&
        console.log(
          "【连接器调试日志】接口自定义入参拦截器(执行前配置)：",
          cloneDeep(newParams)
        )
      /** 局部入参处理 */
      const options = pluginRun(connector.input)(newParams)
      showLog &&
        console.log(
          "【连接器调试日志】接口自定义入参拦截器(执行后配置)：",
          cloneDeep(options)
        )
      showLog &&
        console.log(
          "【连接器调试日志】接口请求路径模板字符串处理(执行前配置)：",
          cloneDeep(options)
        )
      const isFormData = (options.params || options.data) instanceof FormData
      const templateParamKeys = []
      /** url 里支持模板字符串 */
      options.url = (options.url || url).replace(/{([^}]+)}/g, (match, key) => {
        const keys = key ? key.split(".") : []
        let curParams = options.params || options.data

        if (!keys.length) {
          onError(`请求路径中模板字符串错误`)
        }
        let index = 0
        templateParamKeys.push(keys[0])
        while (keys.length) {
          const curKey = keys.shift()
          if (!curParams) {
            onError(`请求路径中模板字符串的参数(${key})缺失`)
            return
          }
          let value = curParams[curKey]
          if (curParams instanceof FormData) {
            value = curParams.get(curKey)

            /** 存在嵌套变量 */
            if (index === 0 && keys.length) {
              try {
                value = JSON.parse(value)
              } catch {
                onError(`请求路径中模板字符串的参数(${key})缺失`)
                return
              }
            }
          }

          if (value === undefined || value === null) {
            onError(`请求路径中模板字符串的参数(${key})缺失`)
          }

          index++
          curParams = value
        }

        return curParams
      })
      if (isFormData) {
        templateParamKeys.forEach((key) => {
          ;(options.params || options.data).delete(key)
        })
        ;(options.params || options.data).delete("MYBRICKS_HOST")
      } else {
        templateParamKeys.forEach((key) => {
          Reflect.deleteProperty(options.params || options.data || {}, key)
        })
        Reflect.deleteProperty(
          options.params || options.data || {},
          "MYBRICKS_HOST"
        )
      }
      showLog &&
        console.log(
          "【连接器调试日志】接口请求路径模板字符串处理(执行后配置)：",
          cloneDeep(options)
        )
      options.method = options.method || method

      if (options.method.toLowerCase() === "get" && !options.paramsSerializer) {
        options.paramsSerializer = (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        }
      }

      config
        .ajax(options)
        .then((response) => {
          showLog &&
            console.log(
              "【连接器调试日志】全局出参拦截器(执行前数据)：",
              cloneDeep(response)
            )
          /** 全局响应值处理 */
          const result = pluginRun(connector.globalResultFn)(
            { response, config: options },
            { throwStatusCodeError: onError }
          )

          showLog &&
            console.log(
              "【连接器调试日志】全局出参拦截器(执行后数据)：",
              cloneDeep(result)
            )
          return result
        })
        .then((response) => {
          showLog &&
            console.log(
              "【连接器调试日志】接口自定义出参拦截器(执行前数据)：",
              cloneDeep(response)
            )
          /** 局部响应值处理 */
          const result = pluginRun(connector.output)(
            response,
            Object.assign({}, options),
            { throwStatusCodeError: onError }
          )

          showLog &&
            console.log(
              "【连接器调试日志】接口自定义出参拦截器(执行后数据)：",
              cloneDeep(result)
            )
          return result
        })
        .then((response) => {
          if (connector.mode === "test") {
            then(response)
            return
          }
          excludeKeys?.forEach((key) => del(response, key.split(".")))

          return response
        })
        .then((response) => {
          let outputData: any = Array.isArray(response) ? [] : {}
          if (outputKeys === void 0 || outputKeys.length === 0) {
            outputData = response
          } else {
            outputKeys.forEach((key) => {
              setData(response, key.split("."), outputData)
            })

            /** 当标记单项时，自动返回单项对应的值 */
            if (
              Array.isArray(outputKeys) &&
              outputKeys.length &&
              (outputKeys.length > 1 ||
                !(outputKeys.length === 1 && outputKeys[0] === ""))
            ) {
              try {
                let cascadeOutputKeys = outputKeys.map((key) => key.split("."))
                while (
                  Object.prototype.toString.call(outputData) ===
                    "[object Object]" &&
                  cascadeOutputKeys.every((keys) => !!keys.length) &&
                  Object.values(outputData).length === 1
                ) {
                  outputData = Object.values(outputData)[0]
                  cascadeOutputKeys.forEach((keys) => keys.shift())
                }
              } catch (e) {
                console.log("connector format data error", e)
              }
            }
          }

          then(outputData)
        })
        .catch((error) => {
          onError((error && error.message) || error)
        })
    } catch (error) {
      return onError(error)
    }
  }
}

export function call(
  connector: {
    id: string
    script: string
    useProxy?: boolean
    executeEnv?: string
    [key: string]: any
  },
  params: any,
  config?: IConfig,
  headers?: any
) {
  return new Promise((resolve, reject) => {
    try {
      const fn = connector.script
        ? eval(`(${decodeURIComponent(connector.script)})`)
        : getFetch(connector)
      const { before = defaultFn } = config || {}
      fn(
        typeof params === "object" ? params : {},
        { then: resolve, onError: reject },
        {
          executeEnv: connector.executeEnv,
          ajax(options: IOptions) {
            const opts = before({ ...options })
            const { url } = opts

            if (!url) {
              reject("请求路径不能为空")
            }

            if (
              connector.useProxy &&
              httpRegExp.test(url) &&
              url.match(/^https?:\/\/([^/#&?])+/g)?.[0] !== location.origin
            ) {
              return axios({
                ...opts,
                url: "/paas/api/proxy",
                headers: {
                  ...(headers || {}),
                  ...(opts.headers || {}),
                  ["x-target-url"]: opts.url,
                },
                data: opts.data,
              })
                .then((res: any) => {
                  config?.onResponseInterception?.(res)
                  return res.data
                })
                .catch((error) => reject(error.response.data?.message || error))
            }
            return axios(opts || options)
              .then((res) => {
                config?.onResponseInterception?.(res)
                return res.data
              })
              .catch((error) => reject(error.response?.data?.message || error))
          },
        }
      )
    } catch (ex) {
      console.log("连接器错误", ex)
      reject(`连接器script错误.`)
    }
  })
}
