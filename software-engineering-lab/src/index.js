import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// i18n setup
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Add a new todo...': 'Add a new todo...',
        'Add': 'Add',
        'All': 'All',
        'Active': 'Active',
        'Completed': 'Completed',
        'Clear completed': 'Clear completed',
        'Created at': 'Created at',
        'Due': 'Due',
        'Overdue!': 'Overdue!',
        'Search todos...': 'Search todos...',
        'Add your first todo here!': 'Add your first todo here!',
        'Filter your todos by status.': 'Filter your todos by status.',
        'Switch between Persian and English.': 'Switch between Persian and English.',
        'Back': 'Back',
        'Close': 'Close',
        'Finish': 'Finish',
        'Next': 'Next',
        'Skip': 'Skip'
      }
    },
    fa: {
      translation: {
        'Add a new todo...': 'وظیفه جدید اضافه کنید...',
        'Add': 'افزودن',
        'All': 'همه',
        'Active': 'فعال',
        'Completed': 'تکمیل شده',
        'Clear completed': 'پاک کردن تکمیل شده‌ها',
        'Created at': 'ایجاد شده در',
        'Due': 'سررسید',
        'Overdue!': 'سررسید گذشته!',
        'Search todos...': 'جستجو در وظایف...',
        'Add your first todo here!': 'اینجا اولین وظیفه خود را اضافه کنید!',
        'Filter your todos by status.': 'وظایف خود را بر اساس وضعیت فیلتر کنید.',
        'Switch between Persian and English.': 'بین فارسی و انگلیسی جابجا شوید.',
        'Back': 'قبلی',
        'Close': 'بستن',
        'Finish': 'پایان',
        'Next': 'بعدی',
        'Skip': 'رد کردن'
      }
    }
  },
  lng: 'fa',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
