# Deployment Guide 🚀

Quick guide to get your portfolio live in minutes!

## Option 1: Deploy to Vercel (Easiest & Recommended)

### Step 1: Push to GitHub

```bash
cd eddie-portfolio-modern
git init
git add .
git commit -m "Initial commit - Modern portfolio"
git branch -M main
git remote add origin https://github.com/EddieJorden/eddie-portfolio-modern.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import `eddie-portfolio-modern` repository
5. Click "Deploy"

**That's it!** Your site will be live at `https://eddie-portfolio-modern.vercel.app`

### Step 3: Add Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add `eddiemoger.com`
3. Update DNS records at your domain provider (Porkbun):

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Wait 5-10 minutes for DNS propagation, then your site is live at `eddiemoger.com`! 🎉

---

## Option 2: Deploy to Netlify

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## Option 3: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Select `eddie-portfolio-modern`
4. Railway auto-deploys!

---

## Environment Variables (If Needed)

If you add a contact form backend or analytics:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

Add these in:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **Railway**: Project → Variables

---

## Updating Your Live Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel/Netlify/Railway will auto-deploy your changes!

---

## Performance Tips

### Enable Vercel Analytics

1. Go to Vercel dashboard
2. Analytics tab
3. Enable Web Analytics (free)

### Enable Caching

Vercel does this automatically for static assets.

### Add OG Images

Create `public/og-image.png` (1200x630px) for social media previews.

Update `app/layout.tsx`:

```typescript
openGraph: {
  images: ['/og-image.png'],
}
```

---

## Troubleshooting

### Build Fails

Check build logs in Vercel/Netlify dashboard. Common issues:

- **TypeScript errors**: Fix type errors or add `"typescript": { "ignoreBuildErrors": true }` to `next.config.js`
- **Missing dependencies**: Run `npm install` locally first
- **Environment variables**: Make sure all required env vars are set

### Site is Slow

1. Check Lighthouse score: Dev Tools → Lighthouse → Run
2. Optimize images: Use WebP format, compress large images
3. Reduce particle count in `ParticlesBackground.tsx`

### Custom Domain Not Working

1. Wait 10-30 minutes for DNS propagation
2. Check DNS records are correct
3. Clear browser cache (Ctrl+Shift+R)
4. Use [whatsmydns.net](https://whatsmydns.net) to check propagation

---

## Support

Issues? Reach out:
- Email: eddie@eddiemoger.com
- GitHub: Open an issue in the repo

---

**Pro Tip**: Set up automatic deployments! Every push to `main` branch auto-deploys to production. Push to `develop` branch for preview deployments.
