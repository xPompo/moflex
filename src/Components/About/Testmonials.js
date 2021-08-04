import { infinity } from "check-types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import comma from "../../assets/icons/comma-w.svg";

function Testmonials() {
  const TESTMONIALS = [
    {
      testmonial:
        "Esse est enim et aliqua dolor eu sunt. Aute commodo adipisicing voluptate nulla proident  ",
      name: " Sabryna/ National Web Officer",
    },
    {
      testmonial:
        "Esse est enim et aliqua dolor eu sunt. Aute commodo adipisicing voluptate nulla proident  ",
      name: " Lyric/ National Mobility Architect",
    },
    {
      testmonial:
        "Esse est enim et aliqua dolor eu sunt. Aute commodo adipisicing voluptate nulla proident ",
      name: " Elza/ Dynamic Implementation Producer",
    },
    {
      testmonial:
        "Esse est enim et aliqua dolor eu sunt. Aute commodo adipisicing voluptate nulla proident  ",
      name: " Delpha/ Legacy Interactions Officer",
    },
  ];
  return (
    <div className="testmonials">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-2">
            <img src={comma} className="notaion_up" />
          </div>
          <Swiper
            slidesPerView={1}
            loop={infinity}
            className="col-8 mySwiper_2"
          >
            {TESTMONIALS.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <h1 className="testmonials__subttitle text-center">
                    {item.testmonial}
                  </h1>
                  <h6 className="testmonials__ttitle text-center">
                    {item.name}
                  </h6>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="col-2">
            <img src={comma} className=" notaion_down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testmonials;
