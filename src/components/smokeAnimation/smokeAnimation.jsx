import React from "react";
import "./smokeAnimation.scss";
import { Fragment } from "react";
import Video from "../smokeAnimation/smoke.mp4";

const SmokeAnimation = () => {
  return (
    <Fragment>
      <div className="smokeAnimation-body">
        <video src={Video} autoPlay muted></video>
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
