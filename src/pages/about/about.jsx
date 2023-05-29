import React, { Fragment } from "react";
import ClampLines from "react-clamp-lines";
import Bild from "./images/Philipp_1.png";
import "./about.scss";

import "./about.scss";

const About = () => {
  return (
    <Fragment>
      <div className="about-backgroundImage">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-title">Philipp J. A. Hartmannsgruber</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis provident labore repellat.
            </p>
            <ClampLines
              className="custom-class"
              text="Philipp J. A. Hartmannsgruber besitzt einen Master in Finance & Accounting  und einen Bachelor in Wirtschaftswissenschaften.

              Er ist Vorstand beim Blockchain Bundesverband e.V. (Bundesblock).
              
              Als Referent für digitales Geld & digitale Assets konnte er beim Deutschen Sparkassen- und Giroverband (DSGV) seine Expertise in die Sparkassen-Finanzgruppe (SFG) einbringen. Zuvor war er Head of Corporates & Digital Markets bei der CM-Equity AG und Head of Operations des Bundesblock.
              Im Jahr 2019 startete er das non-profit NGO ShareHope.
              
              Beratungserfahrungen konnte er sowohl bei PwC im Bereich Transaction Services (Financial Due Dilligence) sammeln, als auch als Senior-Consultant bei Ventum Consulting. Dort war er als Projektleiter bei MAN Truck & Bus und BMW tätig. 
              
              Er besitzt eine hohe Affinität zu IT-Themen sowie analytisches Denkvermögen. 
              
              Von Kunden wurde er als zuverlässig, vertrauensvoll, lösungsorietiert und integer charakterisiert.
              
              
              
              Er schreibt Artikel über den digitalen Euro, die Blockchain-Technologie, Bitcon sowie das Metaverse und hat einen eigenen Podcast:
              
              Decrypted - Blockchain und Bitcoin mit Philipp . 
              
              Auf Fachkonferenzen ist er zudem als Speaker und Moderator tätig. "
              id="really-unique-id"
              lines={2}
              ellipsis="..."
              moreText="more"
              lessText="less"
              innerElement="p"
            />
          </div>
          <div className="about-picture">
            <img src={Bild} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
