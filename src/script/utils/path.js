const PARAM_PATTERN = /(:\w+)/i

const sliceLastPath = (pathName) => {
  const pathSplit = pathName.split('/')
  const lastPathIndex = pathName.indexOf(pathSplit[pathSplit.length - 1])
  return pathName.slice(0, lastPathIndex - 1)
}

const getLastPath = (fullPath, currentPath) => {
  const fullPathSplit = fullPath.split('/')
  const currentPathSplit = currentPath.split('/')
  const lastCurrentPath = currentPathSplit[currentPathSplit.length - 1]
  const startIndex = fullPathSplit.indexOf(lastCurrentPath)
  if (startIndex < 0) return null
  return `/${fullPathSplit.slice(startIndex + 1).join('/')}`
}

const replaceParam = (url, pathName) => {
  const pathSplit = pathName.split('/')
  return url.split('/')
    .map((path, index) => {
      if (PARAM_PATTERN.test(path)) {
        return pathSplit[index]
      }
      return path
    })
    .join('/')
}

const getParams = (currentPath, routePath) => {
  const params = []
  const routePathSplit = routePath.split('/')
  const currentPathSplit = currentPath.split('/')
  routePathSplit.map((pathName, index) => {
    if (PARAM_PATTERN.test(pathName)) {
      const param = {}
      const paramKey = pathName.slice(1)
      param[paramKey] = currentPathSplit[index]
      params.push(param)
    }
    return params
  })
  return params
}

export {
  sliceLastPath,
  getLastPath,
  replaceParam,
  getParams,
}