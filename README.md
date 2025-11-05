# Trend News App Website

A complete, elegant, and modern website for the Trend News App - a cross-platform application that aggregates and filters news from Telegram, Twitter (X), and other sources using their public APIs.

## 🎯 Project Purpose

This website serves as the official landing page and information hub for the Trend News App. It provides:

- **Home Page**: Hero section with app introduction and download CTA
- **Privacy Policy**: Comprehensive privacy policy compliant with API terms
- **Callback Page**: OAuth callback handler for Telegram and Twitter APIs
- **Contact Page**: Contact form for user inquiries

## 📁 Folder Structure

```
trend-news-site/
├── public/                    # Static assets for GitHub Pages
│   ├── index.html            # Home page
│   ├── privacy.html          # Privacy policy page
│   ├── callback.html         # OAuth callback handler page
│   ├── contact.html          # Contact form page
│   └── assets/               # Static assets
│       └── favicon.ico       # Site favicon
│
├── src/
│   ├── js/                   # JavaScript logic
│   │   ├── main.js          # Main navigation and interactivity
│   │   └── callback.js       # OAuth callback handler
│   │
│   ├── styles/               # CSS stylesheets
│   │   ├── global.css       # Global styles and base components
│   │   └── theme.css        # Theme-specific styles and animations
│   │
│   └── assets/               # Images and icons
│       ├── logo.svg         # App logo (SVG)
│       └── preview.png      # Open Graph preview image
│
├── package.json              # Project configuration
└── README.md                 # This file
```

## 🚀 Features

### Design & UI/UX

- **Modern Glassmorphism Design**: Sleek glassmorphic cards with backdrop blur effects
- **Gradient Animations**: Animated gradient orbs and smooth transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Google Fonts**: Poppins and Inter fonts for modern typography
- **Smooth Animations**: CSS animations and transitions throughout

### Pages

1. **Home Page (`index.html`)**
   - Hero section with gradient background
   - Animated phone mockup
   - Feature cards showcase
   - Download app button
   - Responsive navigation

2. **Privacy Policy (`privacy.html`)**
   - Comprehensive privacy policy
   - Sectioned layout with glass cards
   - Links to API terms of service

3. **Callback Page (`callback.html`)**
   - OAuth callback handler
   - Success/error message display
   - Automatic token processing
   - Redirect functionality

4. **Contact Page (`contact.html`)**
   - Contact form (UI ready, backend integration needed)
   - Form validation
   - Contact information display

### Technical Features

- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Handling**: Client-side validation and user feedback
- **OAuth Callback Handling**: Support for Telegram and Twitter APIs
- **No Backend Required**: Fully static site ready for GitHub Pages

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with custom properties, animations, and glassmorphism
- **Vanilla JavaScript**: No framework dependencies
- **Google Fonts**: Poppins and Inter
- **SVG**: Scalable vector graphics for logos and icons

## 📦 Deployment to GitHub Pages

### Option 1: Deploy from Root Directory

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Trend News App website"
   git branch -M main
   git remote add origin https://github.com/yourusername/trend-news-site.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Select source: `Deploy from a branch`
   - Branch: `main` / `root`
   - Click Save

3. **Move Files to Root** (if needed):
   - Move `public/*` files to repository root
   - Update paths in HTML files if necessary

### Option 2: Deploy from /docs Folder

1. **Create `docs` folder**:
   ```bash
   mkdir docs
   cp -r public/* docs/
   ```

2. **Configure GitHub Pages**:
   - Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `docs`
   - Click Save

### Option 3: Use GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## 🔧 Local Development

### Using Python (Simple HTTP Server)

```bash
# Navigate to project root
cd trend-news-site

# Start local server (Python 3)
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Open browser
# http://localhost:8000/public/index.html
```

### Using Node.js (http-server)

```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8000

# Open browser
# http://localhost:8000/public/index.html
```

### Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `public/index.html`
3. Select "Open with Live Server"

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors ... */
}
```

### Logo

Replace `src/assets/logo.svg` with your custom logo. Maintain SVG format for scalability.

### Preview Image

Replace `src/assets/preview.png` with a 1200x630px image for Open Graph previews.

### Favicon

Replace `public/assets/favicon.ico` with your custom favicon. You can use online tools to convert SVG/PNG to ICO format.

## 📝 API Integration

### OAuth Callback URLs

The callback page (`callback.html`) handles OAuth redirects from:

- **Telegram**: `https://yourdomain.com/callback.html?token=...`
- **Twitter**: `https://yourdomain.com/callback.html?code=...`

See `src/js/callback.js` for implementation details.

### Contact Form

The contact form currently performs client-side validation only. To make it functional:

1. Set up a backend API endpoint
2. Update form submission handler in `src/js/main.js`
3. Add error handling and success messages

## 🔒 Security Considerations

- **HTTPS Required**: Always use HTTPS in production (GitHub Pages provides this automatically)
- **API Keys**: Never expose API keys in client-side code
- **Token Storage**: OAuth tokens are stored in `sessionStorage` for demo purposes. In production, use secure storage methods
- **CORS**: Configure CORS headers on your backend API if needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Styles Not Loading

- Check that paths in HTML files match your deployment structure
- Ensure files are in correct directories
- Check browser console for 404 errors

### JavaScript Not Working

- Check browser console for errors
- Ensure scripts are loaded after DOM elements
- Verify file paths are correct

### GitHub Pages Not Updating

- Wait a few minutes for changes to propagate
- Check GitHub Actions for build errors
- Clear browser cache

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, use the contact form on the website or open an issue on GitHub.

---

**Built with ❤️ for Trend News App**

