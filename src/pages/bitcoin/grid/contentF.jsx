import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {
  bp_LG,
  bp_MD,
  bp_SM,
  bp_XS,
  bp_XXS,
  col_P,
  col_S_D,
} from "../../../components/abstracts/variables";

const contnetn_f = () => {
  return (
    <Fragment>
      <Blockquote>
        <Author>Philipp J.A. Hartmannsgruber</Author>
        <Heading>über Bitcoin</Heading>
        <Quote>
          "Die inhärente Knappheit von Bitcoin mit seinem begrenzten Angebot und
          dem vorherbestimmten Emissionsplan dient als wesentlicher Antrieb für
          seine Begehrlichkeit und das Potenzial für Kurssteigerungen. Das
          Angebot von Bitcoin ist auf 21 Millionen begrenzt, wobei das Mining im
          Laufe der Zeit zunehmend schwieriger und somit teurer wird. Diese
          Knappheit fördert die Adoption und Nachfrage und schafft einen
          positiven Rückkopplungseffekt, der den Preis in die Höhe treibt."
        </Quote>
      </Blockquote>
    </Fragment>
  );
};

export default contnetn_f;
const Blockquote = styled.blockquote`
  @media (min-width: ${bp_XXS}) {
    margin: 0 auto 1rem;
    padding: 1em;
    border-left: 0.5em solid ${col_S_D};
    color: ${col_P};
    font-size: 1.2em;
  }
  @media (min-width: ${bp_XS}) {
    margin: 0 auto 1rem;
    font-size: 1.5em;
  }
  @media (min-width: ${bp_SM}) {
    margin: 0 auto 1rem;
    font-size: 1.5em;
  }
  @media (min-width: ${bp_MD}) {
    margin: 0 auto 1rem;
    font-size: 2em;
  }
  @media (min-width: ${bp_LG}) {
    margin: 0 auto;
    width: 800px;
  }
`;
const Quote = styled.p`
  display: inline;
`;
const Author = styled.p`
  padding-top: 1rem;
  font-weight: bold;
  display: block;
  text-align: right;
  font-style: italic;
`;

const Heading = styled.h2`
  color: ${col_P};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-size: 1.2rem;
  @media (min-width: ${bp_XS}) {
    font-size: 2.5rem;
  }
`;
