import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {
  bp_LG,
  bp_MD,
  bp_SM,
  bp_XS,
  col_P,
  col_S_D,
} from "../../../components/abstracts/variables";

const content_b = () => {
  return (
    <Fragment>
      <Blockquote>
        <Quote>
          Die Blockchain-Technologie ist durch kryptografische Algorithmen die
          Grundlage für Transparenz, Sicherheit und Unveränderlichkeit bei
          Bitcoin.
        </Quote>
        <Author>Philipp J.A. Hartmannsgruber</Author>
      </Blockquote>

      <LinkContainer>
        <Link
          href="https://medium.com/pjah-consulting/warum-bitcoin-maximalisten-sich-irren-die-blockchain-technologie-abzulehnen-de02d593fc59"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Vorteile der Blockchain-Technologie</p>
          <i className="fab fa-medium"></i>
        </Link>
      </LinkContainer>
    </Fragment>
  );
};

export default content_b;

const Blockquote = styled.blockquote`
  margin: 0 auto 1rem;
  padding: 1em;
  border-left: 0.5em solid ${col_S_D};
  color: ${col_P};
  font-size: 1.2em;

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
const LinkContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${col_S_D};
`;
const Link = styled.a`
  font-size: 1.2rem;
  display: block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5;
  color: ${col_P};

  @media (min-width: ${bp_XS}) {
    font-size: 1.5em;
  }
  @media (min-width: ${bp_MD}) {
    margin: 0 auto 1rem;
    font-size: 2em;
  }
`;
