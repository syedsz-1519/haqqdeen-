# HAQQDEEN QA Checklist

Comprehensive QA verification for all pages, components, and features.

## 📱 Device Testing

- [ ] Desktop (1440px, 1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 360px)
- [ ] Landscape orientation
- [ ] No horizontal scrolling on any device

## 🔀 Navigation

### Navbar/Header
- [ ] Logo link goes to home
- [ ] All nav links clickable and functional
  - [ ] Home → `#home`
  - [ ] About → `#about`
  - [ ] Learning → `#learning`
  - [ ] Establish the Deen → `#establish`
  - [ ] Founders → `#founders`
  - [ ] Contact → `#contact`
- [ ] "Start Learning Free" button on desktop
- [ ] Active link highlighted (current page)
- [ ] Hamburger menu appears on mobile (<640px)
- [ ] Mobile drawer slides smoothly
- [ ] Drawer closes on nav item click
- [ ] Drawer closes on outside click
- [ ] Focus trap in mobile drawer

### Mobile Bottom Navigation
- [ ] Appears only on mobile (<640px)
- [ ] 5-6 icons for quick navigation
- [ ] Active state highlighted
- [ ] Sticky to bottom of screen
- [ ] Doesn't overlap content

### Footer
- [ ] Logo present
- [ ] Quick links section
- [ ] Learning tracks section
- [ ] Social icons (Instagram, WhatsApp, Email)
- [ ] Copyright text
- [ ] Footer links functional
- [ ] All social links open in new tab

## 🏠 Home Page

### Hero Section
- [ ] Headline: "Learn the Deen. Build Your Dunya."
- [ ] Subheading present
- [ ] Two CTA buttons visible
  - [ ] "Start Learning Free" button
  - [ ] "Learn Our Story" button
- [ ] Hero visual/emoji present
- [ ] Text centered on mobile

### What We Offer
- [ ] 4 cards display correctly
  - [ ] Sacred Sciences
  - [ ] Modern Skills
  - [ ] Personal Growth
  - [ ] Global Community
- [ ] Cards have icons
- [ ] Cards have shadow/hover effects
- [ ] Responsive grid (1 col mobile, 2 col tablet, 4 col desktop)

### Why HAQQDEEN is Free
- [ ] 3 point cards display
- [ ] Numbers (01, 02, 03) visible
- [ ] Background color applied correctly
- [ ] Cards have proper spacing

### Featured Courses Section
- [ ] 6 courses display
- [ ] Course cards have:
  - [ ] Course icon/badge
  - [ ] Title
  - [ ] Description
  - [ ] Level (Beginner/Intermediate/Advanced)
  - [ ] Duration
  - [ ] Lesson count
  - [ ] Student count
  - [ ] Rating with star icon
  - [ ] "Start Free" button
- [ ] "View All Courses" link at bottom
- [ ] Cards responsive (1 col mobile, 2 col tablet, 3 col desktop)

### Stats Strip
- [ ] 4 stat boxes with numbers
  - [ ] 32K+ Instagram Community
  - [ ] 45+ Comprehensive Tracks
  - [ ] 350+ Video & Audio Lessons
  - [ ] 32K+ Active Learners
- [ ] Full-width background color
- [ ] Numbers large and visible
- [ ] Mobile responsive

### Testimonials Section
- [ ] 3 testimonial cards visible
- [ ] Each has:
  - [ ] Avatar (initials)
  - [ ] Name
  - [ ] Role
  - [ ] Quote text
- [ ] Cards readable and spaced
- [ ] Responsive grid

### CTA Banner (Bottom)
- [ ] Background color applied
- [ ] Headline present
- [ ] Subtext present
- [ ] Two buttons:
  - [ ] "Start Learning Now"
  - [ ] "Ask a Question"

## 📚 Learning Page

### Search & Filter
- [ ] Search box present at top
- [ ] Search debounce working (typing → delay → results)
- [ ] Search case-insensitive
- [ ] Search matches course titles and descriptions

### Category Tabs
- [ ] 6 tabs visible:
  - [ ] All Courses
  - [ ] Islamic Learning
  - [ ] Public Speaking
  - [ ] Motivation & Mindset
  - [ ] Soft Skills
  - [ ] Professional Skills
- [ ] "All" tab selected by default
- [ ] Tab switching filters courses in real-time
- [ ] Active tab highlighted (blue background)
- [ ] Multiple category courses appear in correct filters

### Course Grid
- [ ] 9 courses display
- [ ] Each course card shows:
  - [ ] Title
  - [ ] Description
  - [ ] Level badge
  - [ ] Duration
  - [ ] Lesson count
  - [ ] Student count
  - [ ] Rating
  - [ ] "Start Free" button
- [ ] Cards responsive layout
- [ ] Cards clickable

### Progress Panel
- [ ] Shows enrolled course count
- [ ] Shows completed lessons
- [ ] Shows daily streak count
- [ ] Shows certificates earned
- [ ] Works with localStorage data

### Empty State
- [ ] If no search results, "No courses found" message appears
- [ ] Suggestion to clear filters

### Course Detail Modal / Page
- [ ] Course overview displays
- [ ] Syllabus shows all lessons
- [ ] Lesson list with descriptions
- [ ] YouTube embed placeholders
- [ ] "Start Learning" button
- [ ] Progress bar shows completion
- [ ] Lessons mark as complete (checkbox)

## ✨ Establish the Deen Page

### Daily Ayah Section
- [ ] Ayah displays in Arabic (RTL)
- [ ] English translation shows
- [ ] Source reference (e.g., "Quran 2:286")
- [ ] Rotates daily (deterministic by date)
- [ ] Share button (Web Share API or clipboard fallback)
- [ ] Save button (localStorage)

### 5 Practical Steps
- [ ] All 5 steps display
- [ ] Each has title and description
- [ ] Icons present
- [ ] Responsive layout

### Daily Duas
- [ ] 4 dua cards display
- [ ] Each shows:
  - [ ] Title
  - [ ] Arabic text (RTL, Amiri font)
  - [ ] English translation
  - [ ] Time of day
  - [ ] Benefits description
- [ ] Cards properly spaced

### 30-Day Challenge
- [ ] Challenge tracker visible
- [ ] 30 checkboxes (one per day)
- [ ] Checkboxes toggle completion state
- [ ] Progress bar updates
- [ ] Data persists in localStorage
- [ ] Accessible checkboxes (keyboard operable)

### Resources Section
- [ ] Resource list displays
- [ ] Links functional

### CTA Section
- [ ] Buttons to Instagram and WhatsApp
- [ ] Links open in new tab

## 👥 About Page

### Header Section
- [ ] Title present
- [ ] Subtitle present

### Story Section
- [ ] Story text displays
- [ ] Quote visible: "Who will remove the evil?..."

### Mission & Vision Cards
- [ ] Mission card displays
- [ ] Vision card displays
- [ ] Cards have proper styling

### Values Section
- [ ] 4 value cards visible
- [ ] Each has title and description
- [ ] Icons present
- [ ] Responsive grid

### Timeline (Journey)
- [ ] Timeline displays vertically
- [ ] Years show: 2021, 2022, 2023, 2026 & Beyond
- [ ] Milestones describe journey
- [ ] Timeline line visible between items

### CTA Button
- [ ] "Start Learning" button functional

## 👨‍💼 Founders Page

### Header
- [ ] Title present
- [ ] Subtitle present

### Founder Cards (2-3)
- [ ] Founder name displays
- [ ] Role displays
- [ ] Bio text present
- [ ] Avatar with initials
- [ ] Cards properly styled

### Vision Quote
- [ ] Quote displays prominently

### Why We Started
- [ ] Explanation section present

### Team Grid
- [ ] 6 team members display
- [ ] Each shows:
  - [ ] Name
  - [ ] Role/Title
  - [ ] Avatar with initials
- [ ] 2 col mobile, 3 col tablet, 6 col desktop

### CTA
- [ ] "Join Our Team" button links to contact

## 📧 Contact Page

### Header
- [ ] Title: "Get in Touch"
- [ ] Subtitle present

### 3 Contact Cards
- [ ] Instagram card with link
- [ ] WhatsApp card with link
- [ ] Email card with mailto: link
- [ ] Each opens correct app/service in new tab

### Contact Form
- [ ] Form fields visible:
  - [ ] Name (required)
  - [ ] Email (required, valid email validation)
  - [ ] Subject (required)
  - [ ] Message (required, min 10 chars)
- [ ] Form validation works
  - [ ] Shows error on empty submit
  - [ ] Shows error on invalid email
  - [ ] Shows error on short message
- [ ] Honeypot field present (hidden from users)
- [ ] Submit button disabled while loading
- [ ] Loading state shows spinner text
- [ ] Success message displays on successful submit
- [ ] Error message displays on failure
- [ ] Form resets after successful submit

### FAQ Accordion
- [ ] 5 questions display
- [ ] Only one Q/A opens at a time
- [ ] Accordion smooth animation
- [ ] Questions are:
  1. "Are all courses really 100% free..."
  2. "How are Islamic subjects vetted..."
  3. "Will I receive a certificate..."
  4. "What if I have feedback..."
  5. "How can I contribute..."
- [ ] Accessibility: keyboard operable, ARIA labels

### No Floating Buttons
- [ ] WhatsApp/Instagram buttons NOT visible on this page
- [ ] Test refresh/navigation - no flicker or showing then hiding

## 🎨 Design & Styling

### Colors
- [ ] Navy (#0A1A3F) used correctly
- [ ] Electric Blue (#1E90FF) used correctly
- [ ] Gold (#D4AF37) used correctly
- [ ] White (#FFFFFF) used correctly
- [ ] Proper contrast for accessibility

### Typography
- [ ] Poppins font used for headings
- [ ] Inter font used for body text
- [ ] Font sizes appropriate
- [ ] Line heights readable

### Spacing
- [ ] Consistent padding/margins
- [ ] Cards have proper spacing
- [ ] Sections have breathing room
- [ ] No crowded elements

### Shadows & Depth
- [ ] Cards have subtle shadows
- [ ] Hover states increase shadow
- [ ] Shadows consistent across cards

### Border Radius
- [ ] Cards: 12-16px radius
- [ ] Buttons: 8px radius
- [ ] Consistent throughout

## ♿ Accessibility

### Focus Management
- [ ] Visible focus ring on all interactive elements
- [ ] Focus ring color is Electric Blue
- [ ] Tab order is logical
- [ ] Focus trap in modals/drawers

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals/drawers
- [ ] Arrow keys for accordion/tabs (optional but nice)

### Screen Reader (Manual Testing)
- [ ] Buttons have descriptive aria-labels
- [ ] Links have descriptive text
- [ ] Images have alt text (if applicable)
- [ ] Form fields have labels
- [ ] Accordion/Tabs have proper ARIA roles

### Color Contrast
- [ ] Text on background meets WCAG AA (4.5:1 for normal, 3:1 for large)
- [ ] No color-only information conveyance

### Semantic HTML
- [ ] `<nav>` for navigation
- [ ] `<main>` for main content
- [ ] `<article>` for course cards
- [ ] `<section>` for page sections
- [ ] Proper heading hierarchy (h1, h2, h3...)

### Motion
- [ ] Smooth animations present
- [ ] `prefers-reduced-motion` respected
- [ ] No jarring or too-fast animations

## 🔐 Security

### Links
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Links open in new tab when intended

### Form
- [ ] No sensitive data logged to console
- [ ] Input properly sanitized
- [ ] Honeypot field prevents spam bots

### Environment
- [ ] Sensitive keys not exposed in client code
- [ ] API keys in .env (if applicable)

## 🎯 Floating Widgets

### WhatsApp Button
- [ ] Green color (#25D366 or similar)
- [ ] Circular shape
- [ ] Pulse animation
- [ ] Fixed bottom-right corner
- [ ] Tooltip shows "Chat with us"
- [ ] Click opens WhatsApp with preset message
- [ ] Opens in new tab

### Instagram Button
- [ ] Gradient color (pink to purple)
- [ ] Smaller than WhatsApp
- [ ] Stacked above WhatsApp
- [ ] Tooltip shows "Follow Instagram"
- [ ] Click opens Instagram profile
- [ ] Opens in new tab

### Visibility
- [ ] Both visible on all pages EXCEPT /contact
- [ ] On /contact page, neither button visible
- [ ] No "flicker" during navigation
- [ ] No hydration issues (React/client-side rendering)

## 📱 Responsive & Mobile

### Mobile Menu (Mobile Hamburger)
- [ ] Hamburger icon appears on mobile (<640px)
- [ ] Drawer slides in from left
- [ ] Drawer has semi-transparent overlay
- [ ] Close button (X) in drawer
- [ ] Clicking item closes drawer
- [ ] Clicking outside closes drawer
- [ ] Drawer smooth animation

### Touch Targets
- [ ] All buttons at least 44x44px
- [ ] Links have adequate spacing
- [ ] No overlapping click targets

### Images & Media
- [ ] Course preview images load
- [ ] YouTube embeds lazy-load
- [ ] No broken images
- [ ] SVG icons render correctly

### Performance Mobile
- [ ] Page loads in <3 seconds on 4G
- [ ] Smooth scrolling
- [ ] No layout shift during load

## 🔄 State & Persistence

### LocalStorage
- [ ] Enrolled courses persist after refresh
- [ ] Completed lessons persist after refresh
- [ ] Progress data persists
- [ ] Data survives page navigation
- [ ] Data resets if localStorage cleared

### Form State
- [ ] Form values persist while typing (optional)
- [ ] Form clears after successful submit

## 🎬 Course Player

### Video Player
- [ ] YouTube embeds functional
- [ ] Play/pause works
- [ ] Progress bar works
- [ ] Full-screen mode works (if YouTube allows)
- [ ] Responsive video size

### Lesson Navigation
- [ ] Lesson list displays all lessons
- [ ] Can click any lesson to jump to it
- [ ] Current lesson highlighted
- [ ] Progress updates when lesson marked complete

### Completion Tracking
- [ ] Checkbox to mark lesson complete
- [ ] Checkboxes persist after refresh
- [ ] Progress bar updates
- [ ] Next lesson button (if applicable)

## 🌍 Localization & Content

### Arabic Content
- [ ] Arabic text displays with proper RTL direction
- [ ] Arabic font (Amiri or Noto Naskh) applied
- [ ] Diacritics render correctly (if present)
- [ ] English translations present and correct

### Daily Hadith/Ayah
- [ ] Content rotates daily (deterministic)
- [ ] Same ayah shows for all users on same day
- [ ] Source attribution correct
- [ ] Share button works
- [ ] Save button works

## 🚀 Performance

### Build Size
- [ ] Production build <500KB gzipped
- [ ] No unused CSS
- [ ] No unused JavaScript

### Lighthouse (Target 90+)
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

## 📊 Analytics & Tracking

- [ ] No console errors
- [ ] No console warnings
- [ ] No network errors
- [ ] API calls (if any) successful

## 🔗 Links & Navigation

### All Pages
- [ ] All nav links work
- [ ] Back buttons work (if present)
- [ ] Internal links don't reload page
- [ ] External links open in new tab

### Course Links
- [ ] Course titles are clickable
- [ ] "Start Free" buttons work
- [ ] Links to course details function

### Social Links
- [ ] Instagram link correct
- [ ] WhatsApp link correct
- [ ] Email link generates mailto:
- [ ] All social links open in new tab

## 🎯 Cross-Browser Testing (Manual)

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, if available)
- [ ] Mobile browsers (Chrome, Safari)

## ✅ Final Sign-Off

- [ ] All critical features functional
- [ ] No major UI issues
- [ ] Mobile experience smooth
- [ ] Performance acceptable
- [ ] Accessibility baseline met
- [ ] Security best practices followed
- [ ] Documentation complete
- [ ] Ready for production

---

**Testing Date**: _______________
**Tested By**: _______________
**Sign-Off**: _______________
