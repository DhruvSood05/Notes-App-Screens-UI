import Header from "@/components/Header";
import { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isDark, setIsDark] = useState(false);
  const [showTaskPage, setShowTaskPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <Header
        dark={isDark}
        setDark={setIsDark}
        showTaskPage={showTaskPage}
        setShowTaskPage={setShowTaskPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    // marginTop: 48,
    paddingTop: 40,
    backgroundColor: "#DEDCDC",
    width: "100%",
  },
  containerDark: {
    backgroundColor: "#191D23",
  },
});
