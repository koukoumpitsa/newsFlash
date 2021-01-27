import React from "react";
import styled from "styled-components";

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

  .navBar_content_select {
    .select_text {
      padding-bottom: 0.5em;

      .select_text_p {
        font-size: 1.5em;
      }
    }

    .select_input {
      font-family: "Roboto", sans serif;
      .select {
        width: 3em;
        height: 2em;
      }
    }
  }
}
`;

export default function NavBarContent() {
  return (
    <NavBarContentWrapper>
      <div className="navBar_content_title">
        <h1>NewsFlash</h1>
      </div>
      <div className="navBar_content_subtitle">
        <p>Find the latest news from the New York Times.</p>
      </div>
      <div className="navBar_content_select">
        <div className="select_text">
          <p className="select_text_p">Search a Topic</p>
        </div>
        <div className="select_input">
          <select>
            <option value="home">General News</option>
            <option value="arts">Arts</option>
            <option value="automobiles">automobiles</option>
            <option value="books">Books</option>
          </select>
        </div>
      </div>
    </NavBarContentWrapper>
  );
}

// onChange={props.handler}
