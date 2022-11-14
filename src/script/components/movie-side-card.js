import { IMG_URL } from '../constant'

class MovieCard extends HTMLElement {
  constructor() {
    super()
    this.html = null
  }

  async render(data) {
    if (!data) return
    this.innerHTML = this.setHtml(data)
  }

  setHtml(data) {
    this.html = `<li class='movie-list-item ' data-router='/detail/${data.id}'>
      <img src=' ${IMG_URL}/${data.poster_path}' alt='movie-img' class='movie-img'>
      <div class='movie-info'> ${data.tag ? `<p class="movie-popular">${data.tag}</p>` : `<p class="movie-popular"></p>`}
          <p class='movie-title'>${data.title}</p>
          <div class='rating-and-duration flex'>
                  <p class='rating'><i class='fa-solid fa-dstar icon-star'> </i>${data.vote_average}</p>
                  <p class='popularity'><i class='fa-solid fa-user icon-user'></i>${data.popularity}</p>
              </div>
              <div class='genre-list flex'>${data.genre.map((genre) => `<p class='genre'>${genre}</p>`).join('\n')}
              </div>
          </div>
      </li>
      `
    return this.html
  }
}

customElements.define('movie-card', MovieCard)
export default MovieCard