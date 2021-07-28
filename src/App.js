import React from "react";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails";
import { Route, Switch } from "react-router-dom";
import requests from "./axios/requests";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route path="/movieDetails">
        <MovieDetails fethchTrendingMovies={requests.fetchTopratedMovies} />
      </Route>
    </Switch>
  );
}

export default App;
