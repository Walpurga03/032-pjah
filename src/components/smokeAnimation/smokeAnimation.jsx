import React, { useRef, useEffect } from "react";
import "./smokeAnimation.scss";
import { Fragment } from "react";
import Video from "../smokeAnimation/smoke.mp4";

const SmokeAnimation = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const animationSpans = document.querySelectorAll(".smokeAnimation-h1 span");

    const startAnimation = () => {
      setTimeout(() => {
        animationSpans.forEach((span, index) => {
          span.style.animationDelay = `${index * 0.5}s`;
        });
      }, 500); // Startverzögerung von 2 Sekunden
    };

    videoElement.addEventListener("play", startAnimation);

    return () => {
      videoElement.removeEventListener("play", startAnimation);
    };
  }, []);

  return (
    <Fragment>
      <div className="smokeAnimation-body">
        <video ref={videoRef} src={Video} autoPlay muted preload="auto"></video>
        <h1 className="smokeAnimation-h1">
          <span>Ü</span>
          <span>B</span>
          <span>E</span>
          <span>R</span>
          <span>&nbsp;</span>
          <span>U</span>
          <span>N</span>
          <span>S</span>
        </h1>
      </div>
    </Fragment>
  );
};

export default SmokeAnimation;
