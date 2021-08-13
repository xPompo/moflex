import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import comma from "../../assets/icons/comma-w.svg";
import commaFill from "../../assets/icons/comma-fill.svg";
SwiperCore.use([Autoplay]);
function Testmonials() {
  const [commaState, setComma] = useState(false);
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
  const handleComma = () => {
    setComma((prev) => !prev);

    // setComma(false);
  };

  return (
    <div className="testmonials">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-2">
            <img
              src={commaState ? commaFill : comma}
              className="notaion_up"
              alt="commaLeft"
            />
          </div>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            slidesPerView={1}
            onSlideChange={handleComma}
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
            <img
              src={commaState ? commaFill : comma}
              className="notaion_down"
              alt="CommaRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testmonials;
