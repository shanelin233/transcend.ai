# Transend AI - The Unified Interface For LLMs

A modern, responsive landing page inspired by OpenRouter.ai, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with gradient effects and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 14 and Turbopack for lightning-fast development
- **Type-Safe**: Written in TypeScript for better code quality
- **Component-Based**: Modular architecture with reusable React components

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd transend-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
transend-ai/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with featured models
│   ├── Stats.tsx           # Statistics bar
│   ├── Steps.tsx           # Three-step guide section
│   ├── Features.tsx        # Feature showcase grid
│   ├── Announcements.tsx   # Recent announcements
│   └── Footer.tsx          # Footer with links
├── public/
│   └── logo.svg            # Transend AI logo
└── lib/
    └── utils.ts            # Utility functions
```

## Components Overview

### Header
- Logo and branding
- Search bar
- Navigation menu (Models, Chat, Rankings, Enterprise, Docs)
- Sign in button

### Hero Section
- Main headline: "The Unified Interface For LLMs"
- Interactive message input demo
- Featured models cards with stats

### Stats Bar
- Monthly tokens: 12T
- Global users: 4.2M+
- Active providers: 60+
- Available models: 500+

### Three Steps
1. **Signup**: Create account with social login options
2. **Buy Credits**: Purchase credits for any model
3. **Get API Key**: Generate and use your API key

### Features Grid
- **One API for Any Model**: Single unified interface
- **Higher Availability**: Distributed infrastructure
- **Price and Performance**: Edge computing with ~25ms latency
- **Custom Data Policies**: Fine-grained security controls

### Announcements
- Latest product updates and news
- Three featured announcements

### Footer
- Navigation links
- Social media icons
- Copyright information

## Customization

### Changing Brand Colors

Edit the color variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  /* Add your custom colors */
}
```

### Modifying Content

Edit the component files in the `components/` directory to update text, links, and data.

### Logo Replacement

Replace `public/logo.svg` with your own logo file.

## Build for Production

```bash
npm run build
```

## Deploy

This project can be easily deployed to:

- **Vercel** (recommended):
  ```bash
  vercel
  ```
- **Netlify**
- **AWS Amplify**
- Any other hosting platform that supports Next.js

## License

MIT License - feel free to use this project for your own purposes.

## Credits

Design inspired by [OpenRouter.ai](https://openrouter.ai)
