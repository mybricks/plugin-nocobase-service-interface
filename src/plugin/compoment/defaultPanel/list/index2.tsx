import React, { useState, useEffect, useCallback } from "react"
import css from "./index.less"
import { Select, Tree, message, Input } from "antd"
import { DoubleLeftOutlined, LoadingOutlined, SearchOutlined } from "@ant-design/icons"
import { createPortal } from "react-dom"
import axios from "axios";
import { axiosPostInterfaceList, axiosPostProjectList } from "../api"
import { ApiFolder, isApiFolder, isApiItem } from "../api/tools"
import { letterCompare, textSearchWithPinyin, uuid } from "../../../../utils"
import { exampleParamsFunc } from "../../../../constant"
import Collapse from "../../../../components/Collapse"
import Button from "../../../../components/Button"
type TreeItem = {
  title: string
  key: string
  isLeaf: boolean
  children?: TreeItem[]
  extra?: any
}
const { DirectoryTree } = Tree
// import {
//   getApiList,
//   getProjectList,
//   isApiFolder,
//   isApiItem,
//   type ApiItem,
//   type ApiFolder,
// } from "../apiData/index"

export default ({
  isRightExpand,
  closeRight,
  nodeChange,
  projectNode,
  projectNodeChange,
  sidebarContext,
  globalConfig,
}) => {
  const [projectList, setProjectListFn] = useState([])
  const [projectId, setProjectIdFn] = useState(null)
  const [interfaceList, setInterfaceList] = useState([])
  const [treeData, setTreeDataFn] = useState([])
  const [loading, setLoadingFn] = useState(true)
  const [searchText, setSearchText] = useState<string>()

  useEffect(() => {
    if (!isRightExpand) return
    setLoadingFn(true)
    getProjectList()
  }, [isRightExpand])

  useEffect(() => {
    if (!isRightExpand) return
    if (projectId) {
      const { nocobase } = globalConfig;
      const url = (process.env.NODE_ENV === "development" ? "" : nocobase.url.replace(/\/$/, "")) + projectId;

      axios.get(url, {
        headers: {
          Authorization: `Bearer ${nocobase.token}`
        }
      }).then((response) => {
        const tagsMap = {
          default: []
        };
        const { paths, tags } = response.data;

        Object.entries(paths).forEach(([path, config]) => {
          const requestMethod = Object.keys(config)[0];
          const requestConfig = config[requestMethod];
          const { description, tags, parameters, requestBody, responses } = requestConfig;
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
  }, [isRightExpand, projectId])

  // 获取项目列表
  const getProjectList = async () => {
    const { nocobase } = globalConfig;
    const url = (process.env.NODE_ENV === "development" ? "" : nocobase.url.replace(/\/$/, "")) + "/api/swagger:getUrls"

    try {
      const nocobaseUrls = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${nocobase.token}`
        }
      })
  
      let defaultProjectId = null;
  
      setProjectListFn(nocobaseUrls.data.data.map(({ name, url }, index) => {
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
    nodeChange(interfaceItem)

    sidebarContext.formModel.title = interfaceItem.description || interfaceItem.path;
    sidebarContext.formModel.method = interfaceItem.requestMethod;
    // sidebarContext.formModel.desc = info.node.extra.moduleDescription // 描述
    // sidebarContext.formModel.doc = location.origin + info.node.extra.docUrl // 文档地址
    sidebarContext.formModel.params.children = []
    sidebarContext.formModel.input = encodeURIComponent(exampleParamsFunc)

    sidebarContext.formModel.path = url + interfaceItem.path;

    closeRight();
  }

  return createPortal(
    <div className={`${css["right"]} ${isRightExpand ? css["expand"] : ""}`}>
      <div style={{ padding: "20px" }}>
        <div className={`fl-hor fl-right ${css["sqBtn"]}`}>
          <Button
            type="primary"
            onClick={closeRight}
            size="small"
          >
            <DoubleLeftOutlined style={{marginRight: 6}}/>收起
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
          {/* <Input 
            value={searchText}
            prefix={<SearchOutlined />} 
            allowClear
            style={{ width: "80%", marginTop: 8 }}
            placeholder="搜索接口名称或英文名"
            onChange={e => handleSearch(e.target.value.trim())}
          />  */}
        </div>
        <div style={{ marginTop: 24 }}>
          <div style={{ marginBottom: 12 }}>接口列表</div>
          <div>
            {/* {loading ? (
              <div
                className="wd-full ht-full fl-ver"
                style={{ width: "100%", height: "200px" }}
              >
                <LoadingOutlined />
              </div>
            ) : (
              <DirectoryTree
                onSelect={treeSelected}
                treeData={treeData}
                style={{ backgroundColor: "#f7f7f7" }}
              />
            )} */}

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
    </div>,
    document.body
  )
}
