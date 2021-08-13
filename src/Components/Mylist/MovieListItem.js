import React from "react";

function MovieListItem(props) {
  console.log(props.storeMovieImages);
  return (
    <div className="movie__list__item">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className="movie__list__item_poster"
              src={`${props.baseImgURL}${props.storeMovieImages[0]?.file_path} `}
              alt="poster"
            />
          </div>
          <div className="col-6">
            <h1 className="movie__list__item__tittle">{props.title}</h1>
            <p className="movie__list__item__subtittle">{props.overview}</p>
            <div className="row movie__list__item__data__rate">
              <p className="movie__list__item__date col-auto">{props.date}</p>
              <p className="movie__list__item__rate col-auto">
                <span>10 / </span>
                {props.vote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieListItem;
