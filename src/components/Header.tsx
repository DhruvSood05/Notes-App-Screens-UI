import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Heading from "./Heading";

import AddButton from "./AddButton";
import PressableTask from "./PressableTask";
import SearchBar from "./SearchBar";
import TaskPage from "./TaskPage/TaskPage";

export interface Mode {
  dark: boolean;
  setDark?: (v: boolean) => void;
  showTaskPage?: boolean;
  setShowTaskPage?: (v: boolean) => void;
  searchTerm?: string;
  setSearchTerm?: (v: string) => void;
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

const createEmptyTask = (): DataItem => ({
  id: Date.now().toString(),
  title: "",
  description: "",
  date: new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }),
});

const header = ({
  dark,
  setDark,
  showTaskPage,
  setShowTaskPage,
  searchTerm = "",
  setSearchTerm,
}: Mode) => {
  const [notesData, setNotesData] = useState<DataItem[]>(DATA);
  const [selectedTask, setSelectedTask] = useState<DataItem | null>(null);
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredNotes = normalizedSearch
    ? notesData.filter((item) =>
        item.title.toLowerCase().includes(normalizedSearch),
      )
    : notesData;

  const handleOpenNewTask = () => {
    setSelectedTask(createEmptyTask());
    setShowTaskPage?.(true);
  };

  const handleSaveTask = (task: DataItem) => {
    setNotesData((currentNotes) => {
      const existingIndex = currentNotes.findIndex(
        (item) => item.id === task.id,
      );

      if (existingIndex === -1) {
        return [task, ...currentNotes];
      }

      const updatedNotes = [...currentNotes];
      updatedNotes[existingIndex] = task;
      return updatedNotes;
    });

    setSelectedTask(task);
    setShowTaskPage?.(false);
  };

  const handleDeleteTask = (id: string) => {
    setNotesData((currentNotes) =>
      currentNotes.filter((item) => item.id !== id),
    );

    setSelectedTask((currentTask) =>
      currentTask && currentTask.id === id ? null : currentTask,
    );
  };

  if (showTaskPage && selectedTask) {
    return (
      <TaskPage
        onGoBack={() => setShowTaskPage?.(false)}
        onSave={handleSaveTask}
        task={selectedTask}
        dark={dark}
        onChangeTitle={(title) =>
          setSelectedTask((currentTask) =>
            currentTask ? { ...currentTask, title } : currentTask,
          )
        }
        onChangeDescription={(description) =>
          setSelectedTask((currentTask) =>
            currentTask ? { ...currentTask, description } : currentTask,
          )
        }
      />
    );
  }

  return (
    <View style={[styles.header, dark && styles.headerDark]}>
      <Heading dark={dark} setDark={setDark} />
      <SearchBar
        dark={dark}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm?.(text)}
      />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={filteredNotes}
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
            onDelete={() => handleDeleteTask(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ alignItems: "center" }}>
        <AddButton onPress={handleOpenNewTask} />
      </View>
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
    flex: 1,
    width: "100%",
  },

  listContent: {
    flexGrow: 1,
  },
});
