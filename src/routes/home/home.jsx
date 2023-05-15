import { styled } from "styled-components";
import { colors, Container } from "../../abstarcts/variables";
import React from "react";

const Home = () => {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
};

export default Home;

const Title = styled.h2`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${colors.primary};
  background-color: ${colors.secondary_lighter};
  border: solid 2px #000;
`;
