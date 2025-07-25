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