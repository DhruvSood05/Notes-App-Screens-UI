import React from "react";
import { StyleSheet, View } from "react-native";
import Heading from "./Heading";
import SearchBar from "./SearchBar";

const header = () => {
  return (
    <View style={styles.header}>
      <Heading />
      <SearchBar />
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
  },
});
