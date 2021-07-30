import React, { useState } from "react";
import Banner from "../../Components/Home/Banner";
import Header from "../../Components/Home/Header";
import requests from "../../axios/requests";
import Trending from "../../Components/Home/Trending";
import Service from "../../Components/Home/Service";
import SignInPage from "../../Components/signin/SignInPage";

function Home() {
  const [isOverlayClicked, setIsOverlayClicked] = useState(false);
  const overLayClickedHandler = () => {
    setIsOverlayClicked(false);
  };
  const signinClickedHandler = () => {
    setIsOverlayClicked(true);
  };
  return (
    <div>
      {isOverlayClicked && <SignInPage onClick={overLayClickedHandler} />}
      <Header onClick={signinClickedHandler} />
      <Banner fetchTrending={requests.fetchTrending} />
      <Trending
        onClick={signinClickedHandler}
        fethchTrendingMovies={requests.fetchTopratedMovies}
      />
      <Service fetchPopularMovies={requests.fetchPopularMovies} />
    </div>
  );
}

export default Home;
