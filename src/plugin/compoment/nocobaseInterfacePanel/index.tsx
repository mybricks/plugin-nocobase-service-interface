import React, { useState, useEffect } from "react"
import css from "./index.less"
import { Select, message } from "antd"
import { DoubleLeftOutlined } from "@ant-design/icons"
import { createPortal } from "react-dom"
import axios from "axios";
import { exampleParamsFunc } from "../../../constant"
import Collapse from "../../../components/Collapse"
import Button from "../../../components/Button"
import DefaultPanel from "../defaultPanel";

const httpRegExp = new RegExp("^(http|https)://")

export default ({
  closeRight,
  nodeChange,
  sidebarContext,
  globalConfig,
  setRender,
  onSubmit,
  style,
}) => {
  const [projectList, setProjectListFn] = useState([])
  const [projectId, setProjectIdFn] = useState(null)
  const [interfaceList, setInterfaceList] = useState([])
  const [showNocobase, setShowNocobase] = useState(true);

  useEffect(() => {
    getProjectList()
  }, [])

  useEffect(() => {
    if (projectId) {
      const { nocobase } = globalConfig;
      // const url = (process.env.NODE_ENV === "development" ? "" : nocobase.url.replace(/\/$/, "")) + projectId;
      const url = nocobase.url.replace(/\/$/, "") + projectId;

      let promise;

      if (nocobase.useProxy && httpRegExp.test(url) && url.match(/^https?:\/\/([^/#&?])+/g)?.[0] !== location.origin) {
        promise = axios.get("/paas/api/proxy", {
          headers: {
            Authorization: `Bearer ${nocobase.token}`,
            ["x-target-url"]: url,
          }
        })
      } else {
        promise = axios.get(url, {
          headers: {
            Authorization: `Bearer ${nocobase.token}`
          }
        })
      }

      promise?.then((response) => {
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
  }, [projectId])

  // 获取项目列表
  const getProjectList = async () => {
    const { nocobase } = globalConfig;
    // const url = (process.env.NODE_ENV === "development" ? "" : nocobase.url.replace(/\/$/, "")) + "/api/swagger:getUrls"
    const url = nocobase.url.replace(/\/$/, "") + "/api/swagger:getUrls";

    try {
      let nocobaseUrls = [];

      if (nocobase.useProxy && httpRegExp.test(url) && url.match(/^https?:\/\/([^/#&?])+/g)?.[0] !== location.origin) {
        const response = await axios.get("/paas/api/proxy", {
          headers: {
            Authorization: `Bearer ${nocobase.token}`,
            ["x-target-url"]: url,
          }
        })
        nocobaseUrls = response.data.data;
      } else {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${nocobase.token}`
          }
        })
        nocobaseUrls = response.data.data;
      }
  
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
      message.warning(`请正确填写nocobase相关配置: ${error.message}`)
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
                  <Collapse header={tag}>
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
