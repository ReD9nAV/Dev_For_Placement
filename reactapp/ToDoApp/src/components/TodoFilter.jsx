import React from 'react';

function TodoFilter({ currentFilter, onSetFilter }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="todo-filter">
      Show:
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onSetFilter(filter)}
          className={currentFilter === filter ? 'active' : ''}
          disabled={currentFilter === filter} // Disable clicking the active filter
        >
          {/* Capitalize first letter for display */}
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;