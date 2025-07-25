# 📝 مدیریت وظایف پیشرفته - Software Engineering Lab01

یک برنامه مدیریت وظایف مدرن و پیشرفته که با React.js توسعه یافته و شامل قابلیت‌های فراوانی است.

## 🌐 دموی زنده

**آدرس GitHub Pages:** [https://mahdikhd.github.io/Software-Engineering-Lab01](https://mahdikhd.github.io/Software-Engineering-Lab01)

## 🚀 ویژگی‌ها

### ⭐ قابلیت‌های اصلی

- ✅ **ایجاد، ویرایش و حذف وظایف** با رابط کاربری زیبا
- 🎯 **سیستم اولویت‌بندی** (بالا، متوسط، پایین) با رنگ‌بندی
- 🔍 **جستجوی پیشرفته** در متن وظایف
- 📊 **داشبورد آمار جامع** با نمایش اطلاعات تفصیلی
- 🌙 **حالت تاریک/روشن** با ذخیره‌سازی ترجیحات
- 💾 **ذخیره‌سازی خودکار** در Local Storage
- 📤 **صادرات/وارد کردن** وظایف با فرمت JSON
- 📱 **طراحی کاملاً واکنش‌گرا** برای همه دستگاه‌ها

### 🎨 ویژگی‌های طراحی

- 🌈 **طراحی مدرن با Glassmorphism**
- 🎭 **انیمیشن‌های روان و جذاب**
- 🌍 **پشتیبانی کامل از زبان فارسی** (RTL)
- 🖨️ **قابلیت چاپ** با استایل مخصوص
- 📊 **نمایش آمار تعاملی** و رنگی

## 🔧 تکنولوژی‌های استفاده شده

- **React.js 19.1.0** - کتابخانه اصلی UI
- **JavaScript ES6+** - زبان برنامه‌نویسی
- **CSS3** با Media Queries - استایل‌دهی و طراحی واکنش‌گرا
- **Local Storage API** - ذخیره‌سازی داده‌ها
- **File API** - مدیریت فایل‌ها برای import/export
- **GitHub Actions** - CI/CD و استقرار خودکار
- **GitHub Pages** - هاست برنامه

## 📁 ساختار پروژه

```
software-engineering-lab/
├── public/                 # فایل‌های عمومی
├── src/
│   ├── components/         # کامپوننت‌های React
│   │   ├── TodoItem.js    # کامپوننت آیتم وظیفه
│   │   └── StatsDashboard.js # داشبورد آمار
│   ├── utils/             # توابع کمکی
│   │   └── storage.js     # مدیریت Local Storage
│   ├── App.js            # کامپوننت اصلی
│   ├── App.css           # استایل‌های اصلی
│   └── index.js          # نقطه ورود برنامه
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
└── package.json          # وابستگی‌ها و تنظیمات
```

## 🌿 مدیریت شاخه‌ها (Git Branching)

### شاخه‌های اصلی

1. **`main`** - شاخه اصلی و پایدار

   - حاوی کد نهایی و آماده production
   - محافظت شده با pull request requirement
   - پایه deployment روی GitHub Pages

2. **`dev`** - شاخه توسعه

   - مرکز ادغام تمام feature ها
   - محل تست و بررسی تغییرات
   - شامل آخرین قابلیت‌ها قبل از انتشار

3. **`feature/ui`** - شاخه توسعه رابط کاربری

   - توسعه کامپوننت‌های UI
   - بهبودهای تجربه کاربری
   - طراحی و استایل‌دهی

4. **`hotfix`** - شاخه رفع اضطراری باگ‌ها
   - رفع سریع مشکلات فوری
   - تغییرات کوچک و ضروری
   - بازگشت سریع به production

### استراتژی Branching

- **Git Flow** pattern استفاده شده
- تمام feature ها ابتدا در `feature/ui` و سپس در `dev` ادغام می‌شوند
- تنها از طریق **Pull Request** امکان ادغام با `main` وجود دارد
- هر branch برای هدف خاصی طراحی شده

## 📝 تاریخچه کامیت‌ها (20+ کامیت معنادار)

### کامیت‌های مرحله اول - پایه‌گذاری (کامیت 1-6)

1. **init** - راه‌اندازی اولیه پروژه
2. **Add gitignore** - اضافه کردن فایل gitignore
3. **Init react project** - ایجاد پروژه React
4. **feat: Create initial Todo List app structure** - ساختار اولیه با UI مدرن
5. **feat: Add todo creation functionality** - قابلیت ایجاد وظایف
6. **feat: Add localStorage persistence** - ذخیره‌سازی محلی

### کامیت‌های مرحله دوم - توسعه قابلیت‌ها (کامیت 7-12)

7. **feat: Add todo completion and deletion** - تکمیل و حذف وظایف
8. **refactor: Extract TodoItem component** - جداسازی کامپوننت
9. **feat: Add filtering and bulk actions** - فیلتر و عملیات گروهی
10. **feat: Add inline editing functionality** - ویرایش درجا
11. **feat: Implement priority system** - سیستم اولویت‌بندی
12. **feat: Add search functionality** - قابلیت جستجو

### کامیت‌های مرحله سوم - حل تعارض‌ها (کامیت 13-16)

13. **hotfix: Emergency UI fixes with red theme** - رفع اضطراری با تم قرمز
14. **feat: Add premium theme with golden design** - تم طلایی پریمیوم
15. **resolve: Merge conflicts between themes** - حل تعارض اول
16. **resolve: Merge search and priority systems** - حل تعارض دوم

### کامیت‌های مرحله چهارم - ویژگی‌های پیشرفته (کامیت 17-20)

17. **feat: Add dark mode toggle** - حالت تاریک
18. **feat: Add export/import functionality** - صادرات/وارد کردن
19. **feat: Add comprehensive statistics dashboard** - داشبورد آمار
20. **feat: Add comprehensive responsive design** - طراحی واکنش‌گرا

## ⚡ حل تعارض‌ها (Conflicts Resolution)

### تعارض اول: تم‌های مختلف

- **مکان:** فایل‌های `App.js` و `App.css`
- **علت:** توسعه همزمان تم قرمز اضطراری در `hotfix` و تم طلایی در `feature/ui`
- **راه‌حل:** ترکیب هر دو تم در یک gradient سه‌رنگه
- **نتیجه:** رابط کاربری ترکیبی با المان‌های هر دو تم

### تعارض دوم: سیستم‌های مختلف

- **مکان:** تابع `getFilteredTodos` در `App.js`
- **علت:** اضافه شدن search در `dev` و priority sorting در `feature/ui`
- **راه‌حل:** ترتیب منطقی: ابتدا search سپس priority sorting
- **نتیجه:** قابلیت جستجو و مرتب‌سازی بر اساس اولویت همزمان

## 🔄 GitHub Actions CI/CD

### Workflow تنظیم شده

```yaml
name: Deploy React App to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js 18
      - Install dependencies
      - Build project
      - Deploy to GitHub Pages
```

### مراحل Deployment

1. **Trigger:** Push به شاخه main
2. **Build:** نصب dependencies و build پروژه
3. **Deploy:** انتشار خودکار روی GitHub Pages
4. **URL:** دسترسی از طریق آدرس GitHub Pages

## 📊 آمار پروژه

- **تعداد کامیت‌ها:** 20 کامیت معنادار
- **تعداد شاخه‌ها:** 4 شاخه اصلی
- **تعداد تعارض‌های حل شده:** 2 conflict
- **خطوط کد:** 1500+ خط
- **کامپوننت‌ها:** 3 کامپوننت اصلی
- **فایل‌های CSS:** طراحی کاملاً responsive

## 🛠️ نصب و اجرا

### پیش‌نیازها

- Node.js (نسخه 16 یا بالاتر)
- npm یا yarn
- Git

### مراحل نصب

```bash
# کلون پروژه
git clone https://github.com/mahdiKhd/Software-Engineering-Lab01.git

# ورود به پوشه پروژه
cd Software-Engineering-Lab01/software-engineering-lab

# نصب وابستگی‌ها
npm install

# اجرای پروژه در حالت توسعه
npm start

# ساخت نسخه production
npm run build
```

## 🎯 نحوه استفاده

### عملیات اصلی

1. **افزودن وظیفه:** متن وظیفه را تایپ کرده و Enter بزنید
2. **تکمیل وظیفه:** روی دکمه دایره‌ای کلیک کنید
3. **ویرایش وظیفه:** دو بار روی متن کلیک کنید یا دکمه مداد
4. **تغییر اولویت:** روی نشان اولویت کلیک کنید
5. **حذف وظیفه:** دکمه سطل آشغال را بزنید

### قابلیت‌های پیشرفته

- **جستجو:** از نوار جستجو استفاده کنید
- **فیلتر:** دکمه‌های همه/فعال/تکمیل شده
- **آمار:** دکمه 📊 برای نمایش داشبورد
- **صادرات:** دکمه 📤 برای دانلود JSON
- **وارد کردن:** دکمه 📥 برای آپلود فایل
- **حالت تاریک:** دکمه 🌙/☀️

## 🏆 دستاوردها

این پروژه نمونه‌ای کامل از:

- **مدیریت نسخه با Git** و استراتژی branching حرفه‌ای
- **حل تعارض‌ها** به صورت منطقی و عملی
- **CI/CD pipeline** با GitHub Actions
- **طراحی مدرن و responsive** با تکنولوژی‌های روز
- **معماری قابل توسعه** و clean code
- **تجربه کاربری عالی** با انیمیشن و تعاملات روان

## 👥 توسعه‌دهندگان

این پروژه در چارچوب آزمایش مهندسی نرم‌افزار توسعه یافته و شامل تمامی الزامات مطرح شده است.

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

---

**⭐ اگر این پروژه برایتان مفید بود، حتماً ستاره بدهید!**
