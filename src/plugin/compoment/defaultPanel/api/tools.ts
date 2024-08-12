export type ApiItem = {
  title: string
  isLeaf: boolean
  key: number
  module: {
    moduleName: string
    moduleCode: string
    chartUrl: string
    requestMode: string
    [K: string]: any
  }
  [K: string]: any
}

export type ApiFolder = {
  title: string
  key: number
  children: Array<ApiFolder | ApiItem>
  [K: string]: any
}

export const isApiItem = (v: unknown): v is ApiItem => {
  return v && (v as any).isLeaf
}
export const isApiFolder = (v: unknown): v is ApiFolder => {
  return v && Array.isArray((v as any).children)
}
