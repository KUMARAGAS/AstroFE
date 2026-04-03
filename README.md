# Extraterrestrial Event (AstroFE)

A fast, modern web application built with **Astro** and **Tailwind CSS**, powered by **Directus CMS**.

## Features

- **Astro v6** – Static-first framework with excellent performance
- **Tailwind CSS v4** – Utility-first styling with custom design tokens
- **Directus CMS** – Headless content management
- **TypeScript** – Full type safety
- **Dark Mode** – Built-in theme switching

## Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| Astro | 6.0.8 | Web framework |
| Tailwind CSS | 4.2.2 | CSS framework |
| TypeScript | 5.x | Type safety |
| Directus SDK | Latest | CMS client |

## Quick Start

### Prerequisites

- Node.js 18.14.1+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd AstroFE

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

Edit `.env` with your Directus credentials:

```env
DIRECTUS_URL=https://your-directus-instance.com
DIRECTUS_TOKEN=your-directus-token
```

### Development

```bash
# Start dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production

```bash
# Build for production
npm run build

# Preview build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── lib/            # Utilities and CMS client
├── pages/          # File-based routing
│   ├── index.astro
│   ├── [slug].astro
│   └── 404.astro
└── styles/         # Global CSS
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Design System

### Colors

- **Primary** – Blue (50-950)
- **Secondary** – Slate (50-950)
- **Accent** – Emerald (50-950)

### Components

- `.btn` / `.btn-primary` / `.btn-secondary` – Button styles
- `.card` – Card with hover effects

### Dark Mode

Add `dark` class to `<html>` to enable dark mode.

## Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Directus Docs](https://docs.directus.io)

## License

MIT
"# AstroFE" 
