import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../images/bicoin_1.png";

const content_a = () => {
  return (
    <Fragment>
      <Background>
        <AnimationContainer>
          <ContentWrapper>
            <Heading>Bitcoin</Heading>
            <SubHeading>Was ist Bitcoin?</SubHeading>
          </ContentWrapper>
        </AnimationContainer>
      </Background>
    </Fragment>
  );
};

export default content_a;

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(300%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${backgroundImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationContainer = styled.div`
  animation: ${slideUpAnimation} 2s ease-in-out forwards;
`;

const ContentWrapper = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 1px 1px 2px #fff, 0 0 1em #000, 0 0 0.2em #000;
`;

const SubHeading = styled.div`
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 1px 1px 2px #fff, 0 0 1em #000, 0 0 0.2em #000;
`;
