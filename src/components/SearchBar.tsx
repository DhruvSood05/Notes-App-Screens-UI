import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Octicons from "react-native-vector-icons/Octicons";

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <EvilIcons
          name="search"
          color="#cbcaca"
          size={20}
          style={styles.icon}
        />
        <TextInput
          placeholder="Search..."
          style={styles.input}
          placeholderTextColor={"#cdcbcb"}
        />
      </View>
      <View style={styles.iconContainer}>
        <Octicons name="filter" color="#757575" size={16} style={styles.icon} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    borderWidth: 1,
    // width: "80%",
    flex: 1,
    marginRight: 10,
    marginTop: 10,
    borderColor: "#d3d3d3",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },

  input: {
    padding: 5,
    color: "#454444",
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#cdcdcd",
    marginTop: 10,
  },
});
