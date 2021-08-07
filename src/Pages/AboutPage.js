import React from "react";
import BannerAbout from "../Components/About/BannerAbout";
import OurStories from "../Components/About/OurStories";
import StorySteps from "../Components/About/StorySteps";
import Testmonials from "../Components/About/Testmonials";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Home/Nav";

function AboutPage() {
  return (
    <div className="about__page">
      <Nav />
      <BannerAbout />
      <OurStories />
      <StorySteps />
      <Testmonials />
      <Footer />
    </div>
  );
}

export default AboutPage;
