# Zahra's Scrapbook

A beautiful, interactive personal scrapbook built with React, Framer Motion, and Tailwind CSS.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env.local
# Edit .env.local and set your API URL
```

### 3. Start development server
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## 📁 Project Structure

```
.
├── src/
│   ├── components/          # Reusable components
│   ├── pages/              # Full pages
│   ├── lib/                # Utilities (api, confetti)
│   ├── App.jsx             # Router & layout
│   ├── main.jsx            # React entry
│   └── index.css           # Tailwind + custom styles
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.js          # Build config
└── README.md               # This file
```

## 🎨 Features

- Beautiful personal scrapbook with doodles and memories
- Interactive admin panel for content management
- Smooth animations with Framer Motion
- Responsive design (mobile, tablet, desktop)
- HTTPS enabled for security

## 🔧 Available Scripts

| Command | Purpose |
|---------|----------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌐 Deployment

### Vercel (Recommended)
Your site is already connected to Vercel and will auto-deploy on every push to GitHub!

## 🔑 Admin Access

1. Click the **"+ add"** button in the top-right
2. Enter your admin key
3. Start adding content!

## 🛡️ Security

- ✅ HTTPS enabled (encrypted connection)
- ✅ Admin key required for modifications
- ✅ Backend validates all requests
- ✅ Rate limiting on login attempts

---

Made with 💕 by Zahra
