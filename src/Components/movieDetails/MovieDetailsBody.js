import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay } from "swiper/core";
import VideoTrailer from "./VideoTrailer";
import useFetch from "../../hooks/use-fetch";

SwiperCore.use([Autoplay]);

function MovieDetailsBody(props) {
  const { playTrailerVideoHandler, closeVideoHandler, videoEnable } =
    useFetch();

  return (
    <div className="movieDetails__bg">
      <div className="container">
        <div className="row mb-4">
          <div className=" col-12">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              initialSlide={1}
              speed={900}
              centeredSlides={true}
              centeredSlidesBounds={true}
              slidesPerView={2}
              spaceBetween={-200}
              className="mySwiper_2"
            >
              {props.storeMovieImages.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {({ isActive }) => (
                      <img
                        className="movieDetails__poster"
                        src={`${props.baseImgURL}${item?.file_path} `}
                        alt={`imageSlider num + ${index}`}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className=" col-12 movieDetails__wrapper">
            <h1 className="movieDetails__tittle">{props.title}</h1>
            <p className="movieDetails__subtittle">{props.overview}</p>
            <div className="row movieDetails__data__rate">
              <p className="movieDetails__date col-auto">{props.date}</p>
              <p className="movieDetails__rate col-auto">
                <span>10 / </span>
                {props.vote}
              </p>
            </div>
          </div>
          <div className="col-auto p-0">
            <button
              onClick={playTrailerVideoHandler}
              className="col btn__main_0  m-0"
            >
              +Watch Trailer
            </button>
          </div>
          {videoEnable && (
            <VideoTrailer closeVideoHandler={closeVideoHandler} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsBody;
