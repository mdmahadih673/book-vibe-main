# AGENTS.md — book-vibe-main

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + daisyUI v5. Single-package app, no monorepo, no tests, no CI.

## Commands

- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build` / Start: `npm start`
- Lint: `npx eslint .` (`npm run lint` has no path arg — pass `.` explicitly)
- Typecheck: `npx tsc --noEmit` (no script defined)
- No test runner, formatter, or CI configured.

## Structure

- Routes live under `src/app/`: `page.tsx` (home: hero + first 6 books), `Listed-Books/page.tsx` (all books), `Listed-Books/[id]/page.tsx` (detail, `notFound()` on bad id).
- Shared UI is colocated at `src/app/components/{HomePage,Navbar,Footer}/` — not `src/components/`.
- Shared type: `IBook` in `src/app/type.ts`. Import via path alias `@/*` → `./src/*` (see `tsconfig.json`).
- Data source: static `public/booksData.json` (15 books). No DB, no env vars, no API routes.

## Gotchas

- Book data comes from `public/booksData.json` via the `getBooks()` / `getBookById()` helpers in `src/app/lib/books.ts` (static JSON import — works in `next build`). Do not reintroduce `localhost:3000` fetches.
- `[id]/page.tsx` uses Next 16 async params: `params: Promise<{ id: string }>` + `await params`. Keep that shape.
- `next.config.ts` enables `reactCompiler: true` — don't add manual `useMemo`/`useCallback` just for perf.
- `next/image` remote hosts are allowlisted (`i.ibb.co.com`, `covers.openlibrary.org`). New image domains require adding a `remotePatterns` entry or build fails.
- Styling is Tailwind v4: `@import "tailwindcss"; @plugin "daisyUI";` in `src/app/globals.css`. No `tailwind.config.js`. DaisyUI utilities (`navbar`, `btn`, `menu`, `dropdown-content`) are used in `navbar.tsx`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
