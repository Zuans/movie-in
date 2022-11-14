import mainRouter from './router/router-list'
import './page/homePage'
import './page/detailPage'
import '../style/style.css'
import './components/index'
import './utils/index'

const main = () => {
  const handleLocation = async () => {
    const path = window.location.pathname
    mainRouter.goTo(path)
  }

  const route = (event) => {
    const thisEvent = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', thisEvent.target.href)
    handleLocation()
  }

  window.onpopstate = handleLocation
  window.route = route

  handleLocation()
}

export default main