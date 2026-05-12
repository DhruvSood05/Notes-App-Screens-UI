import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Value {
  value: string;
  onChangeText: (text: string) => void;
  dark?: boolean;
}

const Input = ({ value, onChangeText, dark = false }: Value) => {
  return (
    <View style={[styles.container, dark && styles.containerDark]}>
      <TextInput
        style={[styles.input, dark && styles.inputDark]}
        placeholder="Title..."
        placeholderTextColor={dark ? "#7E919F" : "#2b2b2b"}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 28,
    paddingLeft: 15,
    fontWeight: "600",
  },

  inputDark: {
    color: "#DEDCDC",
  },

  container: {
    borderWidth: 1,
    marginTop: 36,
    borderRadius: 10,
    // width: "100%",
  },

  containerDark: {
    borderColor: "#57707A",
    backgroundColor: "#191D23",
  },
});
