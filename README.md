# Krishnalal S — Portfolio

A modern portfolio built with Next.js, React and TypeScript. Content is intentionally separated into `data/portfolio.ts` so projects, experience, skills and credentials can be updated without touching the UI.

## Run in VS Code

1. Open this folder in VS Code.
2. Open Terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open `http://localhost:3000`

## Update content

Edit `data/portfolio.ts` for profile text, projects, experience, skills and certificates.

- Profile photos: `public/images/profile-cutout.png` and `public/images/profile-portrait.jpeg`
- Resume: `public/files/Krishnalal-S-Resume.pdf`
- Certificate images: `public/images/certificates/`
- Main UI: `components/Portfolio.tsx`
- Styling/animations: `app/globals.css`

## Deploy free

Push the project to GitHub, then import it into Vercel. Vercel will detect Next.js automatically. The free `.vercel.app` subdomain can be used immediately. A custom domain can be connected later.

## Future upgrades

The project is structured so a CMS/Supabase admin area, MDX blog, analytics, project case-study pages and a contact API can be added without rebuilding the visual system.
