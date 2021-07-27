import React from "react";
import Banner from "../../Components/Home/Banner";
import Header from "../../Components/Home/Header";
import requests from "../../axios/requests";
import Trending from "../../Components/Home/Trending";

function Home() {
  return (
    <div>
      <Header />
      <Banner fetchTrending={requests.fetchTrending} />
      <Trending fethchTrendingMovies={requests.fetchTopratedMovies} />
    </div>
  );
}

export default Home;
