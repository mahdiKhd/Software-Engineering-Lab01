import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

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

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.filter(todo => !todo.completed).length;
  const totalCount = todos.length;
  const filteredTodos = getFilteredTodos();

  return (
    <div className="App">
      <header className="app-header">
        <h1>مدیریت وظایف</h1>
        <p>برنامه مدیریت وظایف شخصی</p>
        {totalCount > 0 && (
          <div className="stats">
            <span>کل: {totalCount} | فعال: {activeCount} | تکمیل شده: {completedCount}</span>
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

          {totalCount > 0 && (
            <div className="filter-section">
              <button 
                onClick={() => setFilter('all')}
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              >
                همه ({totalCount})
              </button>
              <button 
                onClick={() => setFilter('active')}
                className={`filter-button ${filter === 'active' ? 'active' : ''}`}
              >
                فعال ({activeCount})
              </button>
              <button 
                onClick={() => setFilter('completed')}
                className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
              >
                تکمیل شده ({completedCount})
              </button>
              {completedCount > 0 && (
                <button onClick={clearCompleted} className="clear-button">
                  پاک کردن تکمیل شده‌ها
                </button>
              )}
            </div>
          )}

          <div className="todos-list">
            {filteredTodos.length === 0 ? (
              <p className="empty-message">
                {filter === 'active' && totalCount > 0 
                  ? 'همه وظایف تکمیل شده‌اند! 🎉' 
                  : filter === 'completed' && totalCount > 0
                  ? 'هیچ وظیفه تکمیل شده‌ای وجود ندارد'
                  : 'هنوز هیچ وظیفه‌ای اضافه نشده است'
                }
              </p>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem 
                  key={todo.id} 
                  todo={todo} 
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
