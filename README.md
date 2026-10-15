# Portfolio, Djibril Djiré

Personal portfolio for Djibril Djiré — **Software Engineer & Frontend** (React,
Next.js, TypeScript, React Native).

Built with Next.js 15 (App Router), TypeScript and SASS.

## Requirements

- Node.js 18.18 or newer (developed on Node 24)
- npm

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
```

## Editing the content

Almost everything you see on the page lives in **`data/content.ts`**. You should
not need to touch any other file for normal edits:

- `profile` — name, professional title, intro, email, phone, LinkedIn, CV path.
- `seo` — the page `<title>` and the meta / Open Graph / Twitter description.
- `copy` — short UI text: navigation labels, hero lines, section titles and the
  footer links.
  - The hero headline and section titles are safe to edit freely.
  - `copy.hero.typed` is revealed one character at a time. If you change its
    length, update the `steps(...)` value on `.typed` in `app/globals.scss` so it
    still looks like typing (the reveal adapts to any length regardless).
- `projects` — the featured projects rendered as cards and as phone screenshots.
- `otherProjects` — the compact list after the featured projects.
- `experience` — the experience and education timeline.
- `tech` / `openTo` — the skill chips and the "currently open to" line.

### Screenshots

Featured projects use portrait phone screenshots (a 9:19.5 ratio fits best, e.g.
450×975 px):

1. Export the images and drop them into `public/`.
2. List their public paths in the `screens` array of the matching project in
   `data/content.ts`, in display order.
3. Up to 3 screens are shown per project; extra entries are ignored. With 1 or 2
   screens the frames stay centered. A project with no `screens` shows empty
   placeholder frames.

### Other projects

Fill in the two placeholder entries in `otherProjects` (name, summary, role,
stack). Add a `link` to show a "View project" link, or leave it `""` to hide it.
Empty the whole array (`otherProjects = []`) to hide the section.

### CV

The "Download CV" link points to `/cv.pdf`. Keep your exported CV at
`public/cv.pdf`. If the file is missing the build still succeeds; the link would
simply 404 until you add it.

## Deploying on Vercel

1. Push this repository to GitHub.
2. On [vercel.com](https://vercel.com), **Add New → Project** and import the repo.
   Vercel detects Next.js automatically — keep the default build settings.
3. (Recommended) Under **Settings → Environment Variables**, add
   `NEXT_PUBLIC_SITE_URL` set to your final domain (e.g.
   `https://your-name.vercel.app`). It is used for the Open Graph / Twitter URLs.
   See `.env.example`.
4. Deploy. Every push to the main branch then redeploys automatically.

## Notes

- Lighthouse (production build, mobile): performance 99, accessibility 100,
  best practices 100, SEO 100.
- Images are local (in `public/`) and use `next/image`, so no remote image
  domains need to be configured.
- A `postcss` advisory reported by `npm audit` is build-time only and requires
  Next.js 16 to clear; the current Next.js 15 line is not affected at runtime.
