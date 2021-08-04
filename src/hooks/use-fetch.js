import React, { useState, useEffect } from "react";
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
  } = requests;
  const dispatch = useDispatch();
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  const [upComing, setUpComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  //---- upComing  ----//
  useEffect(() => {
    axios(fetchUpComingMovies).then((res) => setUpComing(res.data.results));
  }, [fetchUpComingMovies]);
  //---- Trending  ----//
  useEffect(() => {
    axios(fetchTrending).then((res) => setTrending(res.data.results));
  }, [fetchTrending]);
  //---- popular  ----//
  useEffect(() => {
    axios(fetchPopularMovies).then((res) => setPopular(res.data.results));
  }, [fetchPopularMovies]);
  //---- latest  ----//
  useEffect(() => {
    axios(fetchLatestMovies).then((res) => setLatest(res.data.results));
  }, [fetchLatestMovies]);

  const watchClickHandler = (e) => {
    const index = e.target.attributes.getNamedItem("data-index").value;
    const movieId = e.target.attributes.getNamedItem("data-id").value;
    dispatch(indAction.getIndex(index));
    dispatch(indAction.getID(movieId));
  };
  return { upComing, popular, latest, trending, baseImgURL, watchClickHandler };
}

export default useFetch;
