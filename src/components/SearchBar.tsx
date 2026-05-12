import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Octicons from "react-native-vector-icons/Octicons";
interface SearchBarProps {
  dark: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ dark, value, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, dark && styles.containerDark]}>
        <EvilIcons
          name="search"
          color={dark ? "#DEDCDC" : "#191D23"}
          size={20}
          style={[styles.icon, dark && styles.iconDark]}
        />
        <TextInput
          placeholder="Search..."
          style={[styles.input, dark && styles.inputDark]}
          placeholderTextColor={dark ? "#C5BAC4" : "#7E919F"}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <View style={[styles.iconContainer, dark && styles.iconContainerDark]}>
        <Octicons
          name="filter"
          color={dark ? "#DEDCDC" : "#191D23"}
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
    borderColor: "#979DAB",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    backgroundColor: "#DEDCDC",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },

  containerDark: {
    borderColor: "#57707A",
    backgroundColor: "#191D23",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
  },

  input: {
    padding: 5,
    color: "#191D23",
  },

  inputDark: {
    color: "#DEDCDC",
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
    borderColor: "#979DAB",
    marginTop: 10,
    backgroundColor: "#DEDCDC",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },

  iconContainerDark: {
    borderColor: "#57707A",
    backgroundColor: "#191D23",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
  },
});
