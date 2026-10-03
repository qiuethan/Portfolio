# Ethan Qiu’s portfolio

Source for [ethanqiu.ca](https://ethanqiu.ca), built with React 19, TypeScript, Vite 6, and styled-components.

The homepage keeps Now directly after the introduction, followed by Current work, six selected projects, past experience, and Off Hours. The full library lives at `/work`, with Projects and Experiments tabs. A text-first view at `/?view=agent` uses the same content for agents and crawlers. Use `/?view=human` to force the visual site.

## Development

Use a current Node.js LTS release, then run:

```bash
npm ci
npm run dev
```

```bash
npm run build   # Type-check and create dist/
npm run lint    # Run ESLint
npm run preview # Serve the production build locally
```

## Updating content

- `src/data/portfolio.ts`: bio, contact details, skills, and writing.
- `src/data/projects.ts`: public projects, descriptions, highlights, and links.
- `src/data/experiments.ts`: Thea, Minecraft-Harness, Idea Factory, and archctl. Public source and package links are included where available; private repository links are omitted.
- `src/data/experience.ts`: roles, teams, dates, summaries, and bullets. The `featured` flag selects home-page experience cards.
- `src/data/home.ts`: explicit selections for current roles, current projects, and the six selected projects. Featured roles outside Current work appear under Past experience.
- `src/components/home/`: visual sections. The hero’s short introduction and Off Hours copy live here.
- `src/components/agent/AgentView.tsx`: structured view using the shared data.
- `index.html` and `public/llms.txt`: metadata, no-JavaScript summary, and crawler entry points.

The Experiments tab can be linked directly with `/work?tab=experiments`. The former `/?tab=experiments#work` link redirects there. The homepage has no project pagination; the library shows six entries per page. All current projects and experiments have images. New gallery entries can use a screenshot, a repository preview, or a `visual` with a mark, three steps, and a color tone.

`vercel.json` serves the app shell for direct visits to `/work`, following [Vercel’s Vite SPA guidance](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas). Other hosts need an equivalent fallback for this route.

The build also emits `dist/404.html` so Vercel can serve the app's recovery page for unknown URLs with a 404 response, following its [custom 404 guidance](https://vercel.com/kb/guide/custom-404-page). Below-the-fold photos load lazily; the main portrait loads eagerly. Dialogs render outside the app root and make background content inert until closed.

The Now section fetches sources independently. Failed requests and sources marked stale show unavailable states; there is no sample activity fallback. It is hidden on small screens.

## Resume

`public/resume.pdf` is the public download. `src/data/Resume_EthanQiu_Portfolio.pdf` is the copy used by the earlier terminal components. Both currently contain the August 2026 resume. Replace both and update the dated labels when publishing a newer version; the page includes work researched after that snapshot.

## Supporting material

[PORTFOLIO_STRUCTURE.md](PORTFOLIO_STRUCTURE.md) maps the UI and data files. The `research/` directory contains the public evidence and source notes used for the October 2026 content update. Private repository research is not included in this repository.

The earlier terminal interface remains in `src/components/TerminalInterface.tsx` and `src/components/commands/`, but it is not mounted by the current app routes.
