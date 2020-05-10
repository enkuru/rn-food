import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChangeText, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.text}
        placeholder="Search"
        value={term}
        onChangeText={onChangeText}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 15,
    fontSize: 35,
    alignSelf: "center",
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    flex: 1,
  },
});
