# Nixora

Website for Nixora — *Intelligent Living. Connected Spaces. Smarter Future.*

Built with Next.js (App Router) and plain CSS.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit

- Contact details, domain and social links: `lib/site.ts`
- Global styles and design tokens: `app/globals.css`
- Pages: `app/*/page.tsx`
- Interactive floor-plan demo: `components/HomeDemo.tsx`
- Projects/case studies: add entries to `PROJECTS` in `app/projects/page.tsx`

## Deploy

Hosted on Vercel: `vercel --prod`
