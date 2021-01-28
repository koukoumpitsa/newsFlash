import React from "react";
import styled from "styled-components";

const TitlesWrapper = styled.div`
  padding: 0.5em 0;

  .titles_main {
    font-size: 3em;
    font-style: italic;
    font-weight: bold;
    color: black;
  }

  .titles_abstract {
    font-size: 1.5em;
  }
`;
export default function ArticleTitles(props) {
  return (
    <TitlesWrapper>
      <p className="titles_main">{props.title}</p>
      <p className="titles_abstract">{props.abstract}</p>
    </TitlesWrapper>
  );
}
