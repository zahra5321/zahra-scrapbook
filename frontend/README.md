# Zahra's Scrapbook — Frontend

A beautiful, interactive personal scrapbook built with React, Framer Motion, and Tailwind CSS.

## 🚀 Setup

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
frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Nav.jsx         # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Today.jsx       # Daily log
│   │   ├── CalendarSection.jsx  # Calendar
│   │   ├── PhotoOfDay.jsx  # Photo gallery
│   │   ├── PostIts.jsx     # Message wall
│   │   ├── Links.jsx       # Links page
│   │   ├── Marquee.jsx     # Scrolling text
│   │   ├── Doodles.jsx     # SVG decorations
│   │   ├── Footer.jsx      # Footer
│   │   └── AdminPanel.jsx  # Admin interface
│   ├── pages/              # Full pages
│   │   ├── Home.jsx        # All sections
│   │   ├── DoodleCorner.jsx # Doodles gallery
│   │   ├── Gallery.jsx     # Art gallery
│   │   └── Blog.jsx        # Blog posts
│   ├── lib/
│   │   ├── api.js          # API client
│   │   └── confetti.js     # Celebration effects
│   ├── App.jsx             # Router & layout
│   ├── main.jsx            # React entry
│   └── index.css           # Tailwind + custom styles
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.js          # Build config
└── README.md               # This file
```

## 🎨 Features

- **7 Chapters**: Home, Doodles, Gallery, Blog, + embedded sections
- **Interactive Elements**: Doodles with comments, gallery with modal, post-it wall
- **Admin Panel**: Add/edit content from the frontend
- **Animations**: Smooth scrolling, parallax, reveal effects
- **Responsive**: Works on mobile, tablet, desktop
- **Decorative SVGs**: Hand-drawn doodles throughout
- **Confetti**: Celebrate successful actions

## 🔧 Available Scripts

| Command | Purpose |
|---------|----------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run lint` | Check code style |

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Docker
```bash
docker build -t zahra-frontend .
docker run -p 3000:3000 zahra-frontend
```

## 🔑 Admin Access

1. Click the **"+ add"** button in the top-right
2. Enter your admin key
3. Use the tabs to add content (today, doodles, artwork, blog, events, links, photos)
4. Click **"seed"** to populate with demo data

## 🎯 Environment Variables

```env
# Development
VITE_API_URL=http://localhost:8000

# Production
VITE_API_URL=https://your-api.example.com
```

## 📝 Notes

- All component files use `data-testid` for testing
- Tailwind classes are configured in `index.css`
- Custom fonts (serif, hand, typewriter) are loaded from Google Fonts
- Framer Motion handles all animations
- Confetti library provides celebration effects

## 🛡️ Security

- Admin key stored in browser localStorage
- Backend validates all requests
- Rate limiting on login attempts (5/min)
- No sensitive data in frontend code

---

Made with 💕 by Zahra