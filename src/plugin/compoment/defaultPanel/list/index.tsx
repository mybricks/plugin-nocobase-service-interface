import React, { useState, useEffect, useCallback } from "react"
import css from "./index.less"
import { Button, Select, Collapse, Tree, message, Input } from "antd"
import { DoubleLeftOutlined, LoadingOutlined, SearchOutlined } from "@ant-design/icons"
import { createPortal } from "react-dom"
import { axiosPostInterfaceList, axiosPostProjectList } from "../api"
import { ApiFolder, isApiFolder, isApiItem } from "../api/tools"
import { letterCompare, textSearchWithPinyin, uuid } from "../../../../utils"
import { exampleParamsFunc } from "../../../../constant"
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
}) => {
  const [projectList, setProjectListFn] = useState([])
  const [projectId, setProjectIdFn] = useState(
    sidebarContext.formModel.javaProjectId
  )
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
    if (!(projectId > 0)) {
      return
    }
    if (!!projectList.length) {
      setLoadingFn(true)
      getInterfaceList(projectId)
    }
  }, [isRightExpand, projectId, projectList])

  // 获取项目列表
  const getProjectList = async () => {
    const res = await axiosPostProjectList()
    const prjList = (res?.outputData || []).map(
      (i: { id: number; name: string }) => ({
        value: i.id,
        label: i.name,
        extra: i,
      })
    )
    setProjectListFn(prjList)
    if (!sidebarContext.formModel.id) {
      if (!prjList?.length) {
        setLoadingFn(false)
        return message.warning("暂无后端项目！")
      }
      sidebarContext.formModel.javaProjectName = prjList[0].label
      sidebarContext.formModel.javaProjectId = prjList[0].value
      projectNodeChange(prjList[0].extra)
      setProjectIdFn(prjList[0]?.value)
    } else {
      projectNodeChange(
        prjList.find(
          (item) => item.value == sidebarContext.formModel.javaProjectId
        ).extra
      )
      setProjectIdFn(sidebarContext.formModel.javaProjectId)
    }
    setLoadingFn(false)
  }
  const getTreeData = (data) => {
    const _treeData: TreeItem[] = []
    let idx = 0
    const scanApiFolder = (folder: ApiFolder, brothers: TreeItem[]) => {
      const treeItem: TreeItem = {
        title: folder.title,
        key: String(idx++),
        isLeaf: false,
      }
      if (Array.isArray(folder.children) && folder.children.length > 0) {
        treeItem.children = []
        folder.children.forEach((i) => {
          if (isApiFolder(i)) {
            scanApiFolder(i, treeItem.children)
            return
          }
          if (isApiItem(i)) {
            treeItem.children.push({
              title: i.title,
              key: String(idx++),
              isLeaf: true,
              extra: i.module,
            })
          }
        })
      }
      brothers.push(treeItem)
    }
    data.forEach((i) => {
      scanApiFolder(i, _treeData)
    })
    setTreeDataFn(_treeData)
  }
  // 获取接口列表
  const getInterfaceList = async (projectId: number | string) => {
    const data = await axiosPostInterfaceList({
      projectId,
      datasource: projectNode.datasource || "default",
    })
    if (Array.isArray(data.list)) {
      setInterfaceList(data.list)
      getTreeData(data.list)
    }
    setLoadingFn(false)
  }

  const onProjectIdChange = useCallback(
    (evt) => {
      setProjectIdFn(evt)
      const node = projectList?.find((i) => i.value === evt)?.extra
      projectNodeChange(node)
      sidebarContext.formModel.javaProjectName = node.name
      sidebarContext.formModel.javaProjectId = node.id
    },
    [projectList]
  )

  const treeSelected = useCallback(
    (key, info) => {
      if (info?.node?.extra?.id > 0) {
        nodeChange(info.node.extra)
        console.log('info.node.extra: ', info.node.extra)
        sidebarContext.formModel.title = info.node.extra.moduleName
        sidebarContext.formModel.method = info.node.extra.requestMode
        sidebarContext.formModel.desc = info.node.extra.moduleDescription
        sidebarContext.formModel.doc = location.origin + info.node.extra.docUrl
        sidebarContext.formModel.params.children = []
        sidebarContext.formModel.input = encodeURIComponent(exampleParamsFunc)

        console.log("sidebarContext.formModel: ", sidebarContext.formModel)
        if (!!info.node.extra.params) {
          console.log("info.node.extra.params: ", info.node.extra.params)
          // const {
          //   usedGetHeaders = [],
          //   usedPostHeaders = [],
          //   usedGlobalHeaders = [],
          // } = JSON.parse(info.node.extra.params)
          //           if (
          //             usedGetHeaders.length ||
          //             usedPostHeaders.length ||
          //             usedGlobalHeaders.length
          //           ) {
          //             const headers = [
          //               ...usedGlobalHeaders,
          //               ...usedGetHeaders,
          //               ...usedPostHeaders,
          //             ].reduce((acc: any, cur: any) => {
          //               acc[cur.KEY] = cur.VALUE
          //               return acc
          //             }, {})
          //             const exampleParamsFunc = `export default function ({ params, data, headers, url, method }) {
          //   headers=${JSON.stringify(headers)}
          //   // 设置请求query、请求体、请求头
          //   return { params, data, headers, url, method };
          //  }
          // `
          //             sidebarContext.formModel.input =
          //               encodeURIComponent(exampleParamsFunc)
          //           } else {
          //             sidebarContext.formModel.input =
          //               encodeURIComponent(exampleParamsFunc)
          //           }
          if (info.node.extra.requestMode === "POST") {
            const { post } = JSON.parse(info.node.extra.params)
            if (!!post && !!Object.keys(post).length) {
              for (let i in post) {
                sidebarContext.formModel.params.children.push({
                  id: uuid(),
                  name: i,
                  type: "string",
                  defaultValue: post[i],
                })
              }
            } else {
              if (sidebarContext.formModel.params.children.length) {
                sidebarContext.formModel.params.children = []
              }
            }

            if (info.node.extra.isUpload) {
              sidebarContext.formModel.params.children.push({
                id: uuid(),
                name: "file",
                type: "any",
                defaultValue: undefined,
              })
            }
          } else if (info.node.extra.requestMode === "GET") {
            const { usedGetParams } = JSON.parse(info.node.extra.params)
            if (!!usedGetParams && !!usedGetParams.length) {
              for (let i of usedGetParams) {
                if (i.TYPE !== "Array") {
                  sidebarContext.formModel.params.children.push({
                    id: uuid(),
                    name: i.KEY,
                    type: i.TYPE?.toLowerCase(),
                    defaultValue: i.VALUE,
                  })
                } else {
                  const obj = {
                    id: uuid(),
                    name: i.KEY,
                    type: "array",
                    defaultValue: "",
                    children: [],
                  }
                  i.VALUE.forEach((item, index) =>
                    obj.children.push({
                      id: uuid(),
                      name: index,
                      type: "string",
                      defaultValue: item,
                    })
                  )
                  sidebarContext.formModel.params.children.push(obj)
                }
              }
            } else {
              if (sidebarContext.formModel.params.children.length) {
                sidebarContext.formModel.params.children = []
              }
            }
          }
        }
        sidebarContext.formModel.path = `${
          projectNode?.datasource === "default"
            ? location.origin + "/biz"
            : projectNode?.datasource
        }/${
          projectNode?.datasource !== "default" && !!projectNode?.requestPath
            ? projectNode?.requestPath + "/"
            : ""
        }${info.node.extra.manateeUrl}/project${projectId}/${
          info.node.extra.moduleCode
        }`
      }
    },
    [projectNode]
  )

  const recursiveSeek = (moduleList, searchText: string) => {
    const res = [];
    (moduleList || []).forEach((item) => {
      if (!item.children || item.children.length === 0) {
        if (item.module && (textSearchWithPinyin(item.title, searchText) || letterCompare(item.module.moduleCode, searchText))) {
          res.push({
            ...item,
          })
        }
      } else {
        const children = recursiveSeek(item.children, searchText)
        if (children.length) {
          res.push({ ...item, children })
        }
      }
    })
    return res
  }

  const handleSearch = (value: string) => {
    if (!value) {
      getTreeData(interfaceList)
    } else {
      const newList = recursiveSeek(interfaceList, value)
      getTreeData(newList)
    }
  }
  return createPortal(
    <div className={`${css["right"]} ${isRightExpand ? css["expand"] : ""}`}>
      <div style={{ padding: "20px" }}>
        <div className={`fl-hor fl-right ${css["sqBtn"]}`}>
          <Button
            type="primary"
            onClick={closeRight}
            icon={<DoubleLeftOutlined />}
            size="small"
          >
            收起
          </Button>
        </div>
        <div>
          <div>项目</div>
          <Select
            value={projectId}
            style={{ width: "80%", marginTop: 12}}
            className="wd-full"
            options={projectList}
            onChange={onProjectIdChange}
          ></Select>
          <Input 
            value={searchText}
            prefix={<SearchOutlined />} 
            allowClear
            style={{ width: "80%", marginTop: 8 }}
            placeholder="搜索接口名称或英文名"
            onChange={e => handleSearch(e.target.value.trim())}
          /> 
        </div>
        <div style={{ marginTop: 24 }}>
          <div style={{ marginBottom: 12 }}>接口目录</div>
          <div>
            {loading ? (
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
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
