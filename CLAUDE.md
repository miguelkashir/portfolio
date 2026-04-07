# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (opens browser automatically)
npm run build        # Type-check + Vite build + pre-render HTML (SSG)
npm run lint         # ESLint
npm run test         # Vitest in watch mode
npm run test:run     # Vitest single run (CI)
npm run deploy       # Deploy to GitHub Pages (gh-pages -d dist)
```

Run a single test file:

```bash
npx vitest run src/comps/ExpEduCard.test.tsx
```

## Architecture

This is a pre-rendered (SSG) single-page portfolio. There is no routing, no API, and no state management library.

**Build pipeline:** `tsc -b && vite build && node scripts/prerender.js`. The prerender script spins up a Vite SSR server, loads `src/entry-server.tsx`, renders the app to an HTML string, and injects it into `dist/index.html`. This makes all content readable by bots and crawlers without executing JavaScript. The client hydrates via `hydrateRoot` in `src/main.tsx`.

**Data flow:** All portfolio content lives in `src/data/data.ts` as plain TypeScript constants. `App.tsx` imports everything from there, passes data down to section components as props, and is the only file that wires data to the UI.

**Domain types:** All interfaces and types live in `src/types.ts` — `Experience`, `Degree`, `Project`, `Language`, `ContactLink`, `Skill`, `SkillCategory`. `data.ts` imports from there. Components that need a type import it from `src/types.ts`, not from `data.ts`.

**Skills:** All skills are defined as objects in the `Skills` registry in `data.ts` (`Skills.React`, `Skills.TypeScript`, etc.), typed via `satisfies Record<string, Skill>`. Each skill has `name` and `category` (`SkillCategory` union: `'language' | 'frontend' | 'backend' | 'testing' | 'tooling'`). Both `Experience.skills` and `Project.technologies` use `Skill[]`.

**Component structure:**

- `Header` — sticky header that compresses on scroll; receives `name`, `role`, and `links: ContactLink[]` as props; includes inline SVG icons for LinkedIn/GitHub
- `Section` — labeled card wrapper accepting a Lucide `icon` and `children`
- `ExpEduCard` — reused for both experience and education entries; accepts `startDate`/`endDate` and optionally shows a human-readable duration via `formatDuration`
- `ExperienceList`, `EducationList`, `ProjectList`, `SkillList`, `LanguageList` — one component per section, each accepts only the slice of data it needs
- `Paragraph` — thin text wrapper

**Theme/Context:** `src/context/ThemeContext.tsx` holds `ThemeProvider`, `ThemeContext`, and `ThemeContextValue`. The `useTheme` hook lives separately in `src/context/useTheme.ts`. This split is required by the `react-refresh/only-export-components` ESLint rule — hooks and providers must not share a file.

**Utilities:** `src/utils/formatDuration.ts` — pure function that converts a date range into a human-readable string (e.g. "1.5 years"). Has its own unit tests in `src/utils/formatDuration.test.ts`.

**Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config`). Prettier config in `.prettierrc` enforces single quotes, 2-space indent, trailing commas. Pink (`pink-600`, `pink-100`, etc.) is the accent color used consistently across all components. Technology/skill tags use the same pink pill style everywhere.

**Testing:** Vitest + jsdom + `@testing-library/react`. Setup file at `src/test/setup.ts` imports `@testing-library/jest-dom`. Test files live alongside source files (`*.test.tsx`, `*.test.ts`).

**Deployment:** Vite builds to `dist/`, served under the `/portfolio` base path (configured in `vite.config.ts`). Deploy target is GitHub Pages.

## Adding a new section

1. Add the domain interface to `src/types.ts`
2. Add the data constant to `src/data/data.ts`, typed against the interface
3. Create a `src/comps/[Name]List.tsx` component that accepts the data slice as props
4. In `App.tsx`, import the data and the component, and render inside a `<Section>` with a Lucide icon
