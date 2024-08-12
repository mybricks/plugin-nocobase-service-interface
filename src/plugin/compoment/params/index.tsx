/**
 * 使用树形选择器完成字段映射
 */

import React, { useCallback } from "react"
import Button from "../../../components/Button"

import css from "./index.less"

export default function Params({ onDebugClick, params }: any) {
  const processAry = useCallback((item) => {
    return item.children.map((child: any) => {
      return processItem(child, item)
    })
  }, [])

  const processItem = useCallback((item, parent) => {
    if (!item) return null
    if (item.type === "root" && !item.children) return null
    let jsx
    if (item.type === "root") {
      item.name = ""
    }
    if (item.children) {
      jsx = processAry(item)
    }

    const isArrayParent = parent.type === "array"
    const isObject = item.type === "object"
    const isRoot = item.type === "root"
    const isArray = item.type === "array"
    const hide = isObject || isRoot || isArray

    return (
      <div className={css.ct} key={item.id || "root"}>
        <div className={`${css.item} ${isRoot ? css.rootItem : ""}`}>
          <div style={{ padding: "0 10px 0 2px" }}>
            {isArrayParent ? `[${item.name}]` : item.name}
            <span className={css.typeName}>({getTypeName(item.type)})</span>
          </div>
          {hide ? null : (
            <input
              key={
                item.type === "any"
                  ? item.defaultValue?.name
                  : item.defaultValue
              }
              className={css.column}
              type="text"
              disabled
              value={
                item.type === "any"
                  ? item.defaultValue?.name
                  : item.defaultValue
              }
              title={
                item.type === "any"
                  ? item.defaultValue?.name
                  : item.defaultValue
              }
            />
          )}
        </div>
        {jsx}
      </div>
    )
  }, [])

  return (
    <div className={css.debug}>
      <div className={css.content}>
        {params?.children?.length
          ? processItem(
              { type: "root", ...params },
              { type: "root", ...params }
            )
          : null}
      </div>
      <Button onClick={onDebugClick} type="primary" style={{ marginTop: 12 }}>
        连接测试
      </Button>
    </div>
  )
}

function getTypeName(v: string) {
  switch (v) {
    case "number":
      return "数字"
    case "string":
      return "字符"
    case "boolean":
      return "布尔"
    case "object":
    case "root":
      return "对象"
    case "array":
      return "列表"
    case "any":
      return "文件"
  }
}
