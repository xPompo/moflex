import React from "react";
import * as RiIcons from "react-icons/ri";

function SmallBanner() {
  return (
    <div className="home__small_banner">
      <div className="small__banner_bg"></div>
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-12  col-lg-6 col-md-8 small_banner__text">
            <h1 className="small_banner__subtittle m-0">
              <p></p>ONLINE STREAMING
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
                <p className="small_banner__icon">
                  <RiIcons.RiSlideshow2Line />
                </p>
              </div>
              <div className="col-md-8 col-12 ">
                <h1 className="small_banner__small_tittle">
                  Enjoy on Your TV.
                </h1>
                <p className="subtittle__small">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-4">
              <div className="col-auto">
                <p className="small_banner__icon">
                  <RiIcons.RiSlideshow4Line />
                </p>
              </div>
              <div className="col-md-8 col-12">
                <h1 className="small_banner__small_tittle">
                  Watch Everywhere.
                </h1>
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

export default SmallBanner;
