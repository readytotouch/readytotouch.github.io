import favorite from '../common/favorite'

favorite()

const showListButton = document.querySelector('#show_list')
const showEmptySearchButton = document.querySelector('#show_empty_search')
const showEmptyCompaniesListButton = document.querySelector('#show_empty_companies')

function listener($element, callback) {
  $element?.addEventListener('click', event => callback(event))
}

function showBlock(selectors) {
  selectors.forEach(selector => {
    document.getElementById(selector).classList.remove('d-none')
  })
}

function hideBlock(selectors) {
  selectors.forEach(selector => {
    document.getElementById(selector).classList.add('d-none')
  })
}

listener(showListButton, () => {
  hideBlock(['search_result_empty_block'])
  showBlock(['search_result_list', 'search_result_filter_used'])
})

listener(showEmptyCompaniesListButton, () => {
  hideBlock(['search_result_list', 'search_result_filter_used', 'search_result_no_result'])
  showBlock(['search_result_empty_block', 'search_result_no_companies'])
})

listener(showEmptySearchButton, () => {
  hideBlock(['search_result_list', 'search_result_no_companies'])
  showBlock(['search_result_empty_block', 'search_result_no_result', 'search_result_filter_used'])
})
