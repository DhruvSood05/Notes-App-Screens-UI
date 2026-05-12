import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

interface data {
  dark?: boolean;
  title: string;
  description: string;
  date: string;
  onPress?: () => void;
  onDelete?: () => void;
}

const PressableTask = ({
  dark = false,
  title,
  description,
  date,
  onPress,
  onDelete,
}: data) => {
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
        <Text style={[styles.description, dark && styles.headingDark]}>
          {description}
        </Text>
      </View>
      <Pressable style={styles.footer}>
        <Text style={[styles.date, dark && styles.dateDark]}>{date}</Text>
        <Pressable onPress={onDelete} hitSlop={10}>
          <AntDesign name="delete" color="#8d0000" size={20} />
        </Pressable>
      </Pressable>
    </Pressable>
  );
};

export default PressableTask;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 10,
    borderColor: "#C5BAC4",
    backgroundColor: "#DEDCDC",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  containerDark: {
    borderColor: "#57707A",
    backgroundColor: "#191D23",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  heading: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: "600",
    color: "#191D23",
  },

  headingDark: {
    color: "#DEDCDC",
  },

  date: {
    fontSize: 14,
    color: "#57707A",
    marginTop: 8,
  },
  dateDark: {
    color: "#7E919F",
  },

  description: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
