import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Bild from "../images/blockchain_4.jpg";
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
          Philipp J.A. Hartmannsgruber <br /> über die Blockchain-Technologie
        </Heading>
      </AnimationText>
      <AnimationImage animate={animateImage}>
        <StyledAnimatedImage src={Bild} alt="Bitcoin-Bild" />
      </AnimationImage>
      <Text>
        Die Vorteile der permissionless-Blockchain-Technologie sind umfangreich
        und gehen über die Behauptungen von Langsamkeit und Ineffizienz hinaus,
        die von Bitcoin-Maximalisten gemacht werden. Permissionless-Blockchains
        bieten Dezentralisierung, Sicherheit, Transparenz, Geschwindigkeit und
        globale Zugänglichkeit, was sie zu einer idealen Technologie für die
        Abwicklung von Bitcoin- und traditionellen Finanzwerte-Transaktionen
        macht.
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
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
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
    margin-bottom: 2rem;
  }

  @media (min-width: ${bp_MD}) {
    font-size: 1.5rem;
  }
`;
