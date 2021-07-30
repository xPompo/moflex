import React, { useState } from "react";
import Banner from "../../Components/Home/Banner";
import Header from "../../Components/Home/Header";
import requests from "../../axios/requests";
import Trending from "../../Components/Home/Trending";
import Service from "../../Components/Home/Service";
import SignInPage from "../../Components/signin/SignInPage";
import SignupPage from "../../Components/signUp/SignupPage";

function Home() {
  const [isSignUpPage, setSignUpPage] = useState(false);
  const [isSignInPage, setSignInPage] = useState(false);

  const Outhandler = () => {
    setSignInPage(false);
    setSignUpPage(false);
  };

  const signupHandler = () => {
    setSignUpPage(true);
    setSignInPage(false);
  };
  const signInHandler = () => {
    setSignInPage(true);
    setSignUpPage(false);
  };
  return (
    <div>
      {isSignUpPage && (
        <SignupPage signInHandler={signInHandler} SignOut={Outhandler} />
      )}
      {isSignInPage && (
        <SignInPage signupHandler={signupHandler} SignOut={Outhandler} />
      )}
      <Header SignIn={signInHandler} />
      <Banner fetchTrending={requests.fetchTrending} />
      <Trending
        signInHandler={signInHandler}
        fethchTrendingMovies={requests.fetchTopratedMovies}
      />
      <Service fetchPopularMovies={requests.fetchPopularMovies} />
    </div>
  );
}

export default Home;
