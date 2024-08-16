import React, { useState, useEffect } from "react"
import css from "./index.less"
import { Select, message } from "antd"
import { createPortal } from "react-dom"
import axios from "axios";
import { exampleParamsFunc } from "../../../constant"
import Collapse from "../../../components/Collapse"
import Button from "../../../components/Button"
import DefaultPanel from "../defaultPanel";

const httpRegExp = new RegExp("^(http|https)://")

const fetchNocoBaseData = async (nocobase: {
  url: string;
  token: string;
  useProxy: boolean;
}, config: {
  pathname: string
  params?: any;
  headers?: any;
}) => {
  const { url, token, useProxy } = nocobase;
  const { pathname, params, headers } = config;
  const fullUrl = url.replace(/\/$/, "") + pathname;

  if (useProxy && httpRegExp.test(url) && url.match(/^https?:\/\/([^/#&?])+/g)?.[0] !== location.origin) {
    return axios.get("/paas/api/proxy", {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
        ["x-target-url"]: fullUrl,
      },
      params
    })
  } else {
    return axios.get(fullUrl, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      },
      params
    })
  }
}

export default ({
  closeRight,
  nodeChange,
  sidebarContext,
  globalConfig,
  setRender,
  onSubmit,
  style,
}) => {
  const [appList, setAppList] = useState([{ label: "主应用", value: null }]) // 这里看下，默认这样好像不行
  const [app, setApp] = useState(null)
  const [projectList, setProjectListFn] = useState([])
  const [projectId, setProjectIdFn] = useState(null)
  const [interfaceList, setInterfaceList] = useState([])
  const [showNocobase, setShowNocobase] = useState(true);

  const getAppList = async (appList = [{ displayName: "主应用", name: null }], headers = null) => {
    let appListData = []

    try {
      appListData = (await fetchNocoBaseData(
        globalConfig.nocobase,
        {
          pathname: "/api/applications",
          params: {
            pageSize: 100,
            sort: ['-createdAt'],
            page: 1,
          },
          headers
        }
      )).data.data
    } catch {}

    if (!appListData.length) {
      return appList
    } else {
      await Promise.all(appListData.map(async (app) => {
        appList.push(app);
        if (app.status === "running") {
          await getAppList(appList, {
            "X-app": app.name
          })
        }
      }))

      return appList
    }
  }

  const appCheck = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetchNocoBaseData(
          globalConfig.nocobase,
          {
            pathname: "/api/app:getInfo",
            params: {
              pageSize: 100,
              sort: ['-createdAt'],
              page: 1,
            },
          }
        )
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  useEffect(() => {
    appCheck().then(() => {
      getAppList().then((appList) => {
        console.log("appList: ", appList)
        setAppList(appList.map((app) => {
          return {
            label: app.displayName,
            value: app.name
          }
        }))
      })
      getProjectList(null)
    }).catch((error) => {
      console.error(error);
      message.warning(`请正确填写nocobase相关配置: ${error.message}`)
    })
    
  }, [])

  const handleAppChange = (app) => {
    setApp(app);
    setProjectIdFn(null)
    setProjectListFn([])
    setInterfaceList([])
    getProjectList(app)
  }

  const getInterfaceList = (projectId) => {
    const { nocobase } = globalConfig;
    fetchNocoBaseData(
      nocobase,
      {
        pathname: projectId,
        headers: app ? {
          "X-app": app
        } : null
      }
    ).then((response) => {
      const tagsMap = {
        default: []
      };
      const { paths, tags } = response.data;

      Object.entries(paths).forEach(([path, config]) => {
        const requestMethod = Object.keys(config)[0];
        const requestConfig = config[requestMethod];
        const { tags } = requestConfig;
        const uppercaseRequestMethod = requestMethod.toUpperCase();

        if (tags) {
          tags.forEach((tag) => {
            let interfaceList = tagsMap[tag];

            if (!interfaceList) {
              interfaceList = tagsMap[tag] = [];
            }

            interfaceList.push({
              ...requestConfig,
              path,
              requestMethod: uppercaseRequestMethod
            })
          })
        } else {
          tagsMap["default"].push({
            ...requestConfig,
            path,
            requestMethod: uppercaseRequestMethod
          })
        }
      })

      const interfaceTags = [];
      if (tags) {
        tags.forEach(({ name: tag, description: title }) => {
          const interfaceList = tagsMap[tag];
          if (interfaceList) {
            interfaceTags.push({
              tag,
              title,
              interfaceList
            })
          }
          Reflect.deleteProperty(tagsMap, tag);
        })
      }

      Object.entries(tagsMap).forEach(([tag, interfaceList]) => {
        if (interfaceList.length) {
          interfaceTags.push({
            tag,
            interfaceList
          })
        }
      })

      setInterfaceList(interfaceTags);
    })
  }

  useEffect(() => {
    if (projectId) {
      getInterfaceList(projectId)
    }
  }, [projectId])

  // 获取项目列表
  const getProjectList = async (app) => {
    try {
      const nocobaseUrls = (await fetchNocoBaseData(
        globalConfig.nocobase,
        {
          pathname: "/api/swagger:getUrls",
          headers: app ? {
            "X-app": app
          } : null
        }
      )).data.data;
  
      let defaultProjectId = null;
  
      setProjectListFn(nocobaseUrls.map(({ name, url }, index) => {
        if (!index) {
          defaultProjectId = url;
        }
        return {
          label: name,
          value: url
        }
      }))
  
      setProjectIdFn(defaultProjectId)
    } catch (error) {
      console.error(error);
      message.warning(`请检查当前应用是否未开启“API 文档”插件: ${error.message}`)
    }
  }

  const handleClickInterfaceItem = (interfaceItem) => {
    const { nocobase } = globalConfig;
    const url = nocobase.url.replace(/\/$/, "") + "/api";
    // nodeChange(interfaceItem)

    sidebarContext.formModel.title = interfaceItem.description || interfaceItem.path;
    sidebarContext.formModel.method = interfaceItem.requestMethod;
    // sidebarContext.formModel.desc = info.node.extra.moduleDescription // TODO: 描述
    // sidebarContext.formModel.doc = location.origin + info.node.extra.docUrl // TODO: 文档地址
    // sidebarContext.formModel.params.children = []
    sidebarContext.formModel.input = encodeURIComponent(exampleParamsFunc)

    sidebarContext.formModel.path = url + interfaceItem.path;

    // closeRight();

    setShowNocobase(false)
  }

  useEffect(() => {
    setShowNocobase(true);
  }, [sidebarContext])


  return createPortal(
    <>
      <div className={`${css["right"]} ${css["expand"]}`} style={{ left: 361, ...style, display: showNocobase ? "block" : "none" }}>
        <div style={{ padding: "0 20px 20px 20px" }}>
          <div className={`fl-hor fl-right ${css["sqBtn"]}`}>
            <Button
              onClick={closeRight}
              size="small"
            >
              关闭
            </Button>
          </div>
          <div>
            <div>应用</div>
            <Select
              value={app}
              style={{ width: "80%", marginTop: 12}}
              className="wd-full"
              options={appList}
              onChange={handleAppChange}
            ></Select>
          </div>
          <div>
            <div>选择端点</div>
            <Select
              value={projectId}
              style={{ width: "80%", marginTop: 12}}
              className="wd-full"
              options={projectList}
              onChange={setProjectIdFn}
            ></Select>
          </div>
          <div style={{ marginTop: 24 }}>
            <div style={{ marginBottom: 12 }}>接口列表</div>
            <div>
              {interfaceList.map(({ tag, title, interfaceList}) => {
                return (
                  <Collapse header={tag} key={tag}>
                    {interfaceList.map((interfaceItem) => {
                      const { requestMethod, path, description } = interfaceItem;
                      return (
                        <div
                          className={`${css.interface} ${requestMethod === "GET" ? css.get : css.post}`}
                          onClick={() => handleClickInterfaceItem(interfaceItem)}
                        >
                          <span className={css.method}>
                            {requestMethod}
                          </span>
                          <div>
                            {path}: {description}
                          </div>
                        </div>
                      )
                    })}
                  </Collapse>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {!showNocobase && <DefaultPanel
        sidebarContext={sidebarContext}
        setRender={setRender}
        onSubmit={onSubmit}
        key={sidebarContext.type}
        globalConfig={globalConfig}
        style={style}
      />}
    </>,
    document.body
  )
}
