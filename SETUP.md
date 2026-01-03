# Marketini Website - Quick Setup Guide

## Current Status: ✅ Ready to Run

Your premium Marketini website has been successfully built and is ready to use!

## Next Steps

### 1. Add Your Images

Save your two brand images to the `public/images/` folder:

- **`public/images/hero-hooded-figure.jpg`** - The main hero image (red background with "MARKETINI" text)
- **`public/images/secondary-figure.jpg`** - The philosophy section image (geometric red/black background)

### 2. Start the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Test the Website

Check that all sections are working:
- ✅ Hero section with scroll reveal
- ✅ About section with animated stats
- ✅ Services grid with 6 services
- ✅ Philosophy section with your brand approach
- ✅ Portfolio carousel with case studies
- ✅ Testimonials with carousel
- ✅ Contact form with validation
- ✅ Smooth scrolling throughout
- ✅ Custom cursor (desktop only)

## What's Included

### Premium Features
- **Smooth Scrolling**: Powered by Lenis for buttery-smooth navigation
- **Custom Cursor**: Interactive cursor that responds to hover states
- **GSAP Animations**: Professional-grade scroll-triggered animations
- **Framer Motion**: React-based animations for components
- **Responsive Design**: Works perfectly on all device sizes
- **Performance Optimized**: Built with Next.js 14 and Turbopack

### Sections Created
1. **Hero** - Dramatic entrance with scroll prompt
2. **About** - Company intro with animated statistics
3. **Services** - 6 service cards with hover effects
4. **Philosophy** - Brand approach with 3 key principles
5. **Portfolio** - 4 case studies with metrics
6. **Testimonials** - 4 client testimonials with carousel
7. **Contact** - Form + contact info + social links

### Tech Stack
- Next.js 14 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GSAP with ScrollTrigger
- Lenis (Smooth Scroll)
- React Icons

## Customization Tips

### Change Colors

Edit `tailwind.config.js` to update your brand colors:

```javascript
colors: {
  crimson: {
    DEFAULT: '#8B1538',  // Primary red
    dark: '#6B0F2A',
    light: '#A01842',
  },
}
```

### Update Content

All text content is in the component files:
- `components/Hero.tsx` - Hero section text
- `components/About.tsx` - About content and stats
- `components/Services.tsx` - Service descriptions
- `components/Philosophy.tsx` - Philosophy principles
- `components/Portfolio.tsx` - Case study details
- `components/Testimonials.tsx` - Client quotes
- `components/Contact.tsx` - Contact information

### Modify Animations

- **Speed**: Adjust `duration` values in component files
- **Easing**: Change `ease` arrays for different feels
- **Smooth scroll**: Edit `hooks/useSmoothScroll.ts`
- **Global animations**: Update `app/globals.css`

## Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

## Deployment Options

Your website can be deployed to:
- **Vercel** (recommended for Next.js) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **AWS** - S3 + CloudFront
- **Any Node.js hosting**

## Common Issues & Solutions

### Images Not Showing?
- Make sure images are in `public/images/` folder
- Check filenames match exactly: `hero-hooded-figure.jpg` and `secondary-figure.jpg`
- Images will show gradient fallback if not found

### Animations Not Working?
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check browser console for errors
- Make sure you're using a modern browser

### Smooth Scroll Too Fast/Slow?
Edit `hooks/useSmoothScroll.ts` and adjust the `duration` value:
```typescript
duration: 1.2,  // Lower = faster, Higher = slower
```

### Custom Cursor Not Appearing?
- Custom cursor only works on desktop with mouse
- Won't appear on mobile/tablet devices
- Check that `body { cursor: none; }` is in globals.css

## Performance Tips

1. **Optimize Images**: Use compressed JPG/PNG (aim for < 500KB each)
2. **Test Speed**: Use Lighthouse in Chrome DevTools
3. **Monitor Bundle**: Run `npm run build` to see bundle sizes
4. **Lazy Load**: Images already lazy-load by default

## Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lenis GitHub](https://github.com/studio-freight/lenis)

## File Structure Reference

```
Marketini_Website/
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── components/             # All React components
├── hooks/                  # Custom React hooks
├── public/
│   └── images/            # PUT YOUR IMAGES HERE
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript config
└── README.md             # Full documentation
```

## Final Checklist

Before going live:
- [ ] Added both brand images
- [ ] Updated company information
- [ ] Customized service descriptions
- [ ] Added real portfolio projects
- [ ] Updated testimonials with real clients
- [ ] Changed contact information
- [ ] Updated social media links
- [ ] Tested on mobile devices
- [ ] Tested in multiple browsers
- [ ] Optimized images for web
- [ ] Ran production build
- [ ] Checked performance with Lighthouse

---

## 🎉 You're Ready to Go!

Your premium Marketini website is fully functional and ready to impress. Simply add your images and customize the content to match your brand.

For any questions, refer to the full [README.md](README.md) file.

**Happy marketing! 🚀**
