import React, { useState, useEffect, useRef } from 'react';
import TodoItem from './components/TodoItem';
import StatsDashboard from './components/StatsDashboard';
import { loadTodos, saveTodos, exportTodos, importTodos } from './utils/storage';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const fileInputRef = useRef(null);
  const [dueDate, setDueDate] = useState('');

  // Drag and drop state
  const [draggedTodoId, setDraggedTodoId] = useState(null);

  const handleDragStart = (id) => {
    setDraggedTodoId(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (id) => {
    if (draggedTodoId === null || draggedTodoId === id) return;
    const draggedIndex = todos.findIndex(todo => todo.id === draggedTodoId);
    const dropIndex = todos.findIndex(todo => todo.id === id);
    if (draggedIndex === -1 || dropIndex === -1) return;
    const updatedTodos = [...todos];
    const [removed] = updatedTodos.splice(draggedIndex, 1);
    updatedTodos.splice(dropIndex, 0, removed);
    setTodos(updatedTodos);
    setDraggedTodoId(null);
  };

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = loadTodos();
    setTodos(savedTodos);
    
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        priority: 'medium', // 'high', 'medium', 'low'
        createdAt: new Date().toLocaleDateString('fa-IR'),
        dueDate: dueDate || null
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
      setDueDate('');
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

  const editTodo = (id, newText, newDueDate) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText, dueDate: newDueDate !== undefined ? newDueDate : todo.dueDate } : todo
    ));
  };

  const changePriority = (id, newPriority) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority: newPriority } : todo
    ));
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
    let filtered;
    switch (filter) {
      case 'active':
        filtered = todos.filter(todo => !todo.completed);
        break;
      case 'completed':
        filtered = todos.filter(todo => todo.completed);
        break;
      default:
        filtered = todos;
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(todo =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort by priority and completion status
    return filtered.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed - b.completed; // Completed items go to bottom
      }
      
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.filter(todo => !todo.completed).length;
  const totalCount = todos.length;
  const filteredTodos = getFilteredTodos();

  const handleExport = () => {
    const success = exportTodos(todos);
    if (success) {
      alert('وظایف با موفقیت صادر شدند!');
    } else {
      alert('خطا در صادر کردن وظایف');
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const importedTodos = await importTodos(file);
        const confirmation = window.confirm(
          `آیا می‌خواهید ${importedTodos.length} وظیفه را وارد کنید؟ این عمل وظایف فعلی را جایگزین می‌کند.`
        );
        if (confirmation) {
          setTodos(importedTodos);
          alert('وظایف با موفقیت وارد شدند!');
        }
      } catch (error) {
        alert(error.message);
      }
      // Reset file input
      e.target.value = '';
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>🔧✨ مدیریت وظایف پیشرفته - نسخه اضطراری</h1>
        <p>برنامه مدیریت وظایف شخصی - با ذخیره‌سازی خودکار - پریمیوم و بهبود یافته</p>
        <div className="combined-notice">
          🌟 نسخه پریمیوم با رفع باگ‌های فوری ⚠️
        </div>
        <div className="header-controls">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="dark-mode-toggle"
            title={darkMode ? 'حالت روشن' : 'حالت تاریک'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          {todos.length > 0 && (
            <>
              <button 
                onClick={() => setShowStats(!showStats)}
                className="stats-button" 
                title={showStats ? 'مخفی کردن آمار' : 'نمایش آمار'}
              >
                📊
              </button>
              <button onClick={handleExport} className="export-button" title="صادر کردن وظایف">
                📤
              </button>
              <button onClick={handleImportClick} className="import-button" title="وارد کردن وظایف">
                📥
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".json"
                style={{ display: 'none' }}
              />
            </>
          )}
        </div>
        {totalCount > 0 && (
          <div className="stats">
            <span>کل: {totalCount} | فعال: {activeCount} | تکمیل شده: {completedCount}</span>
          </div>
        )}
      </header>
      
      <main className="app-main">
        <div className="todo-container">
          <StatsDashboard 
            todos={todos} 
            isVisible={showStats} 
            onToggle={() => setShowStats(false)} 
          />
          
          <div className="input-section">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="وظیفه جدید اضافه کنید..."
              className="todo-input"
            />
            <input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="due-date-input"
              placeholder="تاریخ سررسید"
            />
            <button onClick={addTodo} className="add-button">افزودن</button>
          </div>

          {totalCount > 0 && (
            <>
              <div className="search-section">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="جستجو در وظایف..."
                  className="search-input"
                />
              </div>
              
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
            </>
          )}

          <div className="todos-list">
            {filteredTodos.length === 0 ? (
              <p className="empty-message">
                {searchTerm ? 'هیچ وظیفه‌ای با این عبارت یافت نشد' :
                 filter === 'active' && totalCount > 0 
                  ? 'همه وظایف تکمیل شده‌اند! 🎉' 
                  : filter === 'completed' && totalCount > 0
                  ? 'هیچ وظیفه تکمیل شده‌ای وجود ندارد'
                  : 'هنوز هیچ وظیفه‌ای اضافه نشده است'
                }
              </p>
            ) : (
              filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  draggable
                  onDragStart={() => handleDragStart(todo.id)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(todo.id)}
                >
                  <TodoItem 
                    todo={todo} 
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={(id, newText, newDueDate) => editTodo(id, newText, newDueDate)}
                    onPriorityChange={changePriority}
                  />
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
