import React from "react";
import Signup from "./Signup";

function SignupPage({ SignOut, signInHandler }) {
  return (
    <>
      <div className="signup__page">
        <div onClick={SignOut} className="signup__bg"></div>
        <Signup signInHandler={signInHandler} />
      </div>
    </>
  );
}

export default SignupPage;
