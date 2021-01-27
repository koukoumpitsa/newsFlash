import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./Body/Body";
import NavBar from "./NavBar/NavBar";
import "./styles.css";
import useFetch from "./useFetch";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 25% 1fr;
  grid-template-columns: 100%;
  font-family: "Roboto", sans serif;
`;
export default function App() {
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const { get, isLoading } = useFetch(
    "https://api.nytimes.com/svc/topstories/v2/"
  );

  useEffect(() => {
    get(`${topic}.json?api-key=M2MJ1tu97KN0b4aNn7xVudoO7owl2jgA`)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [topic]);

  function handleTopicChange(e) {
    setTopic(e.target.value);
  }

  return (
    <Wrapper>
      <NavBar onChange={handleTopicChange} />
      {isLoading ? <p>""</p> : <Body />}
    </Wrapper>
  );
}

//M2MJ1tu97KN0b4aNn7xVudoO7owl2jgA
