// @ts-nocheck
function _basePath(path) {
  if (Array.isArray(path)) return path
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
}

export default function set(object, path, value) {
  if (typeof object !== 'object') return object;
  _basePath(path).reduce((o, k, i, _) => {
      if (i === _.length - 1) {
          o[k] = value
          return null
      } else if (k in o) {
          return o[k]
      } else { 
          o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {}
          return o[k]
      }
  }, object)
  return object;
}