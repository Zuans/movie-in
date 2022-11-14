import { IMG_URL } from '../constant'

class OtherMovieCard extends HTMLElement {
  constructor() {
    super()
    this.shadowDom = this.attachShadow({ mode: 'open' })
    this.theHtml = null
    this.data = {
      movie: null,
    }
  }

  connectedCallback() {
    this.render()
  }

  render(data) {
    this.setHtml(data)
    this.shadowDom.innerHTML = this.theHtml
  }

  setHtml(data) {
    this.theHtml = `<div class='movie-list-container'>
    <div class='movie-card' data-router='/detail/${data.id}'>
      <div class='img-wrapper'>
        <p class='rating font-medium'>${OtherMovieCard.getRating(data.vote_average)}</p>
        <img src='${IMG_URL}/${data.poster_path}' alt='' class='img-movie'>
      </div>
      <p class='movie-title font-medium'>${data.title}</p>
    <p class='year'>${OtherMovieCard.getYear(data.release_date)}</p>
    </div>`
  }

  static getRating(rating) {
    const fixRating = rating.toFixed(1)

    return fixRating
  }

  static getYear(releaseDate) {
    const year = releaseDate.split('-')[0]

    return year
  }
}
customElements.define('other-movie-card', OtherMovieCard)
export default OtherMovieCard