# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Simple React To-Do List App

This is a basic To-Do List application built with ReactJS using Functional Components and Hooks (`useState`, `useEffect`).

## Features

- Add new tasks.
- Mark tasks as completed (visualized with strikethrough and different background).
- Mark completed tasks as active again.
- Delete tasks.
- Filter tasks by status: All, Active, Completed.
- Tasks persist in the browser's local storage.

## Project Structure

- `/src`: Contains the React application source code.
  - `/components`: Reusable React components (TodoForm, TodoList, TodoItem, TodoFilter).
  - `App.jsx`: Main application component, manages state.
  - `App.css`: Styles for the application.
  - `main.jsx`: Entry point for the React app.
- `/public`: Static assets.
- `index.html`: The main HTML file.
- `package.json`: Project dependencies and scripts.
- `vite.config.js`: Vite configuration.

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) installed on your system.

## How to Run

1.  **Clone the repository (if applicable) or download the project files.**
2.  **Navigate to the project directory** in your terminal:
    ```bash
    cd ToDoApp
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
5.  **Open your web browser** and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## Technology Stack

- ReactJS (v18+)
- Vite (Build Tool)
- JavaScript (ES6+)
- CSS3
- `uuid` library (for generating unique IDs)
- Browser Local Storage (for persistence)
