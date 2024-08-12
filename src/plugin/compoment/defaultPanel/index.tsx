import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import ReactDOM from "react-dom"
import Editor from "@mybricks/code-editor"
import DebugForm from "../debug"
import { fullScreen, fullScreenExit } from "../../../icon"
import RadioBtns from "./RadioBtn"
import Button from "../../../components/Button"
import Collapse from "../../../components/Collapse"
import FormItem from "../../../components/FormItem"
import Input, { TextArea } from "../../../components/Input"
import { safeDecode } from "../../../utils"
import { CDN } from "../../../constant"
import { DefaultPanelContext } from "./context"

import parentCss from "../../../style-cssModules.less"
import css from "./index.less"
import List from "./list/index2"
// import List from "./list/index"

const methodOpts = [
  { title: "GET", value: "GET" },
  { title: "POST", value: "POST" },
  { title: "PUT", value: "PUT" },
  { title: "DELETE", value: "DELETE" },
]

export default function DefaultPanel({
  sidebarContext,
  style,
  onSubmit,
  setRender,
  globalConfig,
}: any) {
  const blurMapRef = useRef<any>({})
  const paramRef = useRef<HTMLDivElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)
  const addresRef = useRef<any>()
  const onClosePanel = useCallback(() => {
    sidebarContext.type = ""
    sidebarContext.isDebug = false
    sidebarContext.activeId = void 0
    sidebarContext.isEdit = false
    setRender(sidebarContext)
  }, [])
  const [paramsFn, setParamsFn] = useState(sidebarContext.formModel.input)
  const [outputFn, setOutputFn] = useState(sidebarContext.formModel.output)

  const [isRightExpand, setIsRightExpandFn] = useState(false)
  const [projectNode, setProjectNodeFn] = useState(null)
  const [apiNode, setApiNodeFn] = useState(null)

  const onParamsEditorFullscreen = () => {
    paramRef.current?.classList.add(
      parentCss["manatee-sidebar-panel-code-full"]
    )
    sidebarContext.fullscreenParamsEditor = true
    setRender(sidebarContext)
  }

  const onParamsEditorFullscreenExit = () => {
    paramRef.current?.classList.remove(
      parentCss["manatee-sidebar-panel-code-full"]
    )
    sidebarContext.fullscreenParamsEditor = false
    setRender(sidebarContext)
  }
  const onResultEditorFullscreen = () => {
    sidebarContext.fullscrenResultEditor = true
    resultRef.current?.classList.add(
      parentCss["manatee-sidebar-panel-code-full"]
    )
    setRender(sidebarContext)
  }
  const onResultEditorFullscreenExit = () => {
    sidebarContext.fullscrenResultEditor = false
    resultRef.current?.classList.remove(
      parentCss["manatee-sidebar-panel-code-full"]
    )
    setRender(sidebarContext)
  }

  const validate = () => {
    if (sidebarContext.formModel.path) {
      addresRef.current?.classList.remove(css.error)
      return true
    }
    addresRef.current?.classList.add(css.error)
    return false
  }

  const onSaveClick = () => {
    if (!validate()) return
    onSubmit()
  }

  const onBlurAll = () => {
    Object.values(blurMapRef.current).forEach((blur: any) => blur?.())
  }

  useEffect(() => {
    setParamsFn(sidebarContext.formModel.input)
  }, [sidebarContext.formModel.input])

  useEffect(() => {
    setOutputFn(sidebarContext.formModel.output)
  }, [sidebarContext.formModel.output])

  useEffect(() => {
    if (sidebarContext.formModel.path) {
      addresRef.current?.classList.remove(css.error)
    }
  }, [sidebarContext.formModel.path])
  const contextValue = useMemo(() => {
    return {
      addBlurAry: (key, blur) =>
        (blurMapRef.current = { ...blurMapRef.current, [key]: blur }),
    }
  }, [])

  const openRight = useCallback(() => {
    setIsRightExpandFn(!isRightExpand)
  }, [isRightExpand])
  const closeRight = useCallback(() => {
    setIsRightExpandFn(false)
  }, [isRightExpand])
  return ReactDOM.createPortal(
    <div
      data-id="plugin-panel"
      style={{ left: 361, ...style }}
      className={`${parentCss["manatee-sidebar-panel-edit"]}`}
      onClick={onBlurAll}
    >
      <DefaultPanelContext.Provider value={contextValue}>
        <div className={parentCss["manatee-sidebar-panel-title"]}>
          <div>{sidebarContext.formModel?.title}</div>
          <div>
            <div className={parentCss["actions"]}>
              {!sidebarContext.isEidt && (
                <Button type="primary" size="small" onClick={onSaveClick}>
                  保 存
                </Button>
              )}
              <Button size="small" onClick={() => onClosePanel()}>
                关 闭
              </Button>
            </div>
          </div>
        </div>
        <div className={parentCss["manatee-sidebar-panel-content"]}>
          <>
            <div className={css.ct}>
              <Collapse header="基本信息" defaultFold={false}>
                <Button type="primary" onClick={openRight} size="small">
                  选择接口
                </Button>
                {/* <div className={css.item}>
                  <label>所属项目</label>
                  <span>{sidebarContext.formModel?.javaProjectName}</span>
                </div> */}
                <div className={css.item}>
                  <label>接口名称</label>
                  {/* <span>{sidebarContext.formModel?.title}</span> */}
                  <div
                    className={`${css.editor} ${css.textEdt} ${
                      sidebarContext.titleErr ? css.error : ""
                    }`}
                    data-err={sidebarContext.titleErr}
                  >
                    <input
                      type={"text"}
                      placeholder={"服务接口的标题"}
                      defaultValue={sidebarContext.formModel.title}
                      key={sidebarContext.formModel.title}
                      onChange={(e) => {
                        sidebarContext.titleErr = void 0
                        sidebarContext.formModel.title = e.target.value
                      }}
                    />
                  </div>
                </div>
                <div
                  className={css.item}
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <label>
                    <i>*</i>地址
                  </label>
                  {/* <span style={{ maxWidth: "450px", wordWrap: "break-word" }}>
                    {sidebarContext.formModel?.path}
                  </span> */}
                  <div
                    ref={addresRef}
                    className={`${css.editor} ${css.textEdt}`}
                    data-err="请填写完整的地址"
                  >
                    <textarea
                      defaultValue={sidebarContext.formModel.path}
                      key={sidebarContext.formModel.path}
                      placeholder={"接口的请求路径"}
                      onChange={(e) => {
                        sidebarContext.formModel.path = e.target.value
                        if (sidebarContext.formModel.path) {
                          addresRef.current?.classList.remove(css.error)
                        }
                      }}
                    />
                  </div>
                </div>
                {/* <div className={css.sperator}></div> */}
                <div className={css.item}>
                  <label>
                    <i>*</i>请求方法
                  </label>
                  <div className={css.editor}>
                    <RadioBtns
                      binding={[sidebarContext.formModel, "method"]}
                      options={methodOpts}
                    />
                  </div>
                </div>
              </Collapse>
            </div>
            <div className={css.ct}>
              <Collapse header="当开始请求">
                {sidebarContext.fullscreenParamsEditor ? (
                  <div
                    onClick={onParamsEditorFullscreenExit}
                    className={
                      parentCss["manatee-sidebar-panel-code-icon-full"]
                    }
                  >
                    {fullScreenExit}
                  </div>
                ) : (
                  <div
                    onClick={onParamsEditorFullscreen}
                    className={parentCss["manatee-sidebar-panel-code-icon"]}
                  >
                    {fullScreen}
                  </div>
                )}
                <Editor
                  onMounted={(editor, monaco, container: HTMLDivElement) => {
                    paramRef.current = container
                    container.onclick = (e) => {
                      if (e.target === container) {
                        onParamsEditorFullscreenExit()
                      }
                    }
                  }}
                  env={{
                    isNode: false,
                    isElectronRenderer: false,
                  }}
                  CDN={CDN}
                  onBlur={(e) => {
                    const value = e.getValue()
                    if (
                      sidebarContext.formModel.input !==
                      encodeURIComponent(value)
                    ) {
                      sidebarContext.formModel.input = encodeURIComponent(value)
                      setParamsFn(value)
                    }
                  }}
                  value={safeDecode(paramsFn)}
                  width="100%"
                  height="100%"
                  minHeight={300}
                  language="javascript"
                  theme="light"
                  lineNumbers="off"
                  /** @ts-ignore */
                  scrollbar={{
                    horizontalScrollbarSize: 2,
                    verticalScrollbarSize: 2,
                  }}
                  minimap={{ enabled: false }}
                />
              </Collapse>
            </div>
            <div className={css.ct}>
              <Collapse header="当返回响应">
                {sidebarContext.fullscrenResultEditor ? (
                  <div
                    onClick={onResultEditorFullscreenExit}
                    className={
                      parentCss["manatee-sidebar-panel-code-icon-full"]
                    }
                  >
                    {fullScreen}
                  </div>
                ) : (
                  <div
                    onClick={onResultEditorFullscreen}
                    className={parentCss["manatee-sidebar-panel-code-icon"]}
                  >
                    {fullScreen}
                  </div>
                )}
                <Editor
                  onMounted={(editor, monaco, container: HTMLDivElement) => {
                    resultRef.current = container
                    container.onclick = (e) => {
                      if (e.target === container) {
                        onResultEditorFullscreenExit()
                      }
                    }
                  }}
                  env={{
                    isNode: false,
                    isElectronRenderer: false,
                  }}
                  CDN={CDN}
                  onBlur={(e) => {
                    const value = e.getValue()
                    if (
                      sidebarContext.formModel.output !==
                      encodeURIComponent(value)
                    ) {
                      sidebarContext.formModel.output =
                        encodeURIComponent(value)
                      setOutputFn(encodeURIComponent(value))
                    }
                  }}
                  value={safeDecode(outputFn)}
                  width="100%"
                  height="100%"
                  minHeight={300}
                  language="javascript"
                  theme="light"
                  lineNumbers="off"
                  /** @ts-ignore */
                  scrollbar={{
                    horizontalScrollbarSize: 2,
                    verticalScrollbarSize: 2,
                  }}
                  minimap={{ enabled: false }}
                />
              </Collapse>
            </div>
            <div className={css.ct}>
              <Collapse header="其他信息">
                <FormItem label="接口描述">
                  <Input
                    defaultValue={sidebarContext.formModel.desc}
                    onBlur={(e) => {
                      sidebarContext.formModel.desc = e.target.value
                      // setRender(sidebarContext);
                    }}
                  />
                </FormItem>
                <FormItem label="文档链接">
                  <TextArea
                    style={{ height: 80 }}
                    onBlur={(e) => {
                      sidebarContext.formModel.doc = e.target.value
                      setRender(sidebarContext)
                    }}
                    defaultValue={sidebarContext.formModel.doc}
                  />
                </FormItem>
              </Collapse>
            </div>
          </>
          <div className={css.ct}>
            <Collapse key={Math.random()} header="接口调试" defaultFold={false}>
              <DebugForm
                sidebarContext={sidebarContext}
                setRender={setRender}
                validate={validate}
                globalConfig={globalConfig}
              />
            </Collapse>
          </div>
        </div>
        {isRightExpand && (
          <List
            projectNodeChange={setProjectNodeFn}
            isRightExpand={isRightExpand}
            nodeChange={setApiNodeFn}
            closeRight={closeRight}
            projectNode={projectNode}
            sidebarContext={sidebarContext}
            globalConfig={globalConfig}
          />
        )}
      </DefaultPanelContext.Provider>
    </div>,
    document.body
  )
}
