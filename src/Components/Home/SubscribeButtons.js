import React from "react";

function SubscribeButtons(props) {
  return (
    <div className="col-md-auto col-12 d-flex align-items-center justify-content-center">
      <button className="btn__main_1">+Discover</button>

      <button onClick={props.signInHandler} className="btn__main_0">
        +Subscribe
      </button>
    </div>
  );
}
export default SubscribeButtons;
