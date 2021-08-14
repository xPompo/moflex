import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function LoadAnimation() {
  const first = useRef();
  const second = useRef();
  useEffect(() => {
    gsap.to(first.current, {
      duration: 1.2,
      delay: 0.4,
      css: { height: 0, display: "none" },
      ease: "power3.inOut",
    });
  }, [first]);
  useEffect(() => {
    gsap.to(second.current, {
      duration: 1.2,
      delay: 0.4,
      css: { height: 0, display: "none" },
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
