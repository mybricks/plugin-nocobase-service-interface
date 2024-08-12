function cloneDeep(obj: any, cache = []) {
  if (obj === null || typeof obj !== "object") {
    return obj
  }

  const hit = cache.filter((i) => i.original === obj)[0]

  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj)
    ? []
    : obj instanceof FormData
    ? new FormData()
    : {}

  cache.push({
    original: obj,
    copy,
  })

  if (obj instanceof FormData) {
    for (const [key, value] of getIteratorValue(obj.entries())) {
      ;(copy as FormData).append(key, value)
    }
  } else {
    Object.keys(obj).forEach((key) => {
      copy[key] = cloneDeep(obj[key], cache)
    })
  }

  return copy
}
const getIteratorValue = (value) => {
  if (Object.prototype.toString.call(value).includes("Iterator")) {
    let cur = value.next()
    const curValues = !cur.done ? [cur.value] : []

    while (!cur.done) {
      cur = value.next()
      !cur.done && curValues.push(cur.value)
    }

    return curValues
  }

  return value
}

export { cloneDeep }
