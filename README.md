# Notes App Screens UI

A polished React Native notes app UI built with Expo. The app focuses on a premium mobile experience with dark mode, search, editable notes, and a clean task page flow.

## Highlights

- Browse notes in a responsive card list layout
- Search notes live by title, letter by letter
- Open notes in a dedicated task page
- Create, edit, and delete notes with local state
- Switch between dark and light themes
- Keep the UI consistent across list, search, and task screens

## Tech Stack

- React Native
- Expo
- TypeScript
- React Native Vector Icons

## Screenshots

### Home Screen - Light Mode

## Demo Video

<video controls src="assets/Video/video.mp4" title="Title" width="300"></video>

## Screenshots

### Home Screen - Light Mode

<img src="assets/images/WhatsApp%20Image%202026-05-12%20at%2010.33.54%20PM.jpeg" width="300" alt="Home screen light mode"/>

### Task Page - Filled Note

<img src="assets/images/WhatsApp%20Image%202026-05-12%20at%2010.33.54%20PM%20(2).jpeg" width="300" alt="Task page filled note"/>

### Home Screen - Dark Mode

<img src="assets/images/WhatsApp%20Image%202026-05-12%20at%2010.33.54%20PM%20(1).jpeg" width="300" alt="Home screen dark mode"/>

### Search In Action

<img src="assets/images/WhatsApp%20Image%202026-05-12%20at%2010.33.55%20PM.jpeg" width="300" alt="Search in action"/>

### Task Page - Empty Note

<img src="assets/images/WhatsApp%20Image%202026-05-12%20at%2010.33.55%20PM%20(1).jpeg" width="300" alt="Task page empty note"/>

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
- `assets/images` contains the screenshots used in this README

## Notes

This project is focused on UI and interaction design rather than persistence. Notes are currently stored in local component state with mock data for a smooth demo experience.
