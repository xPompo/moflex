import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import VideoTrailer from "./VideoTrailer";

function MovieDetailsBody(props) {
  const {
    storeMovieImages,
    titleMovieDetails,
    overview,
    date,
    vote,
    baseImgURL,
    videoEnable,
    closeVideoHandler,
    playTrailerVideoHandler,
  } = props;
  return (
    <div className="movieDetails__bg">
      <div className="container">
        <div className="row mb-4">
          <div className=" col-12">
            <Swiper
              initialSlide={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              slidesPerView={2}
              spaceBetween={-200}
              className="mySwiper_2"
            >
              {storeMovieImages.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {({ isActive }) => (
                      <img
                        className="movieDetails__poster"
                        src={`${baseImgURL}${item?.file_path} `}
                        alt={`imageSlider num + ${index}`}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className=" col-12 movieDetails__wrapper p-4">
            <h1 className="movieDetails__tittle">{titleMovieDetails}</h1>
            <p className="movieDetails__subtittle">{overview}</p>
            <div className="row movieDetails__data__rate">
              <p className="movieDetails__date col-auto">{date}</p>
              <p className="movieDetails__rate col-auto">
                <span>10 / </span>
                {vote}
              </p>
            </div>
          </div>
          <div className="col-md-auto col-12 d-flex justify-content-center px-4">
            <button
              onClick={playTrailerVideoHandler}
              className="btn__main_0  m-0"
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
