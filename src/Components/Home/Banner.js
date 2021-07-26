import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import axios from "../../axios/axios";

import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper/core";

SwiperCore.use([EffectFade, Navigation, Autoplay]);

function Banner({ fetchTrending }) {
  const [movieTrend, setMovieTrend] = useState([]);
  const baseImgURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchUrl = async () => {
      const res = await axios(fetchTrending);
      console.log(res.data.results);
      return setMovieTrend(res.data.results);
    };
    fetchUrl();
  }, [fetchTrending]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={2000}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        className="mySwiper"
      >
        {movieTrend.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div className="banner__main">
                  <img
                    className="banner__main_poster"
                    src={`${baseImgURL}${item?.backdrop_path}`}
                    alt={item?.title}
                  />
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h1 className="tittle">
                          {item?.title || item?.name || item?.original_title}
                        </h1>
                        <p className="overview">
                          {truncate(
                            item?.overview,
                            window.innerWidth > 400 ? 150 : 50
                          )}
                        </p>
                        <p className="release_date">{item?.release_date}</p>
                      </div>
                    </div>
                    <div className="row  ">
                      <button className="col-md-3 col-sm-12 my-2 btn__main_all">
                        Play
                      </button>
                      <button className="col-md-3 col-sm-12 my-2 btn__main_all">
                        Add to favourit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Banner;
