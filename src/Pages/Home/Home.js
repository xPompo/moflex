import React, { useState } from "react";
import Banner from "../../Components/Home/Banner";
import Header from "../../Components/Home/Header";
import requests from "../../axios/requests";
import Nav from "../../Components/Home/Nav";
import Service from "../../Components/Home/Service";
import SignInPage from "../../Components/signin/SignInPage";
import SignupPage from "../../Components/signUp/SignupPage";
import TopratedMovies from "../../Components/Home/TopratedMovies";
import SmallBanner from "../../Components/Home/SmallBanner";
import LatestNews from "../../Components/Home/LatestNews";
import Footer from "../../Components/Footer/Footer";
import MovieRow from "../../Components/Movies/MovieRow";

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
      <Header
        SignIn={signInHandler}
        fetchPopularMovies={requests.fetchPopularMovies}
      />
      <Banner />
      <Nav signInHandler={signInHandler} />
      <MovieRow title="Up Coming Movies" />
      <Service fetchPopularMovies={requests.fetchPopularMovies} />
      <TopratedMovies />
      <SmallBanner fetchPopularMovies={requests.fetchPopularMovies} />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default Home;
