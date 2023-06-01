import React from "react";
import "./karusell.scss";
import { Fragment } from "react";
import Image1 from "./images/image_5.jpg";
import Image2 from "./images/image_6.jpg";
import Image3 from "./images/image_7.jpg";
import Image4 from "./images/image_8.jpg";
import Image5 from "./images/image_9.jpg";
import Image6 from "./images/image_10.jpg";
import Image7 from "./images/image_11.jpg";
import Image8 from "./images/image_12.jpg";

const karusell = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  const imageElements = images.map((image, index) => (
    <span key={index} style={{ "--i": index + 1 }}>
      <img src={image} alt="" />
    </span>
  ));
  return (
    <Fragment>
      <div className="container">
        <h2 className="karusell-title"> beim beraten von guten freunden</h2>
        <div className="slider">{imageElements}</div>
      </div>
    </Fragment>
  );
};

export default karusell;
