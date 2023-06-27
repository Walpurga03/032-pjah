import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Kunde() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakpoints = [
    { width: 1200, fontSize: "4rem", color: "red" },
    { width: 992, fontSize: "3rem", color: "blue" },
    { width: 768, fontSize: "2rem", color: "green" },
  ];

  const getStyles = (width) => {
    const { fontSize, color } = breakpoints.find(
      (breakpoint) => width >= breakpoint.width
    ) || { fontSize: "1rem", color: "black" };

    return { fontSize, color };
  };

  const { fontSize, color } = getStyles(windowWidth);

  return (
    <Container fontSize={fontSize} color={color}>
      <p className="centered">Bildschirmbreite: {windowWidth}</p>
    </Container>
  );
}

export default Kunde;

const Container = styled.div`
  margin-top: 20rem;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};

  .centered {
    text-align: center;
  }
`;
