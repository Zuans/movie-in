window.addEventListener('scroll', () => {
  const navbarComp = document.querySelector('navbar-comp')
  const header = navbarComp.shadowRoot.querySelector('header')
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop < 130) {
    header.classList.remove('overflow')
  } else {
    header.classList.add('overflow')
  }
})

const searchToggle = (navbarElement) => {
  const searchIconNav = navbarElement.querySelector('nav .search-wrapper')
  const searchInput = navbarElement.querySelector('nav .search-input')
  const searchWrapper = navbarElement.querySelector('.search-wrapper')
  searchIconNav.addEventListener('click', () => {
    if (!searchWrapper.classList.contains('active')) {
      searchWrapper.classList.add('active')
      searchInput.focus()
    }
  })
  searchInput.addEventListener('focusout', () => searchWrapper.classList.remove('active'))
}

export default searchToggle