const debounce = (func, delay) => {
  let debounceTimer
  return function (...args) {
    const context = this
    const thisArguments = args
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => func.apply(context, thisArguments), delay)
  }
}

export default debounce