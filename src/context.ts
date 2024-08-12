const globalData = {
  connectors: [],
  pureConnectors: {},
}

const init = (connectors: Array<Record<string, unknown>>) => {
  globalData.connectors = [...connectors]
}

const add = (connector: Record<string, unknown>) => {
  globalData.connectors.push(connector)
}

const initPureConnectors = (data) => {
  globalData.pureConnectors = data
}

const remove = (id: string) => {
  globalData.connectors = globalData.connectors.filter((con) => con.id !== id)
}

const update = (connectorInfo: Record<string, unknown>) => {
  const connector = globalData.connectors.find(
    (con) => con.id === connectorInfo.id
  )

  if (connector) {
    Object.assign(connector, connectorInfo)
  }
}

export const getConnectors = () => {
  return globalData.connectors
}
export const getPureConnectors = () => {
  return globalData.pureConnectors as {
    connectors: any[]
    config: Record<string, string>
  }
}

const GlobalContext = {
  init,
  initPureConnectors,
  add,
  remove,
  update,
  getConnectors,
  getPureConnectors,
}
export default GlobalContext
