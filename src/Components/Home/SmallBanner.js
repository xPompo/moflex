import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import * as RiIcons from "react-icons/ri";

function SmallBanner({ fetchPopularMovies }) {
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  const [storeFetchData, setStoreFetchData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(fetchPopularMovies);
      setStoreFetchData(res.data.results);
    };
    fetchData();
  }, [fetchPopularMovies]);
  return (
    <div className="home__small_banner">
      <div className="container">
        <div className="banner__width row align-items-center mt-4">
          <div className="col small_banner__text">
            <h1 className="small_banner__subtittle m-0">
              <p></p>ONLINE STREAMING
            </h1>
            <h1 className="small_banner__tittle">
              Download Your Shows Watch Offline.
            </h1>
            <p className="small_banner__description">
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
              <div className="col">
                <h1 className="small_banner__small_tittle">
                  Enjoy on Your TV.
                </h1>
                <p className="small_banner__small_subtittle">
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
              <div className="col">
                <h1 className="small_banner__small_tittle">
                  Watch Everywhere.
                </h1>
                <p className="small_banner__small_subtittle">
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
