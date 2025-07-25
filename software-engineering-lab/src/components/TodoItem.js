import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TodoItem = ({ todo, onToggle, onDelete, onEdit, onPriorityChange }) => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate || '');

  const handleSave = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText.trim(), editDueDate);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setEditDueDate(todo.dueDate || '');
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '🟡';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high': return 'بالا';
      case 'medium': return 'متوسط';
      case 'low': return 'پایین';
      default: return 'متوسط';
    }
  };

  const cyclePriority = () => {
    const priorities = ['low', 'medium', 'high'];
    const currentIndex = priorities.indexOf(todo.priority);
    const nextIndex = (currentIndex + 1) % priorities.length;
    onPriorityChange(todo.id, priorities[nextIndex]);
  };

  const isOverdue = () => {
    if (!todo.dueDate || todo.completed) return false;
    const today = new Date();
    const due = new Date(todo.dueDate);
    // Ignore time part for comparison
    today.setHours(0,0,0,0);
    due.setHours(0,0,0,0);
    return due < today;
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}${isOverdue() ? ' overdue' : ''}`} role="listitem" aria-label={todo.text}>
      <div className="todo-content">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={handleCancel}
              className="edit-input"
              autoFocus
              aria-label="Edit todo text"
            />
            <input
              type="date"
              value={editDueDate}
              onChange={e => setEditDueDate(e.target.value)}
              className="edit-due-date-input"
              aria-label="Edit due date"
            />
          </>
        ) : (
          <span className="todo-text" onDoubleClick={() => setIsEditing(true)} tabIndex={0} aria-label={todo.text} role="textbox">
            {todo.text}
          </span>
        )}
        <div className="todo-meta">
          <small className="todo-date">{t('Created at')}: {todo.createdAt}</small>
          {todo.dueDate && (
            <small className="todo-due-date">{t('Due')}: {todo.dueDate}</small>
          )}
          {isOverdue() && (
            <span className="overdue-badge">{t('Overdue!')}</span>
          )}
          <span className="priority-badge" onClick={cyclePriority} title="کلیک برای تغییر اولویت">
            {getPriorityIcon(todo.priority)} {getPriorityText(todo.priority)}
          </span>
        </div>
      </div>
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="save-button" title="ذخیره تغییرات" aria-label="Save changes">
              ✓
            </button>
            <button onClick={handleCancel} className="cancel-button" title="لغو ویرایش" aria-label="Cancel editing">
              ✕
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => onToggle(todo.id)}
              className={`toggle-button ${todo.completed ? 'completed' : ''}`}
              title={todo.completed ? 'برگرداندن به وضعیت انجام نشده' : 'علامت‌گذاری به عنوان انجام شده'}
              aria-label={todo.completed ? 'Mark as not completed' : 'Mark as completed'}
            >
              {todo.completed ? '✓' : '○'}
            </button>
            <button 
              onClick={() => setIsEditing(true)}
              className="edit-button"
              title="ویرایش وظیفه"
              aria-label="Edit todo"
            >
              🖏
            </button>
            <button 
              onClick={() => onDelete(todo.id)}
              className="delete-button"
              title="حذف وظیفه"
              aria-label="Delete todo"
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