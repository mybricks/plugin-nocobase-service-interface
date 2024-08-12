import { schema2data } from "../utils"

export function mock(connector: {
  id: string
  script: string
  [key: string]: any
}) {
  return new Promise((resolve, reject) => {
    if (connector.type === "http-manatee") {
      try {
        if (connector.outputSchema) {
          // use mock data
          return resolve(schema2data(connector.outputSchema))
        } else {
          reject(`当前接口不存在返回值schema，不支持Mock`)
        }
      } catch (ex) {
        reject(`connecotr mock error.`)
      }
    } else {
      reject(`error connecotr type`)
    }
  })
}
