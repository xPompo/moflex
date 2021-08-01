const API_KEY = "bc16f35e8e1e9a62fd4a90b95c9d86af";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchTopratedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopratedMoviesPage2: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
  fetchTopratedTVShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchLatestMovies: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
