const appendListener = (movieTag) => {
  const arrowSideMovie = movieTag.shadowRoot.querySelector('#movie-result')
  arrowSideMovie.addEventListener('click', () => {
    const sideMovie = movieTag.shadowRoot.querySelector('#movie-result')
    sideMovie.classList.toggle('active')
  })
}
export default appendListener