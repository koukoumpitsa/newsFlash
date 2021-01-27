import React from "react";
import styled from "styled-components";
import NavBarInput from "./NavBarInput";

const NavBarContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, auto);

  .navBar_content_title {
    font-size: 3em;
  }

  .navBar_content_subtitle {
    font-size: 2em;
  }
`;

export default function NavBarContent(props) {
  return (
    <NavBarContentWrapper>
      <div className="navBar_content_title">
        <h1>NewsFlash</h1>
      </div>
      <div className="navBar_content_subtitle">
        <p>Find the latest news from the New York Times.</p>
      </div>
      <NavBarInput onChange={props.onChange} />
    </NavBarContentWrapper>
  );
}
