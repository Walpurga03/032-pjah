import React from "react";
import { styled } from "styled-components";
import { colors, Container } from "../../abstarcts/variables";

const About = () => {
  return (
    <Container>
      <Title>Über uns</Title>
    </Container>
  );
};

export default About;

const Title = styled.h2`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${colors.primary};
  background-color: ${colors.secondary_lighter};
`;
