import React, { useState } from "react";
import Banner from "../../Components/Home/Banner";
import Header from "../../Components/Home/Header";
import Nav from "../../Components/Home/Nav";
import Service from "../../Components/Home/Service";
import SignInPage from "../../Components/signin/SignInPage";
import SignupPage from "../../Components/signUp/SignupPage";
import TopratedMovies from "../../Components/Home/TopratedMovies";
import SmallBanner from "../../Components/Home/SmallBanner";
import LatestNews from "../../Components/Home/LatestNews";
import Footer from "../../Components/Footer/Footer";
import MovieRow from "../../Components/Movies/MovieRow";
import useFetch from "../../hooks/use-fetch";

function Home() {
  const { trending, baseImgURL, watchClickHandler } = useFetch();
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
    <div className="home">
      <div className="main__bg"></div>
      {isSignUpPage && (
        <SignupPage signInHandler={signInHandler} SignOut={Outhandler} />
      )}
      {isSignInPage && (
        <SignInPage signupHandler={signupHandler} SignOut={Outhandler} />
      )}
      <Header SignIn={signInHandler} />
      <Banner />
      <Nav signInHandler={signInHandler} />
      <MovieRow
        title="Up Coming Movies"
        upComing={trending}
        baseImgURL={baseImgURL}
        watchClickHandler={watchClickHandler}
      />
      <Service />
      <TopratedMovies />
      <SmallBanner />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default Home;
