import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Input from "./Input";
import NoteDescription from "./NoteDescription";

interface TaskPageProp {
  onGoBack: () => void;
  onSave: (task: {
    id: string;
    title: string;
    date: string;
    description: string;
  }) => void;
  onChangeTitle: (title: string) => void;
  onChangeDescription: (description: string) => void;
  dark?: boolean;
  task: {
    id: string;
    title: string;
    date: string;
    description: string;
  };
}

const TaskPage = ({
  onGoBack,
  onSave,
  onChangeTitle,
  onChangeDescription,
  task,
  dark = false,
}: TaskPageProp) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={[styles.container, dark && styles.containerDark]}>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, dark && styles.buttonDark]}
              onPress={onGoBack}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                color={dark ? "#DEDCDC" : "#000"}
                size={24}
              />
            </Pressable>
            <Pressable
              style={[
                styles.button,
                styles.saveButton,
                dark && styles.buttonDark,
              ]}
              onPress={() => onSave(task)}
            >
              <Text style={[styles.save, dark && styles.saveDark]}>Save</Text>
            </Pressable>
          </View>
          <Input value={task.title} onChangeText={onChangeTitle} dark={dark} />
          <NoteDescription
            value={task.description}
            onChangeText={onChangeDescription}
            dark={dark}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default TaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",

    backgroundColor: "#DEDCDC",
  },
  containerDark: {
    backgroundColor: "#191D23",
  },
  title: {
    color: "#291C0E",
    fontSize: 24,
    fontWeight: "600",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonDark: {
    borderColor: "#57707A",
    backgroundColor: "#191D23",
  },

  saveButton: {
    borderRadius: 20,
  },

  save: {
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 16,
    paddingVertical: 3,
  },

  saveDark: {
    color: "#DEDCDC",
  },
});
