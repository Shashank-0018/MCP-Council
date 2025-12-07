# MCP-Council Frontend

## 🚀 Overview

The modern, premium UI for MCP-Council - a platform that automates the conversion of REST APIs into AI-powered MCP (Model Context Protocol) servers.

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (sans-serif), JetBrains Mono (monospace)

## ✨ Features

- ⚡ **Premium Design**: Glassmorphic UI with vibrant Electric Blue, Purple, and Cyber Green palette
- 🎭 **Dark Mode First**: Optimized for dark mode with stunning animations
- 📱 **Fully Responsive**: Mobile-first design that scales beautifully
- 🎬 **Smooth Animations**: Framer Motion for buttery-smooth interactions
- 🎯 **SEO Optimized**: Proper metadata, semantic HTML, and Next.js optimizations
- ⚡ **Performance**: Optimized with Next.js 16 and Turbopack

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── landing/            # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   └── CTA.tsx
│   └── shared/             # Reusable components
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Design System

### Colors

- **Primary**: Electric Blue (#3B82F6) - AI/Tech vibes
- **Secondary**: Vibrant Purple (#A855F7) - Innovation  
- **Accent**: Cyber Green (#10B981) - Success/Active

### Typography

- **Headings & Body**: Inter
- **Code**: JetBrains Mono

### Effects

- Glassmorphism with backdrop blur
- Animated gradient backgrounds
- Floating particle effects
- Smooth scroll animations
- Glow effects on hover

## 📄 Pages

### Current
- **Landing Page** (`/`) - Hero, Features, How It Works, CTA

### Planned
- **About** (`/about`) - Mission, vision, team
- **Documentation** (`/docs`) - Getting started, API reference
- **Pricing** (`/pricing`) - Pricing tiers
- **Playground** (`/playground`) - Interactive API demo

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
npm run build
```

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines first.

---

Built with ❤️ for the MCP-Council platform
