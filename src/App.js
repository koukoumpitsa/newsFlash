import React, { useEffect, useState } from "react";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const { get, isLoading } = useFetch(
    "https://api.nytimes.com/svc/topstories/v2/"
  );

  useEffect(() => {
    get(`${topic}.json?api-key=M2MJ1tu97KN0b4aNn7xVudoO7owl2jgA`)
      .then((data) => {
        console.log(data);
        setContent(data.num_results);
      })
      .catch((error) => console.log(error));
  }, [topic]);

  return (
    <>
      <h3>Change of topic</h3>
      <select onChange={(e) => setTopic(e.target.value)}>
        <option value="home">General News</option>
        <option value="arts">Arts</option>
        <option value="automobiles">automobiles</option>
        <option value="books">Books</option>
      </select>

      <h4>hello there are {content} articles about this topic </h4>
    </>
  );
}

//M2MJ1tu97KN0b4aNn7xVudoO7owl2jgA
