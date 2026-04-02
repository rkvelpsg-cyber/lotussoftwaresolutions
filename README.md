# Lotus Software Solutions Website

A modern, professional website for Lotus Software Solutions - a premier software development company specializing in web and mobile applications.

## ⚠️ IMPORTANT: Before Deployment

**You must add your logo file to the `/public` folder:**

1. Save your Lotus Software Solutions logo as `/public/logo.png`
2. Make sure it's a PNG file with transparent background for best results
3. The logo should be high resolution (recommended: at least 1000px width)

## Features

- 🎨 Modern, responsive design with animated backgrounds
- 🌈 Beautiful gradient color scheme (Blue, Cyan, Teal, Purple, Pink)
- ✨ Smooth animations and transitions using Motion
- 📱 Fully responsive for mobile, tablet, and desktop
- 🚀 Built with React, TypeScript, and Tailwind CSS
- 🎯 Optimized for performance

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm install
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [Netlify](https://app.netlify.com/)**
   - Sign in or create an account
   - Click "Add new site" > "Import an existing project"

3. **Connect your Git provider**
   - Select your repository

4. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (These are already configured in `netlify.toml`)

5. **Click "Deploy site"**
   - Netlify will automatically build and deploy your site
   - You'll get a live URL like `https://your-site-name.netlify.app`

### Option 3: Manual Deploy via Drag & Drop

1. Build the project locally:
```bash
npm install
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder

4. Your site will be live instantly!

## Build Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The built files will be in the 'dist' folder
```

## Technology Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/      # React components
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx         # Main app component
│   └── styles/             # CSS files
├── public/                 # Static assets
├── dist/                   # Build output (generated)
├── netlify.toml           # Netlify configuration
└── package.json           # Dependencies

```

## Contact Information

**Lotus Software Solutions**
- **Founder & CEO:** Dr. Sivaranjani Selladurai, Ph.D
- **Phone:** +91-6369143910
- **Email:** lotussoftwareorg.infotech.in
- **Address:** 3rd Floor, Dr. Lal Path Lab, Madhuranagar, Muthsandra Main Road, Varthur, Bangalore, Karnataka-560087

## License

© 2026 Lotus Software Solutions. All rights reserved.