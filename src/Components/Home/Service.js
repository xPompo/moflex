import React from "react";
import * as RiIcons from "react-icons/ri";

function Service({ popular, baseImgURL }) {
  return (
    <div className="home__service">
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="row service__gallary">
              {popular.map((item, index) => {
                if (index < 4) {
                  return (
                    <div key={index} className="col-6 p-1">
                      <img
                        className="service__gallary_image"
                        src={`${baseImgURL}${item?.poster_path}`}
                        alt={index + "image"}
                        height={250}
                      />
                    </div>
                  );
                } else return false;
              })}
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4 mt-md-0 service__text">
            <h1 className="service__subtittle m-0">
              <p></p>OUR SERVICE
            </h1>
            <h1 className="tittle__small">
              Download Your Shows Watch Offline.
            </h1>
            <p className="subtittle__small">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour.
            </p>
            <div className="row align-items-center mt-4">
              <div className="col-auto">
                <p className="service__icon">
                  <RiIcons.RiSlideshow2Line />
                </p>
              </div>
              <div className="col">
                <h1 className="service__small_tittle">Enjoy on Your TV.</h1>
                <p className="subtittle__small">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-4">
              <div className="col-auto">
                <p className="service__icon">
                  <RiIcons.RiSlideshow4Line />
                </p>
              </div>
              <div className="col">
                <h1 className="service__small_tittle">Watch Everywhere.</h1>
                <p className="subtittle__small">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
