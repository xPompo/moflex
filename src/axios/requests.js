import { useSelector } from "react-redux";

const useRequests = () => {
  const API_KEY = "bc16f35e8e1e9a62fd4a90b95c9d86af";
  const page = useSelector((state) => state.pageNumber);

  const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopratedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchTopratedMoviesPage2: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchTopratedTVShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchLatestMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchUpComingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US&query=a&page=${page}&include_adult=false`,
  };

  return { requests };
};
export default useRequests;
