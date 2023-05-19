import React, { Fragment } from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <Fragment>
      <section className="sidenav">
        <label htmlFor="sidenav__opened" className="sidenav__background" />
        <div className="sidenav__container">
          <label htmlFor="sidenav__opened" className="sidenav__close">
            X
          </label>
          <nav>
            <ul className="sidenav__nav">
              <li>
                <a href="#" className="sidenav__nav-link">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="sidenav__nav-link">
                  Unsere Angebote
                </a>
              </li>
              <li>
                <a href="#" className="sidenav__nav-link">
                  Kunden
                </a>
              </li>
              <li>
                <a href="#" className="sidenav__nav-link">
                  Digitaler Euro
                </a>
              </li>
              <li>
                <a href="#" className="sidenav__nav-link">
                  Bitcoin
                </a>
              </li>
              <li>
                <a href="#" className="sidenav__nav-link">
                  Blockchain
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </Fragment>
  );
};

export default Sidebar;
