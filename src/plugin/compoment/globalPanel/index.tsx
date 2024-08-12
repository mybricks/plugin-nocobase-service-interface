import React from "react"
import ReactDOM from "react-dom"
import Editor from "@mybricks/code-editor"
import css from "../../../../src/style-cssModules.less"
import Button from "../../../components/Button"
import Collapse from "../../../components/Collapse"
import { CDN } from "../../../constant"
import curCss from "./index.less"

export default function GlobalPanel({
  closeTemplateForm,
  style,
  data,
  envList,
}: any) {
  return ReactDOM.createPortal(
    <div
      data-id="plugin-panel"
      style={{
        left: 361,
        ...style,
      }}
      className={`${css["manatee-sidebar-panel-edit"]}`}
    >
      <div className={css["manatee-sidebar-panel-title"]}>
        <div>全局配置</div>
        <div>
          <div className={css["actions"]}>
            <Button size="small" onClick={() => closeTemplateForm()}>
              关 闭
            </Button>
          </div>
        </div>
      </div>
      <div className={curCss.item}>
        <Collapse header="当开始请求">
          <Editor
            width="100%"
            height={400}
            language="javascript"
            theme="light"
            lineNumbers="off"
            CDN={CDN}
            /** @ts-ignore */
            scrollbar={{
              horizontalScrollbarSize: 2,
              verticalScrollbarSize: 2,
            }}
            value={decodeURIComponent(data.config.paramsFn)}
            onBlur={(e) => {
              const value = e.getValue()
              if (data.config.paramsFn !== decodeURIComponent(value)) {
                data.config.paramsFn = decodeURIComponent(value)
              }
            }}
            env={{
              isNode: false,
              isElectronRenderer: false,
            }}
            minimap={{ enabled: false }}
          />
        </Collapse>
      </div>
      {data.config.resultFn ? (
        <div className={curCss.item}>
          <Collapse header="当返回响应">
            <Editor
              width="100%"
              height={400}
              language="javascript"
              theme="light"
              lineNumbers="off"
              CDN={CDN}
              /** @ts-ignore */
              scrollbar={{
                horizontalScrollbarSize: 2,
                verticalScrollbarSize: 2,
              }}
              value={decodeURIComponent(data.config.resultFn)}
              onBlur={(e) => {
                const value = e.getValue()
                if (data.config.resultFn !== decodeURIComponent(value)) {
                  data.config.resultFn = decodeURIComponent(value)
                }
              }}
              env={{
                isNode: false,
                isElectronRenderer: false,
              }}
              minimap={{ enabled: false }}
            />
          </Collapse>
        </div>
      ) : null}
    </div>,
    document.querySelector('div[data-id=manatee-plugin-root-panel]') as HTMLElement
  )
}
