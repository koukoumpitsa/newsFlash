import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  background-color: lightblue;
`;
const Logo = styled.div``;
const Form = styled.form``;

export default function Navbar() {
  return (
    <NavBar>
      <Logo>
        <img src="#" alt="logo-globe" />
      </Logo>

      <Form>
        <input type="text" name="searchItem" defaultValue="searchItem" />
      </Form>
    </NavBar>
  );
}
