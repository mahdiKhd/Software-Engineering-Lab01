// Local Storage utilities for persisting todos

const STORAGE_KEY = 'software-engineering-lab-todos';

export const loadTodos = () => {
  try {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
    return [];
  }
};

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
};

export const clearTodos = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing todos from localStorage:', error);
  }
};

export const exportTodos = (todos) => {
  try {
    const dataStr = JSON.stringify(todos, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `todos-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('Error exporting todos:', error);
    return false;
  }
};

export const importTodos = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const todos = JSON.parse(e.target.result);
          if (Array.isArray(todos)) {
            resolve(todos);
          } else {
            reject(new Error('فایل انتخاب شده معتبر نیست'));
          }
        } catch (error) {
          reject(new Error('خطا در خواندن فایل'));
        }
      };
      reader.onerror = () => reject(new Error('خطا در باز کردن فایل'));
      reader.readAsText(file);
    } catch (error) {
      reject(error);
    }
  });
}; 