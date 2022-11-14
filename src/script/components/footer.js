class Footer extends HTMLElement {
  constructor() {
    super()
    this.shadowDom = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const css = `
        <style>
        footer {
            color : white;
            background-color : var(--secondary-color);
            padding : 20px 40px;
            width: 100%;
            margin-top : 60px;
        }

        footer .caption {
            margin-bottom : 10px;
        }
        </style>
    `

    const html = `
    <footer>
    <div class="container">
        <h1 class="footer-brand">MovieIn</h1>
        <h3 class="caption">Search Movie Here</h3>
        <p>Made with by <i class="fa-solid heart-icon fa-heart"></i> Juan Ewaldo</p>
    </div>
    </footer>
    `

    this.shadowDom.innerHTML = `
        ${css}
        ${html}
    `
  }
}

customElements.define('footer-comp', Footer)

export default Footer