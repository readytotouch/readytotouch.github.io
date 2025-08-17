import { minWidth } from './constans.js'
import debounce from '../functions/debounce.js'

export default (hamburger, body, mainHeaderNav, profileAvatar) => {
  // define functions for show/hide mobile menu
  const changeVisible = boolean => {
    const direction = boolean ? 'remove' : 'add'
    const ariaLabelText = boolean ? 'Open the menu' : 'Close the menu'
    hamburger.classList[direction]('is-active')
    hamburger.setAttribute('aria-expanded', `${!boolean}`)
    hamburger.setAttribute('aria-label', `${ariaLabelText}`)
    body.classList[direction]('disabled-scroll')
    mainHeaderNav.classList[direction]('is-opened')
    profileAvatar.classList.remove('is-mobile-profile-opened')
  }

  // hamburger menu action for mobile
  hamburger.addEventListener('click', () => changeVisible(hamburger.classList.contains('is-active')))

  window.addEventListener(
    'resize',
    debounce(() => {
      if (body.classList.contains('disabled-scroll') && window.innerWidth >= minWidth) {
        changeVisible(true)
      }
    }),
  )
}
