import React from "react";
import styled from "styled-components";

const LinkWrapper = styled.div`
  .readMore_link:link,
  .readMore_link:visited {
    color: #0b77d5;
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
  }
  .readMore_link:hover {
    text-decoration: underline;
  }
`;
export default function ArticleLink() {
  return (
    <LinkWrapper>
      <a href="#" className="readMore_link">
        Read more
      </a>
    </LinkWrapper>
  );
}
