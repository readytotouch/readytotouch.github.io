import { qSA } from '../functions/selectElement.js'

function initSorter(sorter) {
  const toggleBtn = sorter.querySelector('.js-sorter-toggle')
  const sorterList = sorter.querySelector('.js-sorter-list')
  const sorterItems = sorter.querySelectorAll('.js-sorter-item')
  const titleText = sorter.querySelector('.js-sorter-title-text')

  // Toggle sorter list on button click
  toggleBtn.addEventListener('click', () => {
    sorterList.classList.toggle('is-visible')
  })

  // Handle selecting an item
  sorterItems.forEach(el => {
    el.addEventListener('click', () => {
      sorterItems.forEach(listEl => listEl.classList.remove('is-selected'))

      el.classList.add('is-selected')
      titleText.textContent = el.textContent
      sorterList.classList.remove('is-visible')
    })
  })

  // Hide when clicking outside
  document.addEventListener('click', e => {
    if (!sorter.contains(e.target)) {
      sorterList.classList.remove('is-visible')
    }
  })
}

// Initialize all sorters on the page
export default function initAllSorters() {
  qSA('.js-sorter').forEach(initSorter)
}
