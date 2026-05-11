import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Heading from "./Heading";

import PressableTask from "./PressableTask";
import SearchBar from "./SearchBar";
import TaskPage from "./TaskPage/TaskPage";

export interface Mode {
  dark: boolean;
  setDark?: (v: boolean) => void;
  showTaskPage?: boolean;
  setShowTaskPage?: (v: boolean) => void;
}

interface DataItem {
  id: string;
  title: string;
  date: string;
}

export const DATA: DataItem[] = [
  {
    id: "1",
    title: "Frontend Development",
    date: "30 July 2026",
  },
  {
    id: "2",
    title: "UI/UX Design Meeting",
    date: "30 July 2026",
  },
  {
    id: "3",
    title: "React Native Practice",
    date: "30 July 2026",
  },
  {
    id: "4",
    title: "Backend API Testing",
    date: "30 July 2026",
  },
  {
    id: "5",
    title: "Portfolio Update",
    date: "30 July 2026",
  },
  {
    id: "6",
    title: "TypeScript Learning",
    date: "30 July 2026",
  },
  {
    id: "7",
    title: "Portfolio Website Update",
    date: "30 July 2026",
  },
  {
    id: "8",
    title: "Figma Wireframe Design",
    date: "30 July 2026",
  },
  {
    id: "9",
    title: "Authentication System Setup",
    date: "30 July 2026",
  },
  {
    id: "10",
    title: "GitHub Project Cleanup",
    date: "30 July 2026",
  },
  {
    id: "11",
    title: "Hackathon Preparation",
    date: "30 July 2026",
  },
  {
    id: "12",
    title: "Node.js Server Testing",
    date: "30 July 2026",
  },
  {
    id: "13",
    title: "Mobile App UI Polish",
    date: "30 July 2026",
  },
  {
    id: "14",
    title: "TailwindCSS Practice",
    date: "30 July 2026",
  },
  {
    id: "15",
    title: "DSA Problem Solving",
    date: "30 July 2026",
  },
];

const header = ({ dark, setDark, showTaskPage, setShowTaskPage }: Mode) => {
  if (showTaskPage) {
    return <TaskPage />;
  }

  return (
    <View style={[styles.header, dark && styles.headerDark]}>
      <Heading dark={dark} setDark={setDark} />
      <SearchBar dark={dark} />
      <FlatList
        style={styles.list}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PressableTask
            dark={dark}
            title={item.title}
            date={item.date}
            onPress={() => setShowTaskPage?.(true)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
  },

  headerDark: {
    backgroundColor: "#291C0E",
  },

  list: {
    marginTop: 10,

    borderRadius: 10,
  },
});
