import { API_KEY, API_URL, fontAwesomeTag } from '../constant'
import searchToggle from '../utils/nav'
import navbarCss from '../../style/components/navbar'
import getGenre from '../utils/genre'
import debounce from '../utils/debounce'

class Navbar extends HTMLElement {
  constructor() {
    super()
    this.shadowDom = this.attachShadow({ mode: 'open' })
    this.component = {
      'movie-list': {
        data: null,
        tag: null,
      },
    }
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const html = `
    <header >
    <nav class='container'>
        <h2 class='nav-page'>Home</h2>
        <h1 class='navbrand'>MovieIn</h1>
        <div class='search-wrapper'>
            <i class='fa-solid fa-magnifying-glass search-icon'></i>
            <input type='text' name='search' placeholder='Search Movie' class='search-input' id='search-input-nav'>
        </div>
    </nav>
    </header>
    `
    this.shadowDom.innerHTML = `
        ${fontAwesomeTag}
        ${navbarCss}
        ${html}
    `
    searchToggle(this.shadowDom)
    this.appendSearchListener()
  }

  appendSearchListener() {
    const searchInput = this.shadowDom.querySelector('.search-input')
    searchInput.addEventListener('input', async () => {
      debounce(await Navbar.searchMovieApi(searchInput.value), 1000)
    })
  }

  static async searchMovieApi(movieName) {
    if (!movieName) return
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
    const response = await fetch(url)
    const { results } = await response.json()
    const moviesData = results.slice(0, 10)
    await Navbar.setToMovieList(moviesData)
  }

  static async setToMovieList(data) {
    let result = data
    const sideMovieTag = document.querySelector('movie-list')
    result = await Promise.all(data.map(async (d) => {
      const movie = d
      movie.genre = await Promise.all(d.genre_ids.map(async (idGenre) => {
        const genre = await getGenre(idGenre)
        return genre
      }))
      return movie
    }))
    sideMovieTag.removeData()
    await sideMovieTag.render(result)
    const movieList = await sideMovieTag.shadowRoot.querySelector('#movie-result')
    movieList.classList.add('active')
  }
}

customElements.define('navbar-comp', Navbar)
export default Navbar