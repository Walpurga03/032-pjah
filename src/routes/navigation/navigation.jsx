import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { colors, breakpoints } from "../../abstarcts/variables";
import "./navigation.css";
// import { ReactComponent as Logo } from "../../assets/logo/logo_2.svg";

const navItems = [
  {
    to: "/",
    firstText: "PJAH",
    secondText: "CONSULTING",
  },
  {
    to: "/about",
    firstText: "Über",
    secondText: "uns",
  },
  {
    to: "/angebot",
    firstText: "Unser",
    secondText: "Angebot",
  },
  {
    to: "/kunden",
    firstText: "Unsere",
    secondText: "Kunden",
  },
  {
    to: "/digEuro",
    firstText: "Digitaler",
    secondText: "Euro",
  },
];
const Navigation = () => {
  return (
    <Fragment>
      <input
        type="checkbox"
        class="sidenav__opened"
        id="sidenav__opened"
        autocomplete="off"
      />
      <Nav>
        {navItems.map((item, index) => (
          <NavLinksContainer key={index}>
            <NavItem to={item.to}>
              <span>{item.firstText}</span>
              <span>{" " + item.secondText}</span>
            </NavItem>
          </NavLinksContainer>
        ))}
        <MenuListItem>
          <label class="navigation__list-item-link" for="sidenav__opened">
            <Icon viewBox="0 0 512 512">
              <g>
                <path
                  d="M358.06,193.61H153.94c-3.83,0-6.93-3.1-6.93-6.93s3.1-6.93,6.93-6.93h204.13c3.83,0,6.93,3.1,6.93,6.93
                                            S361.89,193.61,358.06,193.61z"
                />
                <path
                  d="M358.06,262.93H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                            c3.83,0,6.93,3.1,6.93,6.93C365,259.83,361.89,262.93,358.06,262.93z"
                />
                <path
                  d="M358.06,332.25H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                            c3.83,0,6.93,3.1,6.93,6.93C365,329.15,361.89,332.25,358.06,332.25z"
                />
                <path
                  d="M256,474.76c-120.62,0-218.76-98.14-218.76-218.76c0-120.63,98.14-218.76,218.76-218.76
                                            c120.63,0,218.76,98.14,218.76,218.76C474.76,376.62,376.62,474.76,256,474.76z M256,51.1C143.02,51.1,51.1,143.02,51.1,256
                                            S143.02,460.9,256,460.9S460.9,368.98,460.9,256S368.98,51.1,256,51.1z"
                />
              </g>
            </Icon>
          </label>
        </MenuListItem>
      </Nav>
      <section class="sidenav">
        <label for="sidenav__opened" class="sidenav__background"></label>
        <div class="sidenav__container">
          <label for="sidenav__opened" class="sidenav__close">
            X
          </label>
          <nav>
            <SideNavList>
              <li>
                <SidenavNavLink>Startseite</SidenavNavLink>
              </li>
            </SideNavList>
          </nav>
        </div>
      </section>
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
    padding-right: 0.5rem;
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

const NavListItem = styled.li`
  list-style-type: none;
  display: block;
  float: left;
`;

const MenuListItem = styled(NavListItem)`
  float: right;
  font-size: 3rem;
`;

const Icon = styled.svg`
  cursor: pointer;
  fill: black;
  height: 0.8em;
  vertical-align: inherit;
  &.icon:not(.icon--no-position) {
    position: relative;
    top: -0.075em;
  }
`;

const SidenavContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 15rem;
  max-width: 100vw;
  background-color: #ebebeb;
  box-shadow: 0 0 1rem black;
  transform: translate(calc(100% + 1rem), 0);
  will-change: transform;
  transition: transform 1s ease-in-out;

  &.sidenav__opened:checked ~ .sidenav & {
    transform: translate(0, 0);
  }
`;

const SideNav = styled.div`
  display: block;
  position: fixed;
  z-index: 15000;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  overflow: hidden;
  transition: width 0s linear 1s, height 0s linear 1s;
`;

const SideNavList = styled.nav`
  margin-top: 3.75rem;
  list-style-type: none;
  border-top: 0.0625rem solid #d2d2d2;
`;

const SidenavNavLink = styled.a`
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  display: block;
  color: #26464d;
  font-weight: 300;
  text-decoration: none;
  border-bottom: 0.0625rem solid #d2d2d2;
  background-color: #ebebeb;
  transition: color 0.25s ease-in-out, font-weight 0.25s ease-in-out,
    background-color 0.25s ease-in-out;

  &:hover {
    background-color: white;
    color: #00e29c;
    font-weight: 500;
  }
`;
