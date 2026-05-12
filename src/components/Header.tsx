import React, { useState } from "react";
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

export interface DataItem {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const DATA: DataItem[] = [
  {
    id: "1",
    title: "Frontend Development",
    description: "Build responsive UI components using React and TailwindCSS.",
    date: "30 July 2026",
  },
  {
    id: "2",
    title: "UI/UX Design Meeting",
    description: "Discuss app wireframes, user flow, and modern design ideas.",
    date: "30 July 2026",
  },
  {
    id: "3",
    title: "React Native Practice",
    description:
      "Work on navigation, FlatList, and reusable mobile components.",
    date: "30 July 2026",
  },
  {
    id: "4",
    title: "Backend API Testing",
    description: "Test REST APIs and validate authentication endpoints.",
    date: "30 July 2026",
  },
];

const header = ({ dark, setDark, showTaskPage, setShowTaskPage }: Mode) => {
  const [notesData, setNotesData] = useState([]);
  const [selectedTask, setSelectedTask] = useState<DataItem | null>(null);

  if (showTaskPage && selectedTask) {
    return (
      <TaskPage
        onGoBack={() => setShowTaskPage?.(false)}
        task={selectedTask}
        dark={dark}
      />
    );
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
            description={item.description}
            date={item.date}
            onPress={() => {
              setSelectedTask(item);
              setShowTaskPage?.(true);
            }}
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
    backgroundColor: "#191D23",
  },

  list: {
    marginTop: 10,

    borderRadius: 10,
  },
});
