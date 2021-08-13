import React from "react";

function Storycard(props) {
  const { icon, title, subtitle } = props;
  return (
    <div className="story__card col">
      <img src={icon} className="story__card_icon" alt="iconSvg" />
      <h3 className="story__card_title">{title}</h3>
      <h5 className="story__card_subtitle">{subtitle}</h5>
    </div>
  );
}

export default Storycard;
