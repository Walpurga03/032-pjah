import React from "react";
import { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const content_b = () => {
  return (
    <Fragment>
      <BlockquoteAnimation>
        <Blockquote>
          <Quote>
            Bitcoin ist die beste (digitale) Anlage und Währung die wir haben.
          </Quote>
          <Author>Philipp J.A. Hartmannsgruber</Author>
        </Blockquote>
      </BlockquoteAnimation>
      <LinkContainerAnimation>
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
      </LinkContainerAnimation>
    </Fragment>
  );
};

export default content_b;

const slideLeftAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideRightAnimation = keyframes`
  0% {
    transform: translateX(100%);
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

const LinkContainerAnimation = styled.div`
  animation: ${slideRightAnimation} 2s ease-in-out forwards;
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
