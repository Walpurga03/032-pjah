import React, { Fragment } from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <h4 className="footer__heading">
          Kontaktieren sie mich über diese möglichkeiten
        </h4>
        <div className="footer__container">
          <div className="footer__contact-item">
            <div className="footer__contact-item-icon">
              <svg className="footer_icon" viewBox="0 0 512 512">
                <path
                  d="M432.93,176.46L278.35,76.46c-13.6-8.8-31.11-8.8-44.71,0l-154.59,100c-11.72,7.58-18.8,20.6-18.8,34.56v185.41
                                    c0,22.73,18.43,41.16,41.16,41.16h309.16c22.73,0,41.16-18.43,41.16-41.16V211.01C451.73,197.05,444.65,184.04,432.93,176.46z
                                        M206.14,339.84l-88.63,71.18c-2.77,2.22-6.09,3.31-9.38,3.31c-4.39,0-8.74-1.92-11.7-5.61c-5.19-6.46-4.16-15.9,2.3-21.09
                                    l88.63-71.18c6.46-5.19,15.9-4.16,21.09,2.3C213.63,325.21,212.6,334.66,206.14,339.84z M244.25,307.65l-122.57-79.29
                                    c-18.07-11.69-9.79-39.74,11.73-39.74h245.15c21.53,0,29.81,28.05,11.73,39.74l-122.58,79.29
                                    C260.57,312.27,251.39,312.27,244.25,307.65z M414.98,408.72c-2.96,3.69-7.31,5.61-11.71,5.61c-3.3,0-6.61-1.08-9.38-3.31
                                    l-88.63-71.18c-6.46-5.19-7.49-14.63-2.3-21.09c5.19-6.46,14.63-7.49,21.09-2.3l88.63,71.18
                                    C419.14,392.82,420.17,402.26,414.98,408.72z"
                />
              </svg>
            </div>
            <a
              className="footer__contact-item-link"
              href="mailto:consulting@pjah.de"
              target="_blank"
              rel="noreferrer"
            >
              consulting@pjah.de
            </a>
          </div>
          <div className="footer__contact-item">
            <div className="footer__contact-item-icon footer__contact-item-icon--phone">
              <svg className="footer_icon" viewBox="0 0 512 512">
                <g>
                  <path
                    d="M412.93,331.8l-44.52-24c-10.84-5.84-19.27-1.62-28.6,11.23c-20.5,28.2-30.44,33.78-55.6,19.73
                                        c-23.47-13.1-40.28-28.67-61.36-49.75c-21.08-21.08-36.64-37.89-49.75-61.36c-14.04-25.15-8.47-35.1,19.73-55.59
                                        c12.85-9.34,17.07-17.76,11.23-28.6l-24-44.52c-9.81-18.94-23.71-21.1-44.28-14.14c-28.37,9.6-55.82,50.57-54.43,70.01
                                        c4.07,56.81,32.51,125.07,91.71,184.26c59.19,59.2,127.45,87.64,184.27,91.71c19.44,1.39,60.14-26.33,69.74-54.7
                                        C434.03,355.52,431.86,341.61,412.93,331.8z"
                  />
                  <path
                    d="M279.74,160.35c-9.39,0.08-16.93,7.75-16.85,17.13c0.08,9.34,7.67,16.85,16.99,16.85
                                        c0.16-0.01,0.32,0,0.46,0c10.11,0,19.58,3.9,26.7,11.02c7.19,7.19,11.1,16.79,11.02,27.01c-0.08,9.38,7.47,17.05,16.85,17.13
                                        h0.14c9.31,0,16.91-7.52,16.99-16.85c0.16-19.41-7.29-37.63-20.97-51.32C317.38,167.64,298.88,160.47,279.74,160.35z
                                            M381.17,131.21c-27.06-27.07-63.52-41.95-101.35-41.75c-9.39,0.03-16.96,7.67-16.93,17.05c0.03,9.36,7.63,16.93,16.99,16.93
                                        c0.11-0.02,0.3-0.01,0.46,0c29.02,0,56.29,11.28,76.8,31.8c20.6,20.6,31.9,48.02,31.8,77.2c-0.03,9.39,7.55,17.02,16.93,17.05
                                        h0.06c9.36,0,16.96-7.57,16.99-16.93C423.05,194.25,408.23,158.26,381.17,131.21z"
                  />
                </g>
              </svg>
            </div>
            <a
              className="footer__contact-item-link"
              href="tel:+491708082019"
              target="_blank"
              rel="noreferrer"
            >
              +49-170-808-2019
            </a>
          </div>
        </div>
        <div className="social-media">
          <a href="https://twitter.com/pjahConsulting">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/pjah.consulting/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/pjah/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://medium.com/pjah-consulting">
            <i className="fab fa-medium"></i>
          </a>
          <a href="https://wa.me/491708082019?text=">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <footer className="footer__footer">
          <ul className="footer__footer-list">
            <li>
              <p className="footer__footer-link">
                Alle Rechte vorbehalten | PJAH Consulting © 2023
              </p>
            </li>
            <li>
              <a className="footer__footer-link" href="/impressum">
                Impressum
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </Fragment>
  );
};

export default Footer;
