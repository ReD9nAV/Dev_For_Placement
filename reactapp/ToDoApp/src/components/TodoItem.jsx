import React from 'react';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        className="todo-text"
        onClick={() => onToggleComplete(todo.id)} // Toggle on text click too
      >
        {todo.text}
      </span>
      <div className="todo-actions">
         <button
            className="toggle-btn"
            onClick={() => onToggleComplete(todo.id)}
            title={todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
         >
           {todo.completed ? 'Undo' : '✓'}
         </button>
        <button
            className="delete-btn"
            onClick={() => onDeleteTodo(todo.id)}
            title="Delete Task"
            >
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TodoItem;