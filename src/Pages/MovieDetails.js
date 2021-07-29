import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import axios from "../axios/axios";
import Header from "../Components/Home/Header";

function MovieDetails({ fethchTrendingMovies }) {
  const API_KEY = "bc16f35e8e1e9a62fd4a90b95c9d86af";
  const baseImgURL = "https://image.tmdb.org/t/p/original";

  const [storeMovieData, setStoreMovieData] = useState([]);
  const [storeMovieImages, setStoreMovieImages] = useState([]);
  const [storeIndex, setStoreIndex] = useState(null);
  const [storeID, setStoreID] = useState(null);
  //---- id & index useEffect Function ----//
  const movieDataIndex = useSelector((state) => state.indexRed.index);
  const ID = useSelector((state) => state.indexRed.movieID);
  useEffect(() => {
    if (movieDataIndex !== null) {
      setStoreIndex(movieDataIndex);
      console.log(storeIndex + "  im INDEX");
      localStorage.setItem("index", JSON.stringify(storeIndex));
    }
    if (ID !== null) {
      setStoreID(ID);
      console.log(storeID + "  im ID");
      localStorage.setItem("ID", JSON.stringify(storeID));
    }
  });

  // fetchMovieDetails: `/movie/${ID}?api_key=${API_KEY}&language=en-US`,

  //---- fetch date images based on id  ----//
  const fetchMovieImages = `/movie/335984/images?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(fetchMovieImages);
      console.log(res + "  Hello Im fetching Images Data");
      return setStoreMovieImages(res.data.results);
    };
    fetchData();
  }, [fetchMovieImages]);
  //---- fetch All data Movies  ----//
  useEffect(() => {
    const fetchData = async () => {
      const respond = await axios(fethchTrendingMovies);
      console.log(respond.data.results);
      return setStoreMovieData(respond.data.results);
    };
    fetchData();
  }, [fethchTrendingMovies]);

  useEffect(() => {
    const localIndex = localStorage.getItem("index");
    const localID = localStorage.getItem("ID");
    setStoreIndex(JSON.parse(localIndex));
    setStoreID(JSON.parse(localID));
  }, []);
  return (
    <>
      <Header />
      <div className="movieDetails__bg">
        <div className="container">
          <Link to="/home" className="movieDetails__back">
            <button className="btn__main_0">
              <RiIcons.RiArrowLeftSLine />
            </button>
          </Link>
          <div className="row mb-4">
            <div className="col-md-8 col-12">
              <img
                className="movieDetails__poster"
                // src={`${baseImgURL}${storeMovieImages?.file_path}`}
                alt={
                  storeMovieData[storeIndex]?.original_title ||
                  storeMovieData[storeIndex]?.title ||
                  storeMovieData[storeIndex]?.name
                }
              />
            </div>
            <div className="col-md-4 col-12 movieDetails__wrapper">
              <h1 className="movieDetails__tittle">
                {storeMovieData[storeIndex]?.original_title ||
                  storeMovieData[storeIndex]?.title ||
                  storeMovieData[storeIndex]?.name}
              </h1>
              <p className="movieDetails__subtittle">
                {storeMovieData[storeIndex]?.overview}
              </p>
              <div className="row movieDetails__data__rate">
                <p className="movieDetails__date col-auto">
                  {storeMovieData[storeIndex]?.release_date}
                </p>
                <p className="movieDetails__rate col-auto">
                  <span>10 / </span>
                  {storeMovieData[storeIndex]?.vote_average}
                </p>
              </div>
            </div>
          </div>

          <Link to="/home" className="row subscribe__now">
            <button className="col btn__main_0">Subscribe Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
