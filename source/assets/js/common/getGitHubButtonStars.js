import { qSA } from '../functions/selectElement.js'
import formatStars from '../functions/formatStars.js'

export default async () => {
  const githubCount = qSA('.js-github-count')

  try {
    // Fetch repo data from GitHub API
    const res = await fetch('https://api.github.com/repos/readytotouch/readytotouch.github.io')
    const data = await res.json()

    const starsCount = data.stargazers_count || 0

    githubCount.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.innerText = formatStars(starsCount)
      item.setAttribute('aria-label', `${starsCount} stargazers on GitHub`)
      item.classList.remove('gh-count--is-hidden')
      item.removeAttribute('aria-hidden')
    })
  } catch (err) {
    console.error('Failed to fetch stars count:', err)
    githubCount.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.innerText = '0'
      item.setAttribute('aria-label', '0 stargazers on GitHub')
    })
  }
}
