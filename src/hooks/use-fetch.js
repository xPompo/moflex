import { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useDispatch, useSelector, useStore } from "react-redux";
import { indAction } from "../ReduxStore/store";
// import useRequests from "../axios/requests";

function useFetch() {
  // const { requests } = useRequests();
  const dispatch = useDispatch();
  const baseImgURL = "https://image.tmdb.org/t/p/original"; //==>img url<==//
  const API_KEY = "bc16f35e8e1e9a62fd4a90b95c9d86af"; //==>API Key<==//
  //------  get page and ID from redux store  ------//
  const page = useSelector((state) => state.pageNumber);
  const ID = useSelector((state) => state.movieID);
  //------  fetch Movies data  ------//
  const [upComing, setUpComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [related, setRelated] = useState([]);
  //------  search title list data  ------//
  const [title, setTitle] = useState([]);
  //------  page count in pagination   ------//
  const [count, setCount] = useState(1);
  //------  disable button in pagination   ------//
  const [isDisabled, setIsDisabled] = useState(false);
  //------  fetch MoviesDetails text  ------//
  const [titleMovieDetails, setTitleMovieDetails] = useState("");
  const [overview, setOverview] = useState("");
  const [date, setDate] = useState("");
  const [vote, setVote] = useState("");
  const [storeMovieImages, setStoreMovieImages] = useState([]);
  //----  video Trailer  ----//
  const [videoData, setVideoData] = useState([]);
  const [videoEnable, setVideoEnable] = useState(false);
  //------ store ID    ------//
  const [storeID, setStoreID] = useState(null);
  //------  requests data  ------//
  const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopratedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchTopratedMoviesPage2: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchTopratedTVShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchLatestMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchUpComingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US&query=a&page=${page}&include_adult=false`,
    fetchRelated: `/movie/${storeID}/similar?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetchMovieImages: `/movie/${storeID}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`,
    fetchMovieDetails: `/movie/${storeID}?api_key=${API_KEY}&language=en-US`,
    fetchTrailerMovie: `/movie/${storeID}/videos?api_key=${API_KEY}&language=en-US`,
  };
  //---- Onreload MoviesDetails data no lose  ----//
  useEffect(() => {
    const localID = localStorage.getItem("ID");
    return setStoreID(localID);
  }, []);
  //---- id useEffect Function MoviesDetails ----//
  useEffect(() => {
    if (ID !== null) {
      localStorage.setItem("ID", JSON.stringify(ID));
      return setStoreID(ID);
    }
  }, [ID]);
  //---- fetch Images MoviesDetails  ----//
  useEffect(() => {
    if (storeID !== null) {
      axios(requests.fetchMovieImages)
        .then((res) => {
          setStoreMovieImages(res.data.backdrops);
        })
        .catch((err) => console.log(err));
    }
  }, [requests.fetchMovieImages]);

  //---- fetch Details MoviesDetails ----//
  useEffect(() => {
    if (storeID !== null) {
      axios(requests.fetchMovieDetails).then((res) => {
        setTitleMovieDetails(res.data.original_title);
        setOverview(res.data.overview);
        setDate(res.data.release_date);
        setVote(res.data.vote_average);
      });
    }
  }, [requests.fetchMovieDetails]);
  //----------------------------------------------------//

  //---- Related Movies  ----//
  useEffect(() => {
    if (storeID !== null) {
      axios(requests.fetchRelated).then((res) => setRelated(res.data.results));
    }
  }, [requests.fetchRelated]);

  //---- upComing  ----//
  useEffect(() => {
    axios(requests.fetchUpComingMovies).then((res) => {
      return setUpComing(res.data.results);
    });
  }, [requests.fetchUpComingMovies]);
  //---- Trending  ----//
  useEffect(() => {
    axios(requests.fetchTrending).then((res) => {
      return setTrending(res.data.results);
    });
  }, [requests.fetchTrending]);

  //---- popular  ----//
  useEffect(() => {
    axios(requests.fetchPopularMovies).then((res) => {
      return setPopular(res.data.results);
    });
  }, [requests.fetchPopularMovies]);
  //---- latest  ----//
  useEffect(() => {
    axios(requests.fetchLatestMovies).then((res) => {
      return setLatest(res.data.results);
    });
  }, [requests.fetchLatestMovies]);

  //---- search list titles  ----//
  useEffect(() => {
    axios(requests.fetchTrending).then((res) => {
      return setTitle(
        res.data.results.map((el) => {
          return { id: el.id, titleName: el.original_title };
        })
      );
    });
  }, [requests.fetchTrending]);

  //----  onClick get My ID  ----//
  const watchClickHandler = (id) => {
    dispatch(indAction.getID(id));
    console.log(id);
  };

  //---- fetch Video trailer movie ----//
  useEffect(() => {
    if (storeID !== null) {
      axios(requests.fetchTrailerMovie).then((res) => {
        return setVideoData(res.data.results[0]);
      });
    }
  }, [requests.fetchTrailerMovie]);

  //----  onClick get Trailer Vidoe  ----//
  const playTrailerVideoHandler = () => {
    dispatch(indAction.getVideoKey(videoData.key));
    setVideoEnable(true);
  };

  //----  onClick close Trailer Vidoe  ----//
  const closeVideoHandler = () => {
    setVideoEnable(false);
  };

  //----  onClick get page Change pagaination  ----//

  const pageHandler = (prev) => {
    if (count > 1 && prev) setCount((prevState) => prevState - 1);
    else if (!prev) setCount((prevState) => prevState + 1);
    else return;
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };
  useEffect(() => {
    dispatch(indAction.getPage(count));
  }, [count]);

  return {
    upComing,
    API_KEY,
    popular,
    latest,
    trending,
    baseImgURL,
    related,
    title,
    id: title.id,
    titleName: title.titleName,
    watchClickHandler,
    pageHandler,
    isDisabled,
    count,
    storeID,
    storeMovieImages,
    titleMovieDetails,
    overview,
    date,
    vote,
    playTrailerVideoHandler,
    closeVideoHandler,
    videoData,
    videoEnable,
  };
}

export default useFetch;
