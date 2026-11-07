# HAQQDEEN - Establish the Deen

A modern, responsive Islamic learning platform built with React, Vite, and Tailwind CSS. 100% free platform for authentic Islamic knowledge and personal development.

**Live Demo:** [HAQQDEEN](https://haqqdeen.com) (Coming Soon)

## 🌟 Features

- **Authentic Islamic Content**: Curated courses from qualified scholars
- **Multiple Learning Paths**: Sacred sciences, public speaking, leadership, soft skills
- **Interactive Course Player**: Video lessons with progress tracking
- **Progress Persistence**: LocalStorage-based enrollment and lesson completion tracking
- **Mobile-First Design**: Fully responsive with mobile bottom nav and drawer menu
- **Accessibility**: WCAG AA compliant with focus management and keyboard navigation
- **Dark/Light Mode Ready**: Clean, professional UI
- **Floating Widgets**: WhatsApp and Instagram contact buttons (hidden on /contact page)
- **Community Focus**: 32K+ active learners, verified content

## 🏗️ Project Structure

```
haqqdeen/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Top navigation with mobile menu
│   │   ├── MobileDrawer.tsx        # Sliding drawer for mobile nav
│   │   ├── MobileBottomNav.tsx     # Bottom nav bar (mobile only)
│   │   ├── Footer.tsx              # Global footer
│   │   ├── FloatingWidgets.tsx     # WhatsApp & Instagram buttons
│   │   ├── CoursePlayer.tsx        # Full-screen course player
│   │   ├── SyllabusModal.tsx       # Course preview modal
│   │   └── ...other components
│   ├── views/
│   │   ├── HomeView.tsx            # Landing page
│   │   ├── LearningView.tsx        # Course catalog & browse
│   │   ├── AboutView.tsx           # About HAQQDEEN
│   │   ├── EstablishDeenView.tsx   # Daily Ayah, 30-day challenge
│   │   ├── FoundersView.tsx        # Team page
│   │   ├── ContactView.tsx         # Contact form & FAQ
│   │   └── YouTubeView.tsx         # YouTube playlist view
│   ├── data/
│   │   └── coursesData.ts          # All course definitions & static data
│   ├── styles/
│   │   └── index.css               # Tailwind + global styles
│   ├── types.ts                    # TypeScript interfaces
│   ├── App.tsx                     # Root component with routing
│   └── main.tsx                    # Entry point
├── public/
│   ├── logo.jpg                    # HAQQDEEN logo
│   └── [assets]
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/syedsz-1519/haqqdeen-.git
   cd haqqdeen
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

3. **Create `.env` file** (optional for local development)
   ```bash
   cp .env.example .env
   ```

### Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

The app will automatically reload on file changes.

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 + CSS Modules
- **Routing**: Hash-based routing (# navigation)
- **Animations**: Motion (Framer Motion alternative)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm
- **Server**: Express.js (optional for deployment)

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All views are fully responsive with optimized layouts for each device size.

## 🔑 Key Configuration

### WhatsApp & Instagram Setup

Edit contact URLs in `src/data/coursesData.ts`:

```typescript
export const WHATSAPP_NUMBER = "919876543210";  // Change to your number
export const INSTAGRAM_URL = "https://www.instagram.com/haqqdeen/";
```

### Adding New Courses

Add course definitions to `src/data/coursesData.ts`:

```typescript
{
  id: "course-slug",
  title: "Course Title",
  description: "Brief description",
  category: ["islamic-learning", "soft-skills"],
  instructor: "Instructor Name",
  level: "Beginner",
  duration: "8 weeks",
  lessons: 24,
  // ... other fields
}
```

### Modifying Routes

Routes use hash-based navigation. Update tabs in `App.tsx`:

```typescript
const [currentTab, setCurrentTab] = useState<string>('home');
// Available: 'home', 'learning', 'about', 'establish', 'founders', 'contact', 'videos'
```

## 💾 State Management

### LocalStorage Persistence

The app automatically persists to localStorage:

- **`haqqdeen_enrolled_courses`**: Array of course IDs user is enrolled in
- **`haqqdeen_completed_lessons`**: Array of lesson IDs marked as complete
- **`haqqdeen_progress`**: User progress data (optional)

### Enrollment & Progress

```typescript
// When user opens a course
handleOpenCourse(course) => {
  setEnrolledCourseIds([...enrolledCourseIds, course.id])
}

// When user completes a lesson
handleToggleLessonCompletion(lessonId) => {
  setCompletedLessonIds([...completedLessonIds, lessonId])
}
```

## 🎬 Course Player Features

- **Video Embedding**: YouTube embed integration
- **Lesson List**: Browse and navigate lessons
- **Progress Tracking**: Mark lessons complete
- **Syllabus Modal**: Preview full course outline before enrolling
- **Responsive**: Works on all screen sizes

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Keyboard Navigation**: All interactive elements keyboard-operable
- **Focus Management**: Visible focus indicators, focus trap in modals
- **Color Contrast**: WCAG AA compliance
- **ARIA Labels**: Descriptive labels on buttons and icons
- **Skip Links**: Skip to main content available
- **prefers-reduced-motion**: Animations disabled for users who prefer

## 🔐 Security

- **No dangerouslySetInnerHTML**: Safe content rendering
- **XSS Prevention**: Input sanitization where applicable
- **External Links**: `rel="noopener noreferrer"` on all external links
- **CORS**: Configured for Vercel deployment
- **Environment Variables**: Sensitive data in .env file

## 📊 Analytics & Tracking

Optional Google Analytics integration via `@google/genai` library. Configure in `.env`:

```
VITE_GA_ID=your-google-analytics-id
```

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic via Vite
- **Lazy Loading**: Views loaded on-demand
- **Image Optimization**: Lucide SVG icons
- **CSS Minification**: Handled by Vite build
- **Gzip Compression**: Tailwind CSS ~14KB gzipped
- **No Unused Styles**: Tailwind purging active

**Target Metrics**:
- Lighthouse Performance: 90+
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel Dashboard
3. Set environment variables
4. Deploy

```bash
npm run build
# Vercel automatically serves dist/
```

### Deploy to Other Platforms

**Environment Setup**:
- **Build**: `npm run build`
- **Output**: `dist/`
- **Install**: `npm install --legacy-peer-deps`

**Netlify**:
```toml
[build]
command = "npm run build"
publish = "dist"
```

**Firebase Hosting**:
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## 🐛 Troubleshooting

### Build Errors

**Peer Dependency Issues**:
```bash
npm install --legacy-peer-deps
```

**Module Not Found**:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Runtime Issues

**Blank Page**: Check browser console for errors. Verify hash routing is working (`#home` in URL).

**Styles Not Loading**: Ensure Tailwind CSS is building. Check `tailwind.config.js` for correct paths.

**LocalStorage Not Working**: Check browser's private/incognito mode restrictions or privacy settings.

## 📝 Adding Content

### Update FAQ

Edit `src/data/coursesData.ts` -> `FAQ_ITEMS` array

### Update Testimonials

Edit `src/data/coursesData.ts` -> `TESTIMONIALS` array

### Update Team

Edit `src/data/coursesData.ts` -> `TEAM_MEMBERS` array

### Update Daily Hadith

Edit `src/data/coursesData.ts` -> `HADITHS` array (auto-rotates daily)

## 🤝 Contributing

Contributions welcome! For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the MIT License.

## 📞 Support

- **Email**: contact@haqqdeen.com
- **WhatsApp**: [Chat with us](https://wa.me/919876543210)
- **Instagram**: [@haqqdeen](https://www.instagram.com/haqqdeen/)

## 🙏 Credits

- **Design**: Google Stitch (exported)
- **Development**: Built with ❤️ for the Ummah
- **Scholars**: Content verified by Islamic scholars
- **Community**: 32K+ learners worldwide

---

**Free for the Ummah. Establishing the Deen.**

Made with 🤍 by the HAQQDEEN Team
