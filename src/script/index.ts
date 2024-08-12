// @ts-nocheck

import { exampleParamsFunc } from "../constant"

export function getDecodeString(fn: string) {
  return fn
    ? decodeURIComponent(fn).replace(
        /export\s+default.*function.*\(/,
        "function _RT_("
      )
    : fn
}

function getScript(serviceItem) {
  function fetch(params, { then, onError }, config) {
    function setData(data, keys, val) {
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
    function del(data, keys) {
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
    function serviceAgent(params, config) {
      const method = `__method__`
      const path = `__path__`
      const outputKeys = __outputKeys__
      const excludeKeys = __excludeKeys__
      const envList = __envList__

      try {
        const url = path
        const newParams = __globalParamsFn__(
          method.startsWith("GET")
            ? { params, url, method }
            : { data: params, url, method }
        )
        const hasGlobalResultFn = __hasGlobalResultFn__
        newParams.url = newParams.url || url
        newParams.method = newParams.method || method
        const options = __input__(newParams)
        const isFormData = (options.params || options.data) instanceof FormData
        const templateParamKeys = []
        /** url 里支持模板字符串 */
        options.url = (options.url || url).replace(
          /{([^}]+)}/g,
          (match, key) => {
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
          }
        )
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
        options.method = options.method || method
        if (envList.length && config.executeEnv) {
          const env = envList.find((e) => e.name === config.executeEnv)
          if (
            env &&
            env.defaultApiPrePath &&
            !/^(https?|ws)/.test(options.url)
          ) {
            options.url = env.defaultApiPrePath + options.url
          }
        }
        config
          .ajax(options)
          .then((response) => {
            if (hasGlobalResultFn) {
              const res = __globalResultFn__(
                { response, config: options },
                {
                  throwStatusCodeError: (data: any) => {
                    onError(data)
                  },
                }
              )
              return res
            }
            return response
          })
          .then((response) => {
            const res = __output__(response, Object.assign({}, options), {
              throwStatusCodeError: (data) => {
                onError(data)
              },
            })
            return res
          })
          .then((response) => {
            if (excludeKeys.length === 0) {
              return response
            }
            excludeKeys.forEach((key) => {
              const keys = key.split(".")
              del(response, keys)
            })
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
                  let cascadeOutputKeys = outputKeys.map((key) =>
                    key.split(".")
                  )
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

            /** 领域模型接口按需展示日志，需返回源数据 */
            if (
              options.method.toUpperCase() === "POST" &&
              options.url.endsWith("/domain/run") &&
              options.data &&
              options.data.fileId &&
              options.data.serviceId &&
              options.data.params &&
              options.data.params.showToplLog
            ) {
              then({ __ORIGIN_RESPONSE__: response, outputData })
            } else {
              then(outputData)
            }
          })
          .catch((error) => {
            onError((error && error.message) || error)
          })
      } catch (error) {
        return onError(error)
      }
    }
    return serviceAgent(params, config)
  }
  return encodeURIComponent(
    fetch
      .toString()
      .replace("__input__", getDecodeString(serviceItem.input))
      .replace("__output__", getDecodeString(serviceItem.output))
      .replace(
        "__globalResultFn__",
        serviceItem.globalResultFn
          ? getDecodeString(serviceItem.globalResultFn)
          : void 0
      )
      .replace(
        "__hasGlobalResultFn__",
        serviceItem.globalResultFn ? true : false
      )
      .replace("__envList__", JSON.stringify(serviceItem.envList ?? []))
      .replace("__method__", serviceItem.method)
      .replace("__path__", serviceItem.path.trim())
      .replace("__outputKeys__", JSON.stringify(serviceItem.outputKeys))
      .replace("__excludeKeys__", JSON.stringify(serviceItem.excludeKeys || []))

      .replace(
        "__globalParamsFn__",
        getDecodeString(serviceItem.globalParamsFn || exampleParamsFunc)
      )
  )
}

export { getScript }
