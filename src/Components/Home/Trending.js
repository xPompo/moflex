import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

function Trending({ fethchTrendingMovies }) {
  const [topMovies, setTopMovies] = useState([]);

  const baseImgURL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(fethchTrendingMovies);
      console.log(res.data.results);
      return setTopMovies(res.data.results);
    };
    fetchData();
  }, [fethchTrendingMovies]);

  const watchClickHandler = () => {};

  return (
    <div className="trending__main">
      <div className="container">
        <div className="row">
          <p className="subtittle">Live Streaming</p>
          <h1 className="tittle">Top Rated Movies</h1>
        </div>
        <div className="row">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            slidesPerView={1}
            centeredSlides={true}
            centeredSlidesBounds={true}
            spaceBetween={10}
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper_1"
          >
            {topMovies.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className="wrapper">
                      <div className="overlay">
                        <h1 className="poster__tittle">
                          {item?.original_title || item?.tittle || item?.name}
                        </h1>
                        <div className="poster__wrappper_footer">
                          <div className="poster__date_rate">
                            <p className="poster__date">
                              {" "}
                              {item?.release_date}
                            </p>
                            <p className="poster__rate">
                              <span>10 / </span>
                              {item?.vote_average}
                            </p>
                          </div>
                          <button
                            onClick={watchClickHandler}
                            className="btn__main_0 "
                          >
                            Discover More
                          </button>
                        </div>
                      </div>
                      <img
                        className="trending__main_bg"
                        src={`${baseImgURL}${item?.poster_path}`}
                        alt={item?.tittle || item?.original_title || item?.name}
                      />
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Trending;
