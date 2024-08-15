import React from "react"
import ReactDOM from "react-dom"
import Editor from "@mybricks/code-editor"
import css from "../../../../src/style-cssModules.less"
import Button from "../../../components/Button"
import Collapse from "../../../components/Collapse"
import Switch from "../../../components/Switch"
import { CDN } from "../../../constant"
import curCss from "./index.less"
import dCss from "../defaultPanel/index.less";

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
        <Collapse header="nocobase" defaultFold={false}>
          <div className={dCss.item}>
            <label>域名</label>
            <div className={`${dCss.editor} ${dCss.textEdt}`}>
              <input
                type={"text"}
                placeholder={"nocobase服务域名"}
                defaultValue={data.config.nocobase.url}
                onChange={(e) => {
                  data.config.nocobase.url = e.target.value
                }}
              />
            </div>
          </div>
          <div className={dCss.item} style={{ display: "flex", alignItems: "flex-start" }}>
            <label>鉴权token</label>
            <div className={`${dCss.editor} ${dCss.textEdt}`}>
              <textarea
                placeholder={"鉴权token，仅用于搭建调试态"}
                defaultValue={data.config.nocobase.token}
                onChange={(e) => {
                  data.config.nocobase.token = e.target.value
                }}
              />
            </div>
          </div>
          <div className={dCss.item} style={{marginBottom: 0}}>
            <label></label>
            <div className={`${dCss.editor} ${dCss.textEdt}`}>
              <div className={dCss.editorTip}>如果是非本地服务，建议开启代理走后端转发服务</div>
            </div>
          </div>
          <div className={dCss.item} style={{marginTop: 0}}>
            <label>代理</label>
            <div className={`${dCss.editor} ${dCss.textEdt}`}>
              <Switch
                defaultChecked={data.config.nocobase.useProxy}
                onChange={(useProxy) => {
                  data.config.nocobase.useProxy = useProxy;
                }}
              />
            </div>
          </div>
        </Collapse>
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
    // document.querySelector('div[data-id=manatee-plugin-root-panel]') as HTMLElement
    document.body
  )
}
