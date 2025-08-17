import { qS } from '../functions/selectElement.js'
import hamburgerToggle from '../common/hamburgerToggle.js'
import profileToggle from '../common/profileToggle.js'

const hamburger = qS('.js-hamburger')
const body = qS('body')
const mainHeaderNav = qS('.js-header-nav')
const headerProfileButton = qS('.js-header-profile-button')
const modalProfile = qS('.js-modal-profile')
const profileAvatar = qS('.js-header-profile-avatar')

document.addEventListener('DOMContentLoaded', () => {
  // call hamburger menu show/hide module
  if (hamburger !== null) {
    hamburgerToggle(hamburger, body, mainHeaderNav, profileAvatar)
  }
  if (modalProfile !== null || profileAvatar !== null) {
    profileToggle(headerProfileButton, modalProfile, profileAvatar)
  }
})
