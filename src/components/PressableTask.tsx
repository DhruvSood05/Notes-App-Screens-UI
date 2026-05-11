import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface data {
  dark?: boolean;
  title: string;
  date: string;
  onPress?: () => void;
}

const PressableTask = ({ dark = false, title, date, onPress }: data) => {
  return (
    <Pressable
      style={[styles.container, dark && styles.containerDark]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.heading, dark && styles.headingDark]}>
          {title}
        </Text>
      </View>
      <View>
        <Text style={[styles.date, dark && styles.dateDark]}>{date}</Text>
      </View>
    </Pressable>
  );
};

export default PressableTask;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 10,
    borderColor: "#c9c8c8",
  },
  containerDark: {
    borderColor: "#3D2F24",
    backgroundColor: "#291C0E",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#291C0E",
  },

  headingDark: {
    color: "#E1D4C2",
  },

  date: {
    fontSize: 14,
    color: "#6E473B",
    marginTop: 8,
  },
  dateDark: {
    color: "#A78D78",
  },
});
