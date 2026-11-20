# NextBites 🍴

NextBites is a modern recipe explorer built with **Next.js (App Router)** and **TypeScript**, styled with modern CSS, and statically exported to GitHub Pages.

## 🌐 Live Demo & Links
- **Live Site (Home Page)**: [https://vivegan-21-7.github.io/nextbites/](https://vivegan-21-7.github.io/nextbites/)
- **Recipe Detail Page**: [https://vivegan-21-7.github.io/nextbites/recipe/margherita-pizza/](https://vivegan-21-7.github.io/nextbites/recipe/margherita-pizza/)
- **Part 3 Pull Request**: [https://github.com/vivegan-21-7/nextbites/pull/3](https://github.com/vivegan-21-7/nextbites/pull/3)

---

## Features
- **Typed Components & Data**: Fully typed `Recipe` schema and reusable `RecipeCard`.
- **Live Search & Filter**: Interactive client component (`RecipeGrid.tsx`) with real-time title & cuisine filtering and empty state handling.
- **Dynamic Routing**: Serves every recipe through `app/recipe/[id]/page.tsx` with `generateStaticParams()`.
- **Missing-Recipe Flow**: Handled with `notFound()` and a friendly `app/not-found.tsx` 404 page.
- **Error Boundary & Loading**: Route-level `loading.tsx` skeletons and `"use client"` `error.tsx` boundary with reset action.
- **Static Export**: Configured with `output: "export"`, `basePath: "/nextbites"`, and automated GitHub Pages deployment.

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## Production Build

```bash
npm run build
```
Generates the pre-rendered static site into `out/`.
