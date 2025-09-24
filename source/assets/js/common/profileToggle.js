import { minWidth, maxWidth } from './constans.js'

export default (profileButton, headerModal, profileAvatar) => {
  profileButton.addEventListener('click', event => {
    if (window.innerWidth >= minWidth) {
      event.stopPropagation()
      headerModal.classList.toggle('active')
    }
  })

  profileAvatar.addEventListener('click', () => {
    if (window.innerWidth <= maxWidth) {
      profileAvatar.classList.toggle('is-mobile-profile-opened')
    }
  })

  document.addEventListener('click', event => {
    if (window.innerWidth >= minWidth) {
      if (!headerModal.contains(event.target) && event.target !== profileButton) {
        headerModal.classList.remove('active')
      }
    }
  })
}
