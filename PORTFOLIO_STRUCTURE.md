# Portfolio structure

The site is a React app with a homepage at `/` and a full work library at `/work`. `App.tsx` selects the visual site or the structured agent view; `?view=human` and `?view=agent` override detection.

## Content

| File | Contents |
| --- | --- |
| `src/data/portfolio.ts` | Bio, contact information, skills, writing, and shared data exports |
| `src/data/projects.ts` | Public project cards and detail-dialog content |
| `src/data/experiments.ts` | Personal experiments, including archctl and its public links |
| `src/data/experience.ts` | Role details and home-page selection via `featured` |
| `src/data/home.ts` | Ordered current roles, current projects, selected projects, and past roles |
| `src/data/now.ts` | Typed client for the live Now API |

Update shared data instead of duplicating project or role descriptions in components. Use stable IDs for new entries. Omit unavailable project URLs rather than adding placeholders. Keep experiment descriptions suitable for the public site.

## Visual site

`src/pages/Home.tsx` assembles the homepage in this order: Hero → Now → Current work → Selected work → Past experience → Off Hours. `src/pages/Work.tsx` contains the full library. `src/hooks/usePageNavigation.ts` resets scroll on route changes and resolves section anchors after React mounts, accounting for Now's asynchronous height changes.

`src/pages/NotFound.tsx` handles unknown routes. The production build copies the app shell to `dist/404.html` for Vercel's static 404 handling. Each visual page has a keyboard skip link to `main-content`.

| Component | Purpose |
| --- | --- |
| `glass/SiteNav.tsx` | Navigation and resume link |
| `home/Hero.tsx` | Introduction, portrait, and primary links |
| `home/NowSection.tsx` | Activity, contribution calendar, coding time, and status |
| `home/CurrentWorkSection.tsx` | Shopify and VP Infrastructure, plus Misty, Mist, and UTMIST Website |
| `home/WorkSection.tsx` | Six selected projects and the Browse all work link |
| `home/WorkVisual.tsx` | Abstract graphics for entries without screenshots |
| `home/ExperienceSection.tsx` | Featured past roles, excluding the current roles |
| `work/ExperienceCards.tsx` | Shared role cards and detail dialogs |
| `work/WorkGallery.tsx` | Shared project cards and optional pagination |
| `work/WorkDialog.tsx` | Shared project images, details, highlights, and links |
| `work/WorkLibrary.tsx` | Projects / Experiments tabs and the full paginated library |
| `home/OffHoursSection.tsx` | Personal interests and photos |
| `glass/SiteFooter.tsx` | Footer links |

Component paths in the table are relative to `src/components/`. Shared glass surfaces, buttons, photos, and dialogs live in `src/components/glass/`. Global typography, colors, and motion preferences live in `src/styles/GlobalStyles.ts`.

The homepage selection is Canopy, ChatGPU, Identity Matrix, Cybermetrics, Heimer Academy, and Frame, with no pagination. The library contains all 18 projects and four experiments, with six entries per page. `/work?tab=experiments` opens that tab directly; the old `/?tab=experiments#work` link redirects there. Tabs support arrow keys, Home, and End. Dialogs support Escape, trap keyboard focus, and restore focus when closed. `vercel.json` provides the app-shell fallback for direct library visits.

Dialogs use a body portal and make the background app inert while open. Shared photos default to lazy loading, with an eager main portrait. Now's feed applies category filtering before its eight-entry display limit so quieter categories remain reachable.

## Structured content and assets

- `src/components/agent/AgentView.tsx` renders all roles, projects, experiments, and skills as text and links.
- `index.html` contains page metadata and a no-JavaScript summary.
- `public/llms.txt` provides crawler entry points and a dated overview.
- `public/img/` contains project images, logos, and personal photos.
- `public/resume.pdf` is the public resume. Keep its dated labels and the older terminal copy in `src/data/Resume_EthanQiu_Portfolio.pdf` in sync when replacing it.

The earlier terminal components and command views remain in the repository but are not mounted by `App.tsx`.

See [README.md](README.md) for development commands and [the research report](research/portfolio-research-2026-10-02.md) for the content audit and sources.
