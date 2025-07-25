import React from 'react';

const StatsDashboard = ({ todos, isVisible, onToggle }) => {
  if (!isVisible) return null;

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  // Priority statistics
  const highPriority = todos.filter(todo => todo.priority === 'high').length;
  const mediumPriority = todos.filter(todo => todo.priority === 'medium').length;
  const lowPriority = todos.filter(todo => todo.priority === 'low').length;

  // Completed by priority
  const completedHigh = todos.filter(todo => todo.completed && todo.priority === 'high').length;
  const completedMedium = todos.filter(todo => todo.completed && todo.priority === 'medium').length;
  const completedLow = todos.filter(todo => todo.completed && todo.priority === 'low').length;

  // Date statistics
  const today = new Date().toLocaleDateString('fa-IR');
  const todayTodos = todos.filter(todo => todo.createdAt === today).length;

  // Average text length
  const avgLength = totalTodos > 0 ? 
    Math.round(todos.reduce((sum, todo) => sum + todo.text.length, 0) / totalTodos) : 0;

  return (
    <div className="stats-dashboard">
      <div className="stats-header">
        <h3>📊 داشبورد آمار</h3>
        <button onClick={onToggle} className="close-stats" title="بستن آمار">
          ✕
        </button>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card completion">
          <div className="stat-icon">🎯</div>
          <div className="stat-info">
            <div className="stat-number">{completionRate}%</div>
            <div className="stat-label">نرخ تکمیل</div>
          </div>
        </div>

        <div className="stat-card total">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <div className="stat-number">{totalTodos}</div>
            <div className="stat-label">کل وظایف</div>
          </div>
        </div>

        <div className="stat-card active">
          <div className="stat-icon">🔥</div>
          <div className="stat-info">
            <div className="stat-number">{activeTodos}</div>
            <div className="stat-label">فعال</div>
          </div>
        </div>

        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <div className="stat-number">{completedTodos}</div>
            <div className="stat-label">تکمیل شده</div>
          </div>
        </div>

        <div className="stat-card today">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <div className="stat-number">{todayTodos}</div>
            <div className="stat-label">امروز</div>
          </div>
        </div>

        <div className="stat-card length">
          <div className="stat-icon">📏</div>
          <div className="stat-info">
            <div className="stat-number">{avgLength}</div>
            <div className="stat-label">متوسط کاراکتر</div>
          </div>
        </div>
      </div>

      <div className="priority-stats">
        <h4>آمار اولویت‌ها</h4>
        <div className="priority-breakdown">
          <div className="priority-item high">
            <span className="priority-color"></span>
            <span>بالا: {highPriority} ({completedHigh} تکمیل شده)</span>
          </div>
          <div className="priority-item medium">
            <span className="priority-color"></span>
            <span>متوسط: {mediumPriority} ({completedMedium} تکمیل شده)</span>
          </div>
          <div className="priority-item low">
            <span className="priority-color"></span>
            <span>پایین: {lowPriority} ({completedLow} تکمیل شده)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard; 