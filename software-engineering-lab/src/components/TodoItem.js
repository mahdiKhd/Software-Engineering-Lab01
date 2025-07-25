import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            onBlur={handleCancel}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
            {todo.text}
          </span>
        )}
        <small className="todo-date">ایجاد شده در: {todo.createdAt}</small>
      </div>
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="save-button" title="ذخیره تغییرات">
              ✓
            </button>
            <button onClick={handleCancel} className="cancel-button" title="لغو ویرایش">
              ✕
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => onToggle(todo.id)}
              className={`toggle-button ${todo.completed ? 'completed' : ''}`}
              title={todo.completed ? 'برگرداندن به وضعیت انجام نشده' : 'علامت‌گذاری به عنوان انجام شده'}
            >
              {todo.completed ? '✓' : '○'}
            </button>
            <button 
              onClick={() => setIsEditing(true)}
              className="edit-button"
              title="ویرایش وظیفه"
            >
              ✏️
            </button>
            <button 
              onClick={() => onDelete(todo.id)}
              className="delete-button"
              title="حذف وظیفه"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem; 