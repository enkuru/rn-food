import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const resultLists = [
    { title: "Cost Effective", type: "$" },
    { title: "Bit Pricer", type: "$$" },
    { title: "Big Spender", type: "$$$" },
  ];
  const [term, setTerm] = useState("");
  const [onSubmit, results, errorMessage] = useResults();

  const filterResults = (price) => results.filter((r) => r.price === price);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onChangeText={(text) => setTerm(text)}
        onSubmit={() => onSubmit(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView showsVerticalScrollIndicator={false}>
        {resultLists.map(({ type, title }) => (
          <ResultsList key={type} results={filterResults(type)} title={title} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
