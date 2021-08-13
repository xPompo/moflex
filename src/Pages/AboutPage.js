import React from "react";
import BannerAbout from "../Components/About/BannerAbout";
import OurStories from "../Components/About/OurStories";
import StorySteps from "../Components/About/StorySteps";
import Testmonials from "../Components/About/Testmonials";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Home/Nav";
import useFetch from "../hooks/use-fetch";

function AboutPage() {
  const { baseImgURL, trending } = useFetch();
  return (
    <div className="about__page">
      <div className="main__bg"></div>
      <Nav />
      <BannerAbout />
      <OurStories />
      <StorySteps />
      <Testmonials />
      <Footer baseImgURL={baseImgURL} trending={trending} />
    </div>
  );
}

export default AboutPage;
