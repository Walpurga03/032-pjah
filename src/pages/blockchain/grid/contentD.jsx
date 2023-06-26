import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Bild1 from "../images/blockchain_2.png";
import {
  bp_MD,
  bp_XS,
  bp_XXS,
  col_P,
  col_S,
  col_S_D,
} from "../../../components/abstracts/variables";

const ContentD = () => {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headingElement = headingRef.current;
      if (headingElement) {
        const { bottom } = headingElement.getBoundingClientRect();
        const isVisible = bottom <= window.innerHeight;
        setAnimateText(isVisible);
        setAnimateImage(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <AnimationText animate={animateText}>
        <Heading ref={headingRef} id="startAnimation">
          Vorteile der permissionless
          <br />
          Blockchain-Technologie
        </Heading>
      </AnimationText>
      <AnimationImage animate={animateImage}>
        <StyledAnimatedImage src={Bild1} alt="Bitcoin-Bild" />
      </AnimationImage>
      <SubHeading>1.Dezentralisierung und Sicherheit:</SubHeading>
      <Text>
        Permissionless-Blockchains basieren auf den Prinzipien der
        Dezentralisierung, was bedeutet, dass keine zentrale Autorität das
        Netzwerk kontrolliert. Dadurch wird sichergestellt, dass keine einzelne
        Entität die vollständige Kontrolle über das System hat, was es resistent
        gegen Zensur und Manipulation macht. Die verteilte Natur von
        permissionless-Blockchains erhöht die Sicherheit, da es keinen einzelnen
        Angriffspunkt gibt, den Hacker ausnutzen können.
      </Text>
      <SubHeading>2.Transparenz und Vertrauen:</SubHeading>
      <Text>
        Die Blockchain-Technologie bietet Transparenz, indem sie alle
        Transaktionen in einem öffentlichen Ledger aufzeichnet. Diese
        Transparenz fördert das Vertrauen der Teilnehmer, da jeder die
        Transaktionshistorie überprüfen und prüfen kann. Im Fall von
        Abrechnungen von Bitcoin-Transaktionen gewährleistet diese Transparenz
        die Integrität des Prozesses und reduziert das Risiko von Betrug.
      </Text>
      <SubHeading>3.Geschwindigkeit und Effizienz:</SubHeading>
      <Text>
        Entgegen den Behauptungen der Bitcoin-Maximalisten können
        permissionless-Blockchains schnell und effizient sein. Während der
        Konsensalgorithmus von Bitcoin (Proof-of-Work, PoW) zu längeren
        Bestätigungszeiten führen kann, haben Fortschritte in der
        Blockchain-Technologie alternative Konsensmechanismen wie Proof-of-Stake
        (PoS) eingeführt, die die Transaktionsgeschwindigkeiten erheblich
        verbessern können, aber Sicherheitsprobleme haben, weshalb sie nicht mit
        dem PoW-Algorithmus von Bitcoin konkurrieren können. Darüber hinaus
        wurden Layer-Zwei-Skalierungslösungen wie das Lightning Network
        entwickelt, um die Transaktionsdurchsatzrate zu erhöhen und Abrechnungen
        schneller und skalierbarer zu machen.
      </Text>
      <SubHeading>4.Globale Zugänglichkeit:</SubHeading>
      <Text>
        Permissionless-Blockchains ermöglichen eine globale Zugänglichkeit,
        sodass jeder mit Internetverbindung daran teilnehmen kann. Diese
        Inklusivität ist besonders vorteilhaft für die Abwicklung von
        Bitcoin-Transaktionen über Ländergrenzen hinweg, da sie
        grenzüberschreitende Transaktionen ohne die Notwendigkeit von
        Zwischenhändlern oder traditionellen Bankensystemen ermöglicht. Diese
        Funktion macht Permissionless-Blockchains ideal zur erleichterten
        schnellen und kostengünstigen internationalen Abwicklung.
      </Text>
      <SubHeading>5.Innovation und Interoperabilität:</SubHeading>
      <Text>
        Die permissionless Natur der Blockchain-Technologie fördert Innovationen
        und unterstützt ein Ökosystem dezentralisierter Anwendungen (dApps) und
        Smart Contracts. Entwickler können auf bestehenden Blockchain-Netzwerken
        aufbauen, um neue Funktionalitäten und Dienstleistungen zu schaffen, die
        verschiedenen Branchen zugutekommen. Darüber hinaus können
        permissionless-Blockchains interoperabel sein, was eine nahtlose
        Integration und Zusammenarbeit zwischen verschiedenen
        Blockchain-Netzwerken ermöglicht und damit ihre Effizienz und
        Nützlichkeit weiter verbessert.
      </Text>
      <SubHeading>
        6.Revolutionierung der Abwicklung traditioneller Finanzwerte:
      </SubHeading>
      <Text>
        Die Blockchain-Technologie birgt ein immenses Potenzial zur
        Revolutionierung der Abwicklung traditioneller Finanzwerte wie Aktien,
        Anleihen und anderen Wertpapieren. Durch Nutzung der Geschwindigkeit und
        der dezentralen Natur von Blockchain-Netzwerken kann der
        Abwicklungsprozess für diese Vermögenswerte drastisch verkürzt werden.
        Traditionell beinhaltet die Abwicklung von Finanztransaktionen mehrere
        Zwischenhändler, komplexe Papierarbeit und zeitaufwändige
        Verifizierungsprozesse, was zu Verzögerungen und erhöhten Kosten führt.
        Mit der Blockchain-Technologie können diese Ineffizienzen eliminiert
        werden. Durch die Digitalisierung und Tokenisierung finanzieller
        Vermögenswerte auf einer Blockchain können Transaktionen direkt zwischen
        den Parteien nahezu in Echtzeit abgewickelt werden, ohne dass
        Zwischenhändler erforderlich sind. Dieser optimierte Prozess verkürzt
        die Abwicklungszeiten von Tagen auf Minuten, verbessert die Liquidität,
        reduziert Gegenparteirisiken und eröffnet neue Möglichkeiten für
        Finanzmärkte. Zusätzlich gewährleisten die Transparenz und
        Unveränderlichkeit der Blockchain-Technologie, dass der
        Abwicklungsprozess sicher, nachvollziehbar und beständig gegen
        betrügerische Aktivitäten ist, wodurch das Vertrauen in das Finanzsystem
        weiter gestärkt wird. Insgesamt bietet die schnelle und dezentrale Natur
        der Blockchain-Technologie eine transformative Lösung für die Abwicklung
        von Aktien, Anleihen und anderen finanziellen Vermögenswerten,
        verbessert die Effizienz und eröffnet innovative Marktmechanismen.
      </Text>
    </Fragment>
  );
};

export default ContentD;

const AnimationImage = styled.div`
  margin: 2rem;
  opacity: 0;
  transform: scale(0.1);
  transition: opacity 1s, transform 1s;
  ${({ animate }) =>
    animate &&
    `
    opacity: 1;
    transform: scale(1);
  `}
`;
const AnimationText = styled.div`
  @media (min-width: ${bp_XXS}) {
    transform: translateY(200%);
    transition: transform 1s;
    ${({ animate }) =>
      animate &&
      `
    transform: translateY(0%);
  `}
  }
`;

const Heading = styled.h2`
  @media (min-width: ${bp_XXS}) {
    color: ${col_P};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 1.5rem;
  }
  @media (min-width: ${bp_XS}) {
    font-size: 2.5rem;
  }
  @media (min-width: ${bp_MD}) {
    font-size: 3.5rem;
  }
`;
const SubHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
  color: ${col_S};
  text-shadow: 1px 1px 2px ${col_P}, 0 0 1em ${col_P}, 0 0 0.2em #000;
`;

const StyledAnimatedImage = styled.img`
  max-width: 500px;
  width: 100%;
  display: block;
  margin: 0 auto 1rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
`;

const Text = styled.p`
  @media (min-width: ${bp_XXS}) {
    margin: 0 auto;
    color: ${col_P};
    font-size: 1.2rem;
    column-count: 1;
    column-gap: 4rem;
    column-rule: 0.125rem solid ${col_S_D};
    text-shadow: 0 0 0.5 ${col_P};
    text-align: justify;
  }
  @media (min-width: ${bp_XS}) {
    column-count: 2;
  }
  @media (min-width: ${bp_MD}) {
    font-size: 1.5rem;
  }
`;
