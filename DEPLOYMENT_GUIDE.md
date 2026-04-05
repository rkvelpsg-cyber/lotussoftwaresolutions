# Deployment Guide for Lotus Software Solutions Website

## Pre-Deployment Setup

### 1. Add Your Logo

1. Save your logo as `/public/logo.png`.
2. Use PNG format (transparent background recommended).
3. Recommended width: 1000px+.

### 2. Verify Local Build

```bash
npm install
npm run build
```

The build should complete successfully with Next.js.

## Deploy to Netlify (Recommended)

### Option A: Git Integration (Best)

1. Push your repository to GitHub/GitLab/Bitbucket.
2. In Netlify, choose Add new site -> Import an existing project.
3. Connect your repository and deploy.
4. Keep build command as `npm run build`.
5. Netlify uses the Next.js plugin configured in `netlify.toml`.

### Option B: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
npm install
netlify deploy --build --prod
```

## Troubleshooting

### Build Failure

1. Run `npm install` again.
2. Run `npm run build` locally.
3. Confirm `netlify.toml` exists at project root.

### Logo Not Showing

1. Verify `/public/logo.png` exists.
2. Ensure filename is exactly `logo.png`.
3. Redeploy after updating the image.

## Post-Deployment Checklist

- Home page loads correctly.
- Header and footer logo display correctly.
- Navigation links work.
- Contact section works.
- Mobile layout is responsive.

## Updating the Site

After code changes:

```bash
git add .
git commit -m "Update website"
git push
```

Netlify will automatically rebuild and deploy when using Git integration.
