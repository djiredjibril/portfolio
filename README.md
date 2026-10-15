# Portfolio, Djibril Djiré

Next.js 15 + TypeScript + SASS.

1. `npm install`
2. `npm run dev` then open http://localhost:3000
3. Edit `data/content.ts` (all the text) and add screenshots in `public/`.
4. Put your CV at `public/cv.pdf`.
5. Deploy: push to GitHub, import the repo on vercel.com.

## CV download

The "Download CV" link points to `/cv.pdf`. Export your CV as a PDF and place it
at `public/cv.pdf`. This file is **not** committed and is optional: the site and
the production build work fine without it (the link would just 404 until you add it).
