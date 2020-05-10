import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const limit = 50;
const location = "san jose";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const onSubmit = async () => {
    try {
      const config = { params: { term, limit, location } };
      const response = await yelp.get("/search", config);
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeText={(text) => setTerm(text)}
        onSubmit={onSubmit}
      />
      <Text>{results.map((b) => b.name + "\n")}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
