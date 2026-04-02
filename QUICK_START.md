# Quick Start - Deploy in 5 Minutes! ⚡

## Step 1: Add Your Logo (30 seconds)
```
1. Save your Lotus Software Solutions logo as: /public/logo.png
2. Make sure it's a PNG file
```

## Step 2: Choose Your Deployment Method

### 🎯 Fastest: Drag & Drop (2 minutes)
```bash
npm install
npm run build
```
Then go to https://app.netlify.com/drop and drag the `dist` folder

---

### 🔄 Best: Automated Deployment (3 minutes)

**Push to GitHub:**
```bash
git init
git add .
git commit -m "Lotus Software Solutions website"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

**Deploy on Netlify:**
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repo
4. Click "Deploy site"

Done! ✅

---

### ⚡ CLI Method (3 minutes)
```bash
npm install -g netlify-cli
netlify login
npm install
npm run build
netlify deploy --prod
```

---

## What You Get:

✅ Live website at a custom URL
✅ Automatic HTTPS
✅ Fast global CDN
✅ Instant updates when you push to Git (Option 2)

## Troubleshooting:

**Build error?** → Make sure `/public/logo.png` exists

**Logo not showing?** → File must be named exactly `logo.png`

**Need help?** → Check DEPLOYMENT_GUIDE.md for detailed instructions

---

That's it! Your website will be live in minutes. 🎉
