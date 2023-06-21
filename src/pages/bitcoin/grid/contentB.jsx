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

export default content_b;

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

const LinkContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #cbc8c8;
`;
const Link = styled.a`
  font-size: 2rem;
  display: block;
  text-align: center;
  cursor: pointer;

  text-decoration: none;
  padding: 0.5em;
  color: #000;
`;
