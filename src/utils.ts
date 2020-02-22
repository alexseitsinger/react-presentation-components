export const isNullish = (o?: any): boolean => {
  return typeof o === "undefined" || o === null
}

export const isDefined = (o?: any): boolean => !isNullish(o)
