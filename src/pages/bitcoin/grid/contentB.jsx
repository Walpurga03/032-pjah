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

const Content_b = () => {
  return (
    <Fragment>
      <Blockquote>
        <Quote>
          Bitcoin ist die beste (digitale) Anlage und Währung die wir haben.
        </Quote>
        <Author>Philipp J.A. Hartmannsgruber</Author>
      </Blockquote>

      <LinkContainer>
        <Link
          href="https://medium.com/pjah-consulting/warum-bitcoin-die-beste-digitale-anlage-und-w%C3%A4hrung-ist-die-es-gibt-3b853638775a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Warum Bitcoin die beste (digitale) Anlage und Währung ist, die es
            gibt
          </p>
          <i className="fab fa-medium"></i>
        </Link>
      </LinkContainer>
    </Fragment>
  );
};

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
  width: 80%;
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
    margin: auto 1rem;
    font-size: 2em;
  }
`;

export default Content_b;
