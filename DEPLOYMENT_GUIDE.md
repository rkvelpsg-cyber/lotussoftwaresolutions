# Deployment Guide for Lotus Software Solutions Website

## 🔧 Pre-Deployment Setup

### Step 1: Add Your Logo

**CRITICAL:** The logo file needs to be added to work with the build process.

1. Download/export your Lotus Software Solutions logo (the circuit board lotus design)
2. Save it as **`logo.png`** in the **`/public`** folder
3. Replace the placeholder file that's currently there
4. Recommended specifications:
   - Format: PNG with transparent background
   - Minimum width: 1000px for high quality
   - File size: Keep under 500KB for optimal loading

### Step 2: Verify Build Locally (Optional but Recommended)

Before deploying, test the build locally:

```bash
# Install dependencies
npm install

# Run build
npm run build

# Check if dist folder is created successfully
# The build should complete without errors
```

If you see errors about `figma:asset`, make sure you've added the logo file to `/public/logo.png`.

---

## 🚀 Deployment Options

### Option A: Netlify Dashboard (Easiest - Recommended)

#### Prerequisites:
- A GitHub, GitLab, or Bitbucket account
- Your logo added to `/public/logo.png`

#### Steps:

1. **Push Code to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Lotus Software Solutions website"
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

2. **Login to Netlify**
   - Go to [https://app.netlify.com/](https://app.netlify.com/)
   - Sign in with your Git provider (GitHub/GitLab/Bitbucket)

3. **Create New Site**
   - Click **"Add new site"**
   - Select **"Import an existing project"**

4. **Connect Repository**
   - Choose your Git provider
   - Select the repository with your website code
   - Authorize Netlify to access your repository

5. **Configure Build Settings**
   - **Base directory:** Leave empty (or `/`)
   - **Build command:** `npm run build` (auto-detected from netlify.toml)
   - **Publish directory:** `dist` (auto-detected from netlify.toml)
   - **No need to change anything** - it's already configured!

6. **Deploy!**
   - Click **"Deploy site"**
   - Wait 2-5 minutes for the build to complete
   - Your site will be live at `https://random-name-12345.netlify.app`

7. **Customize Domain (Optional)**
   - Click **"Site settings"** → **"Change site name"**
   - Choose a custom name like `lotus-software-solutions`
   - Your URL becomes: `https://lotus-software-solutions.netlify.app`

8. **Add Custom Domain (Optional)**
   - Go to **"Domain settings"**
   - Click **"Add custom domain"**
   - Follow instructions to connect your own domain (e.g., `www.lotussoftware.com`)

---

### Option B: Netlify CLI

#### Prerequisites:
- Node.js installed
- Your logo added to `/public/logo.png`

#### Steps:

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```
   - This opens a browser window for authentication

3. **Initialize and Deploy**
   ```bash
   # Install dependencies
   npm install

   # Build the project
   npm run build

   # Deploy to production
   netlify deploy --prod
   ```

4. **Follow Prompts**
   - Choose **"Create & configure a new site"**
   - Select your team
   - Choose a site name
   - Publish directory: `dist`

5. **Your Site is Live!**
   - You'll get a URL like `https://your-site-name.netlify.app`

---

### Option C: Manual Drag & Drop (Quickest for Testing)

#### Prerequisites:
- Your logo added to `/public/logo.png`

#### Steps:

1. **Build Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Drag & Drop**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the entire **`dist`** folder onto the page
   - Wait for upload to complete

3. **Your Site is Live!**
   - Instant deployment with a random URL
   - **Note:** This is good for testing, but for production use Options A or B for automatic updates

---

## 🔍 Troubleshooting

### Build Fails with "Cannot resolve figma:asset" Error

**Solution:** Make sure you've added your logo file to `/public/logo.png`

### Logo Not Showing After Deployment

**Possible causes:**
1. Logo file not added to `/public` folder
2. Logo file named incorrectly (must be exactly `logo.png`)
3. File path is case-sensitive on some systems

**Solution:** 
- Verify file exists at `/public/logo.png`
- Check the file is a valid PNG image
- Rebuild and redeploy

### Site Shows 404 on Refresh

**This should not happen** - the `netlify.toml` file handles SPA routing.

If it does:
1. Check that `netlify.toml` exists in root directory
2. Verify the redirect rules are present
3. Redeploy the site

### Build Takes Too Long

Normal build time: 2-5 minutes

If longer:
- Check Netlify build logs for errors
- Verify all dependencies are properly listed in `package.json`

---

## 📝 Post-Deployment Checklist

- [ ] Logo displays correctly on all pages
- [ ] All sections scroll smoothly (Home, About, Services, Contact)
- [ ] Contact form is visible and styled correctly
- [ ] Animations work properly
- [ ] Test on mobile device or browser dev tools
- [ ] All links work correctly
- [ ] Google Maps shows correct location
- [ ] Check performance on [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🔄 Making Updates

### If using Git + Netlify (Option A):

```bash
# Make your changes to the code
git add .
git commit -m "Description of changes"
git push

# Netlify automatically rebuilds and deploys!
```

### If using Netlify CLI (Option B):

```bash
# Make your changes
npm run build
netlify deploy --prod
```

### If using Drag & Drop (Option C):

```bash
# Make your changes
npm run build
# Then drag the new dist folder to Netlify Drop again
```

---

## 🎯 Performance Optimization Tips

After deployment, consider:

1. **Enable HTTPS** (automatic on Netlify)
2. **Add custom domain** for professional branding
3. **Enable form handling** in Netlify for contact form
4. **Set up analytics** (Netlify Analytics or Google Analytics)
5. **Optimize images** if logo file is large (compress to under 200KB)

---

## 📞 Need Help?

If you encounter issues:

1. Check the [Netlify Documentation](https://docs.netlify.com/)
2. Review build logs in Netlify dashboard
3. Verify all files are committed to your repository
4. Make sure `/public/logo.png` exists

---

## 🎉 Success!

Once deployed, your website will be live at:
- Default: `https://your-site-name.netlify.app`
- Custom domain: `https://yourdomain.com` (if configured)

The website features:
- Smooth animations and modern design
- Fully responsive for all devices
- Professional presentation for Lotus Software Solutions
- Contact information and service details
- Optimized performance and SEO

**Congratulations on your deployment!** 🚀
