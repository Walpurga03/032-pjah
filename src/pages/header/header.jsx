import React, { Fragment } from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./header.scss";

const Header = () => {
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["digitalen Euro", "Bitcoin", "Blockchain"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  return (
    <Fragment>
      <header className="header">
        <div className="header__container">
          <div className="header__heading-container">
            <h1 className="header__heading-main">
              Beratung zum <br />
              <span ref={el}></span>
            </h1>
          </div>
          <p className="header__heading-sub">
            Expertise im Umgang mit neuen Technologien, insbesondere für Banken,
            Sparkassen und Zahlungsdienstleister
          </p>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
