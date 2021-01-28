import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  text-align: center;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`;

export default function NavBarLogo() {
  return (
    <LogoWrapper>
      <img src="./Hands - Random Stuff.png" alt="globe-logo" />
    </LogoWrapper>
  );
}
