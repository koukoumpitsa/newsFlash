import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./Body/Body";
import NavBar from "./NavBar/NavBar";
import "./styles.css";
import useFetch from "./useFetch";
console.log(process.env.REACT_APP_API_KEY);

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 25% 1fr;
  grid-template-columns: 100%;
  font-family: "Roboto", sans serif;
`;
export default function App() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [link, setLink] = useState("");
  const [keyword, setKeyword] = useState("");
  const [topic, setTopic] = useState("");
  const { get, isLoading } = useFetch(
    "https://api.nytimes.com/svc/topstories/v2/"
  );

  useEffect(() => {
    get(`${topic}.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then((data) => {
        console.log(data);
        setTitle(data.results[0].title);
        setAbstract(data.results[0].abstract);
        setKeyword(data.results[0].section);
        setLink(data.results[0].url);
      })
      .catch((error) => console.log(error));
  }, [topic]);

  function handleTopicChange(e) {
    setTopic(e.target.value);
  }

  return (
    <Wrapper>
      <NavBar onChange={handleTopicChange} />
      {/* {isLoading ? <p>""</p> : <Body />} */}
      <Body title={title} abstract={abstract} keyword={keyword} link={link} />
    </Wrapper>
  );
}
