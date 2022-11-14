import axios from 'axios'
import template from '../views/detail'
import routerList from '../router/router-list'
import { API_KEY, API_URL, fontAwesomeTag } from '../constant'
import getGenre from '../utils/genre'

class DetailPage extends HTMLElement {
  constructor() {
    super()
    this.theHtml = ''
    this.theCss = ''
    this.params = []
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
    await DetailPage.setMovieGenre(this.movie)
    this.setupHtmlAndCss()
    this.setupComponentData()
    await this.setupComponent()
    this.innerHTML = fontAwesomeTag
    this.innerHTML += this.theCss
    const {
      "navbar-comp": navbarComp,
      "movie-list": movieList,
      "other-movie-list": otherMovieList,
      "footer-comp": footerComp,
    } = this.component
    this.appendChild(navbarComp.tag[0])
    this.innerHTML += this.theHtml['section-hero'](this.movie.heroMovie)
    this.appendChild(movieList.tag[0])
    this.appendChild(otherMovieList.tag[0])
    this.appendChild(footerComp.tag[0])
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
    Object.values(this.data.apiData).forEach(async (apiData, index) => {
      const response = await axios(apiData.url)
      const { data } = response
      this.data.apiData[index].data = data
    })
    const idMovie = this.params[0].id
    const url = `${API_URL}/movie/${idMovie}?api_key=${API_KEY}&language=en-US`
    const heroResponse = await axios(url)
    const heroResult = heroResponse.data
    this.movie.heroMovie = heroResult
  }

  setDataApi() {
    this.movie.sideMovie = this.data.apiData[0].data.results.slice(1, 10)
  }

  static async setMovieGenre(movie) {
    const { heroMovie, sideMovie } = movie
    heroMovie.genre = heroMovie.genres.map((genre) => genre.name)
    await Promise.all(sideMovie.map(async (movieItem, index) => {
      const movieTemp = movieItem
      movieTemp.tag = `#${index + 2} Top Rate`
      movieTemp.genre = await Promise.all(movieItem.genre_ids.map(async (id) => {
        const genre = await getGenre(id)
        return genre
      }))
      return movieTemp
    }))
  }
}
customElements.define('detail-page', DetailPage)
export default DetailPage