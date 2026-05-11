import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading = () => {
  return (
    <View>
      <Text style={styles.title}>My notes</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
});
