import { qS, qSA } from '../functions/selectElement.js'
import sorter from '../common/sorter.js'
import filterMobileToggle from '../common/filterMobileToggle.js'
import cardInfoToggle from '../pages/organizer-companies-responsive/cardInfoToggle.js'

const body = qS('body')
const sorterElements = qSA('.js-sorter')
const mobileFilter = qS('.js-mobile-filter')
const searchResultFilters = qS('.js-search-result-filters')
const closeFilterButton = qS('.js-filter-headline-reset-mobile')
const cardInfoToggleButtons = qSA('.js-card-info-group-button')

document.addEventListener('DOMContentLoaded', () => {
  if (sorterElements.length) {
    sorter()
  }
  if (mobileFilter !== null) {
    filterMobileToggle(mobileFilter, body, searchResultFilters, closeFilterButton)
  }
  if (cardInfoToggleButtons.length) {
    cardInfoToggle(cardInfoToggleButtons)
  }
})
