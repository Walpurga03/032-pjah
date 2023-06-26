import React, { Fragment } from "react";
import "./digEuro.scss";
import ContentA from "./grid/contentA";
import ContentB from "./grid/contentB";
import ContentD from "./grid/contentD";
import ContentE from "./grid/contentE";

const DigEuro = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div class="digEuro-container">
        <div className="digEuro-layout">
          <div class="digEuro-card digEuro-card--a">
            <ContentA />
          </div>
          <div class="digEuro-card digEuro-card--b">
            <ContentB />
          </div>

          <div class="digEuro-card digEuro-card--d">
            <ContentD />
          </div>
          <div class="digEuro-card digEuro-card--e">
            <ContentE />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DigEuro;
