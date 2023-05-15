import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { colors, breakpoints } from "../../abstarcts/variables";
// import { ReactComponent as Logo } from "../../assets/logo/logo_2.svg";

const Navigation = () => {
  return (
    <Fragment>
      <Nav>
        <NavLinksContainer>
          <NavItem to="/">
            <span>PJAH&nbsp;</span>
            <span>&nbsp;CONSULTING</span>
          </NavItem>
        </NavLinksContainer>
        <NavLinksContainer>
          <NavItem to="/about">
            <span>Über&nbsp;</span>
            <span>&nbsp;uns</span>
          </NavItem>
        </NavLinksContainer>
        <NavLinksContainer>
          <NavItem to="/angebot">
            <span>Unser&nbsp;</span>
            <span>&nbsp;Angebot</span>
          </NavItem>
        </NavLinksContainer>
        <NavLinksContainer>
          <NavItem to="/kunden">
            <span>Unsere&nbsp;</span>
            <span>&nbsp;Kunden</span>
          </NavItem>
        </NavLinksContainer>
        <NavLinksContainer>
          <NavItem to="/digEuro">
            <span>Digitaler&nbsp;</span>
            <span>&nbsp;Euro</span>
          </NavItem>
        </NavLinksContainer>
      </Nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

const Nav = styled.nav`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.5rem 0.2rem;
  display: inline-block;

  & span:first-child {
    padding: 0.2rem;
    background-color: black;
    color: white;
  }
  & span:last-child {
    background-color: white;
    color: black;
  }
`;

const NavLinksContainer = styled(Link)`
  margin: auto 0.8rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 0 2px transparent;
  transition: box-shadow 0.3s ease;
  height: 2rem;

  &:hover {
    box-shadow: 0 0 0 2px #000;
  }
`;
