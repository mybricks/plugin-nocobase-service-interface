import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { uuid } from "../utils"
import {
  exampleParamsFunc,
  exampleResultFunc,
  GLOBAL_PANEL,
  PLUGIN_CONNECTOR_NAME,
  SERVICE_TYPE,
} from "../constant"
import css from "../style-cssModules.less"
import { cloneDeep, get } from "../utils/lodash"
import { formatDate } from "../utils/moment"
import DefaultPanel from "./compoment/defaultPanel"
import Toolbar from "./compoment/toolbar"
import * as Icons from "../icon"
import GlobalPanel from "./compoment/globalPanel"
import { getScript } from "../script"
import Switch from "../../src/components/Switch"
import NocobaseInterfacePanel from "./compoment/nocobaseInterfacePanel";

interface Iprops {
  connector: Iconnector
  serviceListUrl?: string
  callServiceUrl?: string
  addActions?: any[]
  visibility?: 'hidden' | 'visible'
  data: {
    connectors: any[]
    config: {
      paramsFn: string
      resultFn?: string
      envList?: Array<{
        name: string
        title: string
        defaultApiPrePath: string
      }>
      globalMock?: boolean
    }
  }
  initialValue: any
  envList?: Array<{ name: string; title: string; defaultApiPrePath: string }>
}

interface Iconnector {
  add: (params: any) => null
  remove: (id: number | string) => null
  update: (params: any) => null
  test: (...args: any) => any
  getAllByType: (id: string) => Array<any>
}

const interfaceParams = [
  { key: "id", name: "标识", copy: true },
  { key: "content.title", name: "标题" },
  { key: "content.method", name: "方法" },
  { key: "content.path", name: "路径" },
  { key: "content.doc", name: "文档链接", link: true },
  { key: "updateTime", name: "更新时间", format: "YYYY-MM-DD HH:mm:ss" },
]

export default function Sidebar({
  addActions,
  connector,
  visibility,
  data,
  serviceListUrl,
  initialValue = {},
  envList = [],
}: Iprops) {
  const ref = useRef<HTMLDivElement>(null)
  const blurMap = useRef<Record<string, () => void>>({})
  const [searchValue, setSearchValue] = useState("")
  const [sidebarContext, setContext] = useState<any>({
    eidtVisible: false,
    activeId: "",
    kdev: {
      departmentOptions: [],
      interfaceOptions: [],
      searchOptions: [],
      interfaceMap: {},
    },
    tg: {},
    type: "",
    isEdit: false,
    formModel: {
      path: "",
      title: "",
      javaProjectName: "",
      javaProjectId: "",
      id: "",
      type: "",
      input: "",
      output: "",
    },
    isDebug: false,
    addActions: addActions
      ? addActions.some(({ type }: any) => type === "defalut")
        ? addActions
        : [{ type: "http-manatee", title: "普通接口" }].concat(addActions)
      : [{ type: "http-manatee", title: "普通接口" }],
    connector: {
      add: (args: any) => connector.add({ ...args }),

      getAllByType: (type: string) => connector.getAllByType?.(type) || [],
      remove: (id: string) => connector.remove(id),
      update: (args: any) => {
        connector.update({ ...args })
      },
      test: (...args: any) => connector.test(...args),
    },
    search: (v: string) => {
      setSearchValue(v)
    },
  })
  const updateService = async (action?: string, item?: any) => {
    return new Promise((resolve) => {
      const {
        id = uuid(),
        script,
        ...others
      }: any = item || sidebarContext.formModel
      if (action === "create") {
        const serviceItem = {
          id,
          type:
            sidebarContext.formModel.type ||
            sidebarContext.type ||
            "http-manatee",
          content: {
            input: encodeURIComponent(exampleParamsFunc),
            output: encodeURIComponent(exampleResultFunc),
            inputSchema: { type: "object" },
            ...others,
          },
          script,
          createTime: Date.now(),
          updateTime: Date.now(),
        }
        /** 插件内连接器数据 */
        data.connectors.push(serviceItem)
        /** 设计器内连接器数据，支持服务接口组件选择接口 */
        sidebarContext.connector.add({
          id,
          type:
            sidebarContext.formModel.type ||
            sidebarContext.type ||
            "http-manatee",
          title: others.title,
          connectorName: PLUGIN_CONNECTOR_NAME,
          script: undefined,
          globalMock: data.config.globalMock,
          inputSchema: others.inputSchema,
          outputSchema: others.outputSchema,
        })
      } else {
        const updateAll = action === "updateAll"
        data.connectors.forEach((service: any, index: number) => {
          if (service.id === id || updateAll) {
            let serviceItem = data.connectors[index]
            if (!updateAll) {
              serviceItem = {
                ...service,
                updateTime: Date.now(),
                content: { ...others },
              }
              data.connectors[index] = serviceItem
            }
            try {
              sidebarContext.connector.update({
                id: updateAll ? serviceItem.id : id,
                title: others.title || serviceItem.content.title,
                type: service.type,
                connectorName: PLUGIN_CONNECTOR_NAME,
                script: undefined,
                globalMock: data.config.globalMock,
                inputSchema: serviceItem.content.inputSchema,
                outputSchema: serviceItem.content.outputSchema,
              })
            } catch (error) {}
          }
        })
      }
      // @ts-ignore
      resolve("")
    })
  }

  const createService = () => {
    return updateService("create")
  }

  const removeService = useCallback((item: any) => {
    return new Promise((resolve) => {
      const index = data.connectors.findIndex((service) => {
        return String(service.id) === String(item.id)
      })
      data.connectors.splice(index, 1)
      try {
        sidebarContext.connector.remove(item.id)
      } catch (error) {}
      resolve("")
    })
  }, [])

  const clickRef = useRef()

  const setRender = useCallback((value: any) => {
    setContext((ctx: any) => ({
      ...ctx,
      formModel: {
        ...ctx.formModel,
      },
      ...value,
    }))
  }, [])

  const onEditItem = useCallback(
    (item) => {
      const obj: any = {
        isEdit: true,
        isDebug: true,
        activeId: item.id,
      }
      if (item.type === SERVICE_TYPE.TG) {
        obj.type = SERVICE_TYPE.TG
        obj.formModel = { id: item.id, type: item.type, ...item.content }
      } else {
        const noUseInnerEdit = sidebarContext.addActions.find(
          (action) => action.type === item.type
        )?.noUseInnerEdit
        obj.type = noUseInnerEdit ? item.type : SERVICE_TYPE.HTTP
        obj.formModel = {
          /** 防止数据被代理 */
          ...JSON.parse(JSON.stringify(item.content)),
          type: item.type,
          id: item.id,
          input: item.content.input || exampleParamsFunc,
          output: item.content.output || exampleResultFunc,
        }
      }
      setRender(obj)
    },
    [sidebarContext]
  )

  const onCopyItem = useCallback(async (item) => {
    sidebarContext.formModel = cloneDeep(item.content)
    sidebarContext.formModel.title += " 复制"
    // sidebarContext.formModel.id = uuid()
    // setRender(sidebarContext)
    await createService()
  }, [])

  const onRemoveItem = useCallback(
    async (item) => {
      if (confirm(`确认删除 ${item.content.title} 吗`)) {
        await removeService(item)
        sidebarContext.type = ""
        setRender(sidebarContext)
      }
    },
    [sidebarContext]
  )

  sidebarContext.addDefaultService = useCallback(async () => {
    sidebarContext.type = SERVICE_TYPE.HTTP
    sidebarContext.formModel = {
      title: "",
      type: SERVICE_TYPE.HTTP,
      path: "",
      desc: "",
      method: "GET",
      useMock: false,
      input: encodeURIComponent(exampleParamsFunc),
      output: encodeURIComponent(exampleResultFunc),
    }
    setRender(sidebarContext)
  }, [])
  sidebarContext.updateService = updateService

  const onGlobalConfigClick = useCallback(() => {
    sidebarContext.type = GLOBAL_PANEL
    setRender(sidebarContext)
  }, [])

  const closeTemplateForm = useCallback(() => {
    sidebarContext.type = ""
    sidebarContext.isEdit = false
    sidebarContext.activeId = void 0;
    setRender(sidebarContext)
  }, [])

  // sidebarContext.onCancel = useCallback(() => {
  //   sidebarContext.type = ""
  //   sidebarContext.isDebug = false
  //   sidebarContext.activeId = void 0
  //   sidebarContext.isEdit = false
  //   setRender(sidebarContext)
  // }, [])

  const onFinish = async () => {
    if (sidebarContext.isEdit) {
      await updateService()
    } else {
      await createService()
    }
    sidebarContext.type = ""
    sidebarContext.activeId = void 0
    sidebarContext.formModel = {}
    sidebarContext.isEdit = false
    setRender(sidebarContext)
  }

  useEffect(() => {
		if (visibility === 'hidden') {
			closeTemplateForm();
		}
	}, [visibility]);

  const onItemClick = useCallback(
    (e: any, item: any) => {
      if (item.id === sidebarContext.expandId) {
        sidebarContext.expandId = 0
        setRender(sidebarContext)
        return
      }
      sidebarContext.expandId = item.id
      setRender(sidebarContext)
    },
    [setRender, sidebarContext]
  )

  const onLinkClick = useCallback((url: string) => {
    window.open(url)
  }, [])

  const renderParam = useCallback(
    (item, { key, format, copy, link, isTpl }) => {
      if (format) {
        return formatDate(item[key], format)
      }
      if (copy) {
        return (
          <span
            className={css["manatee-sidebar-panel-list-item__copy"]}
          >{`${item[key]}`}</span>
        )
      }
      if (link) {
        return get(item, key) ? (
          <span
            onClick={() => onLinkClick(get(item, key))}
            className={css["doc-link"]}
          >
            点击跳转
          </span>
        ) : (
          "无"
        )
      }
      if (isTpl) {
        const domainObj = item[key]
        return (
          <>
            <span>
              {typeof domainObj === "object"
                ? domainObj.domain || "无"
                : domainObj || "无"}
            </span>
            <br />
            {get(item, [key, "laneId"]) && (
              <span>{get(item, [key, "laneId"])}</span>
            )}
          </>
        )
      }
      return get(item, key, "无")
    },
    []
  )

  const renderAddActions = useCallback(() => {
    const curAction = sidebarContext.addActions.find(
      (action) => action.type === sidebarContext.type && action.render
    )
    let node = null

    if (curAction) {
      node =
        curAction?.render({
          onClose: closeTemplateForm,
          originConnectors: cloneDeep(data.connectors),
          globalConfig: data.config,
          initService: sidebarContext.isEdit
            ? sidebarContext.formModel
            : undefined,
          connectorService: {
            add(item: Record<string, any>) {
              updateService("create", item)
            },
            remove: removeService,
            update(item: Record<string, any>) {
              updateService("update", item)
            },
            test: (connector, params, config) => {
              return sidebarContext.connector.test(
                {
                  ...connector,
                  connectorName: PLUGIN_CONNECTOR_NAME,
                  mode: "test",
                },
                params,
                config
              )
            },
          },
        }) || null
    } else if (sidebarContext.type === SERVICE_TYPE.HTTP) {
      node = (
        <DefaultPanel
          sidebarContext={sidebarContext}
          setRender={setRender}
          onSubmit={onFinish}
          key={sidebarContext.type}
          globalConfig={data.config}
          style={{ top: ref.current?.getBoundingClientRect().top }}
        />
      )
    } else if (sidebarContext.type === "add") {
      sidebarContext.formModel = {
        title: "",
        type: SERVICE_TYPE.HTTP,
        path: "",
        desc: "",
        method: "GET",
        useMock: false,
        input: encodeURIComponent(exampleParamsFunc),
        output: encodeURIComponent(exampleResultFunc),
      }
      // 添加接口，打开nocobase接口选择面板
      node = (
        <NocobaseInterfacePanel
          closeRight={() => {
            sidebarContext.type = ""
            sidebarContext.isDebug = false
            sidebarContext.activeId = void 0
            sidebarContext.isEdit = false
            setRender(sidebarContext)
          }}
          nodeChange={(e) => {
            console.log("nodeChange: ", e)
          }}
          sidebarContext={sidebarContext}
          globalConfig={data.config}
          style={{ top: ref.current?.getBoundingClientRect().top }}
          setRender={setRender}
          onSubmit={onFinish}
        />
      )
    }

    return node
  }, [sidebarContext, sidebarContext.type, serviceListUrl, updateService])

  const renderGlobalPanel = useCallback(() => {
    return sidebarContext.type === GLOBAL_PANEL ? (
      <GlobalPanel
        style={{ top: ref.current?.getBoundingClientRect().top }}
        closeTemplateForm={closeTemplateForm}
        data={data}
        envList={envList}
      />
    ) : null
  }, [sidebarContext, envList])

  const getInterfaceParams = useCallback((item) => {
    if (item.type === SERVICE_TYPE.TG) {
      return interfaceParams.filter(
        ({ key }) =>
          !["content.path", "content.method", "content.desc"].includes(key)
      )
    }
    return interfaceParams
  }, [])

  const onServiceItemTitleClick = (e, item) => {
    e.stopPropagation()
    const { id, content, type } = item
    if (type === SERVICE_TYPE.TG) return
    if (!content.mockAddress) {
      sidebarContext.toolTipId = id
      setTimeout(() => {
        sidebarContext.toolTipId = void 0
      }, 2500)
      return
    }
    sidebarContext.formModel = {
      id,
      ...content,
      useMock: !content.useMock,
    }
    updateService()
  }
  const initData = useCallback(() => {
    if (data.connectors.length === 0 && initialValue.serviceList?.length) {
      data.connectors = initialValue.serviceList
      initialValue.serviceList.forEach((item: any) => {
        const { title, inputSchema, outputSchema } = item.content || {}
        const ctr = {
          id: item.id,
          type:
            sidebarContext.formModel.type ||
            sidebarContext.type ||
            "http-manatee",
          title,
          connectorName: PLUGIN_CONNECTOR_NAME,
          globalMock: data.config.globalMock,
          inputSchema,
          outputSchema,
        }
        try {
          sidebarContext.connector.add(ctr)
        } catch (error) {
          console.log(error)
        }
      })
    }
  }, [])
  const onChangeGlobalMock = useCallback((globalMock) => {
    data.config.globalMock = globalMock
  }, [])
  useMemo(() => {
    onChangeGlobalMock(false)
  }, [])
  useMemo(() => {
    if (!data) {
      return
    }
    initData()
    try {
      const allDesignerConnectors = [
        ...sidebarContext.connector.getAllByType("http"),
        ...sidebarContext.connector.getAllByType("http-manatee"),
      ]
      data?.connectors.forEach((item) => {
        const conItem = allDesignerConnectors.find((con) => con.id === item.id)
        if (!conItem) {
          sidebarContext.connector.add({
            id: item.id,
            type: "http-manatee",
            title: item.content.title,
            inputSchema: item.content.inputSchema,
            outputSchema: item.content.outputSchema,
            script: getScript({
              ...item.content,
              globalParamsFn: data.config.paramsFn,
              globalResultFn: data.config.resultFn,
            }),
          })
        } else if (conItem.type !== item.type) {
          sidebarContext.connector.update({
            id: item.id,
            type: "http-manatee",
            title: item.content.title,
            inputSchema: item.content.inputSchema,
            outputSchema: item.content.outputSchema,
            script: getScript({
              ...item.content,
              globalParamsFn: data.config.paramsFn,
              globalResultFn: data.config.resultFn,
            }),
          })
        }
      })
    } catch (e) {
      console.log("连接器数据 format 失败", e)
    }
  }, [data])

  return (
    <>
      <div
        ref={ref}
        data-id="manatee-plugin-root-panel"
        className={`${css["manatee-sidebar-panel"]} ${css["manatee-sidebar-panel-open"]}`}
        onClick={() => Object.values(blurMap.current).forEach((fn) => fn())}
      >
        <div className={`${css["manatee-sidebar-panel-view"]}`}>
          <div className={css["manatee-sidebar-panel-header"]}>
            <div className={css["manatee-sidebar-panel-header__title"]}>
              <span>NocoBase服务</span>
              <div className={css.rightOperate}>
                {/* <div
                  className={css.globalMock}
                  data-mybricks-tip="开启全局Mock，页面调试时所有接口将默认使用Mock能力"
                >
                  <span className={data?.config?.globalMock ? css.warning : ""}>
                    全局 Mock:
                  </span>
                  <Switch
                    defaultChecked={data?.config?.globalMock}
                    onChange={onChangeGlobalMock}
                  />
                </div> */}
                <div data-mybricks-tip="全局配置" className={css.icon} onClick={onGlobalConfigClick}>
                  {Icons.set}
                </div>
              </div>
            </div>
            <Toolbar
              blurMap={blurMap.current}
              searchValue={searchValue}
              ctx={sidebarContext}
              setRender={setRender}
            />
          </div>
          <div className={css["manatee-sidebar-panel-list"]}>
            {data?.connectors
              .filter((item) => item.content.type !== "domain")
              .filter((item) =>
                searchValue ? item.content.title.includes(searchValue) : true
              )
              .map((item) => {
                const expand = sidebarContext.expandId === item.id
                item.updateTime = formatDate(item.updateTime || item.createTime)
                const { useMock, type } = item.content
                const curAction = sidebarContext.addActions.find(
                  (action) => action.type === type
                )
                let typeLabel = "接口"

                if (useMock) {
                  typeLabel = "Mock"
                } else if (sidebarContext.addActions.length > 1) {
                  typeLabel = curAction?.title || typeLabel
                }
                const curTitle =
                  curAction?.getTitle?.(item) || item.content.title

                return (
                  <div key={item.id}>
                    <div
                      key={item.id}
                      className={`${css["manatee-sidebar-panel-list-item"]} ${
                        sidebarContext.activeId === item.id ? css.active : ""
                      } ${
                        sidebarContext.isEdit
                          ? sidebarContext.activeId === item.id
                            ? css.chose
                            : css.disabled
                          : ""
                      }`}
                    >
                      <div>
                        <div
                          onClick={(e) => onItemClick(e, item)}
                          className={
                            css["manatee-sidebar-panel-list-item__left"]
                          }
                        >
                          <div
                            className={`${css.icon} ${
                              expand ? css.iconExpand : ""
                            }`}
                          >
                            {Icons.arrowR}
                          </div>
                          <div
                            className={css.tag}
                            onClick={(e) => onServiceItemTitleClick(e, item)}
                          >
                            {typeLabel}
                          </div>
                          <div className={css.name}>
                            <span data-mybricks-tip={curTitle || undefined}>
                              {curTitle}
                            </span>
                          </div>
                        </div>
                        <div
                          className={
                            css["manatee-sidebar-panel-list-item__right"]
                          }
                        >
                          <div
                            data-mybricks-tip="编辑"
                            ref={clickRef}
                            className={css.action}
                            onClick={() => onEditItem(item)}
                          >
                            {Icons.edit}
                          </div>
                          <div
                            data-mybricks-tip="复制"
                            className={css.action}
                            onClick={() => onCopyItem(item)}
                          >
                            {Icons.copy}
                          </div>
                          <div
                            data-mybricks-tip="删除"
                            className={css.action}
                            onClick={() => onRemoveItem(item)}
                          >
                            {Icons.remove}
                          </div>
                        </div>
                      </div>
                    </div>
                    {expand ? (
                      <div
                        className={
                          css["manatee-sidebar-panel-list-item__expand"]
                        }
                      >
                        {getInterfaceParams(item).map((param: any) => {
                          return (
                            <div
                              className={
                                css["manatee-sidebar-panel-list-item__param"]
                              }
                              key={param.key}
                            >
                              <span
                                className={
                                  css["manatee-sidebar-panel-list-item__name"]
                                }
                                style={{ width: param.width }}
                              >
                                {param.name}:
                              </span>
                              <span
                                className={
                                  css[
                                    "manatee-sidebar-panel-list-item__content"
                                  ]
                                }
                              >
                                {renderParam(item, param)}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                )
              })}
          </div>
        </div>
        {renderAddActions()}
        {renderGlobalPanel()}
      </div>
    </>
  )
}
