import React, { useRef, useEffect } from "react";
import Signin from "./Signin";
import { gsap } from "gsap";

function SignInPage({ SignOut, signupHandler }) {
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
      <div className="signin__page">
        <div
          onClick={() => {
            SignOut(signin);
          }}
          className="signin__bg"
        ></div>
        <Signin signin={signin} signupHandler={signupHandler} />
      </div>
    </>
  );
}

export default SignInPage;
