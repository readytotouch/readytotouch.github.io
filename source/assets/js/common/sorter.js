export default (sorterToggleBtn, sorterList, sorterSelectedElement) => {
  sorterToggleBtn.addEventListener('click', () => {
    sorterList.classList.toggle('is-visible')
  })

  sorterSelectedElement.forEach((el, idx, arr) => {
    el.addEventListener('click', () => {
      arr.forEach(listEl => {
        listEl.classList.remove('is-selected')
      })
      el.classList.add('is-selected')
      // eslint-disable-next-line no-param-reassign
      sorterToggleBtn.textContent = el.textContent
      sorterList.classList.remove('is-visible')
    })
  })

  // click outside → hide block
  document.addEventListener('click', e => {
    if (!sorterList.contains(e.target) && e.target !== sorterToggleBtn) {
      sorterList.classList.remove('is-visible')
    }
  })
}
