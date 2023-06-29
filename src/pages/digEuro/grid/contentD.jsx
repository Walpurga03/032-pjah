import React, { Fragment } from "react";
import styled from "styled-components";
import {
  bp_MD,
  bp_XS,
  col_P,
  col_S,
  col_S_D,
} from "../../../components/abstracts/variables";

const ContentD = () => {
  return (
    <Fragment>
      <SubHeading>Timeline des EZB-Projekts zum digitalen Euro</SubHeading>
      <Text>
        Im Juli 2021 hat der EZB-Rat den Beschluss zur Einleitung der
        Untersuchungsphase gefasst. Im 1. Quartal 2022 haben mit der
        Priorisierung der Use Cases die Arbeiten am digitalen Euro begonnen.
        Seitdem befindet sich das EZB-Projekt in der Investigationsphase. Am 28.
        Juni 2023 wird der Europäische Kommission einen Gesetzgebungsvorschlag
        veröffentlichen mit dem Ziel, den digitalen Euro als gesetzliches
        Zahlungsmittel zu deklarieren. Im Herbst 2023 entscheidet der EZB-Rat,
        ob sich eine zwei- bis dreijährige Umsetzungsphase anschließen wird. In
        2024 wird dann entschieden, ob der digitale Euro in 2026/2027 im
        Euroraum eingeführt und über Banken und Sparkassen in Umlauf gebracht
        werden soll.
      </Text>
      <SubHeading>
        Weltweiter Trend hin zu Central Bank Digital Currencies (CBDCs)
      </SubHeading>
      <Text>
        Bereits seit einigen Jahren beschäftigen sich rund 90% der Zentralbanken
        weltweit mit der Frage, ob sie eine Central Bank Digital Currency (CBDC)
        einführen wollen. In China wird mit dem digitalen Yuan bereits eine
        digitale Zentralbankwährung mit 300 Millionen Menschen getestet. Auch
        die USA beschäftigt sich intensiv mit einer CBDC. In Europa könnte der
        digitale Euro bereits in 2026 eingeführt werden. Kreditinstitute würden
        hier als Intermediäre auftreten und ihren Kund:innen den digitalen Euro
        mit Hilfe einer kostenlosen Wallet zur Verfügung stellen. Noch ist nicht
        geklärt, wie Banken und Sparkassen hierfür kompensiert werden sollen, da
        sowohl die Wallet als auch die Transaktionen kostenlos angeboten werden
        müssen.
      </Text>
      <SubHeading>
        Bitcoin als Konkurrenz zu Währungen wie dem Euro und US-Dollar?
      </SubHeading>
      <Text>
        Mit der Veröffentlichung des Bitcoin-Whitepapers am 31. Oktober 2008
        (während der internationalen Finanzkrise) und dem Beginn des
        Bitcoin-Systems im Jahr 2009 haben die Zentralbanken ihr Geldmonopol
        verloren. Seitdem gibt es eine weitere Währung, die nicht staatlich
        erschaffen wurde und somit in Konkurrenz zu klassischen Währungen wie
        dem Euro, US-Dollar und Yen steht. In der Folge sind zehntausende von
        sogenannten Kryptowährungen entstanden. Spätestens seit ein Konsortium
        rund um Facebook Libra/Diem eine eigene private Währung erschaffen
        wollte sind Zentralbanken und Politiker aufgewacht und haben die
        Konkurrenz zu ihrer eigenen Währung erkannt. Die EZB hat daraufhin
        begonnen, eine digitale Form ihres Zentralbankgelds (Bargeld) zu
        entwickeln.
      </Text>
    </Fragment>
  );
};

export default ContentD;

const SubHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
  color: ${col_S};
  text-shadow: 1px 1px 2px ${col_P}, 0 0 1em ${col_P}, 0 0 0.2em #000;
`;

const Text = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: ${col_P};
  font-size: 1.2rem;
  column-count: 1;
  column-gap: 4rem;
  column-rule: 0.125rem solid ${col_S_D};
  text-shadow: 0 0 0.5 ${col_P};
  text-align: justify;

  @media (min-width: ${bp_XS}) {
    column-count: 2;
  }
  @media (min-width: ${bp_MD}) {
    font-size: 1.5rem;
  }
`;
