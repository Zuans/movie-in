import { API_URL, API_KEY } from '../constant'

const getGenre = async (genreId) => {
  const response = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
  const { genres } = await response.json()
  const genreIndex = genres[genres.findIndex((genre) => genre.id === genreId)]
  return genreIndex.name
}

export default getGenre