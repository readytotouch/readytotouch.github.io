import { minWidth } from './constans.js'
import debounce from '../functions/debounce.js'

export default (mobileFilter, body, searchResultFilters, closeButton) => {
  // define functions for show/hide mobile menu
  const changeVisible = boolean => {
    const direction = boolean ? 'remove' : 'add'
    const ariaLabelText = boolean ? 'Open the filter' : 'Close the filter'
    mobileFilter.classList[direction]('is-active')
    mobileFilter.setAttribute('aria-expanded', `${!boolean}`)
    mobileFilter.setAttribute('aria-label', `${ariaLabelText}`)
    body.classList[direction]('disabled-scroll')
    searchResultFilters.classList[direction]('is-opened')
  }

  // hamburger menu action for mobile
  mobileFilter.addEventListener('click', () => changeVisible(mobileFilter.classList.contains('is-active')))
  closeButton.addEventListener('click', () => changeVisible(mobileFilter.classList.contains('is-active')))

  window.addEventListener(
    'resize',
    debounce(() => {
      if (body.classList.contains('disabled-scroll') && window.innerWidth >= minWidth) {
        changeVisible(true)
      }
    }),
  )
}
