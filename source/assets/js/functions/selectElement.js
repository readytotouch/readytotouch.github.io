// alias for the document.querySelector(selectors); function
export const qS = document.querySelector.bind(document)

// alias for the document.querySelectorAll(selectors); function
export const qSA = arg => Array.from(document.querySelectorAll(`${arg}`))
