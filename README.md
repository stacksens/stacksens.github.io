# StackSens Marketing Website

A modern, responsive marketing website for StackSens - a web and mobile app development company specializing in restaurant, hospitality, and startup solutions.

## 🚀 Features

- **6 Pages**: Home, Services, Portfolio, Industries, About, and Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Dynamic meta tags, Open Graph tags, and structured data
- **Performance**: Code splitting, lazy loading, and optimized builds
- **Contact Form**: EmailJS integration for lead generation
- **GitHub Pages Ready**: Configured for easy deployment

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Form submission service

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/stacksens/stacksens.github.io.git
cd stacksens.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup

To enable the contact form, you need to configure EmailJS:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Update `src/components/ContactForm.jsx` with your credentials:

```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

### Customization

- **Colors**: Edit `tailwind.config.js` to change the primary color scheme
- **Content**: Update page components in `src/pages/`
- **Portfolio**: Modify `src/data/portfolio.js` to add your projects
- **Contact Info**: Update contact information in `src/components/Layout/Footer.jsx` and `src/pages/Contact.jsx`

## 🚢 Deployment

### GitHub Pages (Automatic)

The repository is configured with GitHub Actions for automatic deployment:

1. Push your code to the `main` branch
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The site will automatically deploy on every push to `main`

The site will be available at `https://stacksens.github.io`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

### Using gh-pages (Alternative)

If you prefer using the `gh-pages` package:

```bash
npm run deploy
```

Note: Make sure to update the `base` path in `vite.config.js` if your repository name is different from `stacksens.github.io`.

## 📁 Project Structure

```
stacksens.github.io/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout/      # Header, Footer, Navigation
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── SEO.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Industries.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/           # Data files
│   │   └── portfolio.js
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

- **Primary Color**: Indigo (#6366f1)
- **Typography**: System fonts with clear hierarchy
- **Spacing**: Consistent Tailwind spacing scale
- **Components**: Card-based layouts with subtle shadows

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (requires gh-pages)

## 🔍 SEO

Each page includes:
- Dynamic page titles and meta descriptions
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD) for business information

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or support, contact us at contact@stacksens.com

---

Built with ❤️ by StackSens

