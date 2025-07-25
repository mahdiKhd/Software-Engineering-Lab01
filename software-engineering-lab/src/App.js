import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toLocaleDateString('fa-IR')
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="App">
      <header className="app-header">
        <h1>مدیریت وظایف</h1>
        <p>برنامه مدیریت وظایف شخصی</p>
        {totalCount > 0 && (
          <div className="stats">
            <span>تکمیل شده: {completedCount} از {totalCount}</span>
          </div>
        )}
      </header>
      <main className="app-main">
        <div className="todo-container">
          <div className="input-section">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="وظیفه جدید اضافه کنید..."
              className="todo-input"
            />
            <button onClick={addTodo} className="add-button">افزودن</button>
          </div>
          <div className="todos-list">
            {todos.length === 0 ? (
              <p className="empty-message">هنوز هیچ وظیفه‌ای اضافه نشده است</p>
            ) : (
              todos.map((todo) => (
                <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <div className="todo-content">
                    <span className="todo-text">{todo.text}</span>
                    <small className="todo-date">ایجاد شده در: {todo.createdAt}</small>
                  </div>
                  <div className="todo-actions">
                    <button 
                      onClick={() => toggleTodo(todo.id)}
                      className={`toggle-button ${todo.completed ? 'completed' : ''}`}
                    >
                      {todo.completed ? '✓' : '○'}
                    </button>
                    <button 
                      onClick={() => deleteTodo(todo.id)}
                      className="delete-button"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
