import { fontAwesomeTag } from '../constant'
import movieResultStyle from '../../style/components/movie-result-style'
import routerList from '../router/router-list'
import appendListener from '../utils/side-movie'

class MovieList extends HTMLElement {
  constructor() {
    super()
    this.shadowDom = this.attachShadow({ mode: 'open' })
    this.data = {
      movies: null,
    }
    this.component = {
      'movie-card': {
        data: null,
        tag: [],
      },
    }
  }

  async render(data) {
    this.shadowDom.innerHTML = ''
    if (!data) return
    this.data.movies = data
    this.setupComponentData()
    await this.setupComponent()
    this.shadowDom.innerHTML = fontAwesomeTag
    this.shadowDom.innerHTML += movieResultStyle
    this.shadowDom.innerHTML += `<section id='movie-result' class='' >
    <i class='fa-solid fa-chevron-left icon icon-left'></i>
                <ul class='movie-list-side font-medium'>
                </ul>
            </section>
    `
    const ulTag = this.shadowDom.querySelector('ul.movie-list-side')
    this.component['movie-card'].tag.map((tag) => ulTag.appendChild(tag))
    routerList.initClickRoute(this.shadowRoot)
    appendListener(this)
  }

  setupComponentData() {
    this.component['movie-card'].data = this.data.movies
  }

  async setupComponent() {
    Object.keys(this.component).forEach(async (name) => {
      if (Object.prototype.hasOwnProperty.call(this.component, name)) {
        const dataTag = this.component[name].data
        const componentTags = this.component[name].tag
        if (!dataTag) {
          const tag = document.createElement(name)
          tag.render()
          componentTags.push(tag)
        } else {
          await Promise.all(
            dataTag.map(async (data) => {
              const tag = document.createElement(name)
              await tag.render(data)
              componentTags.push(tag)
            }),
          )
        }
      }
    })
  }

  removeData() {
    this.data = {
      movies: null,
    }
    this.component = {
      'movie-card': {
        data: null,
        tag: [],
      },
    }
  }
}

customElements.define('movie-list', MovieList)
export default MovieList