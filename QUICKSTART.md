# Quick Start Guide 🚀

Get your modern portfolio running in 3 minutes!

## Step 1: Run Locally

```bash
cd /home/arlo/.openclaw/workspace/eddie-portfolio-modern
npm run dev
```

Open http://localhost:3000 in your browser. Hot reload enabled!

## Step 2: Deploy to Vercel (5 minutes)

### A. Create GitHub Repo

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit - AI-focused modern portfolio"

# Create repo on GitHub first, then:
git remote add origin https://github.com/EddieJorden/eddie-portfolio-modern.git
git branch -M main
git push -u origin main
```

### B. Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `eddie-portfolio-modern`
5. Click "Deploy" (no config needed!)

**Done!** Your site is live at `https://eddie-portfolio-modern.vercel.app`

### C. Add Custom Domain

In Vercel dashboard:
1. Settings → Domains
2. Add `eddiemoger.com`
3. Update DNS at Porkbun:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

Wait 5-10 min, then live at eddiemoger.com! 🎉

## Step 3: Customize Content

### Update Projects
Edit `components/Projects.tsx` - add your actual project links

### Update About
Edit `components/About.tsx` - personalize your story

### Add Photos
Place images in `public/` folder and reference them

### Change Colors
Edit `tailwind.config.ts` to customize theme

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
npm run build
# Fix any TypeScript errors shown
```

**Slow performance?**
Reduce particles in `components/ParticlesBackground.tsx` (line 90):
```typescript
for (let i = 0; i < 50; i++) { // was 100
```

## Next Steps

- [ ] Test on mobile devices
- [ ] Add contact form backend
- [ ] Set up Google Analytics
- [ ] Add OG image for social sharing
- [ ] Create blog section (optional)

## Support

Questions? eddie@eddiemoger.com

---

**Pro Tip:** Push to `main` branch for auto-deploy to production!
