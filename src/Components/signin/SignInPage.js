import React from "react";
import Signin from "./Signin";

function SignInPage({ SignOut, signupHandler }) {
  return (
    <>
      <div className="signin__page">
        <div onClick={SignOut} className="signin__bg"></div>
        <Signin signupHandler={signupHandler} />
      </div>
    </>
  );
}

export default SignInPage;
