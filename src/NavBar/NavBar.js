import React from "react";
import styled from "styled-components";
import NavBarContent from "./NavBarContent";
import NavBarLogo from "./NavBarLogo";

const NavBarWrapper = styled.div`
  background-color: #bde0fe;
  padding: 2em;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 25% 1fr;
`;

export default function NavBar(props) {
  return (
    <NavBarWrapper>
      <NavBarLogo />
      <NavBarContent onChange={props.onChange} />
    </NavBarWrapper>
  );
}
