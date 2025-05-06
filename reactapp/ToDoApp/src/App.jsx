// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter'; // Import filter component
import './App.css';

function App() {
  // State for the list of todos
  // Load todos from local storage or start with an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // State for the current filter ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all'); // Default filter

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (text) => {
    if (!text.trim()) return; // Don't add empty todos
    const newTodo = {
      id: uuidv4(), // Use uuid for unique ID
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the completed status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on the current filter state
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true; // 'all' filter shows all todos
  });

  return (
    <div className="todo-app">
      <h1>My To-Do List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoFilter currentFilter={filter} onSetFilter={setFilter} /> {/* Add Filter Controls */}
      <TodoList
        todos={filteredTodos} // Pass filtered list
        onToggleComplete={toggleComplete}
        onDeleteTodo={deleteTodo}
      />
        {todos.length > 0 && (
             <p className="todo-count">
                {filteredTodos.length} {filter === 'all' ? 'task(s)' : filter} task(s) displayed.
             </p>
        )}

    </div>
  );
}

export default App;
