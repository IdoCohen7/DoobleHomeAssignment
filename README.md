# מטלת בית עבור Dooble

מגיש: עידו כהן
---

## טכנולוגיות

- **React 19.1.1** – ספריית UI לבניית ממשקי משתמש  
- **Vite 7.1.14** – כלי בנייה ושרת פיתוח מהיר  
- **Sass 1.93.2** – פרה־פרוססור ל־CSS  
- **Lucide React** – ספריית אייקונים גמישה ואלגנטית  

#### מבנה הפרויקט

```plaintext
src/
├── components/          # רכיבי React (Navbar, Carousel, Branches, Gallery, News, Footer)
├── data/                # קבצי נתונים סטטיים (carousel, branches, news)
├── hooks/               # Hooks מותאמים אישית (useIsMobile)
├── styles/              # קבצי SCSS עם משתנים ומיקסינים גלובליים
└── assets/images/       # תמונות מסודרות לפי רכיבים


## אופן הרצה
git clone https://github.com/IdoCohen7/DoobleHomeAssignment.git
cd DoobleHomeAssignment
npm install
npm run dev
