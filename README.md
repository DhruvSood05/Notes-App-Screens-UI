# Notes App Screens UI

A clean notes app UI built with React Native, Expo, and Expo Router. The app focuses on a simple task list experience with a polished detail screen, dark mode support, and an editable note layout.

## Features

- Browse a list of notes in a responsive FlatList layout
- Open a note into a dedicated task detail screen
- Edit note title and description fields
- Toggle dark mode across the main screens
- Use a search bar and reusable UI components for a consistent layout

## Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript
- React Native Vector Icons

## Getting Started

1. Install dependencies

   ```bash
   bun install
   ```

2. Start the app

   ```bash
   bun expo start
   ```

3. Open it in your preferred target:

- Expo Go
- Android emulator
- iOS simulator
- Web

## Project Structure

- `src/app` contains the routed app screens
- `src/components` contains reusable UI pieces
- `src/components/TaskPage` contains the task detail screen and its inputs

## Notes

This project is focused on UI and interaction design rather than persistence, so the current implementation uses local component state and mock note data.
