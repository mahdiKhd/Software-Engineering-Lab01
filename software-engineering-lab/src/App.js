import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <header className="app-header">
        <h1>مدیریت وظایف</h1>
        <p>برنامه مدیریت وظایف شخصی</p>
      </header>
      <main className="app-main">
        <div className="todo-container">
          <div className="input-section">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="وظیفه جدید اضافه کنید..."
              className="todo-input"
            />
            <button className="add-button">افزودن</button>
          </div>
          <div className="todos-list">
            {todos.length === 0 ? (
              <p className="empty-message">هنوز هیچ وظیفه‌ای اضافه نشده است</p>
            ) : (
              todos.map((todo, index) => (
                <div key={index} className="todo-item">
                  {todo}
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
