import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const limit = 50;
const location = "san jose";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (term) => {
    setErrorMessage("");

    try {
      const config = { params: { term, limit, location } };
      const response = await yelp.get("/search", config);
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  // this works only for first render
  useEffect(() => {
    onSubmit("baklava");
    return () => {};
  }, []);

  return [onSubmit, results, errorMessage];
};
