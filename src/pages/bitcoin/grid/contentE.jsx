import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Bild from "../images/bitcoin_5.png";
import {
  bp_MD,
  bp_XS,
  bp_XXS,
  col_P,
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
          Bitcoin <br /> Das Anlageinstrument und die Zukunftswährung?
        </Heading>
      </AnimationText>
      <AnimationImage animate={animateImage}>
        <StyledAnimatedImage src={Bild} alt="Bitcoin-Bild" />
      </AnimationImage>
      <Text>
        Bitcoin hat sich als eine bahnbrechende digitale Währung etabliert, die
        die Finanzwelt und die Art und Weise, wie wir Werte speichern und
        Transaktionen durchführen, verändert hat. Als Zahlungsmittel bietet es
        sofortige, kostengünstige und grenzenlose Transaktionen, während es als
        Wertspeicher und Recheneinheit fungiert und die Brücke zwischen der
        digitalen und realen Wirtschaft schlägt. Die Knappheit von Bitcoin, die
        durch das begrenzte Angebot und den aufwendigen Mining-Prozess
        geschaffen wird, treibt seine Begehrlichkeit an und legt nahe, dass es
        langfristiges Potenzial für Kurssteigerungen bietet. Die zunehmende
        Akzeptanz von Bitcoin durch Institutionen und Regierungen sowie die
        wachsende Infrastruktur und Nutzbarkeit schaffen ein günstiges Umfeld
        für seine weitere Verbreitung. Während die Welt der digitalen
        Vermögenswerte weiterhin wächst und sich entwickelt, wird Bitcoin
        voraussichtlich eine Schlüsselrolle spielen und als Pionier für neue
        Möglichkeiten und Innovationen dienen. Es bleibt abzuwarten, wie sich
        der Bitcoin-Markt und seine Position in der globalen Wirtschaft in den
        kommenden Jahren weiterentwickeln werden. Ich für meinen Teil bin
        optimistisch.
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
    transform: translateY(150%);
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
`;

const StyledAnimatedImage = styled.img`
  max-width: 500px;
  width: 100%;
  display: block;
  margin: 0 auto 1rem;
  border-radius: 1rem;
`;

const Text = styled.p`
  @media (min-width: ${bp_XXS}) {
    max-width: 800px;
    margin: 0 auto;
    color: ${col_P};
    font-size: 1.2rem;
    column-count: 1;
    column-gap: 4rem;
    column-rule: 0.125rem solid ${col_S_D};
    text-shadow: 0 0 0.5 ${col_P};
    text-align: justify;
  }

  @media (min-width: ${bp_MD}) {
    font-size: 1.5rem;
  }
`;
