import React from "react";
import Step from "./Step";
import img1 from "../../assets/Img/family.jpg";
import img2 from "../../assets/Img/car.jpg";
import img3 from "../../assets/Img/sub.jpg";
import img4 from "../../assets/Img/FHD.jpg";

function StorySteps() {
  const STEP_DATA = [
    {
      img: img1,
      number: ".01",
      title: "Family First.",
      subtitle:
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      direction: true,
    },
    {
      img: img2,
      number: ".02",
      title: "Quality FHD.",
      subtitle:
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      direction: false,
    },
    {
      img: img3,
      number: ".03",
      title: "Premuim Subtitle.",
      subtitle:
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      direction: true,
    },
    {
      img: img4,
      number: ".04",
      title: "Top rated movies.",
      subtitle:
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      direction: false,
    },
  ];
  return (
    <div className="StorySteps">
      {STEP_DATA.map((item, index) => {
        return (
          <Step
            key={index}
            img={item.img}
            number={item.number}
            title={item.title}
            subtitle={item.subtitle}
            direction={item.direction}
          />
        );
      })}
    </div>
  );
}

export default StorySteps;
