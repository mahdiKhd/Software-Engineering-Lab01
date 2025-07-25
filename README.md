
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
- 📅 **وظایف با تاریخ سررسید** و نوتیفیکیشن تصویری
- 🔄 **Undo/Redo** برای عملیات وظیفه‌ها
- 🌍 **پشتیبانی از چند زبان (FA/EN)** با i18n
- 🧭 **تور راهنما برای کاربران جدید**
- 🧲 **مرتب‌سازی وظایف با Drag & Drop**
- ♿ **دسترس‌پذیری بالا با ARIA و ناوبری با کیبورد**

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
- **react-i18next** - چندزبانه‌سازی
- **react-joyride** - تور راهنما
- **Jest + Testing Library** - تست یکپارچه

## 📁 ساختار پروژه

```
software-engineering-lab/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoItem.js
│   │   └── StatsDashboard.js
│   ├── utils/
│   │   └── storage.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🌿 مدیریت شاخه‌ها (Git Branching)

### شاخه‌های اصلی

1. **`main`** - شاخه اصلی و پایدار
2. **`dev`** - شاخه توسعه
3. **`feature/ui`** - شاخه توسعه رابط کاربری
4. **`hotfix`** - شاخه رفع اضطراری
5. **`feature/next-features`** - شاخه قابلیت‌های آینده

### استراتژی Branching

- Git Flow pattern
- Merge‌ها از طریق Pull Request
- ساختار ماژولار و هدفمند برای هر شاخه

## 📝 تاریخچه کامیت‌ها (30 کامیت معنادار)

### مرحله اول - پایه‌گذاری

1. init
2. Add gitignore
3. Init react project
4. feat: Create initial Todo List app structure
5. feat: Add todo creation functionality
6. feat: Add localStorage persistence

### مرحله دوم - توسعه قابلیت‌ها

7. feat: Add todo completion and deletion
8. refactor: Extract TodoItem component
9. feat: Add filtering and bulk actions
10. feat: Add inline editing functionality
11. feat: Implement priority system
12. feat: Add search functionality

### مرحله سوم - حل تعارض‌ها

13. hotfix: Emergency UI fixes with red theme
14. feat: Add premium theme with golden design
15. resolve: Merge conflicts between themes
16. resolve: Merge search and priority systems

### مرحله چهارم - قابلیت‌های پیشرفته

17. feat: Add dark mode toggle
18. feat: Add export/import functionality
19. feat: Add comprehensive statistics dashboard
20. feat: Add comprehensive responsive design

### مرحله پنجم - بین‌المللی‌سازی و UX

21. feat: Add due date functionality for todos
22. feat: Add visual notification for overdue todos
23. feat: Enable drag-and-drop reordering of todos
24. feat: Integrate multi-language support (i18n)

### مرحله ششم - تعامل و دسترسی

25. feat: Implement user onboarding tour with react-joyride
26. feat: Add undo/redo functionality for todo actions with UI controls
27. feat: Improve accessibility with ARIA roles, labels, and better keyboard navigation
28. test: Add integration tests for main user flows

### مرحله نهایی - بهینه‌سازی و مستندات

29. chore: Optimize bundle size with code splitting and update dependencies
30. docs: Update README with full project overview and examples

## ⚡ حل تعارض‌ها

### تم‌ها
- تم قرمز در hotfix، تم طلایی در feature/ui → ترکیب تم‌ها در طراحی نهایی

### فیلتر و اولویت
- ادغام منطقی بین search و priority

## 🔄 GitHub Actions CI/CD

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

## 📊 آمار پروژه

- **تعداد کامیت‌ها:** 30 کامیت معنادار  
- **تعداد شاخه‌ها:** 5  
- **تعداد تعارض‌های حل شده:** 2  
- **قابلیت‌ها:** 15+ قابلیت کلیدی  
- **کامپوننت‌ها:** 3+ کامپوننت اصلی  
- **تست‌ها:** 1 فایل تست اصلی  
- **حجم نهایی:** < 100KB gzip  
- **پوشش زبان:** فارسی و انگلیسی

## 🛠️ نصب و اجرا

```bash
git clone https://github.com/mahdiKhd/Software-Engineering-Lab01.git
cd Software-Engineering-Lab01/software-engineering-lab
npm install
npm start
npm run build
```

## 🎯 نحوه استفاده

- افزودن، ویرایش، حذف وظایف
- جستجو، فیلتر، تغییر اولویت
- مشاهده آمار
- تور راهنما
- ذخیره و بارگذاری وظایف
- استفاده چندزبانه
- Drag & Drop
- Undo/Redo

## 🏆 دستاوردها

- پیاده‌سازی Git Flow
- مستندسازی کامل
- تست یکپارچه
- پشتیبانی از چند زبان
- تجربه کاربری مدرن

## 👥 توسعه‌دهندگان

- Mahdi Khoshdell  
- Hossein Mohammadi

## 📄 مجوز

تحت مجوز MIT

---

**⭐ اگر این پروژه برایتان مفید بود، حتماً ستاره بدهید!**
## پاسخ سوالات
## پاسخ سوالات

### 1. پوشه‌ی `.git` چیست؟ چه اطلاعاتی رو نگه می‌داره؟ با چه دستوری ساخته می‌میشه؟

پوشه‌ی `.git` یک پوشه مخفی است که در ریشه‌ی یک پروژه‌ی گیت قرار می‌گیرد و شامل تمام اطلاعات مربوط به نسخه‌بندی آن پروژه است. این اطلاعات شامل:

- تاریخچه‌ی commitها  
- تنظیمات مربوط به ریپازیتوری  
- وضعیت stage یا index  
- اطلاعات branches و tags  
- ارتباط با remote repository (مانند origin)  

این پوشه با دستور زیر ساخته می‌میشه:
```bash
git init
```

---

### 2. یعنی چی atomic بودن در atomic commit و atomic pull-request چیست؟

**Atomic commit** به معنای یک commit مستقل، کوچک و باهدف مشخص است که:
- تنها یک کار منطقی را انجام می‌دهد
- قابلیت revert شدن بدون شکستن پروژه را دارد
- فهمیدن آن برای دیگران ساده است

**Atomic pull-request** نیز به Pull Requestهایی گفته می‌میشه که:
- شامل مجموعه‌ای از commitهای مرتبط و هماهنگ‌اند
- قابلیت بررسی و مرج آسان‌تری دارند
- تغییرات پراکنده یا ناسازگار ندارند

---

### 3. فرق دستورهای `fetch` و `pull` و `merge` و `rebase` و `cherry-pick`

| دستور         | توضیح |
|---------------|-------|
| `git fetch`   | فقط تغییرات remote را دانلود می‌کند بدون اعمال در local |
| `git pull`    | ترکیبی از `fetch` و `merge` است: ابتدا fetch و سپس merge به branch جاری |
| `git merge`   | دو branch را به یکدیگر ادغام می‌کند و تغییرات هر دو را نگه می‌دارد |
| `git rebase`  | تاریخچه branch جاری را بازنویسی می‌کند تا commitهای آن روی base جدید قرار گیرد |
| `git cherry-pick` | یک یا چند commit خاص از branch دیگر را جداگانه به branch جاری اعمال می‌کند |

---

### 4. فرق دستورهای `reset` و `revert` و `restore` و `switch` و `checkout`

| دستور         | توضیح |
|---------------|-------|
| `git reset`   | pointer branch جاری را به commit قبلی می‌برد (و میشهد تغییرات را پاک کند) |
| `git revert`  | یک commit قبلی را برعکس (reverse) می‌کند و یک commit جدید ایجاد می‌کند |
| `git restore` | فایل‌ها را به حالت قبل بازمی‌گرداند (برای unstaged/working changes) |
| `git switch`  | برای تغییر branch استفاده می‌کنیم (جایگزین `checkout` برای branch) |
| `git checkout`| برای تغییر branch یا بازگرداندن فایل‌ها/commit استفاده می‌کنیم (هم branch، هم فایل) |

---

### 5. یعنی چی stage یا همان index چیست؟ دستور `stash` چه کاری می‌کنه؟

**Stage یا Index** حالتی بین working directory و commit است. یعنی تغییراتی که با دستور:
```bash
git add
```
اضافه می‌شوند، وارد مرحله‌ی stage شده‌اند و آماده‌ی commit هستند.

**git stash** تغییرات فعلی (چه staged چه unstaged) را به صورت موقت ذخیره می‌کند تا بتوان روی کاری دیگر تمرکز کرد. سپس با:
```bash
git stash apply
```
یا  
```bash
git stash pop
```
میشه تغییرات ذخیره‌شده را بازگرداند.

---

### 6. یعنی چی snapshot به چه معناست؟ ارتباط آن با commit چیست؟

در Git، **هر commit یک snapshot از کل پروژه** است. برخلاف سایر سیستم‌های کنترل نسخه که تغییرات (deltas) را ذخیره می‌کنند، Git نسخه کامل فایل‌ها را در هر commit ذخیره می‌کند (البته به صورت بهینه‌شده). این کار باعث می‌میشه:

- بازیابی پروژه در هر commit ساده و سریع باشد
- تاریخچه‌ی پروژه کاملاً قابل اعتماد و برگشت‌پذیر باشد

لینک راهنما: [Git Internals - Snapshots not Differences](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

---

### 7. فرق‌های local repository و remote repository چیست؟

| ویژگی | Local Repository | Remote Repository |
|--------|------------------|-------------------|
| محل ذخیره | روی سیستم شخصی | روی سرور یا فضای ابری (مثل GitHub) |
| دسترسی | فقط توسط کاربر محلی | توسط اعضای تیم یا عموم |
| سرعت | سریع (دسترسی مستقیم) | کندتر (نیاز به اینترنت) |
| همگام‌سازی | با `push` و `pull` انجام می‌میشه | تغییرات باید از طرف کلاینت اعمال شوند |

---
