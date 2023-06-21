import React, { Fragment } from "react";
import styled from "styled-components";
import backgroundImage from "../images/bicoin_1.png";

const content_a = () => {
  return (
    <Fragment>
      <Background>
        <ContentWrapper>
          <Heading>Bitcoin</Heading>
          <SubHeading>Was ist Bitcoin?</SubHeading>
        </ContentWrapper>
      </Background>
    </Fragment>
  );
};

export default content_a;

const Background = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${backgroundImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 1px 1px 2px #fff, 0 0 1em #000, 0 0 0.2em #000;
`;

const SubHeading = styled.div`
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px 2px #fff, 0 0 1em #000, 0 0 0.2em #000;
`;
