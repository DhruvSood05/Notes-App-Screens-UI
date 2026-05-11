import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Mode } from "./Header";

const SearchBar = ({ dark }: Mode) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, dark && styles.containerDark]}>
        <EvilIcons
          name="search"
          color={dark ? "#E1D4C2" : "#6E473B"}
          size={20}
          style={[styles.icon, dark && styles.iconDark]}
        />
        <TextInput
          placeholder="Search..."
          style={[styles.input, dark && styles.inputDark]}
          placeholderTextColor={dark ? "#BEB5A9" : "#A78D78"}
        />
      </View>
      <View style={[styles.iconContainer, dark && styles.iconContainerDark]}>
        <Octicons
          name="filter"
          color={dark ? "#E1D4C2" : "#6E473B"}
          size={16}
          style={[styles.icon, dark && styles.iconDark]}
        />
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
    borderColor: "#BEB5A9",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    backgroundColor: "#F5F1ED",
  },

  containerDark: {
    borderColor: "#6E473B",
    backgroundColor: "#291C0E",
  },

  input: {
    padding: 5,
    color: "#291C0E",
  },

  inputDark: {
    color: "#E1D4C2",
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
  },

  iconDark: {
    color: "#E1D4C2",
  },

  iconContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#BEB5A9",
    marginTop: 10,
    backgroundColor: "#F5F1ED",
  },

  iconContainerDark: {
    borderColor: "#6E473B",
    backgroundColor: "#291C0E",
  },
});
