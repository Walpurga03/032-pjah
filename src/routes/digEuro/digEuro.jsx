import React from "react";
import { styled } from "styled-components";
import { colors, Container } from "../../abstarcts/variables";

const DigEuro = () => {
  return (
    <Container>
      <Title>Digitaler Euro</Title>
    </Container>
  );
};

export default DigEuro;

const Title = styled.h2`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${colors.primary};
  background-color: ${colors.secondary_lighter};
`;
