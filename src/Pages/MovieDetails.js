import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import axios from "../axios/axios";
import Header from "../Components/Home/Header";
import useFetch from "../hooks/use-fetch";

SwiperCore.use([Autoplay, Pagination]);
function MovieDetails({ fethchTrendingMovies }) {
  const { baseImgURL, API_KEY } = useFetch();
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [date, setDate] = useState("");
  const [vote, setVote] = useState("");
  const [storeMovieImages, setStoreMovieImages] = useState([]);
  const [storeID, setStoreID] = useState(null);
  //---- id useEffect Function ----//
  const ID = useSelector((state) => state.indexRed.movieID);

  useEffect(() => {
    if (ID !== null) {
      setStoreID(ID);
      localStorage.setItem("ID", JSON.stringify(storeID));
    }
  }, [ID, storeID]);

  //---- fetch date images based on id  ----//
  //---- fetch Images  ----//
  const fetchMovieImages = `/movie/${storeID}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`;
  useEffect(() => {
    if (storeID !== null) {
      axios(fetchMovieImages).then((res) => {
        setStoreMovieImages(res.data.backdrops);
      });
    }
  }, [fetchMovieImages, storeID]);
  //---- fetch Details  ----//
  const fetchMovieDetails = `/movie/${storeID}?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    if (storeID !== null) {
      axios(fetchMovieDetails).then((res) => {
        setTitle(res.data.original_title);
        setOverview(res.data.overview);
        setDate(res.data.release_date);
        setVote(res.data.vote_average);
      });
    }
  }, [fetchMovieDetails, storeID]);
  //---- Onreload data no lose  ----//
  useEffect(() => {
    const localID = localStorage.getItem("ID");
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
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={800}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  dynamicBullets: true,
                }}
                className="mySwiper_2"
              >
                {storeMovieImages.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        className="movieDetails__poster"
                        src={`${baseImgURL}${item?.file_path} `}
                        alt={`imageSlider num + ${index}`}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="col-md-4 col-12 movieDetails__wrapper">
              <h1 className="movieDetails__tittle">{title}</h1>
              <p className="movieDetails__subtittle">{overview}</p>
              <div className="row movieDetails__data__rate">
                <p className="movieDetails__date col-auto">{date}</p>
                <p className="movieDetails__rate col-auto">
                  <span>10 / </span>
                  {vote}
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
