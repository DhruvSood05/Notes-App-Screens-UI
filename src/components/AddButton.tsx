import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface AddButtonProps {
  onPress?: () => void;
}

const AddButton = ({ onPress }: AddButtonProps) => {
  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <Ionicons name="add" color="#000" size={20} />
        <Text style={styles.add}>Add</Text>
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    width: "25%",
    // subtle shadow / elevation for modern minimal look

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    borderWidth: 0,
    overflow: "hidden",
  },

  add: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
    color: "#111111",
    letterSpacing: 0.2,
  },
});
