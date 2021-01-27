import React from "react";
import styled from "styled-components";
import ArticleBox from "./ArticleBox";

.body {
  background-color: #ebf5fe;
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  grid-gap: 1.5em;

  .articleBox {
    background-color: white;
    margin: 1.5em;
    padding: 2em;
    border-radius: 0.8em;
    box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
      0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
      0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
    display: grid;
    grid-template-rows: 10% 1fr 10%;

    .articleBox_keyword {
      text-align: left;
      .keyword_text {
        font-size: 1.2em;
        color: #77bcf8;
        font-weight: bold;
      }
    }

    .articleBox_titles {
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
    }
    .articleBox_readMore {
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
    }
  }

const BodyWrapper = styled.div`

`;

export default function Body(){
  return (
    <div className="body">
    <ArticleBox/>
  </div>
  );
}