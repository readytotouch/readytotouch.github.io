import { minWidth, maxWidth } from './constans.js'

export default (profileButton, headerModal, profileAvatar) => {
  profileButton.addEventListener('click', () => {
    if (window.innerWidth >= minWidth) {
      headerModal.classList.toggle('active')
    }
  })

  profileAvatar.addEventListener('click', () => {
    if (window.innerWidth <= maxWidth) {
      profileAvatar.classList.toggle('is-mobile-profile-opened')
    }
  })
}
