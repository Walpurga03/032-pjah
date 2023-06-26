import React, { Fragment } from "react";
import styled from "styled-components";
import {
  bp_MD,
  bp_SM,
  bp_XS,
  bp_XXS,
  col_S,
  col_P,
  col_S_D,
} from "../../../components/abstracts/variables";

const content_c = () => {
  return (
    <Fragment>
      <Heading>Einführung</Heading>
      <Text>
        Die Blockchain-Technologie, auch bekannt als
        Distributed-Ledger-Technologie (DLT), ist ein dezentrales System, das
        Transaktionen über mehrere Knotenpunkte aufzeichnet. Sie gewährleistet
        Transparenz, Sicherheit und Unveränderlichkeit durch kryptografische
        Algorithmen. Ein prominentes Beispiel für Blockchain-Technologie ist
        Bitcoin, das als digitale Währung fungiert.
      </Text>
    </Fragment>
  );
};

export default content_c;

const Heading = styled.div`
  font-size: 3rem;
  text-align: center;
  margin: 2rem;
  color: ${col_S};
  text-shadow: 1px 1px 2px ${col_P}, 0 0 1em ${col_P}, 0 0 0.2em #000;
  @media (min-width: ${bp_SM}) {
    font-size: 3rem;
  }
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
    max-width: 800px;
    margin: 0 auto;
    color: ${col_P};
    font-size: 1.2rem;
    column-count: 2;
    column-gap: 4rem;
    column-rule: 0.125rem solid rgba(203, 200, 200, 0.8);
    text-shadow: 0 0 0.5 ${col_P};
    text-align: justify;
  }
  @media (min-width: ${bp_MD}) {
    font-size: 1.5rem;
  }
`;
