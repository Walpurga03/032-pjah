import React, { Fragment } from "react";
import "./header.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__container">
          <div className="header__heading-container">
            <h1 className="header__heading-main">
              Beratung zum digitalen Euro, Bitcoin und Blockchain
              <br />
            </h1>
            <p className="header__heading-sub">
              Expertise im Umgang mit neuen Technologien, insbesondere für
              Banken, Sparkassen und Zahlungsdienstleister
            </p>
          </div>
        </div>
        <div className="header__slope" />
      </header>
    </Fragment>
  );
};

export default Header;
