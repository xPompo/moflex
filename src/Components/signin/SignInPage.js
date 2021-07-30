import React, { useState } from "react";
import Signin from "./Signin";

function SignInPage({ onClick }) {
  return (
    <>
      <div className="signin__page">
        <div onClick={onClick} className="signin__bg"></div>
        <Signin />
      </div>
    </>
  );
}

export default SignInPage;
