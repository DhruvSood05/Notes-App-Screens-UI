import Header from "@/components/Header";
import { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isDark, setIsDark] = useState(false);
  const [showTaskPage, setShowTaskPage] = useState(false);
  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <Header
        dark={isDark}
        setDark={setIsDark}
        showTaskPage={showTaskPage}
        setShowTaskPage={setShowTaskPage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    marginTop: 48,
    backgroundColor: "#FFFBF5",
  },
  containerDark: {
    backgroundColor: "#291C0E",
  },
});
