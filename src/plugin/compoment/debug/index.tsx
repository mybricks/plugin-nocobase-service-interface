import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  extractParamsAndSchemaByJSON,
  formatSchema,
  getDataByExcludeKeys,
  getDataByOutputKeys,
  extractParamsBySchema,
  getDecodeString,
  jsonToSchema,
  params2data,
  hasFile,
  paramsToSchema,
} from "../../../utils"
import JSONView from "@mybricks/code-editor"
import ReturnShema from "../returnSchema"
import ParamsEdit from "../paramsEdit"
import Params from "../params"
import OutputSchemaMock from "../outputSchemaMock"
import FormItem from "../../../components/FormItem"
import { cloneDeep } from "../../../utils/lodash"
import Button from "../../../components/Button"
import { notice } from "../../../components/Message"
import { CDN, PLUGIN_CONNECTOR_NAME } from "../../../constant"
import css from "./index.less"

function DataShow({ data }: any) {
  let valueStr = ""
  try {
    valueStr = JSON.stringify(data, null, 2)
  } catch (error) {
    console.log(error, "error")
  }

  return !valueStr ? null : (
    <div style={{ marginLeft: 87 }}>
      <div className={css.title}>标记后的返回结果示例</div>
      {/* @ts-ignore */}
      <JSONView
        CDN={CDN}
        value={valueStr}
        language="json"
        env={{
          isNode: false,
          isElectronRenderer: false,
        }}
        readOnly
      />
    </div>
  )
}
const CodeIcon = (
  <svg viewBox="0 0 1027 1024" width="16" height="16" fill="currentColor">
    <path d="M321.828571 226.742857c-14.628571-14.628571-36.571429-14.628571-51.2 0L7.314286 482.742857c-14.628571 14.628571-14.628571 36.571429 0 51.2l256 256c14.628571 14.628571 36.571429 14.628571 51.2 0 14.628571-14.628571 14.628571-36.571429 0-51.2L87.771429 512l234.057142-234.057143c7.314286-14.628571 7.314286-36.571429 0-51.2z m263.314286 0c-14.628571 0-36.571429 7.314286-43.885714 29.257143l-131.657143 497.371429c-7.314286 21.942857 7.314286 36.571429 29.257143 43.885714s36.571429-7.314286 43.885714-29.257143l131.657143-497.371429c7.314286-14.628571-7.314286-36.571429-29.257143-43.885714z m431.542857 256l-256-256c-14.628571-14.628571-36.571429-14.628571-51.2 0-14.628571 14.628571-14.628571 36.571429 0 51.2L936.228571 512l-234.057142 234.057143c-14.628571 14.628571-14.628571 36.571429 0 51.2 14.628571 14.628571 36.571429 14.628571 51.2 0l256-256c14.628571-14.628571 14.628571-43.885714 7.314285-58.514286z"></path>
  </svg>
)

export default function Debug({ sidebarContext, validate, globalConfig }: any) {
  const [schema, setSchema] = useState(sidebarContext.formModel.resultSchema)
  const [remoteData, setData] = useState<any>()
  const [showParamsCode, setShowParamsCode] = useState(false)
  const [showResponseCode, setShowResponseCode] = useState(false)
  const allDataRef = useRef<any>()
  const codeTextRef = useRef<HTMLTextAreaElement>(null)
  const responseCodeTextRef = useRef<HTMLTextAreaElement>(null)
  const [errorInfo, setError] = useState("")
  const [params, setParams] = useState(sidebarContext.formModel.params)
  const [edit, setEdit] = useState(false)
  sidebarContext.formModel.params = sidebarContext.formModel.params || {
    type: "root",
    name: "root",
    children: [],
  }
  useEffect(() => {
    setSchema(sidebarContext.formModel.resultSchema)
  }, [sidebarContext.formModel.resultSchema])

  const onDebugClick = async () => {
    try {
      if (!validate()) return
      const originParams = sidebarContext.formModel.params || {}
      let params = params2data(originParams)

      /** 存在文件调试时，转为 formDta */
      if (
        ["POST", "PUT"].includes(sidebarContext.formModel.method) &&
        hasFile(originParams)
      ) {
        const formData = new FormData()

        Object.keys(params).forEach((key) => {
          const value = params[key]
          if (Array.isArray(value)) {
            if (value[0] instanceof File) {
              value.forEach((file) => formData.append(key, file))
            } else {
              formData.append(key, JSON.stringify(value))
            }
          } else if (typeof value === "object") {
            formData.append(
              key,
              value instanceof File ? value : JSON.stringify(value)
            )
          } else {
            formData.append(key, value)
          }
        })
        params = formData
      }
      // setData([]);
      setError("")
      const data = await sidebarContext.connector.test(
        {
          type: sidebarContext.formModel.type || "http-manatee",
          mode: "test",
          id: sidebarContext.formModel.id,
          connectorName: PLUGIN_CONNECTOR_NAME,
          content: sidebarContext.formModel,
        },
        params
      )
      allDataRef.current = data
      let { outputKeys = [], excludeKeys = [] } = sidebarContext.formModel
      const resultSchema = jsonToSchema(data)
      sidebarContext.formModel.resultSchema = resultSchema

      outputKeys = outputKeys
        .filter(Boolean)
        .map((key) => key.split("."))
        .filter((keys) => {
          let schema = resultSchema.properties || resultSchema.items?.properties

          for (let idx = 0; idx < keys.length; idx++) {
            const key = keys[idx]

            if (schema && schema[key]) {
              schema = schema[key].properties || schema[key].items?.properties
            } else {
              return false
            }
          }

          return true
        })
        .map((keys) => keys.join("."))
      excludeKeys = excludeKeys
        .filter(Boolean)
        .map((key) => key.split("."))
        .filter((keys) => {
          let schema = resultSchema.properties || resultSchema.items?.properties

          for (let idx = 0; idx < keys.length; idx++) {
            const key = keys[idx]

            if (schema && schema[key]) {
              schema = schema[key].properties || schema[key].items?.properties
            } else {
              return false
            }
          }

          return true
        })
        .map((keys) => keys.join("."))

      let outputData = getDataByExcludeKeys(
        getDataByOutputKeys(data, outputKeys),
        excludeKeys
      )
      let outputSchema = jsonToSchema(outputData)
      /** 当标记单项时，自动返回单项对应的值 */
      if (
        Array.isArray(outputKeys) &&
        outputKeys.length &&
        (outputKeys.length > 1 ||
          !(outputKeys.length === 1 && outputKeys[0] === ""))
      ) {
        try {
          let cascadeOutputKeys = [...outputKeys].map((key) => key.split("."))
          while (
            Object.prototype.toString.call(outputData) === "[object Object]" &&
            cascadeOutputKeys.every((keys) => !!keys.length) &&
            Object.values(outputData).length === 1
          ) {
            outputData = Object.values(outputData)[0]
            outputSchema = Object.values(outputSchema.properties)[0]
            cascadeOutputKeys.forEach((keys) => keys.shift())
          }
        } catch {}
      }

      setData(outputData)

      formatSchema(sidebarContext.formModel.resultSchema)
      formatSchema(outputSchema)
      const inputSchema = paramsToSchema(originParams)
      formatSchema(inputSchema)
      sidebarContext.formModel.outputKeys = outputKeys
      sidebarContext.formModel.excludeKeys = excludeKeys
      sidebarContext.formModel.outputSchema = outputSchema
      sidebarContext.formModel.inputSchema = inputSchema
      setSchema({ ...sidebarContext.formModel.resultSchema })
    } catch (error: any) {
      console.error(error)
      sidebarContext.formModel.outputSchema = void 0
      sidebarContext.formModel.resultSchema = void 0
      setError(error?.message || error)
    }
  }

  const onParamsChange = useCallback((params) => {
    if (params !== void 0) {
      const inputSchema = paramsToSchema(params)
      formatSchema(inputSchema)
      sidebarContext.formModel.inputSchema = inputSchema
      sidebarContext.formModel.params = params
      setParams(params)
    }
  }, [])

  const onKeysChange = useCallback((outputKeys = [], excludeKeys = []) => {
    const { resultSchema } = sidebarContext.formModel

    try {
      /** 当标记单项时，自动返回单项对应的值 */
      let autoExtra = false

      let outputSchema: any = {}
      if (outputKeys.length === 0) {
        outputSchema = sidebarContext.formModel.resultSchema
      } else if (outputKeys.length === 1 && outputKeys[0] === "") {
        outputSchema = { type: "any" }
      } else {
        outputSchema =
          resultSchema.type === "array"
            ? {
                type: "array",
                items:
                  resultSchema.items?.type === "object"
                    ? { type: "object", properties: {} }
                    : resultSchema.items?.type === "array"
                    ? { type: "array", items: {} }
                    : { type: resultSchema.items?.type },
              }
            : { type: "object", properties: {} }

        outputKeys.forEach((key: string) => {
          let subSchema =
            outputSchema.properties ||
            outputSchema.items?.properties ||
            outputSchema.items?.items
          let subResultSchema =
            resultSchema.properties ||
            resultSchema.items?.properties ||
            resultSchema.items?.items
          const keys = key.split(".")

          keys.forEach((field, index) => {
            if (!subSchema || !subResultSchema || !subResultSchema[field]) {
              return
            }

            if (index === keys.length - 1) {
              subSchema[field] = { ...subResultSchema[field] }
            } else {
              const { type } = subResultSchema[field]

              if (type === "array") {
                subSchema[field] = subSchema[field] || {
                  ...subResultSchema[field],
                  items:
                    subResultSchema[field].items.type === "object"
                      ? { type: "object", properties: {} }
                      : subResultSchema[field].items.type === "array"
                      ? { type: "array", items: {} }
                      : { type: subResultSchema[field].items.type },
                }
                subSchema = subSchema[field].items.properties
                subResultSchema = subResultSchema[field].items.properties
              } else if (type === "object") {
                subSchema[field] = subSchema[field] || {
                  ...subResultSchema[field],
                  properties: {},
                }
                subSchema = subSchema[field].properties
                subResultSchema = subResultSchema[field].properties
              } else {
                subSchema[field] = { ...subResultSchema[field] }
                subSchema = subSchema[field].properties
                subResultSchema = subResultSchema[field].properties
              }
            }
          })
        })
        if (Object.keys(outputSchema.properties).length === 1) {
          autoExtra = true
        }
      }

      excludeKeys = excludeKeys
        .map((key) => key.split("."))
        .filter((keys) => {
          let schema = outputSchema.properties || outputSchema.items?.properties

          for (let idx = 0; idx < keys.length; idx++) {
            const key = keys[idx]

            if (schema && schema[key]) {
              schema = schema[key].properties || schema[key].items?.properties
            } else {
              return false
            }
          }

          return true
        })
        .map((keys) => keys.join("."))

      let newOutputSchema = cloneDeep(outputSchema)
      excludeKeys?.forEach((key: string) => {
        const keys = key.split(".")
        const len = keys.length
        let schema = newOutputSchema
        for (let i = 0; i < len - 1; i++) {
          schema = (schema.properties || schema.items.properties)[keys[i]]
        }
        try {
          Reflect.deleteProperty(
            schema.properties || schema.items.properties,
            keys[len - 1]
          )
        } catch (error) {}
      })

      try {
        const cloneData = cloneDeep(allDataRef.current)
        let outputData = getDataByOutputKeys(
          getDataByExcludeKeys(cloneData, excludeKeys),
          outputKeys
        )

        if (autoExtra) {
          try {
            let cascadeOutputKeys = outputKeys.map((key) => key.split("."))
            while (
              newOutputSchema.type === "object" &&
              cascadeOutputKeys.every((keys) => !!keys.length) &&
              Object.values(newOutputSchema.properties || {}).length === 1
            ) {
              outputData = allDataRef.current
                ? Object.values(outputData)[0]
                : outputData
              newOutputSchema = Object.values(newOutputSchema.properties)[0]
              cascadeOutputKeys.forEach((keys) => keys.shift())
            }
          } catch (e) {
            console.log(e)
          }
        }
        if (outputData !== void 0) {
          setData(allDataRef.current ? outputData : undefined)
        }
      } catch (error) {}

      sidebarContext.formModel.outputKeys = outputKeys
      sidebarContext.formModel.excludeKeys = excludeKeys
      sidebarContext.formModel.outputSchema = newOutputSchema
    } catch (error) {
      console.log(error)
    }
  }, [])

  const onOutputKeysChange = useCallback(
    (outputKeys) => {
      onKeysChange(outputKeys, sidebarContext.formModel.excludeKeys)
    },
    [sidebarContext]
  )

  const onExcludeKeysChange = useCallback(
    (excludeKeys) => {
      onKeysChange(sidebarContext.formModel.outputKeys, excludeKeys)
    },
    [sidebarContext]
  )

  const onMockSchemaChange = useCallback((schema) => {
    sidebarContext.formModel.resultSchema = schema
  }, [])
  const editSchema = () => {
    setEdit(true)
  }
  const saveSchema = () => {
    setEdit(false)
  }
  const toggleParamsCodeShow = useCallback(
    (event) => {
      event.stopPropagation()
      if (showParamsCode) {
        try {
          const jsonSchema = JSON.parse(codeTextRef.current?.value)

          if (jsonSchema.type === "object" && !!jsonSchema.properties) {
            if (
              JSON.stringify(sidebarContext.formModel.inputSchema) !==
              JSON.stringify(jsonSchema)
            ) {
              sidebarContext.formModel.inputSchema = jsonSchema
              const params = extractParamsBySchema(jsonSchema)
              sidebarContext.formModel.params = params
              setParams(params)
            }
          } else if (
            Object.prototype.toString.call(jsonSchema) === "[object Object]"
          ) {
            const { params, originSchema } =
              extractParamsAndSchemaByJSON(jsonSchema)
            sidebarContext.formModel.inputSchema = originSchema
            sidebarContext.formModel.params = params
            setParams(params)
          } else {
            notice("JSON 描述不合法，此次变更被忽略", { type: "warning" })
          }
        } catch (e) {
          console.warn("JSON 解析错误", e)
          notice("JSON 解析错误，此次变更被忽略", { type: "warning" })
        }
      }

      setShowParamsCode(!showParamsCode)
    },
    [showParamsCode]
  )
  const toggleResponseCodeShow = useCallback(
    (event) => {
      event.stopPropagation()
      if (showResponseCode) {
        try {
          const jsonSchema = JSON.parse(responseCodeTextRef.current?.value)

          if (
            JSON.stringify(sidebarContext.formModel.resultSchema) !==
            JSON.stringify(jsonSchema)
          ) {
            sidebarContext.formModel.resultSchema = jsonSchema
            sidebarContext.formModel.outputKeys = []
            sidebarContext.formModel.excludeKeys = []
            sidebarContext.formModel.outputSchema = jsonSchema
          }
        } catch (e) {
          console.warn("JSON 解析错误", e)
          notice("JSON 解析错误，此次变更被忽略", { type: "warning" })
        }
      }

      setShowResponseCode(!showResponseCode)
    },
    [showResponseCode]
  )

  return (
    <>
      <div className={css.paramEditContainer}>
        {showParamsCode ? (
          <FormItem label="请求参数">
            <textarea
              style={{ width: "100%" }}
              ref={codeTextRef}
              className={css.codeText}
              cols={30}
              rows={10}
              defaultValue={JSON.stringify(
                sidebarContext.formModel.inputSchema,
                null,
                2
              )}
            />
            <div>支持识别 JSON、JSON Schema 等描述协议</div>
          </FormItem>
        ) : (
          <>
            <FormItem label="请求参数">
              <ParamsEdit
                value={sidebarContext.formModel.params}
                ctx={sidebarContext}
                onChange={onParamsChange}
              />
            </FormItem>
            <FormItem>
              <Params
                onDebugClick={onDebugClick}
                ctx={sidebarContext}
                params={params}
              />
            </FormItem>
          </>
        )}

        <div
          className={`${css.codeIcon} ${showParamsCode ? css.focus : ""}`}
          onClick={toggleParamsCodeShow}
        >
          {CodeIcon}
        </div>
      </div>
      {edit ? (
        <>
          <FormItem label="返回数据">
            {sidebarContext.formModel.resultSchema ? (
              <Button
                style={{ margin: 0, marginBottom: 6 }}
                onClick={saveSchema}
              >
                保存
              </Button>
            ) : null}
            <OutputSchemaMock
              schema={sidebarContext.formModel.resultSchema}
              ctx={sidebarContext}
              onChange={onMockSchemaChange}
            />
          </FormItem>
        </>
      ) : (
        <>
          <FormItem label="返回数据">
            {showResponseCode ? (
              <div style={{ width: "100%" }}>
                <textarea
                  ref={responseCodeTextRef}
                  className={css.codeText}
                  style={{ width: "100%" }}
                  cols={30}
                  rows={10}
                  defaultValue={JSON.stringify(
                    sidebarContext.formModel.resultSchema,
                    null,
                    2
                  )}
                />
                <div>支持识别JSON Schema 描述协议</div>
              </div>
            ) : (
              <>
                {sidebarContext.formModel.resultSchema ? (
                  <Button
                    style={{ margin: 0, marginBottom: 6 }}
                    onClick={editSchema}
                  >
                    编辑
                  </Button>
                ) : null}
                <ReturnShema
                  outputKeys={sidebarContext.formModel.outputKeys}
                  excludeKeys={sidebarContext.formModel.excludeKeys}
                  onOutputKeysChange={onOutputKeysChange}
                  onExcludeKeysChange={onExcludeKeysChange}
                  schema={schema}
                  error={errorInfo}
                />
              </>
            )}

            <div
              className={`${css.codeIcon} ${css.responseCodeIcon} ${
                showResponseCode ? css.focus : ""
              }`}
              onClick={toggleResponseCodeShow}
            >
              {CodeIcon}
            </div>
          </FormItem>
          <DataShow data={remoteData} />
        </>
      )}
    </>
  )
}
