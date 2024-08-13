export const PLUGIN_CONNECTOR_NAME = "@mybricks/nocobase-service-interface"

export const exampleParamsFunc = `export default function ({ params, data, headers, url, method }) {
  // 设置请求query、请求体、请求头
  const token = localStorage.getItem("NOCOBASE_TOKEN")
  if (token) {
    if (headers) {
      headers.Authorization = \`Bearer \${token}\`;
    } else {
      headers = {
        Authorization: \`Bearer \${token}\`,
      }
    }
  }
  return { params, data, headers, url, method };
 }
`

export const exampleResultFunc = `export default function (result, { method, url, params, data, headers }) {
  // return {
  //  total: result.all,
  //  dataSource: result.list.map({id, name} => ({
  //     value:id, label: name
  //  }))
  // }
  return result;
}
`

export const exampleSQLParamsFunc = `export default function ({ params, data, headers, url, method }) {
  const domainInfo = {
    serviceId: '__serviceId__',
    fileId: '__fileId__'
  }
  // 设置请求query、请求体、请求头
  return { params, data: {
    params: {
      ...data
    },
    ...domainInfo,
  }, headers, url, method };
 }
`

/** 领域服务的模板 */
export const exampleSelectOpenSQLParamsFunc = `export default function ({ params, data, headers, url, method }) {
  const domainInfo = {
    serviceId: '__serviceId__',
    fileId: '__fileId__'
  }
  const fields = (Array.isArray(data.fields) && data.fields.length ? data.fields : null) || __fields__;
  const query = data.keyword ? fields.reduce((pre, item) => {
    return { ...pre, [item.name]: { operator: 'LIKE', value: data.keyword } };
  }, {}) : undefined;
  
  // 设置请求query、请求体、请求头
  return { params, data: {
    params: {
			...data,
      query,
			fields,
			action: '__action__'
    },
    ...domainInfo,
  }, headers, url, method };
 }
`

/** 领域服务的模板 */
export const exampleOpenSQLParamsFunc = `export default function ({ params, data, headers, url, method }) {
  const domainInfo = {
    serviceId: '__serviceId__',
    fileId: '__fileId__'
  }
  
  // 设置请求query、请求体、请求头
  return { params, data: {
    params: {
      query: data,
			action: '__action__'
    },
    ...domainInfo,
  }, headers, url, method };
 }
`

export const templateResultFunc = `export default function ({ response, config }) {
  // if (response.code !== 0) {
  //    throw new Error(response.errMsg)
  // }
  return response
}
`

export const SERVICE_TYPE = {
  HTTP: "http-manatee",
  TG: "http-tg",
  KDEV: "http-kdev",
}

export const GLOBAL_PANEL = "global-setting"

export const DEFAULT_SCHEMA = {
  type: "object",
  required: [],
  properties: {
    code: {
      type: "number",
    },
    message: {
      type: "string",
    },
    data: {
      type: "object",
      properties: {
        list: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: {
                type: "string",
              },
              value: {
                type: "number",
              },
            },
          },
        },
      },
    },
  },
}
export const NO_PANEL_VISIBLE = 0
export const DEFAULT_PANEL_VISIBLE = 0b01
export const TG_PANEL_VISIBLE = 0b10
export const KDEV_PANEL_VISIBLE = 0b100
export const SQL_PANEL_VISIBLE = 0b1000
export const DOMAIN_PANEL_VISIBLE = 0b10000
export const AGGREGATION_MODEL_VISIBLE = 0b100000

export let CDN = {
  prettier: {
    standalone: "/mfs/editor_assets/prettier/2.6.2/standalone.js",
    babel: "/mfs/editor_assets/prettier/2.6.2/parser-babel.js",
  },
  eslint: "/mfs/editor_assets/eslint/8.15.0/eslint.js",
  paths: {
    vs: "/mfs/editor_assets/monaco-editor/0.33.0/min/vs",
  },
  monacoLoader: "/mfs/editor_assets/monaco-editor/0.33.0/min/vs/loader.min.js",
}

export const resetCDN = () => {
  CDN = undefined
}
