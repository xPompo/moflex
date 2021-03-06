import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);
function MovieRow(props) {
  const { title, upComing, baseImgURL, watchClickHandler } = props;

  return (
    <div className="trending__main">
      <div className="container">
        <div className="row mt-4">
          <p className="subtittle__small">Live Streaming</p>
          <h1 className="tittle__small">{title}</h1>
        </div>
        <div className="row mt-4">
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
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper_1"
          >
            {upComing.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className="wrapper">
                      <div className="overlay">
                        <h1 className="poster__tittle">
                          {item?.original_title || item?.tittle || item?.name}
                        </h1>
                        <div className=" container poster__wrappper_footer">
                          <div className=" row mb-4 poster__date_rate">
                            <p className="col-auto ms-4 poster__date">
                              {" "}
                              {item?.release_date}
                            </p>
                            <p className="col-auto me-4 poster__rate">
                              <span>10 / </span>
                              {item?.vote_average}
                            </p>
                          </div>
                          <Link className="row" to="/movieDetails">
                            <button
                              onClick={() => {
                                watchClickHandler(item?.id);
                              }}
                              className="col btn__main_0 "
                            >
                              Discover More
                            </button>
                          </Link>
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

export default MovieRow;
