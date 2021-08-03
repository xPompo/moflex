import React from "react";
import Storycard from "./Storycard";

import videoIcon from "../../assets/icons/video-w.svg";
import videoIcon1 from "../../assets/icons/video-01-w.svg";
import videoIcon2 from "../../assets/icons/video-02-w.svg";
import videoIcon3 from "../../assets/icons/video-03-w.svg";

function OurStories() {
  const CARD_DETAILS = [
    {
      icon: videoIcon,
      title: "movies.",
      subtitle:
        "Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem por.",
    },
    {
      icon: videoIcon1,
      title: "tv shows.",
      subtitle:
        "Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem por.",
    },
    {
      icon: videoIcon2,
      title: "festivals.",
      subtitle:
        "Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem por.",
    },
    {
      icon: videoIcon3,
      title: "theater.",
      subtitle:
        "Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem por.",
    },
  ];
  return (
    <div className="stories__main">
      <div className="container">
        <div className="row">
          {CARD_DETAILS.map((item, index) => {
            return (
              <Storycard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurStories;
