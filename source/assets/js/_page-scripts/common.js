import { qS } from '../functions/selectElement.js'
import hamburgerToggle from '../common/hamburgerToggle.js'

const hamburger = qS('.js-hamburger')
const body = qS('body')
const mainHeaderNav = qS('.js-header-nav')

document.addEventListener('DOMContentLoaded', () => {
  // call hamburger menu show/hide module
  if (hamburger !== null) {
    hamburgerToggle(hamburger, body, mainHeaderNav)
  }
})
