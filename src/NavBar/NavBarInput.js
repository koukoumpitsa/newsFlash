import React from "react";
import styled from "styled-components";

const Select = styled.div`
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
`;

export default function NavBarInput() {
  return (
    <Select>
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
    </Select>
  );
}

// onChange={props.handler}
