import React from "react";
import Step from "./Step";
import img1 from "../../assets/Img/bg.jpg";

function StorySteps() {
  const STEP_DATA = [
    {
      img: img1,
      number: ".01",
      title: "the wastelands.",
      subtitle:
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      direction: true,
    },
    {
      img: img1,
      number: ".02",
      title: "the wastelands.",
      subtitle:
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      direction: false,
    },
    {
      img: img1,
      number: ".03",
      title: "the wastelands.",
      subtitle:
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      direction: true,
    },
    {
      img: img1,
      number: ".04",
      title: "the wastelands.",
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
