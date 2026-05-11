import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Mode } from "./Header";

const Heading = ({ dark, setDark }: Mode) => {
  const toggle = () => {
    if (setDark) setDark(!dark);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, dark && styles.titleDark]}>My notes</Text>
      <Pressable
        style={[styles.icon, dark && styles.iconDark]}
        onPress={toggle}
      >
        {dark ? <Sun color="#ffffff" /> : <Moon color="#291C0E" />}
      </Pressable>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
    color: "#291C0E",
  },
  titleDark: {
    color: "#E1D4C2",
  },
  icon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#BEB5A9",
    backgroundColor: "#F5F1ED",
  },
  iconDark: {
    borderColor: "#6E473B",
    backgroundColor: "#3D2F24",
    color: "#ffffff",
  },
});
