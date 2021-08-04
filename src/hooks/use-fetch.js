import { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useDispatch } from "react-redux";
import { indAction } from "../ReduxStore/store";
import requests from "../axios/requests";

function useFetch() {
  const {
    fetchUpComingMovies,
    fetchTrending,
    fetchPopularMovies,
    fetchLatestMovies,
    fetchSearch,
  } = requests;
  const dispatch = useDispatch();
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  const API_KEY = "bc16f35e8e1e9a62fd4a90b95c9d86af";
  const [upComing, setUpComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [search, setSearch] = useState([]);

  //---- upComing  ----//
  useEffect(() => {
    axios(fetchUpComingMovies).then((res) => {
      return setUpComing(res.data.results);
    });
  }, [fetchUpComingMovies]);
  //---- Trending  ----//
  useEffect(() => {
    axios(fetchTrending).then((res) => {
      return setTrending(res.data.results);
    });
  }, [fetchTrending]);

  //---- popular  ----//
  useEffect(() => {
    axios(fetchPopularMovies).then((res) => {
      return setPopular(res.data.results);
    });
  }, [fetchPopularMovies]);
  //---- latest  ----//
  useEffect(() => {
    axios(fetchLatestMovies).then((res) => {
      return setLatest(res.data.results);
    });
  }, [fetchLatestMovies]);

  //---- search  ----//
  useEffect(() => {
    axios(fetchSearch).then((res) => {
      return setSearch(res.data.results);
    });
  }, [fetchSearch]);

  const watchClickHandler = (id) => {
    dispatch(indAction.getID(id));
    console.log(id);
  };

  return {
    upComing,
    API_KEY,
    popular,
    latest,
    trending,
    baseImgURL,
    search,
    watchClickHandler,
  };
}

export default useFetch;
