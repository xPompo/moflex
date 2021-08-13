function MovieBanner(props) {
  const { baseImgURL, latest } = props;

  return (
    <div className="movie_banner">
      <img
        className="movie_banner_bg"
        src={`${baseImgURL}${
          latest[Math.floor(Math.random() * (0 + 19) - 0)]?.backdrop_path
        }`}
        alt="bannerImg"
      />
      <div className="container">
        <div className=" row align-items-center mt-4">
          <div className="col text-center small_banner__text">
            <h1 className="small_banner__subtittle m-0">
              <p></p>Our Movies
              <p></p>
            </h1>
            <h1 className="small_banner__tittle">
              Best Movies Your have Ever Seen.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner;
