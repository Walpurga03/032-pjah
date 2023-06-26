import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Bild1 from "../images/bitcoin_7.jpg";
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
          Bitcoin
          <br />
          Die Entstehung
        </Heading>
      </AnimationText>
      <AnimationImage animate={animateImage}>
        <StyledAnimatedImage src={Bild1} alt="Bitcoin-Bild" />
      </AnimationImage>
      <Text>
        Im Herzen von Bitcoin liegt das bahnbrechende Bitcoin-Whitepaper, das am
        31. Oktober 2008 von einer Einzelperson oder einer Gruppe unter dem
        Pseudonym Satoshi Nakamoto veröffentlicht wurde. Das Whitepaper stellte
        Bitcoin als ein Peer-to-Peer-Elektronikgeldsystem vor, das sichere,
        dezentralisierte Transaktionen ermöglichen sollte, ohne dass dabei
        Vermittler oder zentrale Behörden benötigt werden. Das revolutionäre
        Design, das auf der Blockchain-Technologie basiert, bietet ein
        transparentes, unveränderliches Hauptbuch, um alle Bitcoin-Transaktionen
        zu erfassen und somit Sicherheit und Vertrauen zu gewährleisten.
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
  @media (min-width: ${bp_XS}) {
    column-count: 2;
  }
  @media (min-width: ${bp_MD}) {
    font-size: 1.5rem;
  }
`;
