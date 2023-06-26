import React from "react";
import { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import {
  bp_LG,
  bp_MD,
  bp_SM,
  bp_XS,
  bp_XXS,
  col_P,
  col_S_D,
} from "../../../components/abstracts/variables";

const content_b = () => {
  return (
    <Fragment>
      <BlockquoteAnimation>
        <Blockquote>
          <Quote>
            Der digitale Euro sollte die Vorteile der Blockchain-Technologie
            nutzen.
          </Quote>
          <Author>Blockchain Bundesverband e.V. (Bundesblock).</Author>
        </Blockquote>
      </BlockquoteAnimation>
      <LinkContainerAnimation>
        <LinkContainer>
          <Link
            href="https://cdn.website-editor.net/s/fd1ec16dcc8d4aedb14bdb0bcf47e163/files/uploaded/Bundesblock%2520Positionspapier%2520Digitaler%2520Euro.pdf?Expires=1689435646&Signature=qfDzYu2Rv1EoVrMNFZZikli2F2AXnhuJFCtVMpbxEpl8zbmhyhwrSX4vwy5D7dFDcHcs7Y1q6XEPXoaKdNpS1aEzVanvMp-0L4apCZfRUm0fT5nRNgaGl6PHfHrTG1ycn5fFTHSrl~ehlRZDEK7gu9N4w2508YUcTodAmx3RPTno6cPx5x0-4~Tk5OYZYTOVmHBMdvK1WM0qdjEYEEns0MChfTPTi6WvPtSn5WodFk0DBpJdz8IWiPHk2pSqtxoovuFqVWAiBMbDSIMThD~QT5w~a-FYn7yjcjqwbJEynoQ2JwAedhgJe9TYpYmpN2WTBcLF7aC19Th5zkWRbdzrHA__&Key-Pair-Id=K2NXBXLF010TJW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Digitaler Euro Positionspapier - Bundesblock (download)</p>
          </Link>
        </LinkContainer>
      </LinkContainerAnimation>
      <LinkContainerAnimation>
        <LinkContainer>
          <Link
            href="https://cdn.website-editor.net/s/fd1ec16dcc8d4aedb14bdb0bcf47e163/files/uploaded/Bundesblock%2520Positionspapier%2520Digitaler%2520Euro.pdf?Expires=1689435646&Signature=qfDzYu2Rv1EoVrMNFZZikli2F2AXnhuJFCtVMpbxEpl8zbmhyhwrSX4vwy5D7dFDcHcs7Y1q6XEPXoaKdNpS1aEzVanvMp-0L4apCZfRUm0fT5nRNgaGl6PHfHrTG1ycn5fFTHSrl~ehlRZDEK7gu9N4w2508YUcTodAmx3RPTno6cPx5x0-4~Tk5OYZYTOVmHBMdvK1WM0qdjEYEEns0MChfTPTi6WvPtSn5WodFk0DBpJdz8IWiPHk2pSqtxoovuFqVWAiBMbDSIMThD~QT5w~a-FYn7yjcjqwbJEynoQ2JwAedhgJe9TYpYmpN2WTBcLF7aC19Th5zkWRbdzrHA__&Key-Pair-Id=K2NXBXLF010TJW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>English Summary on Medium</p>
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
const LinkContainerAnimation = styled.div`
  margin-top: 1rem;
  animation: ${slideRightAnimation} 2s ease-in-out forwards;
`;
const BlockquoteAnimation = styled.div`
  animation: ${slideLeftAnimation} 1.5s ease-in-out forwards;
`;

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
const LinkContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${col_S_D};
`;
const Link = styled.a`
  @media (min-width: ${bp_XXS}) {
    font-size: 1.2rem;
    display: block;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5;
    color: ${col_P};
  }
  @media (min-width: ${bp_XS}) {
    font-size: 1.5em;
  }
  @media (min-width: ${bp_MD}) {
    margin: 0 auto 1rem;
    font-size: 2em;
  }
`;
