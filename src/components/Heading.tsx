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
        {dark ? <Sun color="#DEDCDC" /> : <Moon color="#191D23" />}
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
    color: "#191D23",
  },
  titleDark: {
    color: "#DEDCDC",
  },
  icon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#979DAB",
    backgroundColor: "#DEDCDC",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  iconDark: {
    borderColor: "#57707A",
    backgroundColor: "#191D23",
    color: "#DEDCDC",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
  },
});
