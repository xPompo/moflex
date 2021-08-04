import React from "react";
import Header from "../Components/Home/Header";
import BannerAbout from "../Components/About/BannerAbout";
import OurStories from "../Components/About/OurStories";
import StorySteps from "../Components/About/StorySteps";
import Testmonials from "../Components/About/Testmonials";
import Footer from "../Components/Footer/Footer";

function AboutPage() {
  return (
    <div className="about__page">
      <Header />
      <BannerAbout />
      <OurStories />
      <StorySteps />
      <Testmonials />
      <Footer />
    </div>
  );
}

export default AboutPage;
