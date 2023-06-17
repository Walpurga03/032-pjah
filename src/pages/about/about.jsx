import React, { Fragment } from "react";
import ReadMore from "../../components/readMore/readMore";
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

import SmokeAnimation from "../../components/smokeAnimation/smokeAnimation";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <SmokeAnimation />
      <div className="about-container1">
        <div className="card about--subtitle">
          <h3 className="about--subheader">Philipp J. A. Hartmannsgruber</h3>
        </div>
        <div className="card about--image1">
          <img className="about-bild" src={Bild_P} alt="" />
        </div>
        <div className="card about--text1">
          <ReadMore
            shortText={
              <p className="about_text">
                <a
                  className="about_hyperlink"
                  href="https://www.linkedin.com/in/pjah/"
                >
                  Philipp J. A. Hartmannsgruber&nbsp;
                </a>
                besitzt einen Master in Finance & Accounting und einen Bachelor
                in Wirtschaftswissenschaften.
                <br />
                <br /> Er ist Vorstand beim Blockchain Bundesverband e.V. (
                <a className="about_hyperlink" href="https://bundesblock.de/">
                  Bundesblock
                </a>
                ). Als Referent für digitales Geld & digitale Assets konnte er
                beim Deutschen Sparkassen- und Giroverband (
                <a className="about_hyperlink" href="https://www.dsgv.de/">
                  DSGV
                </a>
                ) seine Expertise in die Sparkassen-Finanzgruppe (SFG)
                einbringen. Zuvor war er Head of Corporates & Digital Markets
                bei der
                <a className="about_hyperlink" href="https://cm-equity.de/en/">
                  &nbsp;CM-Equity AG&nbsp;
                </a>
                und Head of Operations des
                <a className="about_hyperlink" href="https://bundesblock.de/">
                  &nbsp;Bundesblock
                </a>
                .
              </p>
            }
            longText={
              <p className="about_text">
                Im Jahr 2019 startete er das non-profit NGO
                <a
                  className="about_hyperlink"
                  href="https://www.linkedin.com/company/sharehopeggmbh/"
                >
                  &nbsp;ShareHope
                </a>
                . Beratungserfahrungen konnte er sowohl bei
                <a className="about_hyperlink" href="https://www.pwc.de/">
                  &nbsp;PwC&nbsp;
                </a>
                im Bereich Transaction Services (Financial Due Dilligence)
                sammeln, als auch als Senior-Consultant bei
                <a
                  className="about_hyperlink"
                  href="https://www.ventum-consulting.com/"
                >
                  &nbsp; Ventum Consulting
                </a>
                . Dort war er als Projektleiter bei MAN Truck & Bus und BMW
                tätig. Er besitzt eine hohe Affinität zu IT-Themen sowie
                analytisches Denkvermögen. Von Kunden wurde er als zuverlässig,
                vertrauensvoll, lösungsorietiert und integer charakterisiert.
                <br />
                <br /> Er schreibt Artikel über den digitalen Euro, die
                Blockchain-Technologie, Bitcon sowie das Metaverse und hat einen
                eigenen Podcast:
                <a
                  className="about_hyperlink"
                  href="https://podcasts.apple.com/de/podcast/decrypted-blockchain-bitcoin-mit-philipp-pjah/id1546392251"
                >
                  &nbsp;Decrypted - Blockchain und Bitcoin mit Philipp
                </a>
                . Auf Fachkonferenzen ist er zudem als
                <a className="about_hyperlink" href="https://linktr.ee/pjah">
                  &nbsp; Speaker und Moderator&nbsp;
                </a>
                tätig.
              </p>
            }
          />
        </div>
        <div className="card about--image2">
          <img className="about-bild" src={Bild_DSGV} alt="" />
        </div>
        <div className="card about--text2">
          <ReadMore
            shortText={
              <p className="about_text">
                Seit Beginn des EZB-Projekts zum digitalen Euro begleitet
                <a
                  className="about_hyperlink"
                  href="https://www.linkedin.com/in/pjah/"
                >
                  &nbsp;Philipp J. A. Hartmannsgruber&nbsp;
                </a>
                das Thema intensiv. Er hat den
                <a className="about_hyperlink" href="https://www.dsgv.de/">
                  &nbsp; Deutschen Sparkassen- und Giroverband (DSGV)&nbsp;
                </a>
                in Terminen mit dem digitaler Euro EZB-Projektteam sowie den
                Verantwortlichen der Deutschen Bundesbank vertreten.
              </p>
            }
            longText={
              <p className="about_text">
                In der
                <a
                  className="about_hyperlink"
                  href="https://www.ecb.europa.eu/paym/digital_euro/investigation/governance/shared/files/ecb.degov230222_erpbagenda.en.pdf?82612492bb386a9fdeef97e5b28e625d"
                >
                  &nbsp; 6. ERPB (Euro Retail Payments Board) Technical
                  Session&nbsp;
                </a>
                hat er bzgl. dem Kompensationsmodell und der User Client Journey
                die Interessen der
                <a
                  className="about_hyperlink"
                  href="https://www.dsgv.de/sparkassen-finanzgruppe.html"
                >
                  &nbsp;Sparkassen-Finanzgruppe (SFG)&nbsp;
                </a>
                und der
                <a
                  className="about_hyperlink"
                  href="https://www.wsbi-esbg.org/"
                >
                  &nbsp;European Savings and Retail Banking Group (ESBG)&nbsp;
                </a>
                vertreten. Über Spiegelgruppen des
                <a
                  className="about_hyperlink"
                  href="https://www.europeanpaymentscouncil.eu/"
                >
                  &nbsp;European Payment Councils (EPC)&nbsp;
                </a>
                , der
                <a
                  className="about_hyperlink"
                  href="https://www.wsbi-esbg.org/"
                >
                  &nbsp;ESBG&nbsp;
                </a>
                und der
                <a className="about_hyperlink" href="https://die-dk.de/">
                  &nbsp; Deutschen Kreditwirtschaft (DK)&nbsp;
                </a>
                hat er zudem war er an der Spiegelgruppe der
                <a
                  className="about_hyperlink"
                  href="https://www.ecb.europa.eu/paym/digital_euro/governance/html/index.en.html"
                >
                  &nbsp; Digital Euro Scheme Rulebook Development Group
                  (RDG)&nbsp;
                </a>
                beteiligt. Gemeinsam mit den Bankenverbänden der DK hat er im
                Dezember 2022 ein
                <a
                  className="about_hyperlink"
                  href="https://die-dk.de/media/files/Digitaler_Euro-Weichenstellung_f%C3%BCr_die_Zukunft_tGaLVWf.pdf"
                >
                  &nbsp; Positionspapier zum digitalen Euro&nbsp;
                </a>
                und im März 2023 ein Arbeitspapier zum
                <a
                  className="about_hyperlink"
                  href="https://die-dk.de/media/files/20230317_GBIC_Working_Paper_on_Commercial_Bank_Money_Token_V1.5.pdf"
                >
                  &nbsp;Giralgeldtoken (Commercial Bank Money Token, Version
                  1.5)&nbsp;
                </a>
                veröffentlicht.
              </p>
            }
          />
        </div>
        <div className="card about--image3">
          <img className="about-bild" src={Bild_DEA} alt="" />
        </div>
        <div className="card about--text3">
          <p className="about_text">
            Als
            <a
              className="about_hyperlink"
              href="https://home.digital-euro-association.de/experts"
            >
              &nbsp;Expert&nbsp;
            </a>
            der
            <a
              className="about_hyperlink"
              href="https://home.digital-euro-association.de/en"
            >
              &nbsp;Digital Euro Association (D€A)&nbsp;
            </a>
            hat er im August 2022 ein Positionspapier für
            <a
              className="about_hyperlink"
              href="https://7869715.fs1.hubspotusercontent-na1.net/hubfs/7869715/Private%20Working%20Group%20paper.pdf"
            >
              &nbsp;Stablecoins&nbsp;
            </a>
            verantwortet und am Positionspapier zum
            <a
              className="about_hyperlink"
              href="https://7869715.fs1.hubspotusercontent-na1.net/hubfs/7869715/New%20-%20Public%20DEA%20Working%20Group%20Paper.pdf"
            >
              &nbsp;digitalen Euro&nbsp;
            </a>
            mitgeschrieben. Bei der ersten
            <a
              className="about_hyperlink"
              href="https://home.digital-euro-association.de/en-us/digital-euro-conference"
            >
              &nbsp;Digital Euro Konferenz&nbsp;
            </a>
            im April 2023 hat er am Panel zum Thema "The Future of Money"
            teilgenommen, um über den digitalen Euro, den Giralgeldtoken,
            Wholesale CBDC und stablecoins zu sprechen.
          </p>
        </div>
        <div className="card about--image4">
          <img className="about-bild" src={Bild_VB} alt="" />
        </div>
        <div className="card about--text4">
          <p className="about_text">
            Während seiner Tätigkeit bei der
            <a className="about_hyperlink" href="https://cm-equity.de/en/">
              &nbsp;CM-Equity AG&nbsp;
            </a>
            hat er im Jahr 2021 für die
            <a
              className="about_hyperlink"
              href="https://www.vr-bayernmitte.de/startseite.html"
            >
              &nbsp;Volksbank Raiffeisenbank Bayern-Mitte eG&nbsp;
            </a>
            das
            <a
              className="about_hyperlink"
              href="https://www.vr-bayernmitte.de/privatkunden/sparen-geldanlage/bitcoin.html"
            >
              &nbsp;Kryptoportal&nbsp;
            </a>
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
            Bereits seit 2016 ist
            <a
              className="about_hyperlink"
              href="https://www.linkedin.com/in/pjah/"
            >
              &nbsp;Philipp J. A. Hartmannsgruber&nbsp;
            </a>
            im Krypto- und Blockchain-Umfeld aktiv. Im Jahr 2018 hat er seine
            Masterarbeit an der
            <a className="about_hyperlink" href="https://www.uni-bamberg.de/">
              &nbsp;Otto-Friedrich-Universität Bamberg&nbsp;
            </a>
            zur Alltagstauglichkeit von Kryptowährungen geschrieben. Seitdem hat
            er ein Netzwerk an Blockchain-Experten in Deutschland und im
            DACH-Raum aufgebaut und seine Fähigkeiten zum Aufbau von Communities
            unter Beweis gestellt.
          </p>
        </div>
      </div>
      <div className="about-container2">
        <div className="card about--subtitle2">
          <h2 className="about--subheader-container2">UNSER TEAM</h2>
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
          <h3 className="about--subheader-container2">Mitgliedschaften</h3>
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
