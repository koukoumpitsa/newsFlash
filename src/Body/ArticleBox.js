import React from "react";
import styled from "styled-components";
import ArticleKeyword from "./ArticleKeyword";
import ArticleLink from "./ArticleLink";
import ArticleTitles from "./ArticleTitles";

const ArticleBoxWrapper = styled.div`
  background-color: white;
  margin: 1.5em;
  padding: 2em;
  border-radius: 0.8em;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  display: grid;
  grid-template-rows: 10% 1fr 10%;
`;

export default function ArticleBox() {
  return (
    <ArticleBoxWrapper>
      <ArticleKeyword />
      <ArticleTitles />
      <ArticleLink />
    </ArticleBoxWrapper>
  );
}
