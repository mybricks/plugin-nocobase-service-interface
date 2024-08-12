import axios from "axios"
import { message } from "antd"
export const HOST_ORIGIN = window.location.origin

function parseTokenOrSession(data: string | null) {
  if (!data) return ""

  try {
    return atob(atob(data))
  } catch {
    return ""
  }
}
const getAuth = () => {
  const token = parseTokenOrSession(localStorage.getItem("token"))
  const session = parseTokenOrSession(localStorage.getItem("session"))
  return [token, session]
}

const handleConfig = () => {
  const [token, session] = getAuth()
  return {
    headers: { token, session, "Content-Type": "application/json" },
  }
}

export const axiosPostProjectList = async (params = {}) => {
  // const url = `${HOST_ORIGIN}/biz/customizeModule.do?lowcodeProjectId=0&lowcodeModule=queryProject`
  // try {
  //   const response = await axios.post(url, params, handleConfig())
  //   return response.data.data
  // } catch (error) {
  //   console.error(`Error requesting ${url}: ${error.message}`)
  //   throw error
  // }
  const response = {
    "traceId": "325-1723446508767",
    "msg": "请求成功",
    "code": "success",
    "data": {
        "outputData": [
            {
                "gmtModified": "2024-07-17 16:07:38",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "https://ep-api.glopayroll.com",
                    "http://127.0.0.1:8303/biz",
                    "http://115.238.51.133:8305/biz",
                    "http://115.238.51.133:8303/biz"
                ],
                "packageId": 1717644532207304,
                "description": null,
                "avatar": null,
                "gmtCreate": "2024-06-06 11:57:16",
                "type": 1,
                "docHost": "http://115.238.51.133:8303/biz",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:01:47"
                    },
                    "projectId": 1717646235328999,
                    "runningStatus": 0,
                    "gmtCollection": "2024-08-12 15:01:47",
                    "status": true
                },
                "istop": 0,
                "datasource": "http://115.238.51.133:8303/biz",
                "name": "人事宝-雇员系统",
                "createUser": 99,
                "id": 1717646235328999,
                "requestPath": null
            },
            {
                "gmtModified": "2024-05-13 19:37:17",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "http://127.0.0.1:8108/biz",
                    "http://121.5.128.156:8108/biz",
                    "http://127.0.0.1:8081/sport100-app/biz",
                    "http://127.0.0.1:8080/sport100-web/biz"
                ],
                "packageId": 1712637822574841,
                "description": null,
                "avatar": null,
                "gmtCreate": "2024-04-09 12:44:25",
                "type": 1,
                "docHost": "http://121.5.128.156:8108/biz",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:01:45"
                    },
                    "projectId": 1712637864535929,
                    "runningStatus": 0,
                    "gmtCollection": "2024-08-12 15:01:45",
                    "status": true
                },
                "istop": 0,
                "datasource": "http://121.5.128.156:8108/biz",
                "name": "联通poc-活力运动",
                "createUser": 2,
                "id": 1712637864535929,
                "requestPath": null
            },
            {
                "gmtModified": "2024-01-06 00:04:41",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "http://practice.manateeai.com"
                ],
                "packageId": 1693363379711240,
                "description": "在这里尝试一下吧！",
                "avatar": null,
                "gmtCreate": "2022-01-19 17:25:40",
                "type": 1,
                "docHost": "http://practice.manateeai.com/biz",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:00:02"
                    },
                    "projectId": 143,
                    "runningStatus": -1,
                    "gmtCollection": "2024-08-12 15:00:02",
                    "status": false
                },
                "istop": 0,
                "datasource": "http://practice.manateeai.com/biz",
                "backupFailed": true,
                "name": "体验项目",
                "createUser": null,
                "id": 143,
                "requestPath": "biz"
            },
            {
                "gmtModified": "2024-01-06 00:04:41",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "http://127.0.0.1:8104",
                    "http://127.0.0.1:8106",
                    "http://work.manateeai.com",
                    "http://127.0.0.1:8087",
                    "http://127.0.0.1:8982",
                    "http://manateeai01.nat300.top"
                ],
                "packageId": 0,
                "description": "案例项目",
                "avatar": null,
                "gmtCreate": null,
                "type": 1,
                "docHost": "default",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:00:00"
                    },
                    "projectId": 35,
                    "runningStatus": 0,
                    "gmtCollection": "2024-08-12 15:00:00",
                    "status": true
                },
                "istop": 0,
                "datasource": "default",
                "name": "案例项目",
                "createUser": null,
                "id": 35,
                "requestPath": "biz"
            },
            {
                "gmtModified": "2024-01-06 00:04:41",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "http://work.manateeai.com"
                ],
                "packageId": 1694054469577773,
                "description": "演示学生信息、故事等",
                "avatar": null,
                "gmtCreate": "2021-12-03 16:07:28",
                "type": 1,
                "docHost": "default",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:00:02"
                    },
                    "projectId": 130,
                    "runningStatus": 0,
                    "gmtCollection": "2024-08-12 15:00:02",
                    "status": true
                },
                "istop": 0,
                "datasource": "default",
                "name": "演示项目",
                "createUser": null,
                "id": 130,
                "requestPath": "biz"
            },
            {
                "gmtModified": "2024-02-27 16:57:02",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "http://124.222.183.114:8088",
                    "http://124.222.183.114:8110/biz",
                    "http://124.222.183.114:8088/biz",
                    "http://127.0.0.1:8110"
                ],
                "packageId": 0,
                "description": "商品中心",
                "avatar": null,
                "gmtCreate": "2021-12-30 17:43:16",
                "type": 1,
                "docHost": "http://124.222.183.114:8088/biz",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:00:02"
                    },
                    "projectId": 141,
                    "runningStatus": -1,
                    "gmtCollection": "2024-08-12 15:00:02",
                    "status": false
                },
                "istop": 0,
                "datasource": "http://124.222.183.114:8088/biz",
                "backupFailed": true,
                "name": "shop-item",
                "createUser": null,
                "id": 141,
                "requestPath": "biz"
            },
            {
                "gmtModified": "2024-01-06 00:04:41",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "http://124.222.183.114:8088",
                    "http://work.manateeai.com",
                    "http://127.0.0.1:8109"
                ],
                "packageId": 0,
                "description": "交易中心",
                "avatar": null,
                "gmtCreate": "2021-12-30 17:44:09",
                "type": 1,
                "docHost": "http://124.222.183.114:8088/biz",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:00:02"
                    },
                    "projectId": 142,
                    "runningStatus": -1,
                    "gmtCollection": "2024-08-12 15:00:02",
                    "status": false
                },
                "istop": 0,
                "datasource": "http://124.222.183.114:8088/biz",
                "backupFailed": true,
                "name": "shop-order",
                "createUser": null,
                "id": 142,
                "requestPath": "biz"
            },
            {
                "gmtModified": "2024-01-06 00:04:41",
                "lowcodeuicuserroleroleid": 5,
                "hosts": [
                    "http://124.222.183.114:8088/biz",
                    "http://127.0.0.1:8108",
                    "http://42.192.138.166:8088",
                    "http://192.168.10.82:8108"
                ],
                "packageId": 0,
                "description": "用户中心",
                "avatar": null,
                "gmtCreate": "2021-12-30 17:03:23",
                "type": 1,
                "docHost": "http://124.222.183.114:8088/biz",
                "valid": 0,
                "projectRunningStatus": {
                    "tipMessage": {
                        "更新时间": "2024-08-12 15:00:02"
                    },
                    "projectId": 140,
                    "runningStatus": -1,
                    "gmtCollection": "2024-08-12 15:00:02",
                    "status": false
                },
                "istop": 0,
                "datasource": "http://124.222.183.114:8088/biz",
                "backupFailed": true,
                "name": "shop-user",
                "createUser": null,
                "id": 140,
                "requestPath": "biz"
            }
        ],
        "packageList": [
            {
                "packageId": 1717644532207304,
                "name": "人事宝",
                "parentId": 0
            },
            {
                "packageId": 1712637822574841,
                "name": "客户poc",
                "parentId": 0
            },
            {
                "packageId": 1694054469577773,
                "name": "演示项目",
                "parentId": 0
            },
            {
                "packageId": 1693363379711240,
                "name": "王大力",
                "parentId": 0
            }
        ],
        "total": 8
    },
    "subCode": "",
    "errorCode": 0,
    "status": 200
  }
  return response.data
}

export const axiosPostInterfaceList = async (params: {
  projectId: number | string
  datasource: string
}) => {
  // const url = `${HOST_ORIGIN}/biz/modularity/project0/getAllModules`
  // try {
  //   const response = await axios.post(url, params, handleConfig())
  //   if (response.data.status === 200) {
  //     return response.data.data
  //   } else {
  //     message.error(response.data.msg)
  //     return { list: [] }
  //   }
  // } catch (error) {
  //   console.error(`Error requesting ${url}: ${error.message}`)
  //   throw error
  // }
  return {
    "traceId": "325-1723446508849",
    "msg": "请求成功",
    "code": "success",
    "data": {
        "list": [
            {
                "children": [
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "employerAccountList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "账号列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171887726063184&moduleId=171887736067912",
                                    "id": 171887736067912,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false},\"userSearchInfo\":{\"required\":false},\"startCreatedTime\":{\"required\":false},\"endCreatedTime\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719562248516\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719562248516\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"4\",\"post\":{\"page\":1,\"pageSize\":10,\"sorter\":{\"id\":\"createTime\",\"order\":\"descend\"}}}"
                                },
                                "title": "账号列表",
                                "isLeaf": true,
                                "key": 171887736067912,
                                "parentId": 171887726063184
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "employerAddAccount",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增账号",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171887726063184&moduleId=1718877378170695",
                                    "id": 1718877378170695,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userName\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzMsImxvZ2luX3VzZXJfa2V5IjoiMTczIn0.62pfNgVadxUAHuLK1jbzRjJs45m_HsnBgDTtKmnStfhzP7Z6Mm6OFz4A1RoYAhxvjFvc30RVToxcKB8A3ZgqTw\",\"key\":\"1719477283860\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzMsImxvZ2luX3VzZXJfa2V5IjoiMTczIn0.62pfNgVadxUAHuLK1jbzRjJs45m_HsnBgDTtKmnStfhzP7Z6Mm6OFz4A1RoYAhxvjFvc30RVToxcKB8A3ZgqTw\",\"key\":\"1719477283860\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"4\",\"post\":{\"userName\":\"kkkdd\",\"nickName\":\"dddd\",\"roleId\":127,\"conformPassword\":\"Abc123456\",\"password\":\"Abc123456\",\"avatar\":\"\"}}"
                                },
                                "title": "新增账号",
                                "isLeaf": true,
                                "key": 1718877378170695,
                                "parentId": 171887726063184
                            },
                            {
                                "module": {
                                    "moduleDescription": "删除用户",
                                    "moduleCode": "employerDeleteUserByUserId",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除用户",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171887726063184&moduleId=1718877462480496",
                                    "id": 1718877462480496,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"userId\":3,\"delFlag\":2}}"
                                },
                                "title": "删除用户",
                                "isLeaf": true,
                                "key": 1718877462480496,
                                "parentId": 171887726063184
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "transferOfMainAccount",
                                    "manateeUrl": "modularity",
                                    "moduleName": "转让主账号",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171887726063184&moduleId=1718877538935750",
                                    "id": 1718877538935750,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"sourceUserId\":{\"required\":false},\"targetUserId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyMTQsImxvZ2luX3VzZXJfa2V5IjoiMjE0In0.BtSB-jKx-BYPCDg-Sy5P56EnIKgc99F8NKhZ_9DAlNVQ8buRacWg80DHyROoWrPOLVZSdp66KoW0_AB6QpDBYg\",\"key\":\"1719484247913\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyMTQsImxvZ2luX3VzZXJfa2V5IjoiMjE0In0.BtSB-jKx-BYPCDg-Sy5P56EnIKgc99F8NKhZ_9DAlNVQ8buRacWg80DHyROoWrPOLVZSdp66KoW0_AB6QpDBYg\",\"key\":\"1719484247913\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"2\",\"post\":{\"targetUserId\":235,\"roleId\":127,\"password\":\"Aa123456\",\"sourceUserId\":214}}"
                                },
                                "title": "转让主账号",
                                "isLeaf": true,
                                "key": 1718877538935750,
                                "parentId": 171887726063184
                            },
                            {
                                "module": {
                                    "moduleDescription": "查询账号是否存在，存在则返回雇主信息",
                                    "moduleCode": "employerQueryAccountIsExist",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询账号是否存在",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171887726063184&moduleId=1718883765882813",
                                    "id": 1718883765882813,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719561863606\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719561863606\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"2\",\"post\":{\"userName\":\"link2\"}}"
                                },
                                "title": "查询账号是否存在",
                                "isLeaf": true,
                                "key": 1718883765882813,
                                "parentId": 171887726063184
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "updateAccount",
                                    "manateeUrl": "modularity",
                                    "moduleName": "更新账号信息",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171887726063184&moduleId=1718886214754648",
                                    "id": 1718886214754648,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false},\"nickName\":{\"required\":false},\"roleId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzMsImxvZ2luX3VzZXJfa2V5IjoiMTczIn0.62pfNgVadxUAHuLK1jbzRjJs45m_HsnBgDTtKmnStfhzP7Z6Mm6OFz4A1RoYAhxvjFvc30RVToxcKB8A3ZgqTw\",\"key\":\"1719575646759\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzMsImxvZ2luX3VzZXJfa2V5IjoiMTczIn0.62pfNgVadxUAHuLK1jbzRjJs45m_HsnBgDTtKmnStfhzP7Z6Mm6OFz4A1RoYAhxvjFvc30RVToxcKB8A3ZgqTw\",\"key\":\"1719575646759\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"2\",\"post\":{\"nickName\":\"放假了数控刀具\",\"userId\":203}}"
                                },
                                "title": "更新账号信息",
                                "isLeaf": true,
                                "key": 1718886214754648,
                                "parentId": 171887726063184
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "queryEmployerAccount",
                                    "manateeUrl": "modularity",
                                    "moduleName": "获取雇主下(非主账号)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171887726063184&moduleId=1718972314258702",
                                    "id": 1718972314258702,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImIwNmRkZmNhLWIwOWUtNGZmZi1iZTdiLWNkMjhiM2FiMjU1ZiJ9.RArEVzwvmwqs0QvYhZ1HBPl585v-5whIp5-bG0dkNqblY578VQJLVvUN610gGdzJJJ4SbPMpWBCvpSt7fi4WwA\",\"key\":\"1718972484683\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImIwNmRkZmNhLWIwOWUtNGZmZi1iZTdiLWNkMjhiM2FiMjU1ZiJ9.RArEVzwvmwqs0QvYhZ1HBPl585v-5whIp5-bG0dkNqblY578VQJLVvUN610gGdzJJJ4SbPMpWBCvpSt7fi4WwA\",\"key\":\"1718972484683\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "获取雇主下(非主账号)",
                                "isLeaf": true,
                                "key": 1718972314258702,
                                "parentId": 171887726063184
                            }
                        ],
                        "title": "账户管理",
                        "key": 171887726063184,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchRealnameAuthenticationEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个合作员工(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1717762615843001",
                                    "id": 1717762615843001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719467042932\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719467042932\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":\"44\"}}"
                                },
                                "title": "查询单个合作员工(雇主端)",
                                "isLeaf": true,
                                "key": 1717762615843001,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editRealnameAuthenticationEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改合作员工(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1717762615844001",
                                    "id": 1717762615844001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"isFollow\":{\"required\":false},\"isRegister\":{\"required\":false},\"unionid\":{\"required\":false},\"officialOpenId\":{\"required\":false},\"appOpenId\":{\"required\":false},\"reviewStatus\":{\"required\":false},\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false},\"userId\":{\"required\":false},\"authenticationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"name\":\"测试嗨害嗨\",\"authenticationId\":5}}"
                                },
                                "title": "修改合作员工(雇主端)",
                                "isLeaf": true,
                                "key": 1717762615844001,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllRealnameAuthenticationEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表合作员工(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1717762615845001",
                                    "id": 1717762615845001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"isFollow\":{\"required\":false},\"isRegister\":{\"required\":false},\"unionid\":{\"required\":false},\"officialOpenId\":{\"required\":false},\"appOpenId\":{\"required\":false},\"reviewStatus\":{\"required\":false},\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false},\"userId\":{\"required\":false},\"authenticationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyNDEsImxvZ2luX3VzZXJfa2V5IjoiMjQxIn0.vuVh7l5UJ44PmyFljVuMZOmkC53ftTqXeaBxeyYHloR5ICHJMiPYsQTOnCLlRNBpAhXwObGjiBNwg1TQC-EjaA\",\"key\":\"1718953561017\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyNDEsImxvZ2luX3VzZXJfa2V5IjoiMjQxIn0.vuVh7l5UJ44PmyFljVuMZOmkC53ftTqXeaBxeyYHloR5ICHJMiPYsQTOnCLlRNBpAhXwObGjiBNwg1TQC-EjaA\",\"key\":\"1718953561017\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"3\",\"post\":{\"pageNum\":1,\"pageSize\":10}}"
                                },
                                "title": "查询列表合作员工(雇主端)",
                                "isLeaf": true,
                                "key": 1717762615845001,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createRealnameAuthenticationEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增合作员工(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1717762615845002",
                                    "id": 1717762615845002,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"isFollow\":{\"required\":false},\"isRegister\":{\"required\":false},\"unionid\":{\"required\":false},\"officialOpenId\":{\"required\":false},\"appOpenId\":{\"required\":false},\"reviewStatus\":{\"required\":false},\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false},\"userId\":{\"required\":false},\"authenticationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719556437900\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719556437900\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"4\",\"post\":{\"name\":\"木易\",\"idCardNumber\":\"421302199009208881\",\"remark\":\"11\"}}"
                                },
                                "title": "新增合作员工(雇主端)",
                                "isLeaf": true,
                                "key": 1717762615845002,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteRealnameAuthenticationEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除合作员工(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1717762615846001",
                                    "id": 1717762615846001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":6}}"
                                },
                                "title": "删除合作员工(雇主端)",
                                "isLeaf": true,
                                "key": 1717762615846001,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "importEmployees",
                                    "manateeUrl": "modularityUpload",
                                    "moduleName": "导入员工",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1718097767401622",
                                    "id": 1718097767401622,
                                    "requestMode": "POST",
                                    "isUpload": true,
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1719057571049\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1719057571049\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "导入员工",
                                "isLeaf": true,
                                "key": 1718097767401622,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "updateRemarkByUserId",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改备注信息",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1718766856503969",
                                    "id": 1718766856503969,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false},\"remark\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyNjgsImxvZ2luX3VzZXJfa2V5IjoiMjY4In0.SuWlFJfzlljM8Lh06zJVWAUve3g9SRa67QxeNIp3eSgADoYmJuywFkI2gjNjl7WQKYsCG9twsE4NSya7xoZ6QA\",\"key\":\"1720058745179\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyNjgsImxvZ2luX3VzZXJfa2V5IjoiMjY4In0.SuWlFJfzlljM8Lh06zJVWAUve3g9SRa67QxeNIp3eSgADoYmJuywFkI2gjNjl7WQKYsCG9twsE4NSya7xoZ6QA\",\"key\":\"1720058745179\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"authenticationId\":36,\"remark\":\"21212给孤寡孤寡孤寡\"}}"
                                },
                                "title": "修改备注信息",
                                "isLeaf": true,
                                "key": 1718766856503969,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "downloadEmployeesImportTemplate",
                                    "manateeUrl": "modularity",
                                    "moduleName": "下载合作员工导入模板",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1719070367932310",
                                    "id": 1719070367932310,
                                    "requestMode": "POST",
                                    "params": "{\"host\":\"http://115.238.51.133:8303/biz\"}"
                                },
                                "title": "下载合作员工导入模板",
                                "isLeaf": true,
                                "key": 1719070367932310,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "batchDeleteEmployee",
                                    "manateeUrl": "modularity",
                                    "moduleName": "批量删除合作员工(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1719545763695448",
                                    "id": 1719545763695448,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"idList\":[6]}}"
                                },
                                "title": "批量删除合作员工(雇主端)",
                                "isLeaf": true,
                                "key": 1719545763695448,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "setInvitationPermission",
                                    "manateeUrl": "modularity",
                                    "moduleName": "设置邀请权限",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1721124313944138",
                                    "id": 1721124313944138,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"authenticationId\":{\"required\":false},\"invitationPermission\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyNDEsImxvZ2luX3VzZXJfa2V5IjoiMjQxIn0.vuVh7l5UJ44PmyFljVuMZOmkC53ftTqXeaBxeyYHloR5ICHJMiPYsQTOnCLlRNBpAhXwObGjiBNwg1TQC-EjaA\",\"key\":\"1721876743012\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyNDEsImxvZ2luX3VzZXJfa2V5IjoiMjQxIn0.vuVh7l5UJ44PmyFljVuMZOmkC53ftTqXeaBxeyYHloR5ICHJMiPYsQTOnCLlRNBpAhXwObGjiBNwg1TQC-EjaA\",\"key\":\"1721876743012\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"authenticationId\":1149,\"invitationPermission\":\"0\"}}"
                                },
                                "title": "设置邀请权限",
                                "isLeaf": true,
                                "key": 1721124313944138,
                                "parentId": 1717744595828383
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "queryInvitationPermission",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询员工邀请权限",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744595828383&moduleId=1721124411142443",
                                    "id": 1721124411142443,
                                    "requestMode": "POST"
                                },
                                "title": "查询员工邀请权限",
                                "isLeaf": true,
                                "key": 1721124411142443,
                                "parentId": 1717744595828383
                            }
                        ],
                        "title": "合作员工管理",
                        "key": 1717744595828383,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchJobPostingsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个招聘信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1717762602885001",
                                    "id": 1717762602885001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyMTEsImxvZ2luX3VzZXJfa2V5IjoiMjExIn0.AEVgs0MkiKk-wH0CF7kaWUZzD1IHmRw0sBWEdVON4w0PoxHLpjCIeNCSb2FTPPYOPlMIdMudDGEiXTds_03kNQ\",\"key\":\"1719021139572\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyMTEsImxvZ2luX3VzZXJfa2V5IjoiMjExIn0.AEVgs0MkiKk-wH0CF7kaWUZzD1IHmRw0sBWEdVON4w0PoxHLpjCIeNCSb2FTPPYOPlMIdMudDGEiXTds_03kNQ\",\"key\":\"1719021139572\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":2}}"
                                },
                                "title": "查询单个招聘信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762602885001,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editJobPostingsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改招聘信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1717762602889001",
                                    "id": 1717762602889001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"districtId\":{\"required\":false},\"cityId\":{\"required\":false},\"provinceId\":{\"required\":false},\"registrationMethod\":{\"required\":false},\"jobDescription\":{\"required\":false},\"publisherName\":{\"required\":false},\"publisherId\":{\"required\":false},\"publishTime\":{\"required\":false},\"visibility\":{\"required\":false},\"vacancy\":{\"required\":false},\"recruited\":{\"required\":false},\"settlementMethod\":{\"required\":false},\"jobSalaryEndAmount\":{\"required\":false},\"jobSalaryStartAmount\":{\"required\":false},\"jobNature\":{\"required\":false},\"jobEndTime\":{\"required\":false},\"jobStartTime\":{\"required\":false},\"jobLocation\":{\"required\":false},\"jobType\":{\"required\":false},\"employerId\":{\"required\":false},\"jobStatus\":{\"required\":false},\"jobTitle\":{\"required\":false},\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"jobId\":1,\"registrationMethod\":\"1\",\"jobDescription\":\"负责公司软件开发，维护和升级，确保系统的稳定性和安全性999。\",\"visibility\":\"1\",\"vacancy\":3,\"settlementMethod\":\"1\",\"jobSalaryEndAmount\":\"15000\",\"jobSalaryStartAmount\":\"10000\",\"jobNature\":\"1\",\"jobEndTime\":\"2024-12-31 18:00:00\",\"jobStartTime\":\"2024-07-01 09:00:00\",\"jobAddressId\":1,\"jobType\":\"编程/软件开发\",\"jobTypeId\":2,\"jobTitle\":\"高级软件工程师2\",\"jobCheckInScope\":500,\"currency\":1}}"
                                },
                                "title": "修改招聘信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762602889001,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllJobPostingsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表招聘信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1717762602890001",
                                    "id": 1717762602890001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"districtId\":{\"required\":false},\"cityId\":{\"required\":false},\"provinceId\":{\"required\":false},\"registrationMethod\":{\"required\":false},\"jobDescription\":{\"required\":false},\"publisherName\":{\"required\":false},\"publisherId\":{\"required\":false},\"publishTime\":{\"required\":false},\"visibility\":{\"required\":false},\"vacancy\":{\"required\":false},\"recruited\":{\"required\":false},\"settlementMethod\":{\"required\":false},\"jobSalaryEndAmount\":{\"required\":false},\"jobSalaryStartAmount\":{\"required\":false},\"jobNature\":{\"required\":false},\"jobEndTime\":{\"required\":false},\"jobStartTime\":{\"required\":false},\"jobLocation\":{\"required\":false},\"jobType\":{\"required\":false},\"employerId\":{\"required\":false},\"jobStatus\":{\"required\":false},\"jobTitle\":{\"required\":false},\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1718956372268\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1718956372268\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"jobTitleLike\":\"lin\",\"page\":1,\"pageSize\":10}}"
                                },
                                "title": "查询列表招聘信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762602890001,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createJobPostingsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增招聘信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1717762602890002",
                                    "id": 1717762602890002,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"districtId\":{\"required\":false},\"cityId\":{\"required\":false},\"provinceId\":{\"required\":false},\"registrationMethod\":{\"required\":false},\"jobDescription\":{\"required\":false},\"publisherName\":{\"required\":false},\"publisherId\":{\"required\":false},\"publishTime\":{\"required\":false},\"visibility\":{\"required\":false},\"vacancy\":{\"required\":false},\"recruited\":{\"required\":false},\"settlementMethod\":{\"required\":false},\"jobSalaryEndAmount\":{\"required\":false},\"jobSalaryStartAmount\":{\"required\":false},\"jobNature\":{\"required\":false},\"jobEndTime\":{\"required\":false},\"jobStartTime\":{\"required\":false},\"jobLocation\":{\"required\":false},\"jobType\":{\"required\":false},\"employerId\":{\"required\":false},\"jobStatus\":{\"required\":false},\"jobTitle\":{\"required\":false},\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719058032215\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719058032215\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"3\",\"post\":{\"jobTitle\":\"这是一个测试\",\"jobTypeId\":27,\"jobType\":\"aaaaa\",\"jobStartTime\":\"2024-06-30 19:41\",\"jobEndTime\":\"2024-06-25 19:41\",\"vacancy\":3,\"jobNature\":1,\"settlementMethod\":1,\"currency\":1,\"jobSalaryStartAmount\":40,\"jobSalaryEndAmount\":40,\"jobAddressId\":11,\"visibility\":1,\"jobDescription\":\"test\"}}"
                                },
                                "title": "新增招聘信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762602890002,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteJobPostingsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除招聘信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1717762602891001",
                                    "id": 1717762602891001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":6}}"
                                },
                                "title": "删除招聘信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762602891001,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "wechatNotificationList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "微信通知列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718097432765370",
                                    "id": 1718097432765370,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"employerId\":{\"required\":false},\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1718962398859\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1718962398859\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"4\",\"post\":{\"jobId\":\"642\",\"page\":1,\"pageSize\":10,\"todoScheduleStartTime\":\"2024-07-24 17:22:00\",\"todoScheduleEndTime\":\"2024-07-25 21:22:00\"}}"
                                },
                                "title": "微信通知列表",
                                "isLeaf": true,
                                "key": 1718097432765370,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "batchWechatNotifications",
                                    "manateeUrl": "modularity",
                                    "moduleName": "批量微信通知",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718097465597147",
                                    "id": 1718097465597147,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"authenticationIdList\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719659628144\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719659628144\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"authenticationIdList\":[1114],\"jobId\":468}}"
                                },
                                "title": "批量微信通知",
                                "isLeaf": true,
                                "key": 1718097465597147,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "assign",
                                    "manateeUrl": "modularity",
                                    "moduleName": "指派",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718097513768329",
                                    "id": 1718097513768329,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false},\"userId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719402572890\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719402572890\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"jobId\":88,\"assignUserIds\":[177],\"employerId\":1}}"
                                },
                                "title": "指派",
                                "isLeaf": true,
                                "key": 1718097513768329,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "closeRecruitment",
                                    "manateeUrl": "modularity",
                                    "moduleName": "关闭招聘",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718097543080806",
                                    "id": 1718097543080806,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"jobId\":13}}"
                                },
                                "title": "关闭招聘",
                                "isLeaf": true,
                                "key": 1718097543080806,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "查询招聘信息不同状态数量",
                                    "moduleCode": "queryJobPostingsEmployerStatusNum",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询招聘信息不同状态数量",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718354580806265",
                                    "id": 1718354580806265,
                                    "requestMode": "GET",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImRhNzkwNDBiLTgwZDUtNGU5Ny05N2ViLTdmMTZlYjE1OTVhMyJ9.boFpv7LhPUOwM-l2ZK_I5wVqmUuJ2h4zErqJMh9M-9xUKNg8IRd1VOMLAFMh_06KNddNjxbluXG1dWSjHkiUQQ\",\"key\":\"1718956657147\",\"DESC\":\"\"}],\"usedGetHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImRhNzkwNDBiLTgwZDUtNGU5Ny05N2ViLTdmMTZlYjE1OTVhMyJ9.boFpv7LhPUOwM-l2ZK_I5wVqmUuJ2h4zErqJMh9M-9xUKNg8IRd1VOMLAFMh_06KNddNjxbluXG1dWSjHkiUQQ\",\"key\":\"1718956657147\",\"DESC\":\"\"}],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"get\":[],\"usedGetParams\":[]}"
                                },
                                "title": "查询招聘信息不同状态数量",
                                "isLeaf": true,
                                "key": 1718354580806265,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "cancelAssign",
                                    "manateeUrl": "modularity",
                                    "moduleName": "取消指派",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718697344530801",
                                    "id": 1718697344530801,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false},\"userId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"assignUserIds\":[174],\"jobId\":86}}"
                                },
                                "title": "取消指派",
                                "isLeaf": true,
                                "key": 1718697344530801,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "countEmployerUser",
                                    "manateeUrl": "modularity",
                                    "moduleName": "合作员工数量统计",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718701945479659",
                                    "id": 1718701945479659,
                                    "requestMode": "GET"
                                },
                                "title": "合作员工数量统计",
                                "isLeaf": true,
                                "key": 1718701945479659,
                                "parentId": 1717749308021243
                            },
                            {
                                "module": {
                                    "moduleDescription": "查询招聘流程",
                                    "moduleCode": "queryRecruitmentProcessEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询招聘流程",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749308021243&moduleId=1718802722073885",
                                    "id": 1718802722073885,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1718957868846\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1718957868846\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"jobId\":\"726\"}}"
                                },
                                "title": "查询招聘流程",
                                "isLeaf": true,
                                "key": 1718802722073885,
                                "parentId": 1717749308021243
                            }
                        ],
                        "title": "招聘中心",
                        "key": 1717749308021243,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchRegistrationOrderEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个报名订单（雇主端）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718095808572001",
                                    "id": 1718095808572001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719628750835\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719628750835\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"id\":76}}"
                                },
                                "title": "查询单个报名订单（雇主端）",
                                "isLeaf": true,
                                "key": 1718095808572001,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editRegistrationOrderEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改报名订单（雇主端）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718095808581001",
                                    "id": 1718095808581001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"orderState\":{\"required\":false},\"orderEvaluation\":{\"required\":false},\"acceptanceDescription\":{\"required\":false},\"actualPayment\":{\"required\":false},\"credentialInfo\":{\"required\":false},\"checkOutLocation\":{\"required\":false},\"checkInLocation\":{\"required\":false},\"checkOutTime\":{\"required\":false},\"checkInTime\":{\"required\":false},\"orderStatus\":{\"required\":false},\"registrationTime\":{\"required\":false},\"applicantName\":{\"required\":false},\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false},\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"jobId\":996,\"applicantName\":\"王五580\",\"orderId\":6}}"
                                },
                                "title": "修改报名订单（雇主端）",
                                "isLeaf": true,
                                "key": 1718095808581001,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllRegistrationOrderEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表报名订单（雇主端）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718095808583001",
                                    "id": 1718095808583001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"orderState\":{\"required\":false},\"orderEvaluation\":{\"required\":false},\"acceptanceDescription\":{\"required\":false},\"actualPayment\":{\"required\":false},\"credentialInfo\":{\"required\":false},\"checkOutLocation\":{\"required\":false},\"checkInLocation\":{\"required\":false},\"checkOutTime\":{\"required\":false},\"checkInTime\":{\"required\":false},\"orderStatus\":{\"required\":false},\"registrationTime\":{\"required\":false},\"applicantName\":{\"required\":false},\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false},\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1719537121851\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1719537121851\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"3\",\"post\":{\"jobId\":\"516\",\"page\":1,\"pageSize\":9999}}"
                                },
                                "title": "查询列表报名订单（雇主端）",
                                "isLeaf": true,
                                "key": 1718095808583001,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createRegistrationOrderEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增报名订单（雇主端）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718095808584001",
                                    "id": 1718095808584001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"orderState\":{\"required\":false},\"orderEvaluation\":{\"required\":false},\"acceptanceDescription\":{\"required\":false},\"actualPayment\":{\"required\":false},\"credentialInfo\":{\"required\":false},\"checkOutLocation\":{\"required\":false},\"checkInLocation\":{\"required\":false},\"checkOutTime\":{\"required\":false},\"checkInTime\":{\"required\":false},\"orderStatus\":{\"required\":false},\"registrationTime\":{\"required\":false},\"applicantName\":{\"required\":false},\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false},\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"jobId\":3,\"employerId\":5,\"applicantId\":1,\"applicantName\":\"王五\",\"registrationTime\":\"2024-06-10T10:00:00.000+08:00\",\"orderStatus\":\"3\",\"checkInTime\":\"2024-06-15T10:16:22.000+08:00\",\"checkInLocation\":\"开始地址\",\"isDeleted\":false,\"createdBy\":\"王五\",\"updatedBy\":\"1\"}}"
                                },
                                "title": "新增报名订单（雇主端）",
                                "isLeaf": true,
                                "key": 1718095808584001,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteRegistrationOrderEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除报名订单（雇主端）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718095808585001",
                                    "id": 1718095808585001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":6}}"
                                },
                                "title": "删除报名订单（雇主端）",
                                "isLeaf": true,
                                "key": 1718095808585001,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "orderAcceptance",
                                    "manateeUrl": "modularity",
                                    "moduleName": "订单验收",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=171809757997258",
                                    "id": 171809757997258,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1719402944824\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1719402944824\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"orderId\":461,\"actualPayment\":444,\"acceptanceDescription\":\"444\"}}"
                                },
                                "title": "订单验收",
                                "isLeaf": true,
                                "key": 171809757997258,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "cancelRegistration",
                                    "manateeUrl": "modularity",
                                    "moduleName": "取消报名",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718192725869836",
                                    "id": 1718192725869836,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"orderId\":14}}"
                                },
                                "title": "取消报名",
                                "isLeaf": true,
                                "key": 1718192725869836,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "employerScheduleList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "雇主端日程列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718709623320898",
                                    "id": 1718709623320898,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1718709691193\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1718709691193\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"4\",\"post\":{\"userId\":159,\"todoScheduleStartTime\":\"2024-07-11 13:30:00\",\"todoScheduleEndTime\":\"2024-07-12 18:00:00\",\"jobId\":639}}"
                                },
                                "title": "雇主端日程列表",
                                "isLeaf": true,
                                "key": 1718709623320898,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "orderEvaluation",
                                    "manateeUrl": "modularity",
                                    "moduleName": "订单评价",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718717067800493",
                                    "id": 1718717067800493,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"orderId\":14,\"orderEvaluation\":\"\"}}"
                                },
                                "title": "订单评价",
                                "isLeaf": true,
                                "key": 1718717067800493,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "batchCancelRegistration",
                                    "manateeUrl": "modularity",
                                    "moduleName": "批量取消报名",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718803978371107",
                                    "id": 1718803978371107,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"orderIds\":[14]}}"
                                },
                                "title": "批量取消报名",
                                "isLeaf": true,
                                "key": 1718803978371107,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "batchOrderAcceptance",
                                    "manateeUrl": "modularity",
                                    "moduleName": "批量订单验收",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1718848286855982",
                                    "id": 1718848286855982,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719488743822\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719488743822\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"orderIds\":[76,77],\"actualPayment\":200,\"acceptanceDescription\":\"\"}}"
                                },
                                "title": "批量订单验收",
                                "isLeaf": true,
                                "key": 1718848286855982,
                                "parentId": 1717749363430938
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "employerScheduleCommonLIst",
                                    "manateeUrl": "modularity",
                                    "moduleName": "雇主端日程列表-通用",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749363430938&moduleId=1719024456145922",
                                    "id": 1719024456145922,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFhYjJiN2Y0LTgwMDItNGMzZC04NzMyLTg3YWNhZTQ1ZjZhYSJ9.kl7OfTgLywOa2y2Po-aAtG0WuOt2XWx-zWBK1VI2zyD_IBlvVXlpDaZCtPOhX7qkFK9VzYBKlWkKmm3lf77hMg\",\"key\":\"1718709691193\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFhYjJiN2Y0LTgwMDItNGMzZC04NzMyLTg3YWNhZTQ1ZjZhYSJ9.kl7OfTgLywOa2y2Po-aAtG0WuOt2XWx-zWBK1VI2zyD_IBlvVXlpDaZCtPOhX7qkFK9VzYBKlWkKmm3lf77hMg\",\"key\":\"1718709691193\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"status\":[1,3,4],\"todoScheduleStartTime\":\"2024-06-27 01:00:00\",\"todoScheduleEndTime\":\"2024-06-27 02:00:00\"}}"
                                },
                                "title": "雇主端日程列表-通用",
                                "isLeaf": true,
                                "key": 1719024456145922,
                                "parentId": 1717749363430938
                            }
                        ],
                        "title": "招聘订单",
                        "key": 1717749363430938,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchEmployerInvitationRecords",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表邀请记录(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749382086564&moduleId=1719407210107199",
                                    "id": 1719407210107199,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"earnings\":{\"required\":false},\"registrationTime\":{\"required\":false},\"invitedUserPhone\":{\"required\":false},\"invitedUserName\":{\"required\":false},\"invitedUserId\":{\"required\":false},\"inviterName\":{\"required\":false},\"inviterId\":{\"required\":false},\"invitationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719300256104\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719300256104\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"pageNum\":1,\"pageSize\":20,\"invitedUserId\":3}}"
                                },
                                "title": "查询列表邀请记录(雇主端)",
                                "isLeaf": true,
                                "key": 1719407210107199,
                                "parentId": 1717749382086564
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "getEmployerInvitationCode",
                                    "manateeUrl": "modularity",
                                    "moduleName": "雇主端获取邀请码",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749382086564&moduleId=1720408707916954",
                                    "id": 1720408707916954,
                                    "requestMode": "POST"
                                },
                                "title": "雇主端获取邀请码",
                                "isLeaf": true,
                                "key": 1720408707916954,
                                "parentId": 1717749382086564
                            }
                        ],
                        "title": "邀请",
                        "key": 1717749382086564,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "queryEmployerDetails",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询雇主详情",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749410719609&moduleId=1718096597378650",
                                    "id": 1718096597378650,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "查询雇主详情",
                                "isLeaf": true,
                                "key": 1718096597378650,
                                "parentId": 1717749410719609
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editEmployerInformation",
                                    "manateeUrl": "modularity",
                                    "moduleName": "编辑雇主信息",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749410719609&moduleId=1718097667973732",
                                    "id": 1718097667973732,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"employer_logo\":{\"required\":false},\"registration_certificate\":{\"required\":false},\"employer_name\":{\"required\":false},\"contact_person\":{\"required\":false},\"contact_info\":{\"required\":false},\"region_id\":{\"required\":false},\"region\":{\"required\":false},\"detailed_address\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6Ijc2NGQ5N2Q2LWIwYTYtNGI1Ni04ZTY2LTY0NGIwYmI2Yzc4NCJ9.FELgQIxR0PJsrgik22sqWgCpMcIcgY6Jr4SUBJFSV4NnZoevggA5883Nh7ivHqgZo31yebnFBaMYZrrFmTq6mA\",\"key\":\"1719053716656\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6Ijc2NGQ5N2Q2LWIwYTYtNGI1Ni04ZTY2LTY0NGIwYmI2Yzc4NCJ9.FELgQIxR0PJsrgik22sqWgCpMcIcgY6Jr4SUBJFSV4NnZoevggA5883Nh7ivHqgZo31yebnFBaMYZrrFmTq6mA\",\"key\":\"1719053716656\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"employerLogo\":\"[{\\\"name\\\":\\\"avatar.png\\\",\\\"status\\\":\\\"done\\\",\\\"percent\\\":100,\\\"uid\\\":\\\"__AUTO__1719041768080_0__\\\",\\\"url\\\":\\\"https://oss.manateeai.com/renshibao/avatar.png\\\"}]\",\"registrationCertificate\":\"[{\\\"name\\\":\\\"avatar.png\\\",\\\"status\\\":\\\"done\\\",\\\"percent\\\":100,\\\"uid\\\":\\\"__AUTO__1719041768080_0__\\\",\\\"url\\\":\\\"https://oss.manateeai.com/renshibao/avatar.png\\\"}]\",\"contactPerson\":\"luozaijin\",\"contactInfo\":\"18586832066\",\"regionIds\":[46,47],\"detailedAddress\":\"测试地址testaddre测试地址\",\"jobCheckInScope\":13,\"regionId\":47}}"
                                },
                                "title": "编辑雇主信息",
                                "isLeaf": true,
                                "key": 1718097667973732,
                                "parentId": 1717749410719609
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "exitEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "退出雇主",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749410719609&moduleId=171809769462382",
                                    "id": 171809769462382,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719408636374\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719408636374\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "退出雇主",
                                "isLeaf": true,
                                "key": 171809769462382,
                                "parentId": 1717749410719609
                            }
                        ],
                        "title": "雇主信息",
                        "key": 1717749410719609,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchRegionsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个地址信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749423691947&moduleId=1717762633938001",
                                    "id": 1717762633938001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"addressId\":2}}"
                                },
                                "title": "查询单个地址信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762633938001,
                                "parentId": 1717749423691947
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editRegionsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改地址信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749423691947&moduleId=1717762633949001",
                                    "id": 1717762633949001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"sortOrder\":{\"required\":false},\"regionIdentifier\":{\"required\":false},\"regionName\":{\"required\":false},\"parentRegionId\":{\"required\":false},\"regionId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"addressId\":2,\"regionId\":29,\"addressDetails\":\"随州市何店镇\",\"longitude\":\"116.413\",\"latitude\":\"39.9087\",\"addressDescription\":\"响堂街居委会\"}}"
                                },
                                "title": "修改地址信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762633949001,
                                "parentId": 1717749423691947
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllRegionsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表地址信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749423691947&moduleId=1717762633952001",
                                    "id": 1717762633952001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"sortOrder\":{\"required\":false},\"regionIdentifier\":{\"required\":false},\"regionName\":{\"required\":false},\"parentRegionId\":{\"required\":false},\"regionId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"address\":\"\"}}"
                                },
                                "title": "查询列表地址信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762633952001,
                                "parentId": 1717749423691947
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createRegionsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增地址信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749423691947&moduleId=1717762633953001",
                                    "id": 1717762633953001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"sortOrder\":{\"required\":false},\"regionIdentifier\":{\"required\":false},\"regionName\":{\"required\":false},\"parentRegionId\":{\"required\":false},\"regionId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"regionId\":29,\"addressDetails\":\"随州市何店镇\",\"longitude\":\"116.413\",\"latitude\":\"39.9087\",\"addressDescription\":\"响堂街居委会\"}}"
                                },
                                "title": "新增地址信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762633953001,
                                "parentId": 1717749423691947
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteRegionsEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除地址信息(雇主端)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749423691947&moduleId=1717762633954001",
                                    "id": 1717762633954001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"addressIdList\":[4]}}"
                                },
                                "title": "删除地址信息(雇主端)",
                                "isLeaf": true,
                                "key": 1717762633954001,
                                "parentId": 1717749423691947
                            }
                        ],
                        "title": "地址管理",
                        "key": 1717749423691947,
                        "parentId": 171774904084143
                    },
                    {
                        "title": "雇主端通用方法",
                        "key": 1718706976118704,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "setPhoneNumber",
                                    "manateeUrl": "modularity",
                                    "moduleName": "设置手机号",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1719382574833793&moduleId=1719382680682390",
                                    "id": 1719382680682390,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"phonenumber\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzMsImxvZ2luX3VzZXJfa2V5IjoiN2YyNGYwZGItNzQ1ZS00OWJhLWI0NjItOWUzODIxZmMxZDFlIn0.SV1-mon1lCCvXM45lwmUN1rdgPyxnrCZpTcLDEDliQwBXzwK-y75jrHy-zoRRHLnG9VPWmRsFTnYCdliBlxzRw\",\"key\":\"1719385595556\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzMsImxvZ2luX3VzZXJfa2V5IjoiN2YyNGYwZGItNzQ1ZS00OWJhLWI0NjItOWUzODIxZmMxZDFlIn0.SV1-mon1lCCvXM45lwmUN1rdgPyxnrCZpTcLDEDliQwBXzwK-y75jrHy-zoRRHLnG9VPWmRsFTnYCdliBlxzRw\",\"key\":\"1719385595556\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"2\",\"post\":{\"phonenumber\":\"85265771071\",\"verificationCode\":\"722264\",\"password\":\"Abc12345\",\"uuid\":\"db12625c-9024-44a5-b295-4548b4336e95\"}}"
                                },
                                "title": "设置手机号",
                                "isLeaf": true,
                                "key": 1719382680682390,
                                "parentId": 1719382574833793
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "modifyAvatar",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改头像",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1719382574833793&moduleId=171938761379159",
                                    "id": 171938761379159,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"avatar\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719553145777\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzUsImxvZ2luX3VzZXJfa2V5IjoiMTc1In0.Q_IuQ32cMRnaHEl9E72AcDW-ipU92XuIRPu82JXGGD6WYRSWOPsBr2_9GojxafaoPA5-pZ_AVViygMFlIgeBCA\",\"key\":\"1719553145777\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"avatar\":\"https://oss.manateeai.com/renshibao/test123.png\"}}"
                                },
                                "title": "修改头像",
                                "isLeaf": true,
                                "key": 171938761379159,
                                "parentId": 1719382574833793
                            }
                        ],
                        "title": "个人信息",
                        "key": 1719382574833793,
                        "parentId": 171774904084143
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "查询工作类型",
                                    "moduleCode": "queryJobTypesEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询工作类型",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1719383943351202&moduleId=1719383991518538",
                                    "id": 1719383991518538,
                                    "requestMode": "POST"
                                },
                                "title": "查询工作类型",
                                "isLeaf": true,
                                "key": 1719383991518538,
                                "parentId": 1719383943351202
                            }
                        ],
                        "title": "工作类型",
                        "key": 1719383943351202,
                        "parentId": 171774904084143
                    }
                ],
                "title": "雇主端",
                "key": 171774904084143,
                "parentId": 0
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchJobPostingsV1",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个招聘信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717729898963611&moduleId=1717762534953001",
                                    "id": 1717762534953001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719739725899\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719739725899\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":\"104\"}}"
                                },
                                "title": "查询单个招聘信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762534953001,
                                "parentId": 1717729898963611
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editJobPostingsV1",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改招聘信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717729898963611&moduleId=1717762534955001",
                                    "id": 1717762534955001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"districtId\":{\"required\":false},\"cityId\":{\"required\":false},\"provinceId\":{\"required\":false},\"registrationMethod\":{\"required\":false},\"jobDescription\":{\"required\":false},\"publisherName\":{\"required\":false},\"publisherId\":{\"required\":false},\"publishTime\":{\"required\":false},\"visibility\":{\"required\":false},\"vacancy\":{\"required\":false},\"settlementMethod\":{\"required\":false},\"jobSalaryEndAmount\":{\"required\":false},\"jobSalaryStartAmount\":{\"required\":false},\"jobNature\":{\"required\":false},\"jobEndTime\":{\"required\":false},\"jobStartTime\":{\"required\":false},\"jobLocation\":{\"required\":false},\"jobType\":{\"required\":false},\"employerId\":{\"required\":false},\"jobStatus\":{\"required\":false},\"jobTitle\":{\"required\":false},\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"jobId\":4,\"jobStatus\":2}}"
                                },
                                "title": "修改招聘信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762534955001,
                                "parentId": 1717729898963611
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllJobPostingsV1",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表招聘信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717729898963611&moduleId=1717762534956001",
                                    "id": 1717762534956001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"districtId\":{\"required\":false},\"cityId\":{\"required\":false},\"provinceId\":{\"required\":false},\"registrationMethod\":{\"required\":false},\"jobDescription\":{\"required\":false},\"publisherName\":{\"required\":false},\"publisherId\":{\"required\":false},\"publishTime\":{\"required\":false},\"visibility\":{\"required\":false},\"vacancy\":{\"required\":false},\"settlementMethod\":{\"required\":false},\"jobSalaryEndAmount\":{\"required\":false},\"jobSalaryStartAmount\":{\"required\":false},\"jobNature\":{\"required\":false},\"jobEndTime\":{\"required\":false},\"jobStartTime\":{\"required\":false},\"jobLocation\":{\"required\":false},\"jobType\":{\"required\":false},\"employerId\":{\"required\":false},\"jobStatus\":{\"required\":false},\"jobTitle\":{\"required\":false},\"jobId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1719299428569\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1719299428569\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"8\",\"post\":{\"page\":1,\"pageSize\":20,\"regionId\":49}}"
                                },
                                "title": "查询列表招聘信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762534956001,
                                "parentId": 1717729898963611
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createJobPostingsV1",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增招聘信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717729898963611&moduleId=1717762534956002",
                                    "id": 1717762534956002,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"districtId\":{\"required\":false},\"cityId\":{\"required\":false},\"provinceId\":{\"required\":false},\"registrationMethod\":{\"required\":false},\"jobDescription\":{\"required\":false},\"publisherName\":{\"required\":false},\"publisherId\":{\"required\":false},\"publishTime\":{\"required\":false},\"visibility\":{\"required\":false},\"vacancy\":{\"required\":false},\"settlementMethod\":{\"required\":false},\"jobSalaryEndAmount\":{\"required\":false},\"jobSalaryStartAmount\":{\"required\":false},\"jobNature\":{\"required\":false},\"jobEndTime\":{\"required\":false},\"jobStartTime\":{\"required\":false},\"jobLocation\":{\"required\":false},\"jobType\":{\"required\":false},\"employerId\":{\"required\":false},\"jobStatus\":{\"required\":false},\"jobTitle\":{\"required\":false},\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"updatedBy\":1,\"createdBy\":1,\"isDeleted\":\"0\",\"districtId\":5,\"cityId\":10,\"provinceId\":20,\"registrationMethod\":\"1\",\"jobDescription\":\"负责公司软件开发，维护和升级，确保系统的稳定性和安全性。\",\"publisherName\":\"张三\",\"publisherId\":1,\"publishTime\":\"2024-06-11 10:00:00\",\"visibility\":1,\"vacancy\":3,\"settlementMethod\":2,\"jobSalaryEndAmount\":\"15000\",\"jobSalaryStartAmount\":\"10000\",\"jobNature\":4,\"jobEndTime\":\"2024-06-19 18:00:00\",\"jobStartTime\":\"2024-06-20 09:00:00\",\"jobLocation\":\"浙江省杭州市\",\"jobType\":\"软件开发\",\"jobTypeId\":3,\"employerId\":654,\"jobStatus\":0,\"jobTitle\":\"跨天工作\",\"jobAddressId\":1,\"currency\":1}}"
                                },
                                "title": "新增招聘信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762534956002,
                                "parentId": 1717729898963611
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteJobPostingsV1",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除招聘信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717729898963611&moduleId=1717762534957001",
                                    "id": 1717762534957001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":5}}"
                                },
                                "title": "删除招聘信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762534957001,
                                "parentId": 1717729898963611
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "queryRecruitmentProcess",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询招聘流程",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717729898963611&moduleId=1718790193092116",
                                    "id": 1718790193092116,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719489134957\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719489134957\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"jobId\":\"726\"}}"
                                },
                                "title": "查询招聘流程",
                                "isLeaf": true,
                                "key": 1718790193092116,
                                "parentId": 1717729898963611
                            }
                        ],
                        "title": "招聘管理",
                        "key": 1717729898963611,
                        "parentId": 1717749017837360
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchRegistrationOrders",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个报名订单（总后台）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744548131791&moduleId=1718095502609001",
                                    "id": 1718095502609001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1719306850489\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1719306850489\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":\"627\"}}"
                                },
                                "title": "查询单个报名订单（总后台）",
                                "isLeaf": true,
                                "key": 1718095502609001,
                                "parentId": 1717744548131791
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllRegistrationOrders",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表报名订单（总后台）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744548131791&moduleId=1718095502619001",
                                    "id": 1718095502619001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"orderState\":{\"required\":false},\"orderEvaluation\":{\"required\":false},\"acceptanceDescription\":{\"required\":false},\"actualPayment\":{\"required\":false},\"credentialInfo\":{\"required\":false},\"checkOutLocation\":{\"required\":false},\"checkInLocation\":{\"required\":false},\"checkOutTime\":{\"required\":false},\"checkInTime\":{\"required\":false},\"orderStatus\":{\"required\":false},\"registrationTime\":{\"required\":false},\"applicantName\":{\"required\":false},\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false},\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719563407484\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719563407484\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"3\",\"post\":{\"jobId\":\"261\",\"pageNum\":1,\"pageSize\":10}}"
                                },
                                "title": "查询列表报名订单（总后台）",
                                "isLeaf": true,
                                "key": 1718095502619001,
                                "parentId": 1717744548131791
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editRegistrationOrders",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改报名订单（总后台）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744548131791&moduleId=1718095567250001",
                                    "id": 1718095567250001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"orderState\":{\"required\":false},\"orderEvaluation\":{\"required\":false},\"acceptanceDescription\":{\"required\":false},\"actualPayment\":{\"required\":false},\"credentialInfo\":{\"required\":false},\"checkOutLocation\":{\"required\":false},\"checkInLocation\":{\"required\":false},\"checkOutTime\":{\"required\":false},\"checkInTime\":{\"required\":false},\"orderStatus\":{\"required\":false},\"registrationTime\":{\"required\":false},\"applicantName\":{\"required\":false},\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false},\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"orderId\":4,\"applicantId\":123}}"
                                },
                                "title": "修改报名订单（总后台）",
                                "isLeaf": true,
                                "key": 1718095567250001,
                                "parentId": 1717744548131791
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createRegistrationOrders",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增报名订单（总后台）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744548131791&moduleId=1718095567253001",
                                    "id": 1718095567253001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"orderState\":{\"required\":false},\"orderEvaluation\":{\"required\":false},\"acceptanceDescription\":{\"required\":false},\"actualPayment\":{\"required\":false},\"credentialInfo\":{\"required\":false},\"checkOutLocation\":{\"required\":false},\"checkInLocation\":{\"required\":false},\"checkOutTime\":{\"required\":false},\"checkInTime\":{\"required\":false},\"orderStatus\":{\"required\":false},\"registrationTime\":{\"required\":false},\"applicantName\":{\"required\":false},\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false},\"jobId\":{\"required\":false},\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"jobId\":3,\"employerId\":5,\"applicantId\":1,\"applicantName\":\"测试用户\",\"registrationTime\":\"2024-06-10T10:00:00.000+08:00\",\"orderStatus\":\"3\",\"checkInTime\":\"2024-06-15T10:16:22.000+08:00\",\"checkInLocation\":\"开始地址\",\"isDeleted\":false,\"createdBy\":\"测试用户\",\"updatedBy\":\"测试用户\"}}"
                                },
                                "title": "新增报名订单（总后台）",
                                "isLeaf": true,
                                "key": 1718095567253001,
                                "parentId": 1717744548131791
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteRegistrationOrders",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除报名订单（总后台）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744548131791&moduleId=1718095567255001",
                                    "id": 1718095567255001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":5}}"
                                },
                                "title": "删除报名订单（总后台）",
                                "isLeaf": true,
                                "key": 1718095567255001,
                                "parentId": 1717744548131791
                            }
                        ],
                        "title": "招聘订单",
                        "key": 1717744548131791,
                        "parentId": 1717749017837360
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchEmployerInfo",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个雇主信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744567889812&moduleId=1717762473370001",
                                    "id": 1717762473370001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":3}}"
                                },
                                "title": "查询单个雇主信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762473370001,
                                "parentId": 1717744567889812
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editEmployerInfo",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改雇主信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744567889812&moduleId=1717762473377001",
                                    "id": 1717762473377001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"status\":{\"required\":false},\"detailedAddress\":{\"required\":false},\"region\":{\"required\":false},\"regionId\":{\"required\":false},\"contactInfo\":{\"required\":false},\"contactPerson\":{\"required\":false},\"employerName\":{\"required\":false},\"registrationCertificate\":{\"required\":false},\"employerLogo\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1719474155415\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1719474155415\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"employerId\":45,\"employerLogo\":\"https://oss.manateeai.com/renshibao/1719280513177.jpg\",\"registrationCertificate\":\"https://oss.manateeai.com/renshibao/1719371384078.jpg\",\"employerName\":\"link雇主\",\"contactPerson\":\"测试图片\",\"contactInfo\":\"18023235869\",\"regionId\":47,\"region\":\"香港岛/九龙区\",\"detailedAddress\":\"雇主同名修改测试\",\"status\":\"0\",\"isDeleted\":false,\"createdBy\":\"1\",\"updatedBy\":\"1\",\"createdTime\":\"2024-06-26T11:20:36.000+08:00\",\"updatedTime\":\"2024-06-26T11:20:36.000+08:00\"}}"
                                },
                                "title": "修改雇主信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762473377001,
                                "parentId": 1717744567889812
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllEmployerInfo",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表雇主信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744567889812&moduleId=1717762473379001",
                                    "id": 1717762473379001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"status\":{\"required\":false},\"detailedAddress\":{\"required\":false},\"region\":{\"required\":false},\"regionId\":{\"required\":false},\"contactInfo\":{\"required\":false},\"contactPerson\":{\"required\":false},\"employerName\":{\"required\":false},\"registrationCertificate\":{\"required\":false},\"employerLogo\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"4\",\"post\":{\"employerName\":\"d\"}}"
                                },
                                "title": "查询列表雇主信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762473379001,
                                "parentId": 1717744567889812
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createEmployerInfo",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增雇主信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744567889812&moduleId=1717762473380001",
                                    "id": 1717762473380001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"status\":{\"required\":false},\"detailedAddress\":{\"required\":false},\"region\":{\"required\":false},\"regionId\":{\"required\":false},\"contactInfo\":{\"required\":false},\"contactPerson\":{\"required\":false},\"employerName\":{\"required\":false},\"registrationCertificate\":{\"required\":false},\"employerLogo\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"detailedAddress\":\"测试\",\"contactInfo\":\"18023230603\",\"contactPerson\":\"测试\",\"employerName\":\"测试22\",\"registrationCertificate\":\"https://manateeai.oss-cn-hangzhou.aliyuncs.com/renshibao/8.jpeg\",\"employerLogo\":\"https://manateeai.oss-cn-hangzhou.aliyuncs.com/renshibao/11.png\",\"regionId\":4}}"
                                },
                                "title": "新增雇主信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762473380001,
                                "parentId": 1717744567889812
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteEmployerInfo",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除雇主信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744567889812&moduleId=1717762473381001",
                                    "id": 1717762473381001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":8}}"
                                },
                                "title": "删除雇主信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762473381001,
                                "parentId": 1717744567889812
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "enableAndDisableEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "启用禁用雇主",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744567889812&moduleId=1718090902277990",
                                    "id": 1718090902277990,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"employerId\":8,\"status\":0}}"
                                },
                                "title": "启用禁用雇主",
                                "isLeaf": true,
                                "key": 1718090902277990,
                                "parentId": 1717744567889812
                            }
                        ],
                        "title": "雇主管理",
                        "key": 1717744567889812,
                        "parentId": 1717749017837360
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "bindingEmployers",
                                    "manateeUrl": "modularity",
                                    "moduleName": "绑定雇主",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718093444512211",
                                    "id": 1718093444512211,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"userId\":2,\"employerId\":1}}"
                                },
                                "title": "绑定雇主",
                                "isLeaf": true,
                                "key": 1718093444512211,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "unbindEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "解绑雇主",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718093462100893",
                                    "id": 1718093462100893,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"userId\":1}}"
                                },
                                "title": "解绑雇主",
                                "isLeaf": true,
                                "key": 1718093462100893,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "changeBoundEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "更换绑定雇主",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718093494390568",
                                    "id": 1718093494390568,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false},\"sourceEmployerId\":{\"required\":false},\"targetEmployerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1720508659157\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1720508659157\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"3\",\"post\":{\"userId\":354,\"sourceEmployerId\":88,\"targetEmployerId\":17}}"
                                },
                                "title": "更换绑定雇主",
                                "isLeaf": true,
                                "key": 1718093494390568,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "employerList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "雇主列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718162363666481",
                                    "id": 1718162363666481,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"notInIdList\":{\"required\":false},\"name\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjZlZjI1YjM2LTVkYmUtNDFiYS05MDVlLWJjNTgxNDJhZGQ4MCJ9.iMBW40BZjxbi5fXu1FVjL4KAtGig4MaSDubFHVlhi4er4swcbV-IzobMGlA15b79T0xWYgujrrWFhYN_aEJg5g\",\"key\":\"1719060382948\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjZlZjI1YjM2LTVkYmUtNDFiYS05MDVlLWJjNTgxNDJhZGQ4MCJ9.iMBW40BZjxbi5fXu1FVjL4KAtGig4MaSDubFHVlhi4er4swcbV-IzobMGlA15b79T0xWYgujrrWFhYN_aEJg5g\",\"key\":\"1719060382948\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_dzmbpa\"],\"usedKey\":\"2\",\"post\":{\"notInIdList\":[35],\"sorter\":{\"id\":\"createdTime\",\"order\":\"asc\"},\"employerId\":40}}"
                                },
                                "title": "雇主列表",
                                "isLeaf": true,
                                "key": 1718162363666481,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "accountList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "账号列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718352922424272",
                                    "id": 1718352922424272,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false},\"userSearchInfo\":{\"required\":false},\"startCreatedTime\":{\"required\":false},\"endCreatedTime\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjY1YmJlNGEyLWE3MzQtNDhjZC05N2NjLTRiNDA0NDNkNjNkYiJ9.-xmuCgKOYO55YqHVb0noOYJb9LVS-QcYVHr9rLnNCWI1MABb0Tcm2zMlGT8w9PEuf0k5IEPFoISyhHwTSGsM2g\",\"key\":\"1718945818012\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjY1YmJlNGEyLWE3MzQtNDhjZC05N2NjLTRiNDA0NDNkNjNkYiJ9.-xmuCgKOYO55YqHVb0noOYJb9LVS-QcYVHr9rLnNCWI1MABb0Tcm2zMlGT8w9PEuf0k5IEPFoISyhHwTSGsM2g\",\"key\":\"1718945818012\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"4\",\"post\":{\"page\":2,\"pageSize\":10}}"
                                },
                                "title": "账号列表",
                                "isLeaf": true,
                                "key": 1718352922424272,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "addAccount",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增账号",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718353472982335",
                                    "id": 1718353472982335,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userName\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719482939283\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719482939283\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"3\",\"post\":{\"userName\":\"bbb\",\"nickName\":\"bbb\",\"avatar\":\"\",\"employerId\":50,\"conformPassword\":\"Abc123456\",\"password\":\"Abc123456\"}}"
                                },
                                "title": "新增账号",
                                "isLeaf": true,
                                "key": 1718353472982335,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "enableAndDisableUser",
                                    "manateeUrl": "modularity",
                                    "moduleName": "启用禁用用户",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718435186382984",
                                    "id": 1718435186382984,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"employerId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"id\":173,\"status\":0}}"
                                },
                                "title": "启用禁用用户",
                                "isLeaf": true,
                                "key": 1718435186382984,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "删除用户",
                                    "moduleCode": "deleteUserByUserId",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除用户",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718435479914230",
                                    "id": 1718435479914230,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"userId\":3,\"delFlag\":2}}"
                                },
                                "title": "删除用户",
                                "isLeaf": true,
                                "key": 1718435479914230,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "查询账号详情",
                                    "moduleCode": "queryAccountById",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询账号详情",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718604448127129",
                                    "id": 1718604448127129,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":143}}"
                                },
                                "title": "查询账号详情",
                                "isLeaf": true,
                                "key": 1718604448127129,
                                "parentId": 1717744581814712
                            },
                            {
                                "module": {
                                    "moduleDescription": "查询账号是否存在，存在则返回雇主信息",
                                    "moduleCode": "queryAccountIsExist",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询账号是否存在",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744581814712&moduleId=1718604608775338",
                                    "id": 1718604608775338,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"userName\":\"dake\"}}"
                                },
                                "title": "查询账号是否存在",
                                "isLeaf": true,
                                "key": 1718604608775338,
                                "parentId": 1717744581814712
                            }
                        ],
                        "title": "账号管理",
                        "key": 1717744581814712,
                        "parentId": 1717749017837360
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchInvitationRecords",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个邀请记录(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744612146745&moduleId=1717762554107001",
                                    "id": 1717762554107001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":1}}"
                                },
                                "title": "查询单个邀请记录(总后台)",
                                "isLeaf": true,
                                "key": 1717762554107001,
                                "parentId": 1717744612146745
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editInvitationRecords",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改邀请记录(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744612146745&moduleId=1717762554114001",
                                    "id": 1717762554114001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"earnings\":{\"required\":false},\"registrationTime\":{\"required\":false},\"invitedUserPhone\":{\"required\":false},\"invitedUserName\":{\"required\":false},\"invitedUserId\":{\"required\":false},\"inviterName\":{\"required\":false},\"inviterId\":{\"required\":false},\"invitationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"inviterName\":\"修改测试成功\",\"invitationId\":1}}"
                                },
                                "title": "修改邀请记录(总后台)",
                                "isLeaf": true,
                                "key": 1717762554114001,
                                "parentId": 1717744612146745
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllInvitationRecords",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表邀请记录(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744612146745&moduleId=1717762554115001",
                                    "id": 1717762554115001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"earnings\":{\"required\":false},\"registrationTime\":{\"required\":false},\"invitedUserPhone\":{\"required\":false},\"invitedUserName\":{\"required\":false},\"invitedUserId\":{\"required\":false},\"inviterName\":{\"required\":false},\"inviterId\":{\"required\":false},\"invitationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719300256104\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719300256104\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"5\",\"post\":{\"employerId\":90,\"inviterId\":\"223\",\"page\":1,\"pageSize\":10}}"
                                },
                                "title": "查询列表邀请记录(总后台)",
                                "isLeaf": true,
                                "key": 1717762554115001,
                                "parentId": 1717744612146745
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createInvitationRecords",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增邀请记录(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744612146745&moduleId=1717762554116001",
                                    "id": 1717762554116001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"earnings\":{\"required\":false},\"registrationTime\":{\"required\":false},\"invitedUserPhone\":{\"required\":false},\"invitedUserName\":{\"required\":false},\"invitedUserId\":{\"required\":false},\"inviterName\":{\"required\":false},\"inviterId\":{\"required\":false},\"invitationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719578574126\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719578574126\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"earnings\":\"12.09\",\"registrationTime\":\"2024-06-16 12:00:00\",\"invitedUserPhone\":\"13000000001\",\"invitedUserName\":\"测试受邀用户\",\"invitedUserId\":1,\"inviterName\":\"测试\",\"inviterId\":1}}"
                                },
                                "title": "新增邀请记录(总后台)",
                                "isLeaf": true,
                                "key": 1717762554116001,
                                "parentId": 1717744612146745
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteInvitationRecords",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除邀请记录(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744612146745&moduleId=1717762554117001",
                                    "id": 1717762554117001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":4}}"
                                },
                                "title": "删除邀请记录(总后台)",
                                "isLeaf": true,
                                "key": 1717762554117001,
                                "parentId": 1717744612146745
                            }
                        ],
                        "title": "邀请",
                        "key": 1717744612146745,
                        "parentId": 1717749017837360
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchRegions",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个地区信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744621916503&moduleId=1717762584751001",
                                    "id": 1717762584751001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"regionId\":1}}"
                                },
                                "title": "查询单个地区信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762584751001,
                                "parentId": 1717744621916503
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editRegions",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改地区信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744621916503&moduleId=1717762584753001",
                                    "id": 1717762584753001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"sortOrder\":{\"required\":false},\"regionIdentifier\":{\"required\":false},\"regionName\":{\"required\":false},\"parentRegionId\":{\"required\":false},\"regionId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"regionName\":\"测试修改\",\"regionId\":29,\"parentRegionId\":2}}"
                                },
                                "title": "修改地区信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762584753001,
                                "parentId": 1717744621916503
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllRegions",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表地区信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744621916503&moduleId=1717762584754001",
                                    "id": 1717762584754001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"sortOrder\":{\"required\":false},\"regionIdentifier\":{\"required\":false},\"regionName\":{\"required\":false},\"parentRegionId\":{\"required\":false},\"regionId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"regionNameLike\":\"沙田\"}}"
                                },
                                "title": "查询列表地区信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762584754001,
                                "parentId": 1717744621916503
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createRegions",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增地区信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744621916503&moduleId=1717762584754002",
                                    "id": 1717762584754002,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"sortOrder\":{\"required\":false},\"regionIdentifier\":{\"required\":false},\"regionName\":{\"required\":false},\"parentRegionId\":{\"required\":false},\"regionId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"parentRegionId\":1,\"regionName\":\"测试\",\"regionIdentifier\":\"HK20\",\"sortOrder\":19,\"isDeleted\":false,\"createdBy\":\"系统管理员\",\"updatedBy\":\"系统管理员\"}}"
                                },
                                "title": "新增地区信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762584754002,
                                "parentId": 1717744621916503
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteRegions",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除地区信息(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744621916503&moduleId=1717762584755001",
                                    "id": 1717762584755001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"regionId\":31}}"
                                },
                                "title": "删除地区信息(总后台)",
                                "isLeaf": true,
                                "key": 1717762584755001,
                                "parentId": 1717744621916503
                            }
                        ],
                        "title": "地区",
                        "key": 1717744621916503,
                        "parentId": 1717749017837360
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchJobTypes",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个工作类型(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744635861287&moduleId=1718096426392001",
                                    "id": 1718096426392001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":6}}"
                                },
                                "title": "查询单个工作类型(总后台)",
                                "isLeaf": true,
                                "key": 1718096426392001,
                                "parentId": 1717744635861287
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editJobTypes",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改工作类型(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744635861287&moduleId=1718096426402001",
                                    "id": 1718096426402001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"status\":{\"required\":false},\"jobTypeName\":{\"required\":false},\"jobTypeId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjZmYmY2OGRmLTdkZDAtNDM2NC04Y2Y0LWQ2MGIyZjhkYTJjNyJ9.kEXd5Z9UIMlEMN1TbcegdbZMrlxt0nVD0tNawPpVDmjWS3YGVg5rffoMM41X7bVuNSY1x-WA8jx-2gyqAMLpkw\",\"key\":\"1718951010794\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjZmYmY2OGRmLTdkZDAtNDM2NC04Y2Y0LWQ2MGIyZjhkYTJjNyJ9.kEXd5Z9UIMlEMN1TbcegdbZMrlxt0nVD0tNawPpVDmjWS3YGVg5rffoMM41X7bVuNSY1x-WA8jx-2gyqAMLpkw\",\"key\":\"1718951010794\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"3\",\"post\":{\"updatedTime\":1718947632000,\"isDeleted\":false,\"jobTypeName\":\"冒烟一/1\",\"createdTime\":1718947632000,\"jobTypeId\":24,\"parentId\":23,\"status\":true,\"region\":\"冒烟一级/冒烟一/1\"}}"
                                },
                                "title": "修改工作类型(总后台)",
                                "isLeaf": true,
                                "key": 1718096426402001,
                                "parentId": 1717744635861287
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllJobTypes",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询列表工作类型(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744635861287&moduleId=1718096426405001",
                                    "id": 1718096426405001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"status\":{\"required\":false},\"jobTypeName\":{\"required\":false},\"jobTypeId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1718950589623\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1718950589623\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"3\",\"post\":{\"jobTypeName\":\"二级类型2\"}}"
                                },
                                "title": "查询列表工作类型(总后台)",
                                "isLeaf": true,
                                "key": 1718096426405001,
                                "parentId": 1717744635861287
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createJobTypes",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增工作类型(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744635861287&moduleId=1718096426406001",
                                    "id": 1718096426406001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"status\":{\"required\":false},\"jobTypeName\":{\"required\":false},\"jobTypeId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"jobTypeName\":\"测试出来\",\"status\":\"1\",\"isDeleted\":false,\"createdBy\":\"系统管理员\",\"updatedBy\":\"系统管理员\",\"parentId\":0}}"
                                },
                                "title": "新增工作类型(总后台)",
                                "isLeaf": true,
                                "key": 1718096426406001,
                                "parentId": 1717744635861287
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteJobTypes",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除工作类型(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744635861287&moduleId=1718096426407001",
                                    "id": 1718096426407001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":10}}"
                                },
                                "title": "删除工作类型(总后台)",
                                "isLeaf": true,
                                "key": 1718096426407001,
                                "parentId": 1717744635861287
                            }
                        ],
                        "title": "工作类型",
                        "key": 1717744635861287,
                        "parentId": 1717749017837360
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchRealnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询单个员工(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1717762569240001",
                                    "id": 1717762569240001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719287445812\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719287445812\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"id\":\"36\",\"userId\":\"204\"}}"
                                },
                                "title": "查询单个员工(总后台)",
                                "isLeaf": true,
                                "key": 1717762569240001,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "editRealnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改员工(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1717762569242001",
                                    "id": 1717762569242001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"reviewStatus\":{\"required\":false},\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false},\"userId\":{\"required\":false},\"authenticationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"authenticationId\":3,\"name\":\"测试修改成功\"}}"
                                },
                                "title": "修改员工(总后台)",
                                "isLeaf": true,
                                "key": 1717762569242001,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "searchAllRealnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询员工列表(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1717762569243001",
                                    "id": 1717762569243001,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"reviewStatus\":{\"required\":false},\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false},\"userId\":{\"required\":false},\"authenticationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719457474659\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719457474659\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"4\",\"post\":{\"name\":\"申智能\",\"page\":1,\"pageSize\":20}}"
                                },
                                "title": "查询员工列表(总后台)",
                                "isLeaf": true,
                                "key": 1717762569243001,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "createRealnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "新增员工(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1717762569243002",
                                    "id": 1717762569243002,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"updatedTime\":{\"required\":false},\"createdTime\":{\"required\":false},\"updatedBy\":{\"required\":false},\"createdBy\":{\"required\":false},\"isDeleted\":{\"required\":false},\"reviewStatus\":{\"required\":false},\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false},\"userId\":{\"required\":false},\"authenticationId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"userId\":8,\"idCardFront\":\"http://xxx.com\",\"idCardBack\":\"http://xxx.com\",\"name\":\"测试用户\",\"idCardNumber\":\"12345678900\",\"reviewStatus\":1,\"isDeleted\":false}}"
                                },
                                "title": "新增员工(总后台)",
                                "isLeaf": true,
                                "key": 1717762569243002,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "deleteRealnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "删除员工(总后台)",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1717762569243003",
                                    "id": 1717762569243003,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"id\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"id\":3}}"
                                },
                                "title": "删除员工(总后台)",
                                "isLeaf": true,
                                "key": 1717762569243003,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "reviewRealNameInformation",
                                    "manateeUrl": "modularity",
                                    "moduleName": "审核实名信息",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1718093583991122",
                                    "id": 1718093583991122,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"authenticationId\":{\"required\":false},\"isPass\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"authenticationId\":1,\"isPass\":true}}"
                                },
                                "title": "审核实名信息",
                                "isLeaf": true,
                                "key": 1718093583991122,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "employeeInformationSummary",
                                    "manateeUrl": "modularity",
                                    "moduleName": "员工信息汇总",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=171809361889042",
                                    "id": 171809361889042,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"applicantId\":1,\"employerId\":2}}"
                                },
                                "title": "员工信息汇总",
                                "isLeaf": true,
                                "key": 171809361889042,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "scheduleList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "日程列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1718093647711605",
                                    "id": 1718093647711605,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"applicantId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1718959864135\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNDksImxvZ2luX3VzZXJfa2V5IjoiMTQ5In0.KSxTA-uf9Zf3iMswjRsRwuY6S1gzJikdJprr0r9OxWwD9lacvnZMOKnyvdV-xA3xOQsvM4HahK__2QaGqI9oaA\",\"key\":\"1718959864135\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"userId\":\"151\"}}"
                                },
                                "title": "日程列表",
                                "isLeaf": true,
                                "key": 1718093647711605,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "启用禁用员工",
                                    "moduleCode": "enableAndDisableRealnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "启用禁用员工",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1718615460537486",
                                    "id": 1718615460537486,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"id\":8,\"status\":1}}"
                                },
                                "title": "启用禁用员工",
                                "isLeaf": true,
                                "key": 1718615460537486,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "修改用户备注",
                                    "moduleCode": "updateUserRemark",
                                    "manateeUrl": "modularity",
                                    "moduleName": "修改用户备注",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1718678368516839",
                                    "id": 1718678368516839,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false},\"remark\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"userId\":100,\"remark\":\"修改用户备注\"}}"
                                },
                                "title": "修改用户备注",
                                "isLeaf": true,
                                "key": 1718678368516839,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "报名记录接口",
                                    "moduleCode": "queryRegistrationRecords",
                                    "manateeUrl": "modularity",
                                    "moduleName": "报名记录接口",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1718697935035355",
                                    "id": 1718697935035355,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719390418735\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719390418735\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"5\",\"post\":{\"pageNum\":1,\"pageSize\":10,\"page\":1}}"
                                },
                                "title": "报名记录接口",
                                "isLeaf": true,
                                "key": 1718697935035355,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "历史评价接口",
                                    "moduleCode": "queryHistoricalEvaluation",
                                    "manateeUrl": "modularity",
                                    "moduleName": "历史评价接口",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1718700475802214",
                                    "id": 1718700475802214,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1720071917653\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1720071917653\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"3\",\"post\":{\"pageNum\":1,\"pageSize\":10,\"authenticationId\":\"79\",\"userId\":\"177\"}}"
                                },
                                "title": "历史评价接口",
                                "isLeaf": true,
                                "key": 1718700475802214,
                                "parentId": 1717749219640371
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "bindEmployerList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "所绑雇主列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749219640371&moduleId=1721726017293865",
                                    "id": 1721726017293865,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"userId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1721987104384\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1721987104384\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"userId\":223}}"
                                },
                                "title": "所绑雇主列表",
                                "isLeaf": true,
                                "key": 1721726017293865,
                                "parentId": 1717749219640371
                            }
                        ],
                        "title": "员工管理",
                        "key": 1717749219640371,
                        "parentId": 1717749017837360
                    }
                ],
                "title": "总后台",
                "key": 1717749017837360,
                "parentId": 0
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "monthlySummary",
                                    "manateeUrl": "modularity",
                                    "moduleName": "按月汇总",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171809869870956&moduleId=1718098720998489",
                                    "id": 1718098720998489,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"yearMonth\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"yearMonth\":\"2024-06\"}}"
                                },
                                "title": "按月汇总",
                                "isLeaf": true,
                                "key": 1718098720998489,
                                "parentId": 171809869870956
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "summaryByDay",
                                    "manateeUrl": "modularity",
                                    "moduleName": "按日汇总",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171809869870956&moduleId=171809873809881",
                                    "id": 171809873809881,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"yearMonthDay\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"yearMonthDay\":\"2024-06-15\"}}"
                                },
                                "title": "按日汇总",
                                "isLeaf": true,
                                "key": 171809873809881,
                                "parentId": 171809869870956
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "timeRangeSummary",
                                    "manateeUrl": "modularity",
                                    "moduleName": "按时间范围汇总",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=171809869870956&moduleId=1718884871113902",
                                    "id": 1718884871113902,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"yearMonth\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxOTYsImxvZ2luX3VzZXJfa2V5IjoiMTk2In0.XzXkL-txjkH-mZ6PtNDlFQ82WVjC0n9KxvoFas5HCVe1EMfRTgxO1x45oMlm1G506cTZrv6g_SoeFlMWDNWLEQ\",\"key\":\"1719547702480\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxOTYsImxvZ2luX3VzZXJfa2V5IjoiMTk2In0.XzXkL-txjkH-mZ6PtNDlFQ82WVjC0n9KxvoFas5HCVe1EMfRTgxO1x45oMlm1G506cTZrv6g_SoeFlMWDNWLEQ\",\"key\":\"1719547702480\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"startTime\":\"2024-06-01\",\"endTime\":\"2024-06-30\"}}"
                                },
                                "title": "按时间范围汇总",
                                "isLeaf": true,
                                "key": 1718884871113902,
                                "parentId": 171809869870956
                            }
                        ],
                        "title": "日历查看",
                        "key": 171809869870956,
                        "parentId": 1717749060024384
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "getCode",
                                    "manateeUrl": "modularity",
                                    "moduleName": "获取验证码（手机+邮箱）",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=1717744691509188",
                                    "id": 1717744691509188,
                                    "requestMode": "GET",
                                    "params": "{\"paramVerify\":{\"nickName\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"get\":[{\"KEY\":\"username\",\"VALUE\":\"1242458006@qq.com\",\"DESC\":\"\",\"TYPE\":\"String\",\"key\":\"u_yaaerp\"},{\"KEY\":\"type\",\"VALUE\":\"register\",\"DESC\":\"\",\"TYPE\":\"String\",\"key\":\"u_dppyhy\"}],\"usedGetParams\":[{\"KEY\":\"username\",\"VALUE\":\"1242458006@qq.com\",\"DESC\":\"\",\"TYPE\":\"String\",\"key\":\"u_yaaerp\"},{\"KEY\":\"type\",\"VALUE\":\"register\",\"DESC\":\"\",\"TYPE\":\"String\",\"key\":\"u_dppyhy\"}]}"
                                },
                                "title": "获取验证码（手机+邮箱）",
                                "isLeaf": true,
                                "key": 1717744691509188,
                                "parentId": 1717744647981446
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "login",
                                    "manateeUrl": "modularity",
                                    "moduleName": "登录",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=1717758231805412",
                                    "id": 1717758231805412,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"nickName\":{\"required\":false},\"verificationCode\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"username\":\"a824878747@qq.com\",\"password\":\"Rr111111\"}}"
                                },
                                "title": "登录",
                                "isLeaf": true,
                                "key": 1717758231805412,
                                "parentId": 1717744647981446
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "register",
                                    "manateeUrl": "modularity",
                                    "moduleName": "注册",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=1717758495177575",
                                    "id": 1717758495177575,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"nickName\":{\"required\":false},\"password\":{\"required\":false},\"verificationCode\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"3\",\"post\":{\"username\":\"17867818dd869@163.com\",\"password\":\"Rr111111\",\"verificationCode\":\"176905\",\"uuid\":\"f2837992-82fd-4c31-a22d-af60b7b26aa7\",\"inviterId\":\"1012\"}}"
                                },
                                "title": "注册",
                                "isLeaf": true,
                                "key": 1717758495177575,
                                "parentId": 1717744647981446
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "realnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "实名认证",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=1717758610893767",
                                    "id": 1717758610893767,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjozODUsImxvZ2luX3VzZXJfa2V5IjoiMzg1In0.J7gUuoUypePRSWPb3kIDFf-Jy3m33C9flzFnnAOxpy7U6OldKlr-dH3hCvP-3JkuhSHHsgaa2V0EDCJ9FJievQ\",\"key\":\"1719557316924\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjozODUsImxvZ2luX3VzZXJfa2V5IjoiMzg1In0.J7gUuoUypePRSWPb3kIDFf-Jy3m33C9flzFnnAOxpy7U6OldKlr-dH3hCvP-3JkuhSHHsgaa2V0EDCJ9FJievQ\",\"key\":\"1719557316924\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"idCardNumber\":\"411202199704044514\",\"name\":\"李智能\",\"idCardFront\":\"https://oss.manateeai.com/renshibao/tmp_079b55ebfc53aa85651caa793bec3d8d50a6b7f8050360bf.jpg\",\"ocrInfo\":{\"智能中国香港身份证识别状态\":\"艾科瑞特，让企业业绩长青\",\"智能中国香港身份证识别实体信息\":{\"姓名_英文\":\"LEEChiNan\",\"出生日期\":\"01-01-1968\",\"签发日期\":\"15-09-03\",\"姓名_中文_简体\":\"李智能\",\"姓名_中文_繁体\":\"李智能\",\"身份证号\":\"C668668E\",\"姓名_电码\":\"262125355174\",\"性别\":\"女\"}},\"code\":\"0a3t4jll22JVTd4TIGnl2mq9pj0t4jlf\"}}"
                                },
                                "title": "实名认证",
                                "isLeaf": true,
                                "key": 1717758610893767,
                                "parentId": 1717744647981446
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "getRealnameAuthentication",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询实名认证",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=171869926827513",
                                    "id": 171869926827513,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1718525443452\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjYwODAzZjMzLWY0ZmItNDAwZC04YTliLThjOTM1MDI2YTEzNSJ9.LKKwYMSkcZpFmStubk7JO0U60nqvDLf2z69Pvi3Xccc0jo6gpfq3s3QEJWwhFYOribMuYv7-FW_0VugZ6SIjbA\",\"key\":\"1718525443452\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "查询实名认证",
                                "isLeaf": true,
                                "key": 171869926827513,
                                "parentId": 1717744647981446
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "getUserInfo",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询用户信息",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=1718786232666707",
                                    "id": 1718786232666707,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"idCardNumber\":{\"required\":false},\"name\":{\"required\":false},\"idCardBack\":{\"required\":false},\"idCardFront\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1718525443452\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1718525443452\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "查询用户信息",
                                "isLeaf": true,
                                "key": 1718786232666707,
                                "parentId": 1717744647981446
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "isFollow",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询是否关注",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=1719219237446840",
                                    "id": 1719219237446840,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1719219983659\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1719219983659\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "查询是否关注",
                                "isLeaf": true,
                                "key": 1719219237446840,
                                "parentId": 1717744647981446
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "hkPersonOcr",
                                    "manateeUrl": "modularity",
                                    "moduleName": "香港身份证识别",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717744647981446&moduleId=172163682715457",
                                    "id": 172163682715457,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"personImgUrl\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyMDQsImxvZ2luX3VzZXJfa2V5IjoiMjA0In0.9T0a0ucOnOtnHTmN6REDiVlhmKDiZwPorfjC7dQbBuivnJOMeDC_gKFxpxFtiNHclAJHQ2V2_Yin5mmOuJsSOw\",\"key\":\"1721793462836\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoyMDQsImxvZ2luX3VzZXJfa2V5IjoiMjA0In0.9T0a0ucOnOtnHTmN6REDiVlhmKDiZwPorfjC7dQbBuivnJOMeDC_gKFxpxFtiNHclAJHQ2V2_Yin5mmOuJsSOw\",\"key\":\"1721793462836\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"personImgUrl\":\"https://hk-employee-personnel.oss-cn-hongkong.aliyuncs.com/renshibao/tmp_e37cda6c8f520ba596714461a5dbe4ad2c992b5407efa0a0.jpg\"}}"
                                },
                                "title": "香港身份证识别",
                                "isLeaf": true,
                                "key": 172163682715457,
                                "parentId": 1717744647981446
                            }
                        ],
                        "title": "基础功能",
                        "key": 1717744647981446,
                        "parentId": 1717749060024384
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "cityList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "城市列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749461976251&moduleId=1717759155277773",
                                    "id": 1717759155277773,
                                    "requestMode": "POST",
                                    "params": "{\"host\":\"http://115.238.51.133:8303/biz\"}"
                                },
                                "title": "城市列表",
                                "isLeaf": true,
                                "key": 1717759155277773,
                                "parentId": 1717749461976251
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "jobList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "工作列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749461976251&moduleId=1717759468823688",
                                    "id": 1717759468823688,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"cityId\":{\"required\":false},\"districtId\":{\"required\":false},\"availabilityStatus\":{\"required\":false},\"distanceSort\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1718537477620\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1718537477620\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"5\",\"post\":{\"availabilityStatus\":0,\"regionId\":46,\"distanceSort\":\"\",\"amountSort\":\"\",\"userLongitude\":\"\",\"userLatitude\":\"\"}}"
                                },
                                "title": "工作列表",
                                "isLeaf": true,
                                "key": 1717759468823688,
                                "parentId": 1717749461976251
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "jobDetail",
                                    "manateeUrl": "modularity",
                                    "moduleName": "工作详情",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749461976251&moduleId=1718097931218805",
                                    "id": 1718097931218805,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1719541387761\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1719541387761\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"jobId\":704,\"userLongitude\":\"\",\"userLatitude\":\"\"}}"
                                },
                                "title": "工作详情",
                                "isLeaf": true,
                                "key": 1718097931218805,
                                "parentId": 1717749461976251
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "updateRealNameInformation",
                                    "manateeUrl": "modularity",
                                    "moduleName": "更新实名信息",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749461976251&moduleId=1718098000278944",
                                    "id": 1718098000278944,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"idCardFront\":\"aaa\",\"idCardBack\":\"bbb\",\"name\":\"dd\",\"idCardNumber\":\"543534\"}}"
                                },
                                "title": "更新实名信息",
                                "isLeaf": true,
                                "key": 1718098000278944,
                                "parentId": 1717749461976251
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "getCityFromCoordinates",
                                    "manateeUrl": "modularity",
                                    "moduleName": "根据坐标获取城市信息",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749461976251&moduleId=1719214140859273",
                                    "id": 1719214140859273,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"latitude\":{\"required\":false},\"longitude\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiZDZkNGJkMjItNDc4Yy00NDU5LTkyNWItOWJkODZkMWY0YTRiIn0.fIRKqBbt38YJmoxOtsjPdkcbl-QTnJA3OCfVSRGjsP2lJQYTGaxCKVT9yPn6CPz7e81iA6tpwG_DURFMYNkWSA\",\"key\":\"1719472160432\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiZDZkNGJkMjItNDc4Yy00NDU5LTkyNWItOWJkODZkMWY0YTRiIn0.fIRKqBbt38YJmoxOtsjPdkcbl-QTnJA3OCfVSRGjsP2lJQYTGaxCKVT9yPn6CPz7e81iA6tpwG_DURFMYNkWSA\",\"key\":\"1719472160432\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"latitude\":39.9042,\"longitude\":116.4074}}"
                                },
                                "title": "根据坐标获取城市信息",
                                "isLeaf": true,
                                "key": 1719214140859273,
                                "parentId": 1717749461976251
                            }
                        ],
                        "title": "招聘大厅",
                        "key": 1717749461976251,
                        "parentId": 1717749060024384
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "acceptJob",
                                    "manateeUrl": "modularity",
                                    "moduleName": "接受工作",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718097956838645",
                                    "id": 1718097956838645,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMjU5NzJiNDgtODg1Mi00ZWE1LTg3YzItNWVmMThlMzk4OTIzIn0.iOL2p1PH1DTpb6tqbf97m47d73TYGQJD6klfVP0ImOmMSNLSXiO1208NTKhpSSVsjRDKbecdAwYTKQJAc3nfwQ\",\"key\":\"1719044089403\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMjU5NzJiNDgtODg1Mi00ZWE1LTg3YzItNWVmMThlMzk4OTIzIn0.iOL2p1PH1DTpb6tqbf97m47d73TYGQJD6klfVP0ImOmMSNLSXiO1208NTKhpSSVsjRDKbecdAwYTKQJAc3nfwQ\",\"key\":\"1719044089403\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"orderId\":76}}"
                                },
                                "title": "接受工作",
                                "isLeaf": true,
                                "key": 1718097956838645,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "registrationJob",
                                    "manateeUrl": "modularity",
                                    "moduleName": "报名工作",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718107694239405",
                                    "id": 1718107694239405,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"jobId\":{\"required\":false},\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxOTYsImxvZ2luX3VzZXJfa2V5IjoiMTk2In0.XzXkL-txjkH-mZ6PtNDlFQ82WVjC0n9KxvoFas5HCVe1EMfRTgxO1x45oMlm1G506cTZrv6g_SoeFlMWDNWLEQ\",\"key\":\"1718953982957\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxOTYsImxvZ2luX3VzZXJfa2V5IjoiMTk2In0.XzXkL-txjkH-mZ6PtNDlFQ82WVjC0n9KxvoFas5HCVe1EMfRTgxO1x45oMlm1G506cTZrv6g_SoeFlMWDNWLEQ\",\"key\":\"1718953982957\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"jobId\":306}}"
                                },
                                "title": "报名工作",
                                "isLeaf": true,
                                "key": 1718107694239405,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "rejectJob",
                                    "manateeUrl": "modularity",
                                    "moduleName": "拒绝工作",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098312909835",
                                    "id": 1718098312909835,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiZDZkNGJkMjItNDc4Yy00NDU5LTkyNWItOWJkODZkMWY0YTRiIn0.fIRKqBbt38YJmoxOtsjPdkcbl-QTnJA3OCfVSRGjsP2lJQYTGaxCKVT9yPn6CPz7e81iA6tpwG_DURFMYNkWSA\",\"key\":\"1719474809961\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiZDZkNGJkMjItNDc4Yy00NDU5LTkyNWItOWJkODZkMWY0YTRiIn0.fIRKqBbt38YJmoxOtsjPdkcbl-QTnJA3OCfVSRGjsP2lJQYTGaxCKVT9yPn6CPz7e81iA6tpwG_DURFMYNkWSA\",\"key\":\"1719474809961\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"orderId\":77}}"
                                },
                                "title": "拒绝工作",
                                "isLeaf": true,
                                "key": 1718098312909835,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "myOrderList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "我的订单列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098345232993",
                                    "id": 1718098345232993,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderStatus\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719395587520\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMTc3In0.zD0uOzrIStWVdIrLPjrXkw7opvTUKvFwbkmDbHCknK6TQ1TfeNyfBQV5_YldDUniqLzMV8N7EPfme_SVBM7BrQ\",\"key\":\"1719395587520\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"orderStatus\":5,\"userLongitude\":\"121.45015543619792\",\"userLatitude\":\"31.040219997829862\"}}"
                                },
                                "title": "我的订单列表",
                                "isLeaf": true,
                                "key": 1718098345232993,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "orderStatistics",
                                    "manateeUrl": "modularity",
                                    "moduleName": "订单统计",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098365413517",
                                    "id": 1718098365413517,
                                    "requestMode": "POST"
                                },
                                "title": "订单统计",
                                "isLeaf": true,
                                "key": 1718098365413517,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "startWorking",
                                    "manateeUrl": "modularity",
                                    "moduleName": "开始工作",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=171809839163196",
                                    "id": 171809839163196,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMjU5NzJiNDgtODg1Mi00ZWE1LTg3YzItNWVmMThlMzk4OTIzIn0.iOL2p1PH1DTpb6tqbf97m47d73TYGQJD6klfVP0ImOmMSNLSXiO1208NTKhpSSVsjRDKbecdAwYTKQJAc3nfwQ\",\"key\":\"1719402777317\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMjU5NzJiNDgtODg1Mi00ZWE1LTg3YzItNWVmMThlMzk4OTIzIn0.iOL2p1PH1DTpb6tqbf97m47d73TYGQJD6klfVP0ImOmMSNLSXiO1208NTKhpSSVsjRDKbecdAwYTKQJAc3nfwQ\",\"key\":\"1719402777317\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"2\",\"post\":{\"orderId\":76,\"userLongitude\":\"116.407400\",\"userLatitude\":\"39.904200\"}}"
                                },
                                "title": "开始工作",
                                "isLeaf": true,
                                "key": 171809839163196,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "endWork",
                                    "manateeUrl": "modularity",
                                    "moduleName": "结束工作",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098416769498",
                                    "id": 1718098416769498,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false},\"outLocation\":{\"required\":false},\"outDescription\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMjU5NzJiNDgtODg1Mi00ZWE1LTg3YzItNWVmMThlMzk4OTIzIn0.iOL2p1PH1DTpb6tqbf97m47d73TYGQJD6klfVP0ImOmMSNLSXiO1208NTKhpSSVsjRDKbecdAwYTKQJAc3nfwQ\",\"key\":\"1719402865083\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiMjU5NzJiNDgtODg1Mi00ZWE1LTg3YzItNWVmMThlMzk4OTIzIn0.iOL2p1PH1DTpb6tqbf97m47d73TYGQJD6klfVP0ImOmMSNLSXiO1208NTKhpSSVsjRDKbecdAwYTKQJAc3nfwQ\",\"key\":\"1719402865083\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"2\",\"post\":{\"orderId\":76,\"inLocation\":\"不限\",\"userLongitude\":\"116.407400\",\"userLatitude\":\"39.904200\"}}"
                                },
                                "title": "结束工作",
                                "isLeaf": true,
                                "key": 1718098416769498,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "cancelWork",
                                    "manateeUrl": "modularity",
                                    "moduleName": "取消工作",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098440939171",
                                    "id": 1718098440939171,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"orderId\":14}}"
                                },
                                "title": "取消工作",
                                "isLeaf": true,
                                "key": 1718098440939171,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "incomeSummary",
                                    "manateeUrl": "modularity",
                                    "moduleName": "收入汇总",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=171809853267678",
                                    "id": 171809853267678,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"currency\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNzcsImxvZ2luX3VzZXJfa2V5IjoiYjBkMGY3NDUtNTcwYy00Y2UxLTk2NDEtZDc1YjUzYmVkNTQ5In0.PaVZAQVENWOuZyjFD_3JdKMCGVb95dLjzAO3iwTNrEKRIZzFm-m_clpWfk5BhtvJ2EVp1FVDyHgxIwY3o6q3_w\",\"key\":\"1719469845408\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"currency\":3}}"
                                },
                                "title": "收入汇总",
                                "isLeaf": true,
                                "key": 171809853267678,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "uploadCredentials",
                                    "manateeUrl": "modularity",
                                    "moduleName": "上传凭证",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098559814903",
                                    "id": 1718098559814903,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false},\"credentialInfo\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"usedPostHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"orderId\":1,\"credentialsInfo\":[\"https://manateeai.oss-cn-hangzhou.aliyuncs.com/manatee/image/1717646235328999-followHandle-1.0.png?time=1718532276425\",\"https://manateeai.oss-cn-hangzhou.aliyuncs.com/manatee/image/1717646235328999-followHandle-1.0.png?time=1718532276425\",\"https://manateeai.oss-cn-hangzhou.aliyuncs.com/manatee/image/1717646235328999-followHandle-1.0.png?time=1718532276425\"]}}"
                                },
                                "title": "上传凭证",
                                "isLeaf": true,
                                "key": 1718098559814903,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "orderDetails",
                                    "manateeUrl": "modularity",
                                    "moduleName": "订单详情",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098634173388",
                                    "id": 1718098634173388,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"orderId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1719045261921\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1719045261921\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{\"orderId\":42}}"
                                },
                                "title": "订单详情",
                                "isLeaf": true,
                                "key": 1718098634173388,
                                "parentId": 1717749479900323
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "voucherList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "凭证列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749479900323&moduleId=1718098681474653",
                                    "id": 1718098681474653,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"orderId\":1}}"
                                },
                                "title": "凭证列表",
                                "isLeaf": true,
                                "key": 1718098681474653,
                                "parentId": 1717749479900323
                            }
                        ],
                        "title": "订单相关",
                        "key": 1717749479900323,
                        "parentId": 1717749060024384
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "invitationRecord",
                                    "manateeUrl": "modularity",
                                    "moduleName": "邀请记录",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749487851984&moduleId=1718098772093380",
                                    "id": 1718098772093380,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"pageNum\":{\"required\":false},\"pageSize\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1719646782786\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTEsImxvZ2luX3VzZXJfa2V5IjoiMTUxIn0.v4rfMMdPzrnFhKzZ9urViMRbbzYsPMXvpWHd9JL4Kl3fidcW7CbTcc-U26xU8noFDmN7oYS-L4Di6kbRPghKSw\",\"key\":\"1719646782786\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"pageNum\":1,\"pageSize\":10}}"
                                },
                                "title": "邀请记录",
                                "isLeaf": true,
                                "key": 1718098772093380,
                                "parentId": 1717749487851984
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "switchingEmployer",
                                    "manateeUrl": "modularity",
                                    "moduleName": "切换雇主",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749487851984&moduleId=1721210951615176",
                                    "id": 1721210951615176,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"employerId\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjozNTksImxvZ2luX3VzZXJfa2V5IjoiMzU5In0.-E53sxSISkX-98EFAIIjJVT5nrSVEzsZKw7FQSlZM33Tny4BNR3vZyqav95y1pTmPZo_cXW6DG4HEeXFewRDcA\",\"key\":\"1722061941337\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjozNTksImxvZ2luX3VzZXJfa2V5IjoiMzU5In0.-E53sxSISkX-98EFAIIjJVT5nrSVEzsZKw7FQSlZM33Tny4BNR3vZyqav95y1pTmPZo_cXW6DG4HEeXFewRDcA\",\"key\":\"1722061941337\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"employerId\":68}}"
                                },
                                "title": "切换雇主",
                                "isLeaf": true,
                                "key": 1721210951615176,
                                "parentId": 1717749487851984
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "querySelfInvitationPermissionCount",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询邀请权限数量",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749487851984&moduleId=1721293726512423",
                                    "id": 1721293726512423,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1721974920971\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1721974920971\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "查询邀请权限数量",
                                "isLeaf": true,
                                "key": 1721293726512423,
                                "parentId": 1717749487851984
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "queryInvitationPermissionEmployerList",
                                    "manateeUrl": "modularity",
                                    "moduleName": "查询雇主邀请权限列表",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749487851984&moduleId=1721295368841663",
                                    "id": 1721295368841663,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1721815285712\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTMsImxvZ2luX3VzZXJfa2V5IjoiMTUzIn0.UnM_kh5--ldm6PsEMk4pz0-UnaO06Li4jUxIJaZ1q8AkF2CJz_EWz0SlTyZI0ngSRgJQA9BY8rFD9QKdZx-AoQ\",\"key\":\"1721815285712\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                                },
                                "title": "查询雇主邀请权限列表",
                                "isLeaf": true,
                                "key": 1721295368841663,
                                "parentId": 1717749487851984
                            }
                        ],
                        "title": "我的",
                        "key": 1717749487851984,
                        "parentId": 1717749060024384
                    }
                ],
                "title": "自雇人士端",
                "key": 1717749060024384,
                "parentId": 0
            },
            {
                "children": [
                    {
                        "title": "操作日志",
                        "key": 171774442459661,
                        "parentId": 1717749069291825
                    },
                    {
                        "children": [
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "subscribe",
                                    "manateeUrl": "modularity",
                                    "moduleName": "关注处理",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1718530289230225&moduleId=1718530367541399",
                                    "id": 1718530367541399,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{\"openId\":{\"required\":false}},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719916340866\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjEifQ.aWZviNb3kaSxtnh9ppwazfcSnAyeGwfKKXIm2CrVHzxz0T9XuBESv1r2jpT-EKd-EzdUSaiuQEqI2oOXWLpTFA\",\"key\":\"1719916340866\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"openId\":\"oJu2G6pZzIISnB30udnRtJuo-eOu\"}}"
                                },
                                "title": "关注处理",
                                "isLeaf": true,
                                "key": 1718530367541399,
                                "parentId": 1718530289230225
                            },
                            {
                                "module": {
                                    "moduleDescription": "",
                                    "moduleCode": "unsubscribe",
                                    "manateeUrl": "modularity",
                                    "moduleName": "取关处理",
                                    "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1718530289230225&moduleId=1718530413360288",
                                    "id": 1718530413360288,
                                    "requestMode": "POST",
                                    "params": "{\"paramVerify\":{},\"host\":\"http://127.0.0.1:8303/biz\",\"headers\":[],\"usedGetHeaders\":[],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{\"openId\":\"xxx\"}}"
                                },
                                "title": "取关处理",
                                "isLeaf": true,
                                "key": 1718530413360288,
                                "parentId": 1718530289230225
                            }
                        ],
                        "title": "微信回调",
                        "key": 1718530289230225,
                        "parentId": 1717749069291825
                    },
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "module": {
                                            "moduleDescription": "",
                                            "moduleCode": "getwxacodeunlimit",
                                            "manateeUrl": "modularity",
                                            "moduleName": "生成小程序带参二维码",
                                            "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1718799089826253&moduleId=1718801327853760",
                                            "id": 1718801327853760,
                                            "requestMode": "POST",
                                            "params": "{\"paramVerify\":{\"param\":{\"required\":false},\"page\":{\"required\":false},\"envVersion\":{\"required\":false}},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjozNTksImxvZ2luX3VzZXJfa2V5IjoiMzU5In0.-E53sxSISkX-98EFAIIjJVT5nrSVEzsZKw7FQSlZM33Tny4BNR3vZyqav95y1pTmPZo_cXW6DG4HEeXFewRDcA\",\"key\":\"1719548772515\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjozNTksImxvZ2luX3VzZXJfa2V5IjoiMzU5In0.-E53sxSISkX-98EFAIIjJVT5nrSVEzsZKw7FQSlZM33Tny4BNR3vZyqav95y1pTmPZo_cXW6DG4HEeXFewRDcA\",\"key\":\"1719548772515\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"2\",\"post\":{\"param\":\"inviterId=1\",\"page\":\"\",\"envVersion\":\"trial\"}}"
                                        },
                                        "title": "生成小程序带参二维码",
                                        "isLeaf": true,
                                        "key": 1718801327853760,
                                        "parentId": 1718799089826253
                                    }
                                ],
                                "title": "微信小程序",
                                "key": 1718799089826253,
                                "parentId": 1718774539935943
                            }
                        ],
                        "title": "微信公众号",
                        "key": 1718774539935943,
                        "parentId": 1717749069291825
                    },
                    {
                        "module": {
                            "moduleDescription": "",
                            "moduleCode": "upload",
                            "manateeUrl": "modularityUpload",
                            "moduleName": "上传文件/图片",
                            "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1717749069291825&moduleId=1718099106717694",
                            "id": 1718099106717694,
                            "requestMode": "POST",
                            "isUpload": true,
                            "params": "{\"paramVerify\":{\"fileSource\":{\"required\":false}},\"host\":\"http://115.238.51.133:8303/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719804232896\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxNTIsImxvZ2luX3VzZXJfa2V5IjoiMTUyIn0.H_CXWmoYnk8lxC6ra2yJ_uI77JtA2kx5-tAVoluWViHs8F1zOMQ99G23K23JbKsW_eg2DYp2Qao9GmeYql3C7w\",\"key\":\"1719804232896\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[],\"usedKey\":\"1\",\"post\":{}}"
                        },
                        "title": "上传文件/图片",
                        "isLeaf": true,
                        "key": 1718099106717694,
                        "parentId": 1717749069291825
                    }
                ],
                "title": "通用",
                "key": 1717749069291825,
                "parentId": 0
            },
            {
                "children": [
                    {
                        "module": {
                            "moduleDescription": "",
                            "moduleCode": "closeJobTask",
                            "manateeUrl": "modularity",
                            "moduleName": "关闭招聘任务",
                            "docUrl": "/#/server-interface-docs?projectId=1717646235328999&packageId=1719295542009760&moduleId=1719295614092994",
                            "id": 1719295614092994,
                            "requestMode": "POST",
                            "params": "{\"paramVerify\":{},\"host\":\"http://115.238.51.133:8305/biz\",\"headers\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjI2ZWRmYmFlLTg5YjMtNDMxZi04YzBkLWMyNDM4YWUzNjdiNiJ9.XW14ewIgbo1Gjp_LSEjbaGy1MiqY8cV8UNSBJNb-W_U_P4m_Sv7aJ4Q9TVEKlbeCQHfpJyamiNPqD-wge0GHLQ\",\"key\":\"1719470706603\",\"DESC\":\"\"}],\"usedGetHeaders\":[],\"usedPostHeaders\":[{\"KEY\":\"Authorization\",\"VALUE\":\"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl90b2tlbnM6IjoxLCJsb2dpbl91c2VyX2tleSI6IjI2ZWRmYmFlLTg5YjMtNDMxZi04YzBkLWMyNDM4YWUzNjdiNiJ9.XW14ewIgbo1Gjp_LSEjbaGy1MiqY8cV8UNSBJNb-W_U_P4m_Sv7aJ4Q9TVEKlbeCQHfpJyamiNPqD-wge0GHLQ\",\"key\":\"1719470706603\",\"DESC\":\"\"}],\"distUsedGlobalHeadersKeys\":[\"u_mfzikj\"],\"usedKey\":\"1\",\"post\":{}}"
                        },
                        "title": "关闭招聘任务",
                        "isLeaf": true,
                        "key": 1719295614092994,
                        "parentId": 1719295542009760
                    }
                ],
                "title": "定时任务",
                "key": 1719295542009760,
                "parentId": 0
            }
        ]
    },
    "subCode": "",
    "errorCode": 0,
    "status": 200
  }.data
}
