import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../images/bicoin_1.png";
import {
  bp_LG,
  bp_MD,
  bp_SM,
  bp_XS,
  col_P,
  col_S,
} from "../../../components/abstracts/variables";

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

const Background = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50vh;
  background-image: url(${backgroundImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp_XS}) {
    height: 70vh;
  }
  @media (min-width: ${bp_SM}) {
    height: 100vh;
    width: 90%;
  }
  @media (min-width: ${bp_MD}) {
    height: 100vh;
    width: 80%;
  }
  @media (min-width: ${bp_LG}) {
    height: 100vh;
    width: 800px;
  }
`;

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
  color: ${col_S};
  text-shadow: 1px 1px 2px ${col_P}, 0 0 1em ${col_P}, 0 0 0.2em #000;
  @media (min-width: ${bp_SM}) {
    font-size: 5rem;
  }
`;

const SubHeading = styled.div`
  font-size: 2.5rem;
  color: ${col_S};
  text-shadow: 1px 1px 2px ${col_S}, 0 0 1em ${col_P}, 0 0 0.2em #000;
  @media (min-width: ${bp_SM}) {
    font-size: 4rem;
  }
`;
