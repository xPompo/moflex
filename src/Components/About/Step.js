import React from "react";

function Step(props) {
  const { img, number, title, subtitle, direction } = props;
  return (
    <div className="step">
      <div className="container">
        <div className="row   ">
          {direction && (
            <div className=" col-md-6 col-12 pe-4 step__image_main">
              <img className="step__img" src={img} alt="step_img" />
            </div>
          )}
          <div className="step__text col-md-6 col-12 ps-4">
            <h1 className="step_title_number">{number}</h1>
            <h1 className="step_title">{title}</h1>
            <h6 className="step_subtitle">{subtitle}</h6>
            <button className="btn__main_0 mx-0 my-4 my-md-0">read more</button>
          </div>
          {!direction && (
            <div className=" col-md-6 col-12 pe-4 step__image_main">
              <img className="step__img" src={img} alt="step_img" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step;
