function isObject(value: any) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}

export { isObject };
