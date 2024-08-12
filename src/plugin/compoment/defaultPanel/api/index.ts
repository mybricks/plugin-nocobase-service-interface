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
  const url = `${HOST_ORIGIN}/biz/customizeModule.do?lowcodeProjectId=0&lowcodeModule=queryProject`
  try {
    const response = await axios.post(url, params, handleConfig())
    return response.data.data
  } catch (error) {
    console.error(`Error requesting ${url}: ${error.message}`)
    throw error
  }
}

export const axiosPostInterfaceList = async (params: {
  projectId: number | string
  datasource: string
}) => {
  const url = `${HOST_ORIGIN}/biz/modularity/project0/getAllModules`
  try {
    const response = await axios.post(url, params, handleConfig())
    if (response.data.status === 200) {
      return response.data.data
    } else {
      message.error(response.data.msg)
      return { list: [] }
    }
  } catch (error) {
    console.error(`Error requesting ${url}: ${error.message}`)
    throw error
  }
}
