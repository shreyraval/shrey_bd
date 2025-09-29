# Shrey Raval Marriage Bio Website - Complete Project Context

## 🎯 Project Overview

This is a **production-ready marriage bio website** built for **Indian matrimonial purposes**. It's a modern, responsive, and privacy-aware personal website designed to showcase personal information, education, career, family background, and photo gallery for potential marriage prospects.

## 🏗️ Architecture & Technology Stack

### **Frontend Framework:**
- **React 19.1.1** with TypeScript
- **Vite 7.1.7** for fast development and building
- **React Router 7.9.3** for client-side routing
- **Framer Motion 12.23.22** for smooth animations

### **UI & Styling:**
- **Tailwind CSS 4.1.13** for utility-first styling
- **shadcn/ui** component library (custom implementation)
- **Lucide React** for icons
- **Inter Font** from Google Fonts
- **Dark/Light theme** with system preference detection

### **Build & Deployment:**
- **GitHub Pages** deployment via GitHub Actions
- **TypeScript** for type safety
- **ESLint** for code quality
- **PostCSS & Autoprefixer** for CSS processing

## 📁 Complete Project Structure

```
shrey-bio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions for auto-deployment
├── public/
│   ├── data/
│   │   └── profile.json           # 🔥 MAIN DATA FILE - All profile content
│   ├── images/                    # Photo gallery structure
│   │   ├── portraits/             # Professional portraits
│   │   ├── casual/                # Casual photos
│   │   ├── traditional/           # Traditional/cultural photos
│   │   ├── professional/          # Work/professional photos
│   │   ├── hero-bg.jpg           # Hero section background
│   │   ├── og-image.jpg          # Social media preview image
│   │   └── placeholder-image.jpg  # Fallback for missing images
│   ├── 404.html                   # SPA routing fix for GitHub Pages
│   ├── .nojekyll                  # Disable Jekyll on GitHub Pages
│   └── favicon.ico                # Website favicon
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx         # Navigation with theme toggle
│   │   │   ├── Footer.tsx         # Footer with privacy info
│   │   │   └── Layout.tsx         # Main layout wrapper
│   │   ├── Modals/
│   │   │   └── ShareModal.tsx     # Share functionality (WhatsApp, Email)
│   │   └── ui/                    # Reusable UI components
│   │       ├── badge.tsx          # Styled badges for tags
│   │       ├── button.tsx         # Button component with variants
│   │       ├── card.tsx           # Card components for content sections
│   │       ├── dialog.tsx         # Modal/dialog components
│   │       └── lightbox.tsx       # Photo gallery lightbox viewer
│   ├── contexts/
│   │   └── ThemeContext.tsx       # Dark/Light theme management
│   ├── hooks/
│   │   └── useProfile.ts          # Custom hook to fetch profile data
│   ├── lib/
│   │   └── utils.ts               # Utility functions (age calc, masking, etc.)
│   ├── pages/
│   │   ├── HomePage.tsx           # 🏠 Landing page with hero & quick facts
│   │   ├── AboutPage.tsx          # 📚 Education, career, lifestyle details
│   │   ├── FamilyPage.tsx         # 👨‍👩‍👧‍👦 Family information & values
│   │   └── PhotosPage.tsx         # 📸 Photo gallery with categories
│   ├── types/
│   │   └── profile.ts             # TypeScript interfaces for data structure
│   ├── App.tsx                    # Main app component with routing
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles & Tailwind imports
├── index.html                     # Main HTML template with SEO meta tags
├── package.json                   # Dependencies & scripts
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.app.json              # TypeScript configuration
└── README.md                      # User documentation
```

## 🎨 Design System & Features

### **Visual Design:**
- **Modern, clean aesthetic** with rounded corners and soft shadows
- **Responsive design** (mobile-first approach)
- **Color scheme:** Blue primary (#3B82F6) with gray variants
- **Typography:** Inter font with text-balance for headings
- **Dark/Light mode** with smooth transitions

### **Core Features:**

1. **🏠 Home Page:**
   - Full-screen hero section with background image overlay
   - Personal tagline and call-to-action buttons
   - Quick facts grid (age, location, profession, education, family, languages)
   - Contact information with privacy masking
   - Interests displayed as badges

2. **📚 About Page:**
   - Sticky navigation sidebar for sections
   - Personal overview and values
   - Education timeline with highlights
   - Career history with accomplishments
   - Lifestyle preferences and personal traits

3. **👨‍👩‍👧‍👦 Family Page:**
   - Parent information with avatar placeholders
   - Sibling details and relationships
   - Family values and traditions section
   - Cultural emphasis and value system

4. **📸 Photos Page:**
   - Category-based photo gallery (Portraits, Casual, Traditional, Professional)
   - Lightbox viewer with keyboard navigation
   - Responsive masonry grid layout
   - Image lazy loading and error handling

### **Privacy & Security Features:**
- **Sensitive data masking:** Email/phone numbers can be hidden by default
- **Toggle controls:** Users can reveal masked information
- **Client-side only:** No data sent to external servers
- **Privacy-first approach:** All processing happens in browser

### **SEO & Sharing:**
- **Complete meta tags:** Title, description, keywords
- **OpenGraph tags:** For Facebook/social media previews
- **Twitter Cards:** Optimized social sharing
- **Structured data:** JSON-LD for search engines
- **Share functionality:** WhatsApp, Email, direct link copying

## 📊 Data Structure (profile.json)

The entire website content is driven by a single JSON file: `/public/data/profile.json`

```json
{
  "name": "Shrey Raval",
  "tagline": "Kind, curious, family-oriented | Tech professional",
  "location": "Chicago, IL (USA)",
  "dob": "1999-08-12",
  "age": 26,
  "height_cm": 177,
  "religion": "Hindu",
  "community": "Gujarati Brahmin",
  "languages": ["English", "Hindi", "Gujarati"],
  "profession": "Software/AI Engineer",
  "company": "Tech Innovators Inc.",
  "education_highest": "MS in Information Systems, University of Washington",
  "education": [
    {
      "degree": "MS in Information Systems",
      "school": "University of Washington",
      "year": 2025,
      "highlights": ["Focus on AI/Cloud Computing", "GPA: 3.8/4.0"]
    }
  ],
  "career": [
    {
      "title": "ML/Software Engineer",
      "org": "Tech Innovators Inc.",
      "from": "2024",
      "to": "Present",
      "bullets": ["Built AI APIs processing 10M+ requests daily"]
    }
  ],
  "interests": ["Fitness & Yoga", "Photography", "Travel"],
  "lifestyle": {
    "diet": "Vegetarian",
    "alcohol": "Occasional social drinking",
    "smoke": "Non-smoker"
  },
  "preferences": {
    "relocation": true,
    "abroad": true,
    "family_values": "Traditional with modern outlook"
  },
  "family": {
    "parents": {
      "father": {"name": "Rajesh Raval", "occupation": "Business Owner"},
      "mother": {"name": "Meera Raval", "occupation": "Teacher"}
    },
    "siblings": [
      {"relation": "Sister", "name": "Priya Raval", "details": "Software Engineer"}
    ]
  },
  "contacts": {
    "email": "shrey.raval@example.com",
    "phone": "+1-555-123-4567"
  },
  "gallery": {
    "portraits": ["/images/portraits/portrait1.jpg"],
    "casual": ["/images/casual/casual1.jpg"],
    "traditional": ["/images/traditional/traditional1.jpg"],
    "professional": ["/images/professional/professional1.jpg"]
  },
  "privacy": {"mask_sensitive": true}
}
```

## ⚙️ Technical Implementation Details

### **Key Components:**

1. **useProfile Hook:** Fetches and manages profile data from JSON
2. **ThemeContext:** Manages dark/light mode with localStorage persistence
3. **Utility Functions:** Age calculation, email/phone masking, clipboard operations
4. **Responsive Components:** Mobile-first design with Tailwind breakpoints
5. **Animation System:** Framer Motion for page transitions and reveals

### **Build & Deployment:**

- **Development:** `npm run dev` starts Vite dev server on localhost:5173
- **Production:** `npm run build` creates optimized bundle in `/dist`
- **GitHub Pages:** Automatic deployment via GitHub Actions on push to main
- **Manual Deploy:** `npm run deploy` builds and pushes to gh-pages branch

### **Performance Optimizations:**

- **Code splitting:** Dynamic imports for route-based splitting
- **Image optimization:** Lazy loading and error handling for missing images
- **Bundle size:** Optimized to ~382KB (120KB gzipped)
- **Font loading:** Preconnect to Google Fonts for faster loading
- **CSS optimization:** Tailwind purging and PostCSS processing

## 🎭 Special Features

### **Print-Friendly PDF Export:**
- **Print CSS:** Optimized styles for A4/Letter paper
- **Content consolidation:** Removes navigation, shows key sections
- **PDF generation:** Browser's print-to-PDF functionality
- **Professional formatting:** Clean layout for sharing

### **Privacy Controls:**
- **Sensitive masking:** Email becomes "sh***@example.com"
- **Phone masking:** "+1-555-***-4567"
- **Toggle visibility:** "Show Details" button reveals full info
- **Client-side only:** No data transmission to servers

### **Responsive Gallery:**
- **Category filtering:** All, Portraits, Casual, Traditional, Professional
- **Lightbox viewer:** Full-screen image viewing with navigation
- **Keyboard controls:** Arrow keys for navigation, ESC to close
- **Touch gestures:** Swipe support on mobile devices

## 🚀 Deployment & Setup

### **Current State:**
- ✅ **Build successful:** No TypeScript errors, optimized production bundle
- ✅ **Development server:** Running on Vite with hot reload
- ✅ **GitHub Actions:** Ready for automated deployment
- ✅ **All features implemented:** Home, About, Family, Photos pages complete

### **Ready for:**
1. **Git initialization:** `git init && git add . && git commit -m "Initial commit"`
2. **GitHub repository creation:** Push to `shrey-bio-website` repository
3. **GitHub Pages setup:** Enable Pages with GitHub Actions source
4. **Content customization:** Replace placeholder data and images
5. **Live deployment:** Site will be available at `https://username.github.io/shrey-bio-website/`

## 🎯 Cultural Context & Purpose

This website is specifically designed for **Indian marriage bio data sharing** with:

- **Traditional values** emphasized alongside modern outlook
- **Family information** prominently featured (parents, siblings)
- **Cultural details** (religion, community, languages)
- **Professional accomplishments** for career-minded matches
- **Lifestyle compatibility** information (diet, habits, preferences)
- **Privacy considerations** for sensitive personal information

## 🔧 Technical Stack Summary

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| Framework | React | 19.1.1 | UI components & state management |
| Build Tool | Vite | 7.1.7 | Fast development & production builds |
| Routing | React Router | 7.9.3 | Client-side navigation |
| Styling | Tailwind CSS | 4.1.13 | Utility-first styling |
| Animation | Framer Motion | 12.23.22 | Smooth transitions & reveals |
| Icons | Lucide React | 0.544.0 | Consistent icon system |
| Language | TypeScript | 5.8.3 | Type safety & better DX |
| Deployment | GitHub Pages | Actions | Automated hosting |

This is a **complete, production-ready application** that successfully implements all requirements for a modern marriage bio website with optimal user experience, privacy controls, and professional presentation.