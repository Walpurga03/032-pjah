import React, { Fragment, useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Bild from "../images/bitcoin_7.jpg";

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
        const { top, bottom } = headingElement.getBoundingClientRect();
        const isVisible = top >= 0 && bottom <= window.innerHeight;
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
          Bitcoin - Die Entstehung
        </Heading>
      </AnimationText>
      <AnimationImage animate={animateImage}>
        <AnimatedImage src={Bild} alt="Bitcoin-Bild" />
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
  transform: translateY(300%);
  transition: transform 1s;
  ${({ animate }) =>
    animate &&
    `
    transform: translateY(0%);
  `}
`;

const Heading = styled.h2`
  color: #000;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
  font-size: 2rem;
`;

const AnimatedImage = styled.img`
  border-radius: 100%;
  display: block;
  margin: 0 auto;
  max-width: 400px;
  padding-bottom: 2rem;
`;

const Text = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #000;
  font-size: 1.2rem;
  column-count: 1;
  column-gap: 4rem;
  column-rule: 0.125rem solid rgba(203, 200, 200, 0.8);
  text-shadow: 0 0 0.5 #000;
  text-align: justify;
`;
