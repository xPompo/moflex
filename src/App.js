import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails";
import { Route, Switch, Redirect } from "react-router-dom";
import { useLocation } from "react-router";
import AboutPage from "./Pages/AboutPage";
import MoviesPage from "./Pages/MoviesPage";
import LoadAnimation from "./Components/Animation/LoadAnimation";

function App() {
  const [anim, setAnim] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setAnim(true);

    const timeOut = setTimeout(() => {
      setAnim(false);
    }, 1600);
    return () => {
      clearTimeout(timeOut);
    };
  }, [location]);

  return (
    <>
      {anim && <LoadAnimation />}
      <Switch location={location}>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={AboutPage} />
        <Route path="/movieDetails">
          <MovieDetails />
        </Route>
        <Route path="/Movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
