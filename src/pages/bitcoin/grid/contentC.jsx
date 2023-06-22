import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const content_c = () => {
  return (
    <Fragment>
      <Text>
        In der sich stets wandelnden Welt der digitalen Vermögenswerte hat sich
        Bitcoin als wahrer Vorreiter etabliert und die Vorstellungskraft von
        Investoren, Technologen und Finanzexperten gleichermaßen fasziniert.
        Entstanden aus dem bahnbrechenden Bitcoin-Whitepaper, das 2008 vom
        rätselhaften Satoshi Nakamoto veröffentlicht wurde, hat Bitcoin seine
        Position als führende digitale Währung gefestigt und die Art und Weise,
        wie wir Geld betrachten, Werte speichern und Transaktionen durchführen,
        revolutioniert. Dieser Artikel wird die beispiellosen Vorteile von
        Bitcoin als Zahlungsmittel, Wertspeicher und Recheneinheit vertiefen und
        seine Knappheit als treibende Kraft hinter seiner Begehrlichkeit und dem
        Potenzial für langfristige Preiserhöhungen herausstellen.
      </Text>
    </Fragment>
  );
};

export default content_c;

const Text = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #000;
  font-size: 1.2rem;
  column-count: 2;
  column-gap: 4rem;
  column-rule: 0.125rem solid rgba(203, 200, 200, 0.8);
  text-shadow: 0 0 0.5 #000;
  text-align: justify;
`;
