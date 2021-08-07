import { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useDispatch } from "react-redux";
import { indAction } from "../ReduxStore/store";
import useRequests from "../axios/requests";

function useFetch(prev) {
  const { requests } = useRequests();
  const dispatch = useDispatch();
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  const API_KEY = "bc16f35e8e1e9a62fd4a90b95c9d86af";
  const [upComing, setUpComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [title, setTitle] = useState([]);
  const [count, setCount] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

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

  //---- titles  ----//
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

  //----  pageHandler pagaination  ----//

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

    title,
    id: title.id,
    titleName: title.titleName,
    watchClickHandler,
    pageHandler,
    isDisabled,
    count,
  };
}

export default useFetch;
