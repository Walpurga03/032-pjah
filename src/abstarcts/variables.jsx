import styled from "styled-components";

export const colors = {
  primary: "#000",
  secondary: "#0098A7",
  secondary_darker: "#173137",
  secondary_lighter: "#8c9292",
};

export const breakpoints = {
  lg: "(max-width: 75em)" /** 1200px oder schmaler */,
  md: "(max-width: 62em)" /** 992px oder schmaler */,
  sm: "(max-width: 48em)" /** 768px oder schmaler */,
  xs: "(max-width: 36em)" /** 576px oder schmaler */,
  xxs: "(max-width: 25em)" /** 400px oder schmaler */,
};

export const Container = styled.div`
  background-color: #f2f2f2;
  width: 90%;
  margin: 0 auto;
`;
