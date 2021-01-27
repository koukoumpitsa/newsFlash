import React from "react";
import styled from "styled-components";

const KeywordWrapper = styled.div`
  text-align: left;
  .keyword_text {
    font-size: 1.2em;
    color: #77bcf8;
    font-weight: bold;
  }
`;

export default function ArticleKeyword(props) {
  return (
    <KeywordWrapper>
      <p className="keyword_text">{props.keyword}</p>
    </KeywordWrapper>
  );
}
