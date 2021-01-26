import React, { useEffect } from "react";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const { get, isLoading } = useFetch("https://newsapi.org/");

  useEffect(() => {
    get("v2/top-headlines?country=us&apiKey=f6c6deeaa5d14d9093099b927cea2961")
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return null;
}
