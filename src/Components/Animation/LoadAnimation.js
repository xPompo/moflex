import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function LoadAnimation() {
  const first = useRef();
  const second = useRef();
  useEffect(() => {
    gsap.to(first.current, {
      duration: 1.2,
      delay: 0.5,
      css: { height: 0 },
      ease: "power3.inOut",
    });
  }, [first]);
  useEffect(() => {
    gsap.to(second.current, {
      duration: 1.2,
      delay: 0.5,
      css: { height: 0 },
      ease: "power3.inOut",
    });
  }, [second]);
  return (
    <div className="animation__load">
      <div ref={first} className="first"></div>
      <div ref={second} className="second"></div>
    </div>
  );
}

export default LoadAnimation;
