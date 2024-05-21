const API_KEY = import.meta.env.VITE_API_KEY
const baseURL = "https://api.themoviedb.org/3"

const requests = {
    reqTMBDtrending: `${baseURL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
    reqNetflixOriginals: `${baseURL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
    reqNowPlayingMovies: `${baseURL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    reqPopularMovies: `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US`,
    reqUpcomingMovies: `${baseURL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    reqTopRatedMovies: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    reqActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_Genres=28&language=en-US`,
    reqComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_Genres=35&language=en-US`,
    reqHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_Genres=27&language=en-US`,
    reqRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_Genres=10749&language=en-US`,
    reqDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_Genres=99&language=en-US`,
    reqPopularTvShows: `${baseURL}/tv/popular?api_key=${API_KEY}&language=en-US`
}



export default requests;