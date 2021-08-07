import React from "react";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

function MovieDetailsBody(props) {
  return (
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
              {props.storeMovieImages.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      className="movieDetails__poster"
                      src={`${props.baseImgURL}${item?.file_path} `}
                      alt={`imageSlider num + ${index}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-md-4 col-12 movieDetails__wrapper">
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
        </div>

        <Link to="/home" className="row subscribe__now">
          <button className="col btn__main_0">Subscribe Now</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieDetailsBody;
