# Badiginchala Mahesh — Portfolio

A high-performance, single-page developer portfolio showcasing full-stack Java, React web applications, and AI-powered projects.

**Live site:** https://maheshbadiginchala.vercel.app

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack
- **Framework & Tooling:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Effects:** Framer Motion, AOS (Animate On Scroll), WebGL (fluid splash cursor)
- **Services & Utilities:** EmailJS (`@emailjs/browser`), `react-qr-code`

## Run Locally

Clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

To configure the contact form with EmailJS, create a `.env.local` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are left unconfigured, the contact form automatically falls back to opening the visitor's default email client).*
