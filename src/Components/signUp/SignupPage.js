import React, { useRef, useEffect } from "react";
import Signup from "./Signup";
import { gsap } from "gsap";

function SignupPage({ SignOut, signInHandler }) {
  const signin = useRef();
  useEffect(() => {
    gsap.from(signin.current, {
      duration: 0.8,
      yPercent: -100,
      ease: "power3.out",
    });
  }, [signin]);
  return (
    <>
      <div className="signup__page">
        <div
          onClick={() => {
            SignOut(signin);
          }}
          className="signup__bg"
        ></div>
        <Signup signin={signin} signInHandler={signInHandler} />
      </div>
    </>
  );
}

export default SignupPage;
