import React, { Fragment } from "react";
import Foto_1 from "../../images/tours/pexels-mirco-violent-blur-4033244.jpg";
import Foto_2 from "../../images/tours/pexels-gantas-vaiciulenas-4209628.jpg";
import Foto_3 from "../../images/tours/pexels-jack-redgate-2929227-cropped.jpg";
import Foto_4 from "../../images/tours/pexels-matheus-bertelli-4558421.jpg";
import Foto_5 from "../../images/tours/pexels-oziel-gomez-1578459.jpg";
import "./kunden.scss";

const Kunden = () => {
  return (
    <Fragment>
      <section className="tours">
        <div className="tours__container">
          <h2 className="tours__heading">Unsere Kunden</h2>
          <div className="tours__cards">
            <div className="tours__card">
              <img
                className="tours__card-img"
                src={Foto_1}
                alt="Photographer"
              />
              <div className="tours__card-icon-background" />
              <div className="tours__card-icon-container">
                <svg className="tours__card-icon" viewBox="0 0 512 512">
                  <g
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 12,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                  >
                    <path d="M401.97,168.01H109.96c-9.94,0-18-8.06-18-18v-45.96c0-9.94,8.06-18,18-18h292.02c9.94,0,18,8.06,18,18v45.96C419.97,159.96,411.91,168.01,401.97,168.01z" />
                    <line x1="343.63" y1="86.06" x2="343.63" y2="168.01" />
                    <line x1="168.3" y1="86.06" x2="168.3" y2="168.01" />
                    <line x1="238.81" y1="227.36" x2="273.12" y2="227.36" />
                    <path d="M311.3,227.36h29.61v73.34c0,15.18-12.3,27.48-27.48,27.48H198.5c-15.18,0-27.48-12.3-27.48-27.48v-73.34h29.61" />
                    <path d="M292.21,286.7L292.21,286.7c-10.54,0-19.09-8.55-19.09-19.09v-99.6h38.18v99.6C311.3,278.15,302.75,286.7,292.21,286.7z" />
                    <path d="M200.63,227.36v-59.34h38.18v99.6c0,10.54-8.55,19.09-19.09,19.09h0c-10.54,0-19.09-8.55-19.09-19.09V227.36" />
                    <path d="M332.77,425.87H179.23c-21.53,0-38.99-17.46-38.99-38.99V168.01h231.52v218.86C371.76,408.41,354.3,425.87,332.77,425.87z" />
                    <line x1="179.24" y1="372.48" x2="332.76" y2="372.48" />
                    <path d="M393.59,375.33h-21.82V286.7h21.82c11,0,19.91,8.92,19.91,19.91v48.8C413.5,366.42,404.58,375.33,393.59,375.33z" />
                    <line x1="413.5" y1="319.1" x2="394.43" y2="319.1" />
                    <path d="M118.41,375.33h21.82V286.7h-21.82c-11,0-19.91,8.92-19.91,19.91v48.8C98.5,366.42,107.42,375.33,118.41,375.33z" />
                    <line x1="98.5" y1="319.1" x2="117.57" y2="319.1" />
                  </g>
                </svg>
              </div>
              <div className="tours__card-content">
                <h5 className="tours__card-heading">Tour durch die Wüste</h5>
                <p className="tours__card-location">
                  <span className="tours__card-location-icon">
                    <svg className="icon" viewBox="0 0 512 512">
                      <path
                        d="M256,490.71L120.9,289.84c-17.27-25.68-26.91-55.17-27.88-85.31c-0.91-28.32,5.75-56.71,19.27-82.09
                                      c13.52-25.38,33.35-46.75,57.36-61.81c25.55-16.01,55.4-24.48,86.35-24.48c30.94,0,60.8,8.47,86.35,24.48
                                      c24.01,15.05,43.85,36.42,57.36,61.81c13.52,25.38,20.18,53.77,19.27,82.09c-0.97,30.13-10.61,59.63-27.88,85.31L256,490.71z
                                      M256,73.71c-47.09,0-88.42,24.82-110.56,66.38c-22.14,41.57-19.66,89.71,6.62,128.79L256,423.42l103.94-154.54
                                      c26.28-39.08,28.76-87.22,6.62-128.79C344.42,98.53,303.09,73.71,256,73.71z"
                      />
                      <path
                        d="M256,284.05c-46.77,0-84.83-38.05-84.83-84.83s38.05-84.83,84.83-84.83c46.78,0,84.83,38.05,84.83,84.83
                                      S302.78,284.05,256,284.05z M256,151.95c-26.07,0-47.27,21.21-47.27,47.27s21.21,47.27,47.27,47.27
                                      c26.07,0,47.27-21.21,47.27-47.27S282.07,151.95,256,151.95z"
                      />
                    </svg>
                  </span>
                  <span className="tours__card-location-text">
                    Bateen Liwa, UAE
                  </span>
                </p>
                <p className="tours__card-desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Sed diam
                  nonummy nibh.
                </p>
              </div>
            </div>
            <div className="tours__card">
              <img
                className="tours__card-img"
                src={Foto_2}
                alt="Photographer"
              />
              <div className="tours__card-icon-background" />
              <div className="tours__card-icon-container">
                <svg className="tours__card-icon" viewBox="0 0 512 512">
                  <g
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 12,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                  >
                    <path d="M198.46,173.69L87.04,382.06H347.1L235.67,173.69C227.72,158.83,206.41,158.83,198.46,173.69z" />
                    <line x1="175.55" y1="273.48" x2="117.49" y2="382.06" />
                    <line x1="182.19" y1="344.5" x2="162.11" y2="382.06" />
                    <path d="M123.36,136.55c8.77-3.08,18.37,1.52,21.45,10.29" />
                    <path d="M144.81,146.84c-3.08-8.77,1.52-18.37,10.29-21.45" />
                    <path d="M294.33,166.69c8.67,3.34,12.99,13.08,9.64,21.75" />
                    <path d="M303.98,188.45c3.34-8.67,13.08-12.99,21.75-9.64" />
                    <path
                      d="M184.49,236.35c6.2-1.63,12.76,0.8,16.42,6.06c6.42,9.25,20.3,8.61,25.84-1.19l4.55-8.04
                                  c3.24-5.74,9.8-8.75,16.27-7.46l17.83,3.54l-29.72-55.57c-7.95-14.86-29.26-14.86-37.21,0l-36.69,68.62L184.49,236.35z"
                    />
                    <path d="M290.52,276.26l27.66-51.21c7.59-14.19,27.94-14.19,35.53,0l71.26,133.25h-90.57" />
                    <line x1="364.36" y1="283.96" x2="404.11" y2="358.3" />
                    <line x1="359.82" y1="332.59" x2="373.57" y2="358.3" />
                    <path
                      d="M358.24,258.54c-4.27-1.12-8.74,0.6-11.28,4.21c-4.41,6.27-13.87,5.81-17.65-0.88l-3.11-5.5
                                  c-2.22-3.93-6.71-5.99-11.14-5.11l-12.21,2.42l15.32-28.65c7.59-14.19,27.94-14.19,35.53,0l20.09,37.58L358.24,258.54z"
                    />
                  </g>
                </svg>
              </div>
              <div className="tours__card-content">
                <h5 className="tours__card-heading">Drohnen-Fotografie</h5>
                <p className="tours__card-location">
                  <span className="tours__card-location-icon">
                    <svg className="icon" viewBox="0 0 512 512">
                      <path
                        d="M256,490.71L120.9,289.84c-17.27-25.68-26.91-55.17-27.88-85.31c-0.91-28.32,5.75-56.71,19.27-82.09
                                      c13.52-25.38,33.35-46.75,57.36-61.81c25.55-16.01,55.4-24.48,86.35-24.48c30.94,0,60.8,8.47,86.35,24.48
                                      c24.01,15.05,43.85,36.42,57.36,61.81c13.52,25.38,20.18,53.77,19.27,82.09c-0.97,30.13-10.61,59.63-27.88,85.31L256,490.71z
                                      M256,73.71c-47.09,0-88.42,24.82-110.56,66.38c-22.14,41.57-19.66,89.71,6.62,128.79L256,423.42l103.94-154.54
                                      c26.28-39.08,28.76-87.22,6.62-128.79C344.42,98.53,303.09,73.71,256,73.71z"
                      />
                      <path
                        d="M256,284.05c-46.77,0-84.83-38.05-84.83-84.83s38.05-84.83,84.83-84.83c46.78,0,84.83,38.05,84.83,84.83
                                      S302.78,284.05,256,284.05z M256,151.95c-26.07,0-47.27,21.21-47.27,47.27s21.21,47.27,47.27,47.27
                                      c26.07,0,47.27-21.21,47.27-47.27S282.07,151.95,256,151.95z"
                      />
                    </svg>
                  </span>
                  <span className="tours__card-location-text">
                    Porvoo, Finland
                  </span>
                </p>
                <p className="tours__card-desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Sed diam
                  nonummy nibh.
                </p>
              </div>
            </div>
            <div className="tours__card">
              <img
                className="tours__card-img"
                src={Foto_3}
                alt="Photographer with backpack"
              />
              <div className="tours__card-icon-background" />
              <div className="tours__card-icon-container">
                <svg className="tours__card-icon" viewBox="0 0 512 512">
                  <g
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 12,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                  >
                    <circle cx={256} cy={256} r="136.28" />
                    <circle cx={256} cy={256} r="169.29" />
                    <line x1="352.33" y1="159.62" x2={322} y2="189.95" />
                    <line x1="189.93" y1="322.01" x2="159.61" y2="352.34" />
                    <line x1="352.33" y1="352.34" x2={322} y2="322.01" />
                    <line x1="189.93" y1="189.95" x2="159.61" y2="159.62" />
                    <path d="M356.76,119.6c9.82-9.82,25.75-9.82,35.58,0s9.82,25.75,0,35.58" />
                    <path d="M155.24,392.29c-9.82,9.82-25.75,9.82-35.58,0s-9.82-25.75,0-35.58" />
                    <polygon points="290.38,165.01 232.46,247.1 221.61,346.98 279.53,264.89 " />
                    <line x1="232.46" y1="247.1" x2="279.53" y2="264.89" />
                  </g>
                </svg>
              </div>
              <div className="tours__card-content">
                <h5 className="tours__card-heading">Bergsteiger-Touren</h5>
                <p className="tours__card-location">
                  <span className="tours__card-location-icon">
                    <svg className="icon" viewBox="0 0 512 512">
                      <path
                        d="M256,490.71L120.9,289.84c-17.27-25.68-26.91-55.17-27.88-85.31c-0.91-28.32,5.75-56.71,19.27-82.09
                                      c13.52-25.38,33.35-46.75,57.36-61.81c25.55-16.01,55.4-24.48,86.35-24.48c30.94,0,60.8,8.47,86.35,24.48
                                      c24.01,15.05,43.85,36.42,57.36,61.81c13.52,25.38,20.18,53.77,19.27,82.09c-0.97,30.13-10.61,59.63-27.88,85.31L256,490.71z
                                      M256,73.71c-47.09,0-88.42,24.82-110.56,66.38c-22.14,41.57-19.66,89.71,6.62,128.79L256,423.42l103.94-154.54
                                      c26.28-39.08,28.76-87.22,6.62-128.79C344.42,98.53,303.09,73.71,256,73.71z"
                      />
                      <path
                        d="M256,284.05c-46.77,0-84.83-38.05-84.83-84.83s38.05-84.83,84.83-84.83c46.78,0,84.83,38.05,84.83,84.83
                                      S302.78,284.05,256,284.05z M256,151.95c-26.07,0-47.27,21.21-47.27,47.27s21.21,47.27,47.27,47.27
                                      c26.07,0,47.27-21.21,47.27-47.27S282.07,151.95,256,151.95z"
                      />
                    </svg>
                  </span>
                  <span className="tours__card-location-text">
                    Montreal, Kanada
                  </span>
                </p>
                <p className="tours__card-desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Sed diam
                  nonummy nibh.
                </p>
              </div>
            </div>
            <div className="tours__card">
              <img
                className="tours__card-img"
                src={Foto_4}
                alt="Photographer with backpack"
              />
              <div className="tours__card-icon-background" />
              <div className="tours__card-icon-container">
                <svg className="tours__card-icon" viewBox="0 0 512 512">
                  <g
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 12,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                  >
                    <polygon points="256,364.88 171.15,402.75 86.31,364.88 86.31,109.09 171.15,146.96 256,109.09 " />
                    <polyline points="86.31,236.98 171.15,274.85 256,236.98 " />
                    <line x1="171.15" y1="146.96" x2="171.15" y2="402.75" />
                    <polygon points="425.9,364.88 341.05,402.75 256.2,364.88 256.2,109.09 341.05,146.96 425.9,109.09 " />
                    <line x1="376.32" y1="259.11" x2="425.9" y2="236.98" />
                    <line x1="256.2" y1="236.98" x2="305.78" y2="259.11" />
                    <line x1="341.05" y1="313.36" x2="341.05" y2="402.75" />
                    <line x1="341.05" y1="146.96" x2="341.05" y2="196.35" />
                    <circle cx="341.05" cy="237.32" r="17.78" />
                    <path
                      d="M306.44,260.16l34.61,53.2l34.61-53.2c17.87-27.47-1.84-63.81-34.61-63.81h0
                                  C308.28,196.35,288.57,232.69,306.44,260.16z"
                    />
                  </g>
                </svg>
              </div>
              <div className="tours__card-content">
                <h5 className="tours__card-heading">Eiswanderungen</h5>
                <p className="tours__card-location">
                  <span className="tours__card-location-icon">
                    <svg className="icon" viewBox="0 0 512 512">
                      <path
                        d="M256,490.71L120.9,289.84c-17.27-25.68-26.91-55.17-27.88-85.31c-0.91-28.32,5.75-56.71,19.27-82.09
                                      c13.52-25.38,33.35-46.75,57.36-61.81c25.55-16.01,55.4-24.48,86.35-24.48c30.94,0,60.8,8.47,86.35,24.48
                                      c24.01,15.05,43.85,36.42,57.36,61.81c13.52,25.38,20.18,53.77,19.27,82.09c-0.97,30.13-10.61,59.63-27.88,85.31L256,490.71z
                                      M256,73.71c-47.09,0-88.42,24.82-110.56,66.38c-22.14,41.57-19.66,89.71,6.62,128.79L256,423.42l103.94-154.54
                                      c26.28-39.08,28.76-87.22,6.62-128.79C344.42,98.53,303.09,73.71,256,73.71z"
                      />
                      <path
                        d="M256,284.05c-46.77,0-84.83-38.05-84.83-84.83s38.05-84.83,84.83-84.83c46.78,0,84.83,38.05,84.83,84.83
                                      S302.78,284.05,256,284.05z M256,151.95c-26.07,0-47.27,21.21-47.27,47.27s21.21,47.27,47.27,47.27
                                      c26.07,0,47.27-21.21,47.27-47.27S282.07,151.95,256,151.95z"
                      />
                    </svg>
                  </span>
                  <span className="tours__card-location-text">
                    Nuuk, Grönland
                  </span>
                </p>
                <p className="tours__card-desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Sed diam
                  nonummy nibh.
                </p>
              </div>
            </div>
            <div className="tours__card">
              <img
                className="tours__card-img"
                src={Foto_5}
                alt="Photographer walking in snow"
              />
              <div className="tours__card-icon-background" />
              <div className="tours__card-icon-container">
                <svg className="tours__card-icon" viewBox="0 0 512 512">
                  <g
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 12,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                  >
                    <circle className="st0" cx="166.38" cy="261.49" r="29.89" />
                    <path
                      className="st0"
                      d="M108.2,299.88l58.18,89.42l58.18-89.42c30.04-46.17-3.09-107.26-58.18-107.26l0,0
                                  C111.3,192.62,78.17,253.7,108.2,299.88z"
                    />
                    <circle className="st0" cx="373.56" cy={125} r="17.68" />
                    <path
                      className="st0"
                      d="M339.14,147.72l34.42,52.9l34.42-52.9c17.77-27.32-1.83-63.46-34.42-63.46l0,0
                                  C340.97,84.26,321.37,120.4,339.14,147.72z"
                    />
                    <path
                      className="st0"
                      d="M184.95,360.76c19.9,4.35,34.05,15.49,34.05,28.54c0,16.84-23.56,30.5-52.62,30.5s-52.62-13.65-52.62-30.5
                                  c0-13.06,14.15-24.19,34.05-28.54"
                    />
                    <path
                      className="st0"
                      d="M383.07,186.01c12.99,2.35,22.43,9.37,22.43,17.68c0,10.22-14.3,18.51-31.94,18.51s-31.94-8.29-31.94-18.51
                                  c0-8.3,9.43-15.33,22.43-17.68"
                    />
                    <path
                      className="st0"
                      d="M373.56,222.19v21.41c0,16.07-13.03,29.1-29.1,29.1h-28.33c-16.07,0-29.1,13.03-29.1,29.1v0.19
                                  c0,16.07,13.03,29.1,29.1,29.1h2.88c16.07,0,29.1,13.03,29.1,29.1v0c0,16.07-13.03,29.1-29.1,29.1H219"
                    />
                  </g>
                </svg>
              </div>
              <div className="tours__card-content">
                <h5 className="tours__card-heading">Polarbären-Fotografie</h5>
                <p className="tours__card-location">
                  <span className="tours__card-location-icon">
                    <svg className="icon" viewBox="0 0 512 512">
                      <path
                        d="M256,490.71L120.9,289.84c-17.27-25.68-26.91-55.17-27.88-85.31c-0.91-28.32,5.75-56.71,19.27-82.09
                                      c13.52-25.38,33.35-46.75,57.36-61.81c25.55-16.01,55.4-24.48,86.35-24.48c30.94,0,60.8,8.47,86.35,24.48
                                      c24.01,15.05,43.85,36.42,57.36,61.81c13.52,25.38,20.18,53.77,19.27,82.09c-0.97,30.13-10.61,59.63-27.88,85.31L256,490.71z
                                      M256,73.71c-47.09,0-88.42,24.82-110.56,66.38c-22.14,41.57-19.66,89.71,6.62,128.79L256,423.42l103.94-154.54
                                      c26.28-39.08,28.76-87.22,6.62-128.79C344.42,98.53,303.09,73.71,256,73.71z"
                      />
                      <path
                        d="M256,284.05c-46.77,0-84.83-38.05-84.83-84.83s38.05-84.83,84.83-84.83c46.78,0,84.83,38.05,84.83,84.83
                                      S302.78,284.05,256,284.05z M256,151.95c-26.07,0-47.27,21.21-47.27,47.27s21.21,47.27,47.27,47.27
                                      c26.07,0,47.27-21.21,47.27-47.27S282.07,151.95,256,151.95z"
                      />
                    </svg>
                  </span>
                  <span className="tours__card-location-text">Antarctica</span>
                </p>
                <p className="tours__card-desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Sed diam
                  nonummy nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Kunden;
