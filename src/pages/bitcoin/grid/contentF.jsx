import React from "react";
import { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const contnetn_f = () => {
  return (
    <Fragment>
      <BlockquoteAnimation>
        <Blockquote>
          <Author>Philipp J.A. Hartmannsgruber</Author>
          <Heading>über Bitcoin</Heading>
          <Quote>
            "Die inhärente Knappheit von Bitcoin mit seinem begrenzten Angebot
            und dem vorherbestimmten Emissionsplan dient als wesentlicher
            Antrieb für seine Begehrlichkeit und das Potenzial für
            Kurssteigerungen. Das Angebot von Bitcoin ist auf 21 Millionen
            begrenzt, wobei das Mining im Laufe der Zeit zunehmend schwieriger
            und somit teurer wird. Diese Knappheit fördert die Adoption und
            Nachfrage und schafft einen positiven Rückkopplungseffekt, der den
            Preis in die Höhe treibt."
          </Quote>
        </Blockquote>
      </BlockquoteAnimation>
    </Fragment>
  );
};

export default contnetn_f;
const slideLeftAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const BlockquoteAnimation = styled.div`
  animation: ${slideLeftAnimation} 1.5s ease-in-out forwards;
`;

const Blockquote = styled.blockquote`
  margin: 1rem;
  padding: 1em;
  border-left: 0.5em solid #ccc;
  color: #090909;
  font-size: 1.2em;
`;

const Quote = styled.p`
  display: inline;
`;

const Author = styled.p`
  display: block;
  text-align: right;
  font-style: italic;
`;

const Heading = styled.h2`
  color: #000;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-size: 2rem;
`;
