import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
    return () => {};
  }, []);

  if (!result) return null;

  return (
    <>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{ uri: item.replace("s://", "://") }}
          />
        )}
      />
    </>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 4,
  },
});
