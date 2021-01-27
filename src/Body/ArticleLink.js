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
export default function ArticleLink(props) {
  return (
    <LinkWrapper>
      <a
        href={props.link}
        className="readMore_link"
        target="_blank"
        rel="noreferrer"
      >
        Read more
      </a>
    </LinkWrapper>
  );
}
