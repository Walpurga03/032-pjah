import React from "react";
import { styled } from "styled-components";
import { colors, Container } from "../../abstarcts/variables";

const Angebot = () => {
  return (
    <Container>
      <Title>Unser Angebot</Title>
    </Container>
  );
};

export default Angebot;

const Title = styled.h2`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${colors.primary};
  background-color: ${colors.secondary_lighter};
`;
