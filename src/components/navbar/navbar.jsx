import React, { Fragment } from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <Fragment>
      <nav class="navigation">
        <ul>
          <li class="navigation__list-item">
            <a
              class="navigation__list-item-link navigation__list-item-link--logo"
              href="#"
            >
              <svg class="navigation__list-item-logo" viewBox="0 0 512 512">
                <g>
                  <path
                    d="M256.4,512C115.12,512,0.18,397.06,0.18,255.77C0.18,114.49,115.12-0.45,256.4-0.45
                                            s256.23,114.94,256.23,256.22c0,8.85-7.17,16.02-16.02,16.02s-16.02-7.17-16.02-16.02c0-123.62-100.57-224.19-224.19-224.19
                                            S32.21,132.16,32.21,255.77c0,123.62,100.57,224.19,224.19,224.19c8.85,0,16.02,7.17,16.02,16.02S265.25,512,256.4,512z"
                  />
                  <path
                    d="M256.4,319.84c-35.32,0-64.06-28.74-64.06-64.06s28.74-64.06,64.06-64.06c35.32,0,64.06,28.73,64.06,64.06
                                            S291.73,319.84,256.4,319.84z M256.4,223.75c-17.66,0-32.02,14.36-32.02,32.02s14.37,32.03,32.02,32.03
                                            c17.66,0,32.03-14.37,32.03-32.03S274.06,223.75,256.4,223.75z"
                  />
                  <path
                    d="M256.4,451.48c-107.91,0-195.7-87.8-195.7-195.71s87.79-195.7,195.7-195.7c8.85,0,16.02,7.17,16.02,16.02
                                            S265.25,92.1,256.4,92.1c-90.25,0-163.67,73.42-163.67,163.67c0,90.25,73.42,163.67,163.67,163.67
                                            c46.48,0,90.93-19.88,121.96-54.52c5.9-6.59,16.03-7.15,22.62-1.25c6.59,5.9,7.15,16.03,1.25,22.61
                                            C365.13,427.72,311.98,451.48,256.4,451.48z"
                  />
                  <path
                    d="M256.37,383.81c-33.66,0-65.38-12.93-89.49-36.5c-24.45-23.91-38.12-55.91-38.5-90.11
                                            c-0.38-34.2,12.58-66.5,36.5-90.95s55.91-38.12,90.11-38.5c0.48-0.01,0.97-0.01,1.46-0.01c33.66,0,65.38,12.93,89.49,36.5
                                            c6.32,6.18,6.44,16.32,0.25,22.65c-6.19,6.32-16.33,6.44-22.65,0.25c-18.33-17.93-42.6-27.74-68.19-27.36
                                            c-25.64,0.28-49.64,10.53-67.57,28.86s-27.65,42.55-27.36,68.19c0.28,25.64,10.53,49.63,28.87,67.56
                                            c18.33,17.93,42.67,27.63,68.19,27.36c25.64-0.28,49.64-10.53,67.57-28.86c6.18-6.32,16.33-6.44,22.65-0.25
                                            c6.32,6.18,6.44,16.32,0.25,22.65c-23.91,24.45-55.91,38.12-90.11,38.5C257.34,383.81,256.85,383.81,256.37,383.81z"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item--mobile-hidden">
            <a class="navigation__list-item-link" href="#">
              Über uns
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item--mobile-hidden">
            <a class="navigation__list-item-link" href="#">
              Usere Angebote
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item--mobile-hidden">
            <a class="navigation__list-item-link" href="#">
              Kunden
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item--mobile-hidden">
            <a class="navigation__list-item-link" href="#">
              Digitaler Euro
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item--mobile-hidden">
            <a class="navigation__list-item-link" href="#">
              Bitcoin
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item--mobile-hidden">
            <a class="navigation__list-item-link" href="#">
              Blockchain
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item--menu">
            <label class="navigation__list-item-link" for="sidenav__opened">
              <svg class="navigation_icon" viewBox="0 0 512 512">
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
    </Fragment>
  );
};

export default Navbar;
