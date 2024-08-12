import { plus } from "../../../icon"
import React from "react"
import Dropdown from "../../../components/Dropdown"

import css from "./index.less"

export default function ({ ctx, setRender, blurMap }: any) {
  const onAddClick = async (type = "http-manatee") => {
    ctx.type = type
    ctx.activeId = void 0
    ctx.isEdit = false
    ctx.formModel = { type }
    setRender(ctx)

    if (type === "http-manatee") {
      ctx.addDefaultService()
    }
  }

  const renderAddActionList = () => {
    if (!ctx.addActions || ctx.addActions.length === 1) {
      return (
        <div className={css.icon} onClick={() => onAddClick("http-manatee")}>
          {plus}
        </div>
      )
    }
    const menu = (
      <div className={css.ct}>
        {ctx.addActions.map(({ type, title }: any) => (
          <div className={css.item} onClick={() => onAddClick(type)} key={type}>
            {title}
          </div>
        ))}
      </div>
    )

    return (
      <Dropdown
        dropDownStyle={ctx.type ? { right: 0 } : undefined}
        onBlur={(fn) => (blurMap["toolbar"] = fn)}
        overlay={menu}
      >
        <div className={css.icon}>{plus}</div>
      </Dropdown>
    )
  }

  return (
    <div className={css["manatee-toolbar"]}>
      <div className={css.search}>
        <input
          type={"text"}
          placeholder={"请输入名称搜索服务接口"}
          onChange={(e) => ctx.search(e.target.value)}
        />
      </div>
      {renderAddActionList()}
    </div>
  )
}
