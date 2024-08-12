export default function findLastIndex(
  arr: Array<any>,
  validator: (item: any) => boolean
) {
  if (!Array.isArray(arr)) {
    return -1
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (validator(arr[i])) {
      return i
    }
  }

  return -1
}
