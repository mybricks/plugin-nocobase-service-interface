export default function isEmpty(obj: any) {
  if (!obj) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return Object.keys(obj).length === 0;
  }
  return true;
}
