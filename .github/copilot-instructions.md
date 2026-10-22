# Barrack's Park School Website - Development Guide

This is a modern Next.js website for Barrack's Park School featuring:
- Responsive homepage with hero section and program showcase
- About & Why Choose Us section
- Admissions & enrollment system
- News & Events blog
- Photo gallery
- Contact page with location

## Quick Start

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to `http://localhost:3000`

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── lib/             # Utilities and helpers
└── styles/          # Global styles
public/              # Static assets (images, fonts)
```

## Key Features

- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile, tablet, desktop
- **SEO Optimized** - Meta tags, Open Graph
- **Fast Performance** - Image optimization, code splitting

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Setup

No environment variables required for basic setup. Add `.env.local` for API keys when needed.
