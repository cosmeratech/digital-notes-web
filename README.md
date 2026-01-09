# Digital Notes App

A sleek, modern note-taking application built with vanilla HTML, CSS, and JavaScript. Create, edit, and manage your notes with a beautiful glassmorphism design and persistent local storage.

## Features

- **Add Notes** – Create new notes with a single click
- **Edit Notes** – Modify note titles and content in real-time
- **Delete Notes** – Remove notes you no longer need
- **Auto-Save** – Notes are saved to localStorage for persistence
- **Toast Notifications** – Visual feedback when notes are saved
- **Responsive Design** – Grid layout adapts to all screen sizes
- **Modern UI** – Gradient background with glassmorphism cards

## LocalStorage

Notes are stored in the browser's localStorage under the key `"notes"` as a JSON array:

```json
[
  { "title": "My Note", "text": "Note content here..." },
  { "title": "Another Note", "text": "More content..." }
]

## License

This project is open source and available for personal and educational use.
