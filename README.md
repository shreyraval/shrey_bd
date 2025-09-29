# Shrey Raval - Marriage Bio Website

A modern, responsive personal website designed for Indian marriage bio data sharing. Built with React, Vite, and Tailwind CSS, optimized for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Fully mobile-friendly with a modern, clean aesthetic
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Photo Gallery**: Categorized image gallery with lightbox viewer
- **Print-Friendly**: Optimized CSS for PDF generation
- **SEO Optimized**: Complete meta tags, OpenGraph, and structured data
- **Privacy-Aware**: Sensitive information masking with toggle controls
- **Fast Loading**: Optimized performance with lazy loading and efficient routing

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/shreyraval/shrey-bio-website.git
   cd shrey-bio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📸 Adding Your Content

### 1. Update Profile Information

Edit `/public/data/profile.json` with your personal details:

```json
{
  "name": "Your Name",
  "tagline": "Your tagline",
  "location": "Your City, Country",
  "dob": "YYYY-MM-DD",
  // ... other fields
}
```

**Key fields to customize:**
- Personal information (name, age, location, etc.)
- Education and career history
- Family details
- Interests and lifestyle preferences
- Contact information

### 2. Add Your Photos

Place your images in the appropriate directories:

```
public/images/
├── portraits/          # Professional portraits
├── casual/            # Casual photos
├── traditional/       # Traditional/cultural photos
├── professional/      # Work/professional photos
└── hero-bg.jpg       # Background image for hero section
```

**Image Guidelines:**
- Use JPEG/PNG format
- Recommended sizes: 800x800px for gallery images
- Optimize images for web (< 500KB each)
- Name files descriptively (e.g., `portrait1.jpg`, `casual-vacation.jpg`)

### 3. Update Image References

Update the `gallery` section in `/public/data/profile.json`:

```json
{
  "gallery": {
    "portraits": [
      "/images/portraits/portrait1.jpg",
      "/images/portraits/portrait2.jpg"
    ],
    "casual": [
      "/images/casual/casual1.jpg"
    ],
    // ... other categories
  }
}
```

## 🔧 Customization

### Theme Colors

Edit `/src/index.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Primary blue */
  --secondary: 210 40% 96%;       /* Light gray */
  /* ... other color variables */
}
```

### Fonts

The website uses Inter font by default. To change fonts, update the Google Fonts link in `/index.html` and the font-family in `/tailwind.config.js`.

### Content Sections

Each page component is located in `/src/pages/`:
- `HomePage.tsx` - Landing page with hero and quick facts
- `AboutPage.tsx` - Detailed information about education, career, etc.
- `FamilyPage.tsx` - Family information and values
- `PhotosPage.tsx` - Photo gallery with categories

## 🚢 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Set source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment**
   - The GitHub Action will automatically build and deploy
   - Your site will be available at: `https://yourusername.github.io/shrey-bio-website/`

### Manual Deployment

```bash
npm run deploy
```

This builds the project and deploys to the `gh-pages` branch.

## 🎨 Design System

### Components

- **Layout Components**: Header, Footer, Navigation
- **UI Components**: Card, Button, Badge, Dialog, Lightbox
- **Page Components**: Home, About, Family, Photos

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Color Scheme

- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray variants
- **Accent**: Contextual colors for different sections

## 📱 Features

### Privacy Controls

- Toggle sensitive information (email, phone, exact DOB)
- Information is masked by default
- Client-side only, no data sent to servers

### Print Functionality

- Optimized print styles for clean PDF generation
- Removes navigation and interactive elements
- Consolidated layout for A4/Letter paper

### SEO & Sharing

- Complete OpenGraph and Twitter Card meta tags
- Structured data for search engines
- Share functionality via WhatsApp, Email, and direct links

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run images` - Show image optimization guidance

### Project Structure

```
src/
├── components/
│   ├── Layout/         # Navigation, header, footer
│   ├── Modals/         # Share modal, dialogs
│   └── ui/            # Reusable UI components
├── contexts/          # Theme context
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
└── types/             # TypeScript type definitions

public/
├── data/
│   └── profile.json   # Your profile data
└── images/            # Your photos
```

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths in `profile.json`
   - Ensure images are in the correct `public/images/` directories
   - Verify image file extensions match JSON references

2. **Routing issues on GitHub Pages**
   - The project includes SPA routing fixes for GitHub Pages
   - Make sure `.nojekyll` file exists in the public directory

3. **Build failures**
   - Check TypeScript errors: `npm run lint`
   - Verify all imports are correct
   - Ensure all required dependencies are installed

### Performance Optimization

1. **Image Optimization**
   - Use tools like `imagemin` or online compressors
   - Convert large images to WebP format when possible
   - Keep individual images under 500KB

2. **Bundle Size**
   - The current build is optimized for performance
   - Lazy loading is implemented for images
   - Components are efficiently bundled

## 📄 License

This project is created for personal matrimonial use. Feel free to fork and customize for your own bio website.

## 🤝 Contributing

While this is a personal project, suggestions and improvements are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions about customizing this website:
1. Check the documentation above
2. Review the code comments in the source files
3. Open an issue on GitHub for specific problems

---

## Content To-Do List

After setup, you'll need to:

- [ ] Replace placeholder photos with your actual photos
- [ ] Update all personal information in `profile.json`
- [ ] Customize colors and fonts to match your preferences
- [ ] Add your real contact information
- [ ] Update the GitHub Pages URL in meta tags
- [ ] Test all functionality before sharing
- [ ] Take screenshots for the OpenGraph image
- [ ] Review privacy settings for sensitive information

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
