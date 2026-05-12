import React from "react";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface Value {
  intialValue: string;
  dark?: boolean;
}

const NoteDescription = ({ intialValue, dark = false }: Value) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.container, dark && styles.containerDark]}>
        <TextInput
          style={[styles.description, dark && styles.descriptionDark]}
          placeholder="Enter Notes..."
          placeholderTextColor={dark ? "#7E919F" : "#000"}
          multiline={true}
        >
          {intialValue}
        </TextInput>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NoteDescription;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 16,
    borderRadius: 10,
    flex: 1,
  },

  containerDark: {
    borderColor: "#57707A",
    backgroundColor: "#191D23",
  },

  description: {
    padding: 15,
    fontSize: 16,
    // flex: 1,
    // borderWidth: 1,
    width: "auto",
    height: "100%",
  },

  descriptionDark: {
    color: "#DEDCDC",
  },
});
