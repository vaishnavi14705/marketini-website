# Marketini - Premium Digital Marketing Website
# Marketini - Premium Digital Marketing Website

🌐 Live Demo: https://vaishnavi14705.github.io/marketini-website/

💻 GitHub Repo: https://github.com/vaishnavi14705/marketini-website
A stunning, high-performance website for Marketini digital marketing agency built with Next.js 14, React, and premium animations.

## Features

- **Dramatic Hero Section** with scroll-triggered reveal animations
- **Smooth Scrolling** powered by Lenis
- **Premium Animations** using Framer Motion and GSAP
- **Custom Cursor** for enhanced interactivity
- **Fully Responsive** design for all devices
- **Performance Optimized** with Next.js 14 and Turbopack
- **Type-Safe** with TypeScript
- **Modern Styling** with Tailwind CSS 4

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - React animation library
- **GSAP** - Professional-grade animation
- **Lenis** - Smooth scroll library
- **React Icons** - Icon library

## Color Palette

- **Primary (Crimson)**: #8B1538
- **Crimson Dark**: #6B0F2A
- **Crimson Light**: #A01842
- **Rich Black**: #0A0A0A
- **White**: #FFFFFF

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles and animations
├── components/
│   ├── About.tsx         # About section with animated stats
│   ├── Contact.tsx       # Contact form with validation
│   ├── CustomCursor.tsx  # Interactive custom cursor
│   ├── Hero.tsx          # Hero section with scroll reveal
│   ├── Navigation.tsx    # Sticky navigation header
│   ├── Philosophy.tsx    # Philosophy section with split layout
│   ├── Portfolio.tsx     # Portfolio with horizontal scroll
│   ├── Services.tsx      # Services grid with hover effects
│   └── Testimonials.tsx  # Testimonial carousel
├── hooks/
│   └── useSmoothScroll.ts # Lenis smooth scroll hook
├── public/
│   └── images/           # Image assets
└── tailwind.config.js    # Tailwind configuration

```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Place your images in the `public/images/` directory with these names:
- `hero-hooded-figure.jpg` - Main hero image (red background with hooded figure)
- `secondary-figure.jpg` - Secondary image (geometric background with figure)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Build for Production

```bash
npm run build
npm start
```

## Key Sections

### Hero Section
- Full-screen immersive experience
- Parallax scroll effects
- Animated text reveals with GSAP
- "Scroll to Reveal" call-to-action

### About Section
- Animated statistics counter
- Fade-in content on scroll
- Geometric decorative elements

### Services Section
- 6 core services with animated cards
- Hover effects and micro-interactions
- Icons from React Icons

### Philosophy Section
- Split layout with image and content
- Numbered principles with animations
- Brand philosophy messaging

### Portfolio Section
- Horizontal scroll gallery
- Case study cards with metrics
- Navigation controls

### Testimonials Section
- Carousel with smooth transitions
- Client quotes and attribution
- Dot navigation indicators

### Contact Section
- Animated form inputs
- Contact information cards
- Social media links
- Footer with branding

## Customization

### Update Colors

Edit [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  crimson: {
    DEFAULT: '#8B1538',  // Your primary color
    dark: '#6B0F2A',     // Darker shade
    light: '#A01842',    // Lighter shade
  },
  'rich-black': '#0A0A0A',
}
```

### Update Content

All content is in the component files. Simply search for text strings and replace with your own:
- Company name, tagline, descriptions
- Service offerings and descriptions
- Portfolio projects and case studies
- Testimonials and client information
- Contact information

### Animation Settings

Adjust animation timing in [app/globals.css](app/globals.css) and component files.

## Performance

- **Turbopack** for faster builds
- **Image optimization** with Next.js Image component
- **Code splitting** automatic with Next.js
- **CSS optimization** with Tailwind CSS
- **Lazy loading** for off-screen content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

1. **Smooth Scroll**: Works best on desktop. Mobile uses native scroll for better performance.
2. **Custom Cursor**: Only appears on desktop devices with mouse input.
3. **Images**: Use high-quality images (minimum 1920x1080) for best results.
4. **Performance**: Test on slower connections and optimize images as needed.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## License

ISC

## Support

For issues or questions, please check the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Built with passion by the Marketini team. Unveiling digital excellence.
