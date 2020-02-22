export const isNullish = (o) => {
    return typeof o === "undefined" || o === null;
};
export const isDefined = (o) => !isNullish(o);
//# sourceMappingURL=utils.js.map