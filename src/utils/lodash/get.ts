export default function get(data: any, originKeys: any, defaultValue?: any) {
  if (!originKeys || !data) return data;
  const keys = Array.isArray(originKeys) ? [...originKeys] : originKeys.split('.');
  const len = keys.length;

  function dfs(res, index) {
    if (index === len) return res;
    const key = keys[index];
    if (Array.isArray(res)) {
      res = res.map(item => ({ [key]: dfs(item[key], index + 1) }))
    } else {
      res = res[key];
    }
    if (res === null || res === void 0) return defaultValue;
    return dfs(res, index + 1)
  }

  return dfs(data, 0);
}
