import React from "react";
import MovieBanner from "../Components/Movies/MovieBanner";
import Header from "../Components/Home/Header";
import MovieRow from "../Components/Movies/MovieRow";
import MovieGeners from "../Components/Movies/MovieGeners";
import LatestNews from "../Components/Home/LatestNews";
import Footer from "../Components/Footer/Footer";

function MoviesPage({ fethchTrendingMovies }) {
  return (
    <div>
      <Header />
      <MovieBanner fethchTrendingMovies={fethchTrendingMovies} />
      <MovieRow title="New movies" />
      <MovieGeners />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default MoviesPage;
