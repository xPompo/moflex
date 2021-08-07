import React from "react";
import MovieBanner from "../Components/Movies/MovieBanner";
import Header from "../Components/Home/Header";
import MovieRow from "../Components/Movies/MovieRow";
import MovieGeners from "../Components/Movies/MovieGeners";

function MoviesPage({ fethchTrendingMovies }) {
  return (
    <div>
      <Header />
      <MovieBanner fethchTrendingMovies={fethchTrendingMovies} />
      <MovieRow title="New movies" />
      <MovieGeners />
    </div>
  );
}

export default MoviesPage;
