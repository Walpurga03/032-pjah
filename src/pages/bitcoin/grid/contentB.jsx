import React from "react";
import { Fragment } from "react";
import styled from "styled-components";

const content_b = () => {
  return (
    <Fragment>
      <Blockquote>
        <Quote>
          Bitcoin ist die beste (digitale) Anlage und Währung die wir haben.
        </Quote>
        <Author>Philipp J.A. Hartmannsgruber</Author>
      </Blockquote>
      <a
        href="https://medium.com/pjah-consulting/warum-bitcoin-die-beste-digitale-anlage-und-w%C3%A4hrung-ist-die-es-gibt-3b853638775a"
        target="_blank"
        rel="noopener noreferrer"
      >
        Warum Bitcoin die beste (digitale) Anlage und Währung ist, die es gibt
      </a>
    </Fragment>
  );
};

export default content_b;

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 1em;
  border-left: 0.5em solid #ccc;
  color: #666;
  font-size: 0.9em;
`;
const Quote = styled.p`
  display: inline;
`;
const Author = styled.p`
  display: block;
  text-align: right;
  font-style: italic;
`;
