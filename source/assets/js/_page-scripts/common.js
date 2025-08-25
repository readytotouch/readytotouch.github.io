import { qS, qSA } from '../functions/selectElement.js'
import hamburgerToggle from '../common/hamburgerToggle.js'
import profileToggle from '../common/profileToggle.js'
import getGitHubButtonStars from '../common/getGitHubButtonStars.js'
import sorter from '../common/sorter.js'

const hamburger = qS('.js-hamburger')
const body = qS('body')
const mainHeaderNav = qS('.js-header-nav')
const headerProfileButton = qS('.js-header-profile-button')
const modalProfile = qS('.js-modal-profile')
const profileAvatar = qS('.js-header-profile-avatar')
const githubButtons = qSA('.js-github-button')
const sorterToggleBtn = qS('.js-sorter-title')
const sorterList = qS('.js-sorter-list')
const sorterSelectedElement = qSA('.js-sorter-item')

document.addEventListener('DOMContentLoaded', () => {
  // call hamburger menu show/hide module
  if (hamburger !== null) {
    hamburgerToggle(hamburger, body, mainHeaderNav, profileAvatar)
  }
  if (modalProfile !== null || profileAvatar !== null) {
    profileToggle(headerProfileButton, modalProfile, profileAvatar)
  }
  if (githubButtons.length) {
    getGitHubButtonStars()
  }
  if (sorterToggleBtn !== null) {
    sorter(sorterToggleBtn, sorterList, sorterSelectedElement)
  }
})
