import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const { get, isLoading } = useFetch(
    "https://api.nytimes.com/svc/topstories/v2/"
  );

  useEffect(() => {
    get("home.json?api-key=M2MJ1tu97KN0b4aNn7xVudoO7owl2jgA")
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return <Navbar />;
}

//M2MJ1tu97KN0b4aNn7xVudoO7owl2jgA
