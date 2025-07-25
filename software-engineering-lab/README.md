# Software Engineering Lab - React Todo App

## Overview
A modern, feature-rich React Todo application with advanced features, accessibility, and internationalization.

## Features
- Add, edit, delete, and complete todos
- Due dates and overdue notifications
- Drag-and-drop reordering
- Priority system
- Filtering and search
- Bulk actions
- LocalStorage persistence
- Inline editing
- Undo/redo actions
- Responsive design
- Dark mode
- Multi-language (FA/EN)
- User onboarding tour
- Accessibility (ARIA, keyboard navigation)
- Integration tests

## Getting Started

### Installation
```bash
cd software-engineering-lab
npm install
```

### Running the App
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Running Tests
```bash
npm test
```

## Usage Examples

- **Add a Todo:** Type in the input and press Enter or click Add.
- **Set Due Date:** Use the date picker next to the input.
- **Mark Complete:** Click the circle next to a todo.
- **Edit:** Double-click a todo or click the pencil icon.
- **Delete:** Click the trash icon.
- **Reorder:** Drag and drop todos.
- **Undo/Redo:** Use the ↩️ and ↪️ buttons in the header.
- **Switch Language:** Use the FA/EN buttons in the header.
- **View Stats:** Click the 📊 button.
- **Bulk Actions:** Use filter and clear completed.

## Main Components API

### `<App />`
- Root component. Manages state, persistence, and UI logic.

### `<TodoItem />`
- Props:
  - `todo`: Todo object
  - `onToggle(id)`
  - `onDelete(id)`
  - `onEdit(id, newText, newDueDate)`
  - `onPriorityChange(id, newPriority)`

### `<StatsDashboard />`
- Props:
  - `todos`: Array of todos
  - `isVisible`: Boolean
  - `onToggle()`: Show/hide stats

## Accessibility
- All controls are keyboard accessible
- ARIA roles and labels are provided

## Internationalization
- Uses `react-i18next` for FA/EN support

## License
MIT
