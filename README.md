# اتحاد الطلبة - جامعة حمص

موقع اتحاد الطلبة في جامعة حمص: صفحة تعريفيّة تعرض الرؤية والرسالة، الأهداف، الإنجازات، آراء الطلبة، وقسم الانضمام للاتحاد.

## التقنيات

- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui (Radix)
- Framer Motion للحركات
- React Router

## التشغيل محليًا

```bash
npm install
npm run dev
```

يفتح الموقع على `http://localhost:3000`.

## البناء للإنتاج

```bash
npm run build
npm run preview
```

## بنية المجلدات

```
src/
  components/   مكوّنات عامة (Navbar, UI)
  pages/        الصفحات (Home)
  sections/     أقسام الصفحة الرئيسية (Hero, Vision, Goals, Stats...)
public/
  fonts/        الخطوط العربية
  *.jpg / *.svg صور الهيرو والشعار
```
