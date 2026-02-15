# Eddie Moger - Modern Portfolio 🚀

A stunning, modern portfolio website built with cutting-edge technologies and beautiful animations.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for buttery-smooth transitions
- **3D Elements**: Interactive particle background with Three.js
- **Responsive Design**: Mobile-first, looks perfect on all devices
- **Dark Theme**: Sleek dark mode with glassmorphism effects
- **Performance Optimized**: Fast loading, SEO-friendly
- **Accessible**: WCAG 2.1 compliant

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js / React Three Fiber
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
eddie-portfolio-modern/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact section
│   └── ParticlesBackground.tsx  # 3D particles
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 Customization

### Update Content

1. **Hero Section** (`components/Hero.tsx`):
   - Update title, subtitle, and description
   - Modify call-to-action buttons

2. **About Section** (`components/About.tsx`):
   - Edit your story and background
   - Update highlights

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills
   - Adjust proficiency levels

4. **Projects Section** (`components/Projects.tsx`):
   - Add your projects
   - Update project details, tech stack, and links

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Configure contact form (add backend if needed)

### Colors & Styling

Edit `tailwind.config.ts` to customize:
- Color scheme
- Fonts
- Spacing
- Animations

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Import your repository

4. Deploy! (Vercel will auto-detect Next.js)

Your site will be live at `your-project.vercel.app`

### Custom Domain

1. Go to Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `eddiemoger.com`)
3. Update DNS records as instructed

### Alternative Deployment

- **Netlify**: Works great with Next.js
- **Railway**: Easy deployment with Git integration
- **Self-hosted**: Use `npm run build` then deploy the `.next` folder

## 📊 Performance

This portfolio is optimized for:
- ✅ 90+ Lighthouse score
- ✅ Fast initial load
- ✅ Smooth animations (60 FPS)
- ✅ Mobile-first responsive design
- ✅ SEO optimized

## 🐛 Known Issues & Solutions

### Animation Performance

If animations lag on lower-end devices:
1. Reduce particle count in `ParticlesBackground.tsx`
2. Disable some Framer Motion effects
3. Use `will-change` CSS property sparingly

### Build Errors

If you get TypeScript errors:
```bash
npm run build -- --no-lint
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and create your own version!

## 📄 License

MIT License - feel free to use this template for your own portfolio

## 🙏 Credits

Built with ❤️ by Eddie Moger

- Design & Development: Eddie Moger
- Technologies: Next.js, React, Tailwind CSS, Framer Motion
- Inspiration: Modern web design trends

---

**Need help?** Open an issue or reach out at eddie@eddiemoger.com
