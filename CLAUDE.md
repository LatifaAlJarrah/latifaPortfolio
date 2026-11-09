# Latifa portfolio (Next.js)

- Next.js App Router + TypeScript + Tailwind v4 (theme tokens live in `app/globals.css` `@theme`).
- Project data lives in `data/projects.ts`; site constants in `lib/site.ts`.
- Server Components by default; `"use client"` only for Navbar, Cursor, ContactForm.
- Images go in `public/images` and are rendered with `next/image`.
- Contact form posts to `app/api/contact/route.ts` (Resend, see `.env.example`).
