import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import * as RiIcons from "react-icons/ri";

function Service({ fetchPopularMovies }) {
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
    <div className="home__service">
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col">
            <div className="row service__gallary">
              {storeFetchData.map((item, index) => {
                if (index < 4) {
                  return (
                    <div key={index} className="col-6 p-1">
                      <img
                        className="service__gallary_image"
                        src={`${baseImgURL}${item?.poster_path}`}
                        alt={index + "image"}
                        // width={Math.floor(Math.random() * (180 - 150) + 150)}
                        height={250}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="col service__text">
            <h1 className="service__subtittle m-0">
              <p></p>OUR SERVICE
            </h1>
            <h1 className="service__tittle">
              Download Your Shows Watch Offline.
            </h1>
            <p className="service__description">
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
                <p className="service__small_subtittle">
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
                <p className="service__small_subtittle">
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
