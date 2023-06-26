import React, { Fragment } from "react";
import "./blockchain.scss";
import ContentA from "./grid/contentA";
import ContentB from "./grid/contentB";
import ContentC from "./grid/contentC";
import ContentD from "./grid/contentD";
import ContentE from "./grid/contentE";

const Blockchain = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div class="blockchain-container">
        <div className="blockchain-layout">
          <div class="blockchain-card blockchain-card--a">
            <ContentA />
          </div>
          <div class="blockchain-card blockchain-card--b">
            <ContentB />
          </div>
          <div class="blockchain-card blockchain-card--c">
            <ContentC />
          </div>
          <div class="blockchain-card blockchain-card--d">
            <ContentD />
          </div>
          <div class="blockchain-card blockchain-card--e">
            <ContentE />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blockchain;
