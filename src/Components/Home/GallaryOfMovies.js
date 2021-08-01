import React from "react";
import * as AiIcons from "react-icons/ai";

function GallaryOfMovies({ poster, name, date, count }) {
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="gallary__poster col-3 ">
      <img
        className="gallary__poster_image"
        src={`${baseImgURL}${poster}`}
        alt={name}
      />
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
