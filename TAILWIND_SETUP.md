# Tailwind CSS Production Setup

This project uses a production-grade Tailwind CSS setup optimized for modern web development with Astro.

## Features

### 🎨 Design System
- **Custom Color Palette**: Primary, Secondary, Accent, and Neutral color scales
- **Typography**: Inter font family with JetBrains Mono for code
- **Dark Mode**: Class-based dark mode support
- **Responsive Design**: Enhanced breakpoints including `xs`

### 🧩 Components
- **Button Variants**: Primary, Secondary, Accent, Ghost styles
- **Card Component**: With hover effects and shadows
- **Form Styles**: Consistent input, textarea, and select styling
- **Typography**: Prose styles for content

### 🎭 Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up/Down**: Directional entrance animations
- **Scale In**: Subtle scaling effects
- **Bounce In**: Playful entrance animation

### 📱 Responsive
- **Container Queries**: Centered containers with responsive padding
- **Enhanced Spacing**: Additional spacing utilities
- **Flexible Layouts**: Grid and flex utilities optimized for all screen sizes

## File Structure

```
src/
├── styles/
│   └── global.css          # Main stylesheet with all Tailwind imports
├── layouts/
│   └── BaseLayout.astro    # Base layout with proper HTML structure
├── components/
│   └── TailwindDemo.astro  # Demo component showcasing features
└── assets/
    └── styles.css          # Entry point that imports global.css
```

## Configuration

### Tailwind Config (`tailwind.config.js`)
- **Content Paths**: Scans all relevant file types
- **Dark Mode**: Enabled with `class` strategy
- **Custom Colors**: Extended color palette
- **Typography**: Modern font stacks
- **Animations**: Custom keyframes and animation utilities
- **Plugins**: Typography, Forms, and Aspect Ratio

### Global Styles (`src/styles/global.css`)
- **Base Layer**: HTML and body defaults, focus styles, scrollbar
- **Components Layer**: Reusable component classes
- **Utilities Layer**: Additional utility classes
- **Dark Mode**: Automatic dark mode styles

## Usage

### Colors
```html
<!-- Primary colors -->
<div class="bg-primary-500 text-primary-100">Primary</div>

<!-- Secondary colors -->
<div class="bg-secondary-500 text-secondary-100">Secondary</div>

<!-- Accent colors -->
<div class="bg-accent-500 text-accent-100">Accent</div>

<!-- Neutral colors -->
<div class="bg-neutral-500 text-neutral-100">Neutral</div>
```

### Components
```html
<!-- Buttons -->
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>

<!-- Cards -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

<!-- Forms -->
<input type="text" class="input" placeholder="Enter text" />
```

### Animations
```html
<!-- Entrance animations -->
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-up">Slides up</div>
<div class="animate-bounce-in">Bounces in</div>
```

### Dark Mode
```html
<html class="dark">
  <!-- Automatically applies dark mode styles -->
</html>
```

## Plugins

### @tailwindcss/typography
Provides beautiful typographic defaults for content.

```html
<div class="prose-custom">
  <h1>Heading</h1>
  <p>Paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
</div>
```

### @tailwindcss/forms
Styles form elements consistently across browsers.

```html
<input type="text" class="input" />
<select class="input">
  <option>Option</option>
</select>
```

### @tailwindcss/aspect-ratio
Provides utilities for maintaining aspect ratios.

```html
<div class="aspect-video bg-neutral-200">
  <!-- 16:9 aspect ratio -->
</div>
```

## Best Practices

1. **Use Design Tokens**: Stick to the defined color palette
2. **Component Classes**: Use the provided component utilities
3. **Dark Mode**: Always test both light and dark modes
4. **Responsive**: Use responsive utilities for all screen sizes
5. **Performance**: Only include styles you use (Tailwind purges unused CSS)

## Customization

### Adding Colors
Edit `tailwind.config.js` in the `colors` section:

```js
colors: {
  brand: {
    50: '#eff6ff',
    // ... more shades
  }
}
```

### Custom Components
Add to the `components` layer in `global.css`:

```css
@layer components {
  .btn-custom {
    @apply /* your styles */;
  }
}
```

### Animations
Add keyframes and animations in `global.css`:

```css
@keyframes customAnimation {
  /* keyframes */
}

.animate-custom {
  animation: customAnimation 0.5s ease-out;
}
```

## Development

The setup includes:
- ✅ Hot reload during development
- ✅ CSS purging in production
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Performance optimized

Start developing with confidence using this production-ready Tailwind CSS setup!