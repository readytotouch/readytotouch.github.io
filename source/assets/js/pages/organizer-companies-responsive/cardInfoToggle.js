export default buttons => {
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const buttonText = event.target.querySelector('.card__info-group-button-text')

      if (event.target.nextElementSibling.classList.contains('is-visible')) {
        event.target.nextElementSibling.classList.remove('is-visible')
        buttonText.innerText = 'Show more info'
      } else {
        event.target.nextElementSibling.classList.add('is-visible')
        buttonText.innerText = 'Hide info'
      }
    })
  })
}
