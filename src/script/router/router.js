import {
  getLastPath,
  sliceLastPath,
  replaceParam,
  getParams,
} from '../utils/path'

class Router {
  constructor(routerName, routerList) {
    this.routerName = routerName
    this.routerList = routerList
    this.params = []
  }

  initClickRoute(element = document) {
    const routerLinkElement = element.querySelectorAll('[data-router');
    [...routerLinkElement].map((link) => link.addEventListener('click', async () => {
      const { router } = link.dataset
      await this.goTo(router)
    }))
  }

  async goTo(url = '/') {
    this.urlSearch = url
    const selectedRoute = this.getRouterByPath(url)
    if (!selectedRoute) return false
    const { template, path } = selectedRoute
    const param = getParams(this.urlSearch, path)
    await Router.renderPage(template, param)
    window.history.pushState({}, '', this.urlSearch)
    window.scrollTo({ top: 0, behavior: "smooth" })
    return true
  }

  getRouterByPath(pathName, routerList = this.routerList) {
    if (!pathName.length) return false
    const routerIndex = routerList.findIndex((router) => {
      const urlResult = replaceParam(router.path, pathName)
      return urlResult === pathName
    })
    const selectedRoute = routerList[routerIndex]
    if (!selectedRoute) {
      const pathSlice = sliceLastPath(pathName)
      return this.getRouterByPath(pathSlice)
    }
    if (pathName !== this.urlSearch) {
      const isHasChildRoute = Object.prototype.hasOwnProperty.bind(selectedRoute, 'child')
      if (!isHasChildRoute) return false
      const childPath = getLastPath(this.urlSearch, pathName)
      const childRouteIndex = selectedRoute.child.findIndex((router) => {
        const urlResult = replaceParam(router.path, childPath)
        return urlResult === childPath
      })
      return selectedRoute.child[childRouteIndex]
    }
    return selectedRoute
  }

  static async renderPage(template, param) {
    const pageName = `${template}-page`
    const mainPage = document.createElement(pageName)
    if (param.length > 0) mainPage.params = param
    await mainPage.render()
    const divApp = document.querySelector('#app')
    divApp.innerHTML = ''
    divApp.appendChild(mainPage)
  }
}

export default Router