import React from "react";

function TopMoviesDetails(props) {
  return (
    <div className="movieDetails__bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="movieDetails__poster"
              src={`${props.baseImgURL}${props.pic}`}
              alt="aa"
              width={500}
            />
          </div>
          <div className="col">
            <h1 className="movieDetails__tittle">{props.title}</h1>
            <p className="movieDetails__subtittle">{props.overView}</p>
            <p className="movieDetails__date">{props.date}</p>
            <p className="movieDetails__rate">
              <span>10 / </span>
              {props.rate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMoviesDetails;
