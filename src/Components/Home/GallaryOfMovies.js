import React from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

function GallaryOfMovies({ poster, name, date, count, baseImgURL, id }) {
  const { watchClickHandler } = useFetch();
  return (
    <div className="gallary__poster col-lg-3 col-md-4 col-sm-6 col-12 ">
      <Link to="/movieDetails">
        <div
          onClick={() => {
            watchClickHandler(id);
          }}
          className="row gallary__poster_image_wrapper "
        >
          <img
            className="gallary__poster_image"
            src={`${baseImgURL}${poster}`}
            alt={name}
          />
        </div>
      </Link>

      <div className="row gallary__title_row">
        <h6 className=" col gallary__title">
          {name?.length > 20 ? name.substr(0, 20) + "..." : name}
        </h6>
        <h6 className=" col-auto gallary__count">
          {count}
          <span>
            <AiIcons.AiFillHeart />
          </span>
        </h6>
      </div>
      <div className="row gallary__date_HD">
        <p className="col-auto gallary__date">
          {date?.length > 4 ? date.substr(0, 4) : date}
        </p>
        <p className="col-auto HD">HD</p>
      </div>
    </div>
  );
}

export default GallaryOfMovies;
