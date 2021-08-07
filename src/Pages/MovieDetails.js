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
function MovieDetails() {
  const { baseImgURL, API_KEY } = useFetch();
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [date, setDate] = useState("");
  const [vote, setVote] = useState("");
  const [storeMovieImages, setStoreMovieImages] = useState([]);
  const [storeID, setStoreID] = useState(null);

  const ID = useSelector((state) => state.movieID);

  //---- Onreload data no lose  ----//
  useEffect(() => {
    const localID = localStorage.getItem("ID");
    return setStoreID(localID);
  }, []);
  //---- id useEffect Function ----//
  useEffect(() => {
    if (ID !== null) {
      localStorage.setItem("ID", JSON.stringify(ID));
      return setStoreID(ID);
    }
  }, [ID]);

  //---- fetch date images based on id  ----//
  //---- fetch Images  ----//
  useEffect(() => {
    const fetchMovieImages = `/movie/${storeID}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`;
    if (storeID !== null) {
      axios(fetchMovieImages)
        .then((res) => {
          setStoreMovieImages(res.data.backdrops);
        })
        .catch((err) => console.log(err));
    }
  }, [storeID, API_KEY]);
  //---- fetch Details  ----//
  useEffect(() => {
    const fetchMovieDetails = `/movie/${storeID}?api_key=${API_KEY}&language=en-US`;
    if (storeID !== null) {
      axios(fetchMovieDetails).then((res) => {
        setTitle(res.data.original_title);
        setOverview(res.data.overview);
        setDate(res.data.release_date);
        setVote(res.data.vote_average);
      });
    }
  }, [storeID, API_KEY]);

  return (
    <>
      <Header />
      <div className="movieDetails__bg">
        <div className="container">
          <Link to="/Home" className="movieDetails__back">
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
