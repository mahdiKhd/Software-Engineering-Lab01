import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <span className="todo-text">{todo.text}</span>
        <small className="todo-date">ایجاد شده در: {todo.createdAt}</small>
      </div>
      <div className="todo-actions">
        <button 
          onClick={() => onToggle(todo.id)}
          className={`toggle-button ${todo.completed ? 'completed' : ''}`}
          title={todo.completed ? 'برگرداندن به وضعیت انجام نشده' : 'علامت‌گذاری به عنوان انجام شده'}
        >
          {todo.completed ? '✓' : '○'}
        </button>
        <button 
          onClick={() => onDelete(todo.id)}
          className="delete-button"
          title="حذف وظیفه"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TodoItem; 