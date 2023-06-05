import React, { Fragment } from "react";
import { useEffect } from "react";
import ClampLines from "react-clamp-lines";
import Bild_P from "./images/Philipp_1.png";
import Bild_DSGV from "./images/DSGV-1920w.webp";
import Bild_DEA from "./images/Digital+Euro+Association.webp";
import Bild_VB from "./images/Volksbank-1920w.webp";
import Bild_BLOCK from "./images/Blockchain-1920w.webp";
import Bild_ANO from "./images/anonym-1920w.webp";
import Bild_BBV from "./images/Bundesblock+Logo_blau-1920w.webp";
import Bild_BVMW from "./images/BVMW-1920w.webp";
import Bild_BWG from "./images/BWG+Logo-1920w.webp";
import Bild_BLOCKB from "./images/Blockchain-Bayern-1920w.webp";
import "./about.scss";

import "./about.scss";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="about-container1">
        <div className="card about--title">
          <h1 className="about--header">Über uns</h1>
        </div>
        <div className="card about--subtitle">
          <h3 className="about--subheader">Philipp J. A. Hartmannsgruber</h3>
        </div>
        <div className="card about--image1">
          <img className="about-bild" src={Bild_P} alt="" />
        </div>
        <div className="card about--text1">
          <p className="about_text">
            Philipp J. A. Hartmannsgruber besitzt einen Master in Finance &
            Accounting und einen Bachelor in Wirtschaftswissenschaften.
            <br />
            <br /> Er ist Vorstand beim Blockchain Bundesverband e.V.
            (Bundesblock). Als Referent für digitales Geld & digitale Assets
            konnte er beim Deutschen Sparkassen- und Giroverband (DSGV) seine
            Expertise in die Sparkassen-Finanzgruppe (SFG) einbringen. Zuvor war
            er Head of Corporates & Digital Markets bei der CM-Equity AG und
            Head of Operations des Bundesblock. Im Jahr 2019 startete er das
            non-profit NGO ShareHope. Beratungserfahrungen konnte er sowohl bei
            PwC im Bereich Transaction Services (Financial Due Dilligence)
            sammeln, als auch als Senior-Consultant bei Ventum Consulting. Dort
            war er als Projektleiter bei MAN Truck & Bus und BMW tätig. Er
            besitzt eine hohe Affinität zu IT-Themen sowie analytisches
            Denkvermögen. Von Kunden wurde er als zuverlässig, vertrauensvoll,
            lösungsorietiert und integer charakterisiert.
            <br />
            <br /> Er schreibt Artikel über den digitalen Euro, die
            Blockchain-Technologie, Bitcon sowie das Metaverse und hat einen
            eigenen Podcast: Decrypted - Blockchain und Bitcoin mit Philipp .
            Auf Fachkonferenzen ist er zudem als Speaker und Moderator tätig.{" "}
          </p>
        </div>
        <div className="card about--image2">
          <img className="about-bild" src={Bild_DSGV} alt="" />
        </div>
        <div className="card about--text2">
          <p className="about_text">
            Seit Beginn des EZB-Projekts zum digitalen Euro begleitet Philipp J.
            A. Hartmannsgruber das Thema intensiv. Er hat den Deutschen
            Sparkassen- und Giroverband (DSGV) in Terminen mit dem digitaler
            Euro EZB-Projektteam sowie den Verantwortlichen der Deutschen
            Bundesbank vertreten. In der 6. ERPB (Euro Retail Payments Board)
            Technical Session hat er bzgl. dem Kompensationsmodell und der User
            Client Journey die Interessen der Sparkassen-Finanzgruppe (SFG) und
            der European Savings and Retail Banking Group (ESBG) vertreten. Über
            Spiegelgruppen des European Payment Councils (EPC), der ESBG und der
            Deutschen Kreditwirtschaft (DK) hat er zudem war er an der
            Spiegelgruppe der Digital Euro Scheme Rulebook Development Group
            (RDG) beteiligt. Gemeinsam mit den Bankenverbänden der DK hat er im
            Dezember 2022 ein Positionspapier zum digitalen Euro und im März
            2023 ein Arbeitspapier zum Giralgeldtoken (Commercial Bank Money
            Token, Version 1.5) veröffentlicht.
          </p>
        </div>
        <div className="card about--image3">
          <img className="about-bild" src={Bild_DEA} alt="" />
        </div>
        <div className="card about--text3">
          <p className="about_text">
            Als Expert der Digital Euro Association (D€A) hat er im August 2022
            ein Positionspapier für Stablecoins verantwortet und am
            Positionspapier zum digitalen Euro mitgeschrieben. Bei der ersten
            Digital Euro Konferenz im April 2023 hat er am Panel zum Thema "The
            Future of Money" teilgenommen, um über den digitalen Euro, den
            Giralgeldtoken, Wholesale CBDC und stablecoins zu sprechen.
          </p>
        </div>
        <div className="card about--image4">
          <img className="about-bild" src={Bild_VB} alt="" />
        </div>
        <div className="card about--text4">
          <p className="about_text">
            Während seiner Tätigkeit bei der CM-Equity AG hat er im Jahr 2021
            für die Volksbank Raiffeisenbank Bayern-Mitte eG das Kryptoportal
            gebaut, mit dem es Kund:innen der Bank möglich ist, Bitcoin zu
            kaufen. Die Bitcoin werden automatisch auf die eigene Wallet
            gesendet ("self-custody - not your keys, not your coins"). Das ist
            die erste Volksbank in Deutschland, die diesen Service anbietet.
          </p>
        </div>
        <div className="card about--image5">
          <img className="about-bild" src={Bild_BLOCK} alt="" />
        </div>
        <div className="card about--text5">
          <p className="about_text">
            Bereits seit 2016 ist Philipp J. A. Hartmannsgruber im Krypto- und
            Blockchain-Umfeld aktiv. Im Jahr 2018 hat er seine Masterarbeit an
            der Otto-Friedrich-Universität Bamberg zur Alltagstauglichkeit von
            Kryptowährungen geschrieben. Seitdem hat er ein Netzwerk an
            Blockchain-Experten in Deutschland und im DACH-Raum aufgebaut und
            seine Fähigkeiten zum Aufbau von Communities unter Beweis gestellt.
          </p>
        </div>
      </div>
      <div className="about-container2">
        <div className="card about--subtitle2">
          <h2 className="about--subheader">UNSER TEAM</h2>
        </div>
        <div className="card about--imageTeam1">
          <img className="about-bild" src={Bild_ANO} alt="" />
          <h4>Dr. A. W.</h4>
          <p>Freelancer</p>
        </div>
        <div className="card about--imageTeam2">
          <img className="about-bild" src={Bild_ANO} alt="" />
          <h4>V. S.</h4>
          <p>Freelancer</p>
        </div>
        <div className="card about--subtitle3">
          <h3 className="about--subheader">Mitgliedschaften</h3>
          <p className="about_text-mitgliedschaft">
            In folgenden Verbänden ist PJAH Consulting aktives Mitglied
          </p>
        </div>
        <div className="card about--imageM1">
          <img className="about-bild" src={Bild_BBV} alt="" />
        </div>
        <div className="card about--imageM2">
          <img className="about-bild" src={Bild_BVMW} alt="" />
        </div>
        <div className="card about--imageM3">
          <img className="about-bild" src={Bild_BWG} alt="" />
        </div>
        <div className="card about--imageM4">
          <img className="about-bild" src={Bild_BLOCKB} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default About;

{
  /* <div className="about-backgroundImage">
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
      </div> */
}
