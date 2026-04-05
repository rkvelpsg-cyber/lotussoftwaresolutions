# Netlify Deployment - Next.js Ready

## Quick Deploy (Recommended)

1. Push your repository to GitHub/GitLab/Bitbucket.
2. In Netlify, choose Add new site -> Import an existing project.
3. Select your repository.
4. Keep build command as `npm run build`.
5. Netlify uses the Next.js plugin configured in `netlify.toml`.
6. Click Deploy site.

## CLI Deploy

```bash
npm install -g netlify-cli
netlify login
npm install
netlify deploy --build --prod
```

## Notes

- No `dist` publish directory is required for Next.js on Netlify.
- Keep `netlify.toml` in the repository root.
- Ensure your logo exists at `/public/logo.png` before deploying.

## Verify After Deploy

1. Home page loads without errors.
2. Logo appears in header/footer.
3. Contact form and navigation work.
4. Mobile layout is responsive.
