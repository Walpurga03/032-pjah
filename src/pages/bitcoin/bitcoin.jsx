import React, { Fragment } from "react";
import "./bitcoin.scss";
import ContentA from "./grid/contentA";
import ContentB from "./grid/contentB";
import ContentC from "./grid/contentC";
import ContentD from "./grid/contentD";
import ContentE from "./grid/contentE";
import ContentF from "./grid/contentF";

const Bitcoin = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div class="bitcoin-container">
        <div className="bitcoin-layout">
          <div class="bitcoin-card bitcoin-card--a">
            <ContentA />
          </div>
          <div class="bitcoin-card bitcoin-card--b">
            <ContentB />
          </div>
          <div class="bitcoin-card bitcoin-card--c">
            <ContentC />
          </div>
          <div class="bitcoin-card bitcoin-card--d">
            <ContentD />
          </div>
          <div class="bitcoin-card bitcoin-card--e">
            <ContentE />
          </div>
          <div class="bitcoin-card bitcoin-card--f">
            <ContentF />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Bitcoin;
