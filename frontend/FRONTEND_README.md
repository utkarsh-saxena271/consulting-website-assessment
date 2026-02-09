# ConsultHub - React Frontend

A modern, fully responsive React consulting firm website built with React Router, Framer Motion animations, and clean CSS styling.

## 🚀 Project Structure

```
frontend/
├── src/
│   ├── Components/
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx
│   │   │   └── NavBar.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── ServiceCard/
│   │       ├── ServiceCard.jsx
│   │       └── ServiceCard.css
│   ├── Pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Service/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── ServiceDetails/
│   │   │   ├── ServiceDetail.jsx
│   │   │   └── ServiceDetail.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.css
│   ├── lib/
│   │   └── axios.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── index.html
```

## 🎯 Features

### Pages & Routes

- **Home** (`/`) - Hero section, value proposition, featured services, and CTA
- **Services** (`/services`) - Dynamic service list fetched from backend with search functionality
- **Service Detail** (`/services/:id`) - Detailed service information with benefits and use cases
- **About** (`/about`) - Company information, mission, vision, core values, and statistics
- **Contact** (`/contact`) - Contact form, contact information, and location map

### Components

- **Navbar** - Responsive navigation with mobile hamburger menu
- **Footer** - Multi-column footer with company info and links
- **ServiceCard** - Animated service card component with Framer Motion

### Features

✅ Fully Responsive Design (Mobile, Tablet, Desktop)
✅ Framer Motion Animations
✅ Brand Colors & Modern UI
✅ Dynamic Content from Backend API
✅ Form Validation & Error Handling
✅ Success/Error Messages
✅ Search Functionality on Services Page
✅ SEO-Friendly Structure

## 🛠 Technologies

- **React** 19.2.0
- **React Router DOM** 7.13.0
- **Axios** 1.13.5
- **Framer Motion** (motion) 12.34.0
- **CSS3** (No Tailwind, No Styled Components)
- **Vite** Build Tool

## 📝 Setup & Installation

### Prerequisites

- Node.js 16+ or 18+
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (if needed for environment variables):
```bash
VITE_API_BASE_URL=http://localhost:5000
```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The app will start on `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🔌 API Integration

The frontend connects to the backend API at `http://localhost:5000`. Update the base URL in `src/lib/axios.js` if your backend is hosted elsewhere.

### Endpoints Used

- `GET /api/service` - Fetch all services
- `GET /api/service/:id` - Fetch single service
- `POST /api/contact` - Submit contact form

## 🎨 Design System

### Color Palette

```css
--primary-color: #1e40af (Blue)
--secondary-color: #f59e0b (Amber)
--success-color: #10b981 (Green)
--error-color: #ef4444 (Red)
--text-dark: #1f2937
--text-light: #6b7280
--background: #ffffff
--border-color: #e5e7eb
```

### Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 📱 Mobile Responsiveness

All pages are fully responsive with specific breakpoints:
- 480px (Mobile phones)
- 768px (Tablets)
- 1024px (Large tablets)
- 1200px (Desktops)

The navigation includes a hamburger menu for mobile devices.

## ✨ Key Components

### Home Page

- Hero section with gradient background
- Value proposition cards with hover animations
- Featured services grid (3 services from API)
- Final CTA section
- All content fetched dynamically from backend

### Services Page

- Full list of all services from API
- Search/filter functionality
- Service cards with hover effects
- Loading and error states
- Result counter

### Service Detail Page

- Detailed service information
- Benefits list with checkmarks
- Use cases section
- Call-to-action to contact
- Back navigation
- Loading and error handling

### About Page

- Company introduction
- Mission and Vision sections
- 6 core values cards
- 6 reason to choose cards
- Statistics section
- All with smooth animations

### Contact Page

- Contact form with validation
- Contact information sidebar
- Social links
- Business hours
- Embedded Google Maps
- Success/error message handling
- Loading state on submit

## 🎬 Animations

Using Framer Motion (motion) for smooth, performant animations:
- Fade and slide-in entrance animations
- Hover effects on cards
- Staggered animations on list items
- Viewport-triggered animations

## 🔐 Form Handling

The contact form:
- Validates all required fields
- Sends POST request to backend
- Shows loading state during submission
- Displays success/error messages
- Clears form on successful submission
- Error messages persist or can be dismissed

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.13.0",
  "axios": "^1.13.5",
  "motion": "^12.34.0"
}
```

## 🧪 File Size Optimization

- All pages are code-split automatically by Vite
- CSS modules for scoped styling
- Optimized animations with `will-change` where needed
- Image assets should be added to `public/` folder

## 🚀 Deployment

### Vercel / Netlify

1. Push code to Git repository
2. Connect to Vercel/Netlify
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variables if needed

### Environment Variables

For production, update `src/lib/axios.js` base URL or use environment variables:

```javascript
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
```

Then create `.env.production`:
```
VITE_API_BASE_URL=https://your-api-url.com
```

## 📖 Usage Guide

### Adding a New Page

1. Create page folder in `src/Pages/`
2. Add `PageName.jsx` and `PageName.css`
3. Add route in `src/App.jsx`
4. Update navigation in `src/Components/NavBar/NavBar.jsx`

### Styling

- Use CSS files (no global styles conflict)
- CSS variables from `App.css` for consistency
- Mobile-first approach in media queries
- Flexbox and Grid for layouts

### API Calls

Use the axios instance in `src/lib/axios.js`:

```javascript
import axiosInstance from '../../lib/axios'

// GET request
const response = await axiosInstance.get('/endpoint')

// POST request
await axiosInstance.post('/endpoint', data)
```

## 🐛 Troubleshooting

### API Connection Issues

- Ensure backend is running on `http://localhost:5000`
- Check `src/lib/axios.js` base URL
- Verify Firebase/CORS settings on backend

### Styling Issues

- Clear browser cache
- Check CSS specificity
- Use browser DevTools to inspect elements

### Animation Issues

- Update `motion` package: `npm install motion@latest`
- Check viewport animations have `viewport={{ once: true }}`

## 📧 Support

For issues or questions, contact the development team.

---

**Last Updated:** February 9, 2026
**Version:** 1.0.0
