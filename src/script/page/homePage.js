import axios from 'axios'
import template from '../views/home'
import routerList from '../router/router-list'
import { fontAwesomeTag, API_URL, API_KEY } from '../constant'
import getGenre from '../utils/genre'

class HomePage extends HTMLElement {
  constructor() {
    super()
    this.theHtml = ''
    this.theCss = ''
    this.movie = {
      heroMovie: null,
      sideMovie: null,
    }
    this.data = {
      apiData: [
        {
          url: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
          data: null,
        },
      ],
    }
    this.component = {
      'movie-list': {
        data: null,
        tag: [],
      },
      'navbar-comp': {
        data: null,
        tag: [],
      },
      'other-movie-list': {
        data: null,
        tag: [],
      },
      'footer-comp': {
        data: null,
        tag: [],
      },
    }
  }

  async render() {
    await this.getData()
    this.setDataApi()
    await HomePage.setMovieGenre(this.movie)
    this.setupHtmlAndCss()
    await this.setupComponentData()
    await this.setupComponent()
    this.innerHTML = fontAwesomeTag
    this.innerHTML += this.theCss
    const {
      "movie-list": movieList,
      "navbar-comp": navbarComp,
      "footer-comp": footerComp,
      "other-movie-list": otherMovieList,
    } = await this.component

    const navbarSection = navbarComp.tag[0]
    const movieListSection = movieList.tag[0]
    const heroSection = this.theHtml['section-hero'](this.movie.heroMovie)
    const otherMovieListSection = otherMovieList.tag[0]
    const footerSection = footerComp.tag[0]
    this.appendChild(navbarSection)
    this.innerHTML += heroSection
    this.appendChild(movieListSection)
    this.appendChild(otherMovieListSection)
    this.appendChild(footerSection)
    routerList.initClickRoute(this)
  }

  async setupComponent() {
    Object.keys(this.component).forEach(async (name) => {
      if (Object.prototype.hasOwnProperty.bind(this.component, name)) {
        const dataTag = this.component[name].data
        const componentTags = this.component[name].tag
        if (!dataTag) {
          const tag = document.createElement(name)
          tag.render()
          componentTags.push(tag)
        } else {
          await Promise.all(dataTag.map((data) => {
            const tag = document.createElement(name)
            tag.render(data)
            componentTags.push(tag)
            return true
          }))
        }
      }
    })
  }

  setupComponentData() {
    this.component['movie-list'].data = [this.movie.sideMovie]
  }

  setupHtmlAndCss() {
    this.theCss = template.css()
    this.theHtml = template.html()
  }

  async getData() {
    const { apiData } = this.data
    const allData = await Promise.all(apiData.map(async (api) => {
      const { data } = await axios(api.url)
      return data
    }))
    const [firstData] = allData
    apiData[0].data = firstData
  }

  setDataApi() {
    const { results } = this.data.apiData[0].data
    const [heroMovie] = results
    this.movie.heroMovie = heroMovie
    this.movie.sideMovie = results.slice(1, 10)
  }

  static async setMovieGenre(movie) {
    const { heroMovie, sideMovie } = movie
    heroMovie.genre = await Promise.all(heroMovie.genre_ids.map(async (id) => getGenre(id)))
    sideMovie.genre = await Promise.all(sideMovie.map(async (movieItem, index) => {
      const movieResult = movieItem
      movieResult.tag = `#${index + 2} Top Rate`
      movieResult.genre = await Promise.all(movieItem.genre_ids.map(async (id) => {
        const genre = await getGenre(id)
        return genre
      }))
      return movieResult
    }))
  }
}

customElements.define('home-page', HomePage)
export default HomePage