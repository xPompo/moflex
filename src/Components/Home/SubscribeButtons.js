import React from "react";

function SubscribeButtons(props) {
  return (
    <div className="col-md-auto px-0">
      <button className="btn__main_1">+Discover</button>

      <button onClick={props.signInHandler} className="btn__main_0">
        +Subscribe
      </button>
    </div>
  );
}
export default SubscribeButtons;
