export function camelCaseToParamCase(camelCaseString) {
  return camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export function applyStylesFromStore(store) {
  for (const key in store.customStyles) {
    const { value, selector } = store.customStyles[key]
    document
      .querySelector(selector || ':root')
      .style.setProperty(`--${camelCaseToParamCase(key)}`, value)
  }
}
