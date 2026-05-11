import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TaskPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>TaskPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default TaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFBF5",
    padding: 20,
  },
  title: {
    color: "#291C0E",
    fontSize: 24,
    fontWeight: "600",
  },
});
