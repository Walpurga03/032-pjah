import React from "react";
import styled, { keyframes } from "styled-components";

const content_e = () => {
  return (
    <div>
      <Heading>Bitcoin - Das Anlageinstrument und die Zukunftswährung?</Heading>
      <Text>
        Bitcoin hat sich als eine bahnbrechende digitale Währung etabliert, die
        die Finanzwelt und die Art und Weise, wie wir Werte speichern und
        Transaktionen durchführen, verändert hat. Als Zahlungsmittel bietet es
        sofortige, kostengünstige und grenzenlose Transaktionen, während es als
        Wertspeicher und Recheneinheit fungiert und die Brücke zwischen der
        digitalen und realen Wirtschaft schlägt. Die Knappheit von Bitcoin, die
        durch das begrenzte Angebot und den aufwendigen Mining-Prozess
        geschaffen wird, treibt seine Begehrlichkeit an und legt nahe, dass es
        langfristiges Potenzial für Kurssteigerungen bietet. Die zunehmende
        Akzeptanz von Bitcoin durch Institutionen und Regierungen sowie die
        wachsende Infrastruktur und Nutzbarkeit schaffen ein günstiges Umfeld
        für seine weitere Verbreitung. Während die Welt der digitalen
        Vermögenswerte weiterhin wächst und sich entwickelt, wird Bitcoin
        voraussichtlich eine Schlüsselrolle spielen und als Pionier für neue
        Möglichkeiten und Innovationen dienen. Es bleibt abzuwarten, wie sich
        der Bitcoin-Markt und seine Position in der globalen Wirtschaft in den
        kommenden Jahren weiterentwickeln werden. Ich für meinen Teil bin
        optimistisch.
      </Text>
    </div>
  );
};

export default content_e;

const Heading = styled.h2`
  color: #000;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: 2rem;
`;

const Text = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #000;
  font-size: 1.2rem;
  column-count: 1;
  column-gap: 4rem;
  column-rule: 0.125rem solid rgba(203, 200, 200, 0.8);
  text-shadow: 0 0 0.5 #000;
  text-align: justify;
`;
