import React from "react";
import Banner from "../../Components/Home/Banner";
import Header from "../../Components/Home/Header";
import requests from "../../axios/requests";

function Home() {
  return (
    <div>
      <Header />
      <Banner fetchTrending={requests.fetchTrending} />
    </div>
  );
}

export default Home;
