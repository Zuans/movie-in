import axios from 'axios'
import movieListStyle from '../../style/components/movie-list-style'
import { API_KEY, API_URL } from '../constant'
import routerList from '../router/router-list'

class OtherMovieList extends HTMLElement {
  constructor() {
    super()
    this.shadowDom = this.attachShadow({ mode: 'open' })
    this.theHtml = null
    this.apiUrl = {
      trending: `${API_URL}/trending/movie/week?api_key=${API_KEY}`,
      recomend: null,
    }
    this.data = {
      trending: null,
      recomend: null,
    }
    this.component = {
      'other-movie-card': {
        recomend: {
          data: null,
          tag: [],
        },
        trending: {
          data: null,
          tag: [],
        },
      },
    }
  }

  connectedCallback() {
    this.render()
  }

  async render() {
    await this.setMovieApi()
    const { 'other-movie-card': otherMovieCard } = this.component
    Object.keys(otherMovieCard).forEach((type) => {
      if (Object.prototype.hasOwnProperty.bind(otherMovieCard, type)) {
        this.component['other-movie-card'][type].tag = OtherMovieList.setupComponent('other-movie-card', this.data[type])
      }
    })
    this.setHtml()
    this.shadowDom.innerHTML = `
      ${movieListStyle}
      ${this.theHtml}
    `
    routerList.initClickRoute(this.shadowRoot)
  }

  setHtml() {
    this.theHtml = `<section id='movies-list' class='container'>
          <div id='trending-week' class='movie-list'>
              <h1 class='title-section'>Trending of the Week</h1>
              <div class='movie-list-container'>
                      ${this.component['other-movie-card'].trending.tag.map((trending) => trending.shadowRoot.innerHTML).join('\n')}
              </div>
          </div>
      </section>
      <section id='movies-list' class='container'>
          <div id='other-recomend' class='movie-list'>
              <h1 class='title-section'>Other Recomend Movies</h1>
              <div class='movie-list-container'>
              ${this.component['other-movie-card'].recomend.tag.map((recomend) => recomend.shadowRoot.innerHTML).join('\n')}
              </div>
          </div>
          </section>`
  }

  async setMovieApi() {
    const trendingResponse = await axios(this.apiUrl.trending)
    const { results: trendingResults } = trendingResponse.data
    const randomIndex = Math.round(Math.random() * 3)
    const { id } = trendingResults[randomIndex]
    this.apiUrl.recomend = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    const responseRecomend = await axios(this.apiUrl.recomend)
    const { results: recomendResult } = responseRecomend.data
    this.data.trending = trendingResults.slice(0, 5)
    this.data.recomend = recomendResult.slice(0, 5)
  }

  static setupComponent(nameComponent, data) {
    if (!data) {
      const tag = document.createElement(nameComponent)
      tag.render()
      return tag
    }
    const tags = data.map((d) => {
      const tag = document.createElement(nameComponent)
      tag.render(d)
      return tag
    })
    return tags
  }
}

customElements.define('other-movie-list', OtherMovieList)
export default OtherMovieList