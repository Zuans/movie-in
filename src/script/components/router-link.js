import router from '../router/router'

class RouterLink extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  render(html) {
    this.shadowRoot.innerHTML = html
    const linkRoute = this.shadowRoot.dataset.route
    const fullLink = `${window.location}${linkRoute}`
    this.onclick = router.goTo(fullLink)
  }
}
customElements.define('router-link', RouterLink)
export default RouterLink