import React from "react";
import styled from "styled-components";
import ArticleBox from "./ArticleBox";

const BodyWrapper = styled.div`
  background-color: #ebf5fe;
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  grid-gap: 1.5em;
`;

export default function Body() {
  return (
    <BodyWrapper>
      <ArticleBox />
    </BodyWrapper>
  );
}
