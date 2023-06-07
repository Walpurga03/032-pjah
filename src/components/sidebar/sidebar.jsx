import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({ checkboxRef }) => {
  const handleLinkClick = () => {
    if (checkboxRef.current && checkboxRef.current.checked) {
      checkboxRef.current.checked = false;
    }
  };

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
                <Link
                  to="/"
                  className="sidenav__nav-link"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="sidenav__nav-link"
                  onClick={handleLinkClick}
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/angebot"
                  className="sidenav__nav-link"
                  onClick={handleLinkClick}
                >
                  Angebote
                </Link>
              </li>
              <li>
                <Link
                  to="/kunden"
                  className="sidenav__nav-link"
                  onClick={handleLinkClick}
                >
                  Kunden
                </Link>
              </li>
              <li>
                <Link
                  to="/digEuro"
                  className="sidenav__nav-link"
                  onClick={handleLinkClick}
                >
                  Digitaler Euro
                </Link>
              </li>
              <li>
                <Link
                  to="/bitcoin"
                  className="sidenav__nav-link"
                  onClick={handleLinkClick}
                >
                  Bitcoin
                </Link>
              </li>
              <li>
                <Link
                  to="/blockchain"
                  className="sidenav__nav-link"
                  onClick={handleLinkClick}
                >
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
