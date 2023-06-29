import React from "react";
import { Breakpoints } from "./breakpoints";
import styled from "styled-components";

const Kunde = () => {
  const { fontSize, color, margin, padding, textAlignment } = Breakpoints();

  return (
    <Container
      fontSize={fontSize}
      color={color}
      margin={margin}
      padding={padding}
      textAlignment={textAlignment}
    >
      <p>Bildschirmbreite: {window.innerWidth}</p>
    </Container>
  );
};

export default Kunde;

const Container = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlignment};
  display: flex;
  align-items: center;
  justify-content: center;
`;
