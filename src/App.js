import React from "react";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails";
import { Route, Switch, Redirect } from "react-router-dom";
import requests from "./axios/requests";
import { useLocation } from "react-router";
import AboutPage from "./Pages/AboutPage";
import MoviesPage from "./Pages/MoviesPage";

function App() {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={AboutPage} />
      <Route path="/movieDetails">
        <MovieDetails fethchTrendingMovies={requests.fetchTopratedMovies} />
      </Route>
      <Route path="/Movies">
        <MoviesPage
          fethchTrendingMovies={requests.fetchTopratedMovies}
          fetchUpComingMovies={requests.fetchUpComingMovies}
        />
      </Route>
    </Switch>
  );
}

export default App;
