import * as pinyin from 'pinyin-pro'
import { isEmpty, cloneDeep } from "../utils/lodash"

export function getServiceUrl(uri: string) {
  return `/app/pcspa/desn/${uri}`
}

export function getDecodeString(fn: string) {
  return decodeURIComponent(fn).replace(
    /export\s+default.*function.*\(/,
    "function _RT_("
  )
}

export function getLast(list: any[]) {
  return list[list.length - 1]
}

export function formatSchema(schema: any) {
  if (!schema) return
  if (schema.type === "object") {
    Object.values(schema.properties).forEach((item) => {
      formatSchema(item)
    })
  } else if (schema.type === "array") {
    if (isEmpty(schema.items)) {
      Object.defineProperty(schema, "type", {
        writable: true,
        value: "array",
      })
      Reflect.deleteProperty(schema, "items")
    } else {
      if (schema.items.type === "object") {
        Object.values(schema.items.properties).forEach((item) => {
          formatSchema(item)
        })
      }
      // TODO oneOf
    }
  } else if (schema.type === "unknown") {
    Object.defineProperty(schema, "type", {
      writable: true,
      value: "string",
    })
  }
}

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

export function getDataByOutputKeys(data, outputKeys) {
  let outputData: any = Array.isArray(data) ? [] : {}
  if (outputKeys === void 0 || outputKeys.length === 0) {
    outputData = data
  } else {
    outputKeys.forEach((key: string) => {
      setData(data, key.split("."), outputData)
    })
  }
  return outputData
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

export function getDataByExcludeKeys(data, excludeKeys) {
  if (!excludeKeys || excludeKeys.length === 0) {
    return data
  }
  const res = cloneDeep(data)
  excludeKeys.forEach((keys) => {
    del(res, keys.split("."))
  })
  return res
}

export function paramsToSchema(node) {
  let schema: any = { type: node.type }

  switch (node.type) {
    case "root":
      schema.type = "object"
      schema.properties = {}
      node.children.forEach((childNode) => {
        schema.properties[childNode.name] = paramsToSchema(childNode)
      })
      break
    case "object":
      schema.properties = {}
      node.children.forEach((childNode) => {
        schema.properties[childNode.name] = paramsToSchema(childNode)
      })
      break
    case "array":
      schema.type = "array"
      schema.items = node.children[0] ? paramsToSchema(node.children[0]) : {}
      break
  }

  return schema
}

export function params2data(params: any) {
  if (!params) return
  let obj: any = {}

  if (params.type === "string") {
    return params.defaultValue || ""
  }
  if (params.type === "any") {
    return params.defaultValue || ""
  }
  if (params.type === "number") {
    return +params.defaultValue
  }

  if (params.children) {
    if (params.type === "array") {
      obj = []
    }
    params.children.forEach((child: any) => {
      obj[child.name] = params2data(child)
    })
  }

  return obj
}

export function hasFile(params: any) {
  if (!params) return false
  let obj = false

  if (params.type === "any") {
    return params.defaultValue instanceof File
  }

  if (params.children) {
    params.children.forEach((child: any) => {
      obj = obj || hasFile(child)
    })
  }

  return obj
}

export function uuid(len = 6) {
  const seed = "abcdefhijkmnprstwxyz"
  const maxPos = seed.length
  let rtn = ""
  for (let i = 0; i < len; i++) {
    rtn += seed.charAt(Math.floor(Math.random() * maxPos))
  }
  return "u_" + rtn
}

export function schema2data(schema: any) {
  function getBasicData(schema: any) {
    const { type } = schema

    if (schema.default !== void 0 && schema.default !== "") {
      return schema.default
    }

    if (type === "string") {
      const { minLength = 0, maxLength = 8 } = schema
      const min = +minLength
      const max = +maxLength
      const str = uuid(max).slice(
        max - Math.round(min + Math.random() * (max - min))
      )
      return str
    } else {
      const { minimum = 0, maximum = 100 } = schema
      const min = +minimum
      const max = +maximum
      return min + Math.round(Math.random() * (max - min))
    }
  }
  function uuid(len = 6) {
    const seed = "abcdefhijkmnprstwxyz"
    const maxPos = seed.length
    let rtn = ""
    for (let i = 0; i < len; i++) {
      rtn += seed.charAt(Math.floor(Math.random() * maxPos))
    }
    return rtn
  }
  function mockSchemaData(schema: any) {
    if (!schema) return
    let obj: any
    const { type } = schema
    if (type === "string" || type === "number") {
      return getBasicData(schema)
    }

    if (type === "array") {
      obj = []
      const { minItems = 1, maxItems = 5 } = schema
      const len = minItems + Math.round(Math.random() * (maxItems - minItems))
      for (let i = 0; i < len; i++) {
        const value = schema2data(schema.items)
        if (value !== null && value !== void 0) {
          obj.push(value)
        }
      }
    }
    if (schema.type === "object") {
      obj = {}
      Object.keys(schema.properties || {}).forEach((key) => {
        obj[key] = schema2data(schema.properties[key])
      })
    }
    return obj
  }
  return mockSchemaData(schema)
}

export function jsonToSchema(json: any): any {
  const schema = { type: void 0 }
  proItem({ schema, val: json })
  if (schema.type) {
    return schema
  } else {
    return
  }
}

function proItem({
  schema,
  val,
  key,
  fromAry,
}: {
  schema: any
  val: any
  key?: string
  fromAry?: any[]
}) {
  if (Array.isArray(val)) {
    const items = val.length ? {} : void 0
    if (key) {
      schema[key] = {
        type: "array",
        items,
      }
      if (items) {
        schema[key].items = items
      }
    } else {
      schema.type = "array"
      if (items) {
        schema.items = items
      }
    }

    proAry(items, val)
  } else {
    if (typeof val === "object" && val) {
      let nSchema
      if (fromAry) {
        schema.type = "object"
        nSchema = schema.properties = {}
      }

      const properties = fromAry ? nSchema : {}

      if (!fromAry) {
        if (key) {
          schema[key] = {
            type: "object",
            properties,
          }
        } else {
          schema.type = "object"
          schema.properties = properties
        }
      }

      proObj(properties, val)
    } else {
      const type = val === null || val === void 0 ? "unknown" : typeof val
      if (key === void 0) {
        schema.type = type
      } else {
        schema[key] = { type }
      }
    }
  }
}

function proObj(curSchema: any, obj: any) {
  Object.keys(obj).map((key) => {
    return proItem({ schema: curSchema, val: obj[key], key })
  })
}

function proAry(curSchema, ary) {
  if (!curSchema) return

  const schemaList = []
  if (ary.length > 0) {
    ary.forEach((item) => {
      const schema = JSON.parse(JSON.stringify(curSchema))
      proItem({ schema, val: item, fromAry: true } as unknown as any)
      schemaList.push(schema)
    })
  }
  mergeSchemaTypeBySchemaList(curSchema, schemaList.filter(Boolean))
}

const mergeSchemaTypeBySchemaList = (schema, schemaList) => {
  if (!schemaList) {
    return schema
  }

  let curSchema = null
  for (let index = 0; index < schemaList.length; index++) {
    const item = schemaList[index]

    if (!item || !Object.keys(item).length) {
      continue
    }

    if (!curSchema) {
      if (item.type !== "unknown") {
        if (item.type === "object" || item.type === "array") {
          curSchema = item
          Object.assign(schema, item)
        } else {
          delete schema.properties
          Object.assign(schema, item)
          break
        }
      } else {
        delete schema.properties
        Object.assign(schema, item)
      }
    } else {
      if (schema.type === "object" && item.type === "object") {
        Object.keys(item.properties || {}).forEach((key) => {
          const property = schema.properties[key]

          if (
            (!property && item.properties[key]) ||
            (property.type === "unknown" &&
              item.properties[key].type !== "unknown")
          ) {
            schema.properties[key] = item.properties[key]
          }
        })
      } else if (schema.type === "array" && item.type === "array") {
        if (!schema.items || !Object.keys(schema.items).length) {
          schema.items = item.items || {}
        }
      }
    }
  }

  if (schema.type === "object") {
    Object.keys(schema.properties || {}).forEach((key) => {
      if (schema.properties?.[key]?.type === "object") {
        mergeSchemaTypeBySchemaList(
          schema.properties[key],
          schemaList.filter(Boolean).map((item) => item?.properties?.[key])
        )
      } else if (schema.properties?.[key]?.type === "array") {
        if (!schema.properties?.[key]?.items) {
          schema.properties[key].items = {}
        }

        mergeSchemaTypeBySchemaList(
          schema.properties[key],
          schemaList.filter(Boolean).map((item) => item?.properties?.[key])
        )
      }
    })
  } else if (schema.type === "array") {
    if (!schema.items) {
      schema.items = {}
    }

    mergeSchemaTypeBySchemaList(
      schema.items,
      schemaList.filter(Boolean).map((item) => item?.items || {})
    )
  }
}

export function safeDecode(code: string) {
  try {
    return decodeURIComponent(code)
  } catch (error) {
    return code
  }
}
export const extractParamsBySchema = (originSchema) => {
  const params = { id: uuid(), name: "root", type: "root", children: [] }

  const dfs = (param, schema) => {
    if (schema.type === "object") {
      Object.keys(schema.properties).forEach((key) => {
        const property = schema.properties[key]
        const item = {
          type: property.type,
          name: key,
          id: uuid(),
          defaultValue: property.defaultValue ?? "",
          children: [],
        }
        param.children.push(item)

        if (["array", "object"].includes(property.type)) {
          dfs(item, property)
        }
      })
    } else if (schema.type === "array") {
      if (!schema.items?.type) {
        return
      }
      const item = {
        type: schema.items.type,
        name: "0",
        id: uuid(),
        defaultValue: schema.items.defaultValue ?? "",
        children: [],
      }
      param.children.push(item)

      if (["array", "object"].includes(schema.items.type)) {
        dfs(item, schema.items)
      }
    }
  }

  dfs(params, originSchema)

  return params
}
export const extractParamsAndSchemaByJSON = (json) => {
  const params = { id: uuid(), name: "root", type: "root", children: [] }
  const originSchema = jsonToSchema(json)
  formatSchema(originSchema)

  const dfs = (param, json) => {
    if (!json) {
      return
    }

    if (Array.isArray(json)) {
      json.forEach((value, index) => {
        const type =
          value === null || value === void 0
            ? "string"
            : Array.isArray(value)
            ? "array"
            : typeof value
        const item = {
          name: String(index),
          id: uuid(),
          defaultValue: ["object", "array"].includes(type) ? "" : value,
          children: [],
          type,
        }

        param.children.push(item)

        dfs(item, value)
      })
    } else if (typeof json === "object") {
      Object.keys(json).forEach((key) => {
        const type =
          json[key] === null || json[key] === void 0
            ? "string"
            : Array.isArray(json[key])
            ? "array"
            : typeof json[key]
        const item = {
          name: key,
          id: uuid(),
          defaultValue: ["object", "array"].includes(type) ? "" : json[key],
          children: [],
          type,
        }
        param.children.push(item)

        dfs(item, json[key])
      })
    }
  }

  dfs(params, json)

  return { params, originSchema }
}

export const textSearchWithPinyin = (text: string, keyword: string) => {
  if (!text || !keyword) return false
  // 匹配英文
  if (text.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())) return true
  // 匹配拼音
  const pinyinArr = pinyin.match(text, keyword, { continuous: true })
  if (pinyinArr) return true

  return false
}

export const letterCompare = (a: string, b: string) => {
  return a && b && a.toUpperCase().includes(b.toUpperCase())
}