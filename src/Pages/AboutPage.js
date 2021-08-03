import React from "react";
import Header from "../Components/Home/Header";
import BannerAbout from "../Components/About/BannerAbout";
import OurStories from "../Components/About/OurStories";
import StorySteps from "../Components/About/StorySteps";

function AboutPage() {
  return (
    <div className="about__page">
      <Header />
      <BannerAbout />
      <OurStories />
      <StorySteps />
    </div>
  );
}

export default AboutPage;
