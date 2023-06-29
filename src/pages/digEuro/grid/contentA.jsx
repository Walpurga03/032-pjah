import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../images/digEuro_1.jpg";
import {
  bp_LG,
  bp_MD,
  bp_SM,
  bp_XS,
  bp_XXS,
  col_P,
  col_S,
} from "../../../components/abstracts/variables";

const content_a = () => {
  return (
    <Fragment>
      <Background>
        <AnimationContainer>
          <ContentWrapper>
            <Heading>Der digitale Euro der EZB</Heading>
            <SubHeading>Was ist der digitale Euro?</SubHeading>
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
  height: 35vh;
  background-image: url(${backgroundImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp_XS}) {
    height: 50vh;
  }

  @media (min-width: ${bp_MD}) {
    height: 90vh;
  }
  @media (min-width: ${bp_LG}) {
    height: 100vh;
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
  @media (min-width: ${bp_XXS}) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${col_S};
    text-shadow: 1px 1px 2px ${col_P}, 0 0 1em ${col_P}, 0 0 0.2em #000;
  }
  @media (min-width: ${bp_XS}) {
    font-size: 2rem;
  }
  @media (min-width: ${bp_SM}) {
    font-size: 3rem;
  }
`;

const SubHeading = styled.div`
  @media (min-width: ${bp_XXS}) {
    font-size: 1.2rem;
    color: ${col_S};
    text-shadow: 1px 1px 2px ${col_P}, 0 0 1em ${col_P}, 0 0 0.2em #000;
  }
  @media (min-width: ${bp_XS}) {
    font-size: 2rem;
  }
  @media (min-width: ${bp_SM}) {
    font-size: 3rem;
  }
`;
