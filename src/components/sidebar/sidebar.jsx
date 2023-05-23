import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <Fragment>
      <section className="sidenav">
        <nav>
          <label htmlFor="sidenav__opened" className="sidenav__background" />
          <div className="sidenav__container">
            <label htmlFor="sidenav__opened" className="sidenav__close">
              X
            </label>
            <ul className="sidenav__nav">
              <li>
                <Link to="/about" className="sidenav__nav-link">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/angebot" className="sidenav__nav-link">
                  Angebote
                </Link>
              </li>
              <li>
                <Link to="/kunden" className="sidenav__nav-link">
                  Kunden
                </Link>
              </li>
              <li>
                <Link to="/digEuro" className="sidenav__nav-link">
                  Digitaler Euro
                </Link>
              </li>
              <li>
                <Link to="/bitcoin" className="sidenav__nav-link">
                  Bitcoin
                </Link>
              </li>
              <li>
                <Link to="/blockchain" className="sidenav__nav-link">
                  Blockchain
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </Fragment>
  );
};

export default Sidebar;
