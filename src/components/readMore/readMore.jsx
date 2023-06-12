import React, { Fragment } from "react";
import { useState } from "react";
import "./readMore.scss";

const ReadMore = ({ shortText, longText }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <Fragment>
      {shortText}
      <span className={`readMore-long-text ${collapse ? "expanded" : ""}`}>
        {longText}
      </span>
      <button className="readMore_button" onClick={toggleCollapse}>
        {collapse ? "Read Less" : "Read More"}
      </button>
    </Fragment>
  );
};

export default ReadMore;
