import React, { Fragment } from "react";
import { useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import { Outlet, Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  useEffect(() => {
    const inputElement = document.getElementById("usernameInput");
    if (inputElement) {
      inputElement.autoComplete = "off";
    }
  }, []);
  return (
    <Fragment>
      <input
        type="checkbox"
        className="sidenav__opened"
        id="sidenav__opened"
        autoComplete="off"
      />
      <nav className="navigation">
        <ul>
          <li className="navigation__list-item">
            <Link className="navigation__list-item-link" to="/">
              <span>PJAH </span>
              <span>CONSULTING</span>
            </Link>
          </li>
          <li className="navigation__list-item navigation__list-item--mobile-hidden">
            <Link className="navigation__list-item-link" to="/about">
              <span>Über </span>
              <span>uns</span>
            </Link>
          </li>
          <li className="navigation__list-item navigation__list-item--mobile-hidden">
            <Link className="navigation__list-item-link" to="/angebot">
              <span>Ange</span>
              <span>bote</span>
            </Link>
          </li>
          <li className="navigation__list-item navigation__list-item--mobile-hidden">
            <Link className="navigation__list-item-link" to="kunden">
              <span>Kun</span>
              <span>den</span>
            </Link>
          </li>
          <li className="navigation__list-item navigation__list-item--mobile-hidden">
            <Link className="navigation__list-item-link" to="/DigEuro">
              <span>Digitaler </span>
              <span>Euro</span>
            </Link>
          </li>
          <li className="navigation__list-item navigation__list-item--mobile-hidden">
            <Link className="navigation__list-item-link" to="/bitcoin">
              <span>bit</span>
              <span>coin</span>
            </Link>
          </li>
          <li className="navigation__list-item navigation__list-item--mobile-hidden">
            <Link className="navigation__list-item-link" to="/blockchain">
              <span>Block</span>
              <span>chain</span>
            </Link>
          </li>
          <li className="navigation__list-item--menu">
            <label htmlFor="sidenav__opened">
              <svg className="navigation_icon" viewBox="0 0 512 512">
                <g>
                  <path
                    d="M358.06,193.61H153.94c-3.83,0-6.93-3.1-6.93-6.93s3.1-6.93,6.93-6.93h204.13c3.83,0,6.93,3.1,6.93,6.93
                                            S361.89,193.61,358.06,193.61z"
                  />
                  <path
                    d="M358.06,262.93H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                            c3.83,0,6.93,3.1,6.93,6.93C365,259.83,361.89,262.93,358.06,262.93z"
                  />
                  <path
                    d="M358.06,332.25H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                            c3.83,0,6.93,3.1,6.93,6.93C365,329.15,361.89,332.25,358.06,332.25z"
                  />
                  <path
                    d="M256,474.76c-120.62,0-218.76-98.14-218.76-218.76c0-120.63,98.14-218.76,218.76-218.76
                                            c120.63,0,218.76,98.14,218.76,218.76C474.76,376.62,376.62,474.76,256,474.76z M256,51.1C143.02,51.1,51.1,143.02,51.1,256
                                            S143.02,460.9,256,460.9S460.9,368.98,460.9,256S368.98,51.1,256,51.1z"
                  />
                </g>
              </svg>
            </label>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Sidebar />
      <Footer />
    </Fragment>
  );
};

export default Navbar;
