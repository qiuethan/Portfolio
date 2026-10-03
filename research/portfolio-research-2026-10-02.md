# Ethan Qiu portfolio research

Research snapshot: October 2, 2026. This document prepares a portfolio update; it does not change the application or publish new claims. Three research agents covered personal projects, hackathons, and organization experience. The main research pass audited the current portfolio, both resume files, live status API, and additional owned private repositories.

The strongest update is to show the progression from hackathon applications into engineering ownership: UTMIST infrastructure, Misty, developer tooling, and systems that have explicit authorization, testing, recovery, and deployment boundaries. The existing site gives very little space to that work. It also omits recent award projects and contains several stale stacks and mismatched metrics.

## Coverage and evidence

- Inventoried all 32 repositories owned by `qiuethan`: 22 public and 10 private. Private inspection was explicitly authorized for owned repositories. Private repositories belonging to other people or organizations were excluded.
- Collected 230 public authored pull requests, 250 public authored issues, and 78 public pull requests by other authors with review participation. Counts describe search coverage, not delivered features or impact.
- Inspected repository documentation, selected implementation files, attribution and commit history, PR state, event submissions, and official award sources. This was source research, not a rerun of every project or benchmark.
- Audited 54 non-default branches across the hackathon repositories to distinguish earlier implementations and unfinished work from current main branches.
- Compared the local portfolio with its August 12 resume update. Both checked-in PDFs have the same SHA-256. Most portfolio data was last changed June 10, so the resume and current GitHub profile contain newer information.
- Retrieved the GitHub profile README directly through the API. The browser/search copy was stale and omitted VP Infrastructure, ChatGPU, Canopy, and Mist.

Evidence labels throughout this report:

| Label | What it establishes |
| --- | --- |
| Code and merged PR | An implementation exists and, where checked, was merged. It does not automatically establish production use. |
| Event verified | The project submission or organizer lists an award. Team awards are not evidence of sole authorship. |
| Self-reported | Your resume/profile, a PR description, or an experiment report states the result. Retain its scope; do not silently strengthen it. |
| In progress | Work exists on a branch, in an open PR, or in a documented prototype. |
| Unresolved | Available sources conflict or do not establish the claim. |

Private source findings and draft bullets are in a separate appendix under `/tmp/portfolio-research/private/`. They are not copied into this repository. The public notes below only use public material and the portfolio/resume already present here.

Detailed evidence and additional draft bullets: [personal projects](evidence/personal-projects.json), [organization experience](evidence/organization-experience.json), [hackathons](evidence/hackathons.json). These preserve source links and qualifications for the full research pass, including projects that should remain in an archive.

## Experience that should lead the update

### VP Infrastructure at UTMIST

Your current GitHub profile lists **VP Infrastructure**, while the site only shows the previous Engineering Director, ML Engineer, and Infrastructure Developer roles. The start month is not established by the public sources. July–September implementation activity is evidence of work, not an employment start date. [Current profile](https://github.com/qiuethan/qiuethan)

The strongest public evidence is Misty and the website's architecture, authentication, recruitment access control, contribution rules, and release workflows. There is also clear technical leadership evidence in authored roadmaps and reviews. Open roadmap issues should support planning/coordination language, not claims that every planned capability shipped. [Website roadmap](https://github.com/UTMIST/UTMIST/issues/274), [Misty meeting roadmap](https://github.com/UTMIST/Misty/issues/211)

Draft bullets:

- Built Misty, UTMIST's internal operations platform, bringing team records, document ownership, member verification, and AI assistance into Discord.
- Developed live meeting transcription and AI-generated minutes with Amazon Transcribe and Bedrock, preserving speaker attribution and recovering transcripts when voice connections drop.
- Reorganized the website and operations platform around clear ownership boundaries, CI checks, and contributor onboarding to support yearly team handoffs.

Sources: [Misty meeting implementation](https://github.com/UTMIST/Misty/pull/119), [persistent speaker streams](https://github.com/UTMIST/Misty/pull/136), [disconnect recovery](https://github.com/UTMIST/Misty/pull/190), [website architecture](https://github.com/UTMIST/UTMIST/pull/243), [contributor ownership](https://github.com/UTMIST/UTMIST/pull/357).

Subsequent user confirmation: VP Infrastructure started in July 2026. Infrastructure Developer had the same dates as Engineering Director, May 2025–April 2026. Current team size remains unconfirmed; do not transfer the former director role's 20+ developer metric into this role.

### Shopify

The August resume is more precise than the site's current copy. It reports **Managed Markets live on 20,000+ stores** and the **Product Details redesign planned for 140,000+ stores**. The site instead presents a 140,000-store rollout and adds “millions of merchants” to a prototype description. Those statements are not interchangeable. The resume also adds legacy cleanup across four codebases, which the site misses. These are your self-reported employment outcomes; public GitHub cannot independently establish them. [Local resume](../public/resume.pdf), [current site data](../src/data/portfolio.ts)

Draft bullets faithful to that resume:

- Owned the Managed Markets publishing experience in React and GraphQL, rolling it out to 20,000+ stores and surfacing sellability status and restrictions across 190+ countries.
- Prototyped and benchmarked the Product Details redesign planned for 140,000+ stores, turning open design questions into working previews and owning core product information through build.
- Removed stale feature flags and legacy code across admin web, mobile, checkout, and core while preserving frozen API compatibility.

The resume is dated August; confirm the redesign's current rollout state and any newer outcomes before final publication. Current profile adds the **Products & Pricing** team. Avoid retaining the older Sidekick, 10+ bugs, or “millions” claims simply because they are already in the site.

### UofT Blueprint and MADE

The public work supports architecture and delivery leadership for the **Museum of Art and Digital Entertainment** collection-management platform. The portfolio and resume omit “Art” from the organization's name. Your commits establish the initial data model and backend foundation; PRs establish CI/testing infrastructure; reviews establish oversight of inventory, volunteer access, and movement workflows. Teammates authored several implementations, so “led,” “defined,” and “reviewed” are useful and accurate verbs. [Museum](https://themade.org/en), [repository](https://github.com/uoftblueprint/made), [initial models](https://github.com/uoftblueprint/made/commit/56f53484e8), [CI and tests](https://github.com/uoftblueprint/made/pull/13)

The stack needs correction: **React/TypeScript/Vite and Django REST Framework**, not a Node.js backend. PostgreSQL appears in early setup, but main currently uses SQLite after database changes; the portfolio should not describe PostgreSQL as the current deployed setup without confirmation. [Database transition](https://github.com/uoftblueprint/made/pull/15), [current settings](https://github.com/uoftblueprint/made/blob/main/backend/core/settings.py)

Draft bullets:

- Led development of MADE's collection-management platform, defining the architecture and delivery plan for public browsing, inventory tracking, volunteer access, and movement approvals.
- Built the Django data model and backend foundation for collection items, storage locations, volunteer accounts, and approval workflows.
- Established frontend and backend checks with GitHub Actions, Vitest, and pytest, and reviewed delivery across inventory, authentication, and admin workflows.

The resume's **10 developers**, **50,000+ artifacts**, and **first release in six weeks** remain self-reported. Confirm that the artifact count describes the collection being supported, whether that many records were actually imported, and what counted as the first release. They can be retained once their meaning is clear.

### UTMIST infrastructure website work

This is much more specific than the existing generic infrastructure entry. Your merged work includes Supabase signup/login, email confirmation, protected routes, persistent sessions, applicant authorization guards, CI gates, Vercel previews, and feature ownership boundaries. Current production architecture is **Next.js, Supabase, Payload CMS, and Vercel**. The authentication PR explicitly abandoned Django; later cleanup removed the old Django code. [Authentication](https://github.com/UTMIST/UTMIST/pull/64), [authorization and cleanup](https://github.com/UTMIST/UTMIST/pull/234), [CI](https://github.com/UTMIST/UTMIST/pull/235), [previews](https://github.com/UTMIST/UTMIST/pull/242)

Additional candidate bullets for a detailed role page:

- Built Supabase authentication and protected member flows for UTMIST's Next.js website, including email verification, session management, and tested signup/login flows.
- Hardened applicant access control with shared authorization guards across recruitment pages and APIs.
- Established CI quality gates and per-PR previews, then split the codebase into independently owned features with enforced import boundaries.

Do not equate the club's 1,000+ members with measured active website users. The existing “90% fewer deployment errors” claim has no measurement evidence in the reviewed public sources.

### Earlier roles

| Experience | What to preserve or investigate |
| --- | --- |
| General Dynamics, May–August 2025 | Resume reports 50% lower regression runtime, tooling adopted by three teams, eight manual steps removed, and 15 production PRs. Existing direct, outcome-led bullets are good; no new public implementation evidence was found. |
| UTMIST Engineering Director, May 2025–April 2026 | Keep leadership and Flybits/Amicare work as self-reported. No public repository was found to independently expand the LangChain recommender or pricing-model contributions. |
| UTMIST ML Engineer | Current profile marks this previous, while site says Present. Generic production/research/MLOps bullets need a named project and actual contribution before reuse. |
| GradPath | Public repository identifies you as co-founder and tech co-lead. Potential entrepreneurship experience; exact operating dates, customer/student counts, and responsibilities need confirmation. |
| Hart House Debate | Useful community/operations story with concrete automation code. Existing 240+ and 360+ participation figures conflict. |
| United Coding Tournament | Retain problem-writing experience if still relevant; problem and contestant totals are existing self-reported claims. The `v2` repo supplies separate website-design history. |
| Ottawa Jay Learning Centre | Retain teaching experience as self-reported. No independent support found for the 85% satisfaction metric. |
| Auxilium Coding Circle | Public LinkedIn lists volunteer Python teaching, October 2022–May 2024. Optional addition if you want teaching/community work represented. [LinkedIn](https://ca.linkedin.com/in/qiu-ethan) |

## Projects missing or underrepresented

### Misty

Misty deserves a case study, even if it is also linked from your VP role. It addresses a concrete organizational problem: keeping records and institutional knowledge usable through leadership turnover. Six FastAPI services exist in source, with a Discord interface, shared API-key authentication, scoped document access, member verification, LLM proxying, and meeting processing. Directory, catalog, and verification own PostgreSQL storage; this is not six databases or durable storage for every meeting session. [Repository](https://github.com/UTMIST/Misty), [shared authentication](https://github.com/UTMIST/Misty/pull/61), [document permissions](https://github.com/UTMIST/Misty/pull/87)

The deployment distinction matters. The precise August history records **five API services plus the bot deployed**; connector code was merged but the sixth service was not provisioned. Describe a six-service architecture, not six deployed services. Likewise, full-text storage and document extractors exist, but full-text/semantic retrieval remains deferred; do not call the whole platform a shipped RAG system. [Deployment correction](https://github.com/UTMIST/Misty/pull/196), [deployment history](https://github.com/UTMIST/Misty/blob/staging/docs/DEPLOYMENT-HISTORY.md)

Draft project bullets:

- Architected six FastAPI services for team records, document access, verification, and AI assistance behind a Discord interface.
- Built a streaming meeting pipeline that produces speaker-attributed transcripts and AI-generated minutes, with recovery for dropped voice connections.
- Implemented member verification and document permissions so the catalog resolves member identity and filters document reads as the requesting user.

The persistent-stream PR explains a large illustrative transcription-cost reduction. It is a worked example, not measured customer spend; omit that percentage from public bullets unless supported by actual usage records.

### Cybermetrics

This is a stronger engineering story than the profile's short baseball-analytics description. Authored PRs document shared caching, recommendation-path optimization, backend testing, and frontend action tests. [Repository](https://github.com/TeamCybermetrics/Cybermetrics)

Draft bullets:

- Reworked recommendation queries to reuse a shared player cache, reducing Firestore reads from roughly 364 to 2 per recommendation in the documented flow.
- Added backend tests across services and repositories, with the coverage PR reporting an increase from 37.76% to 92.77%.
- Added 49 frontend action tests covering application behavior around the baseball analytics workflow.

These metrics are **PR-reported**, not rerun in this research. The backend PR reports 509 tests but has an inconsistent internal count breakdown; use the coverage result with that qualification and avoid the test total until checked against CI. [Read reduction](https://github.com/TeamCybermetrics/Cybermetrics/pull/164), [shared cache](https://github.com/TeamCybermetrics/Cybermetrics/pull/170), [backend coverage](https://github.com/TeamCybermetrics/Cybermetrics/pull/180), [frontend tests](https://github.com/TeamCybermetrics/Cybermetrics/pull/181)

### archctl

Published developer tooling is absent from the site. The public package is at version 0.4.6, first published December 2025 and last published February 2026. Source includes AST scanners for TypeScript/JavaScript, Python, and Java; nine rules; CLI reporting; dependency, capability, and context boundaries; an incremental scan cache; and a VS Code extension. [Repository](https://github.com/qiuethan/archctl), [npm package](https://www.npmjs.com/package/archctl)

Draft bullets:

- Built and published archctl, a CLI for checking dependency, capability, and context boundaries across TypeScript, JavaScript, Python, and Java.
- Added AST-based analysis, HTML reports, and editor feedback so architecture violations surface while code is being written.

Some commands are explicit stubs. Debt baselines and ratcheting exist but were contributed by a collaborator; describe them as project capabilities rather than claiming you personally implemented them. The changelog has incorrect years; use repository/package timestamps for dates.

### Canopy

Canopy turns papers and documents into structured courses with concept-level mastery tracking, quizzes, and coding labs. The repository is public under a teammate's account. OpenAI independently lists it as an **Education finalist in Build Week 2026**. The official event-wide total is nearly 47,000 builders; it is not the size of Canopy's user base or the Education finalist pool. [Repository](https://github.com/JavRedstone/canopy), [submission](https://devpost.com/software/canopy-m01bog), [official winners](https://developers.openai.com/blog/build-week-winners)

The attribution review supports your work on source-to-course generation, dual-track mastery scoring, practice pools, prerequisite review prompts, course sharing, and coursebook export. Sandbox/lab verification is a team capability; avoid claiming sole ownership of it.

Draft bullets:

- Co-built Canopy, an OpenAI Build Week Education Finalist that turns technical papers and notes into lessons, practice, and coding labs grounded in the source material.
- Implemented dual-track mastery scoring, practice question pools, and prerequisite review prompts that respond to demonstrated learner difficulty.
- Built the source-to-course foundation, course sharing, and a PDF coursebook export with citations.

### ChatGPU

The Hack the North 2026 submission lists **Best Use of Sentry**. This gives the portfolio a new systems project after the 2025 and early-2026 hackathons. [Submission](https://devpost.com/software/ji-review), [repository](https://github.com/ji24077/HTN)

Describe the implemented main branch precisely: a worker-based runtime for uploaded Python/PyTorch programs across CPU, CUDA, and MPS, with one program assigned to one worker. It is process isolation, not a secure arbitrary-code sandbox. The automatic code optimization/migration path is associated with open/in-flight work and recorded experiments, not a universally shipped capability. [Optimization PR](https://github.com/ji24077/HTN/pull/25)

Authorship evidence supports these draft bullets:

- Built ChatGPU's orchestration layer, turning uploaded Python projects into planned, validated jobs across CPU, CUDA, and Apple MPS workers.
- Implemented durable agent supervision, worker recovery, execution history, and Sentry diagnostics, with bounded tool actions and per-run usage caps.
- Co-built the Hack the North 2026 winner for Best Use of Sentry.

Do not turn the rejected 4.58× optimization example into an achieved speedup. Recorded GPU experiments are separate evidence from the current runtime.

### Frame

Frame is the public `GenAI-Genesis-Project`, built in March 2026. It combines React Native camera coaching with photography learning. No award was established from the submission. Current main and historical code differ: CoreML work exists in an earlier Ethan commit, while the current tree uses React Native frame processors and Python/PyTorch server code. Avoid a single undated stack list that suggests both paths are currently shipping. [Repository](https://github.com/qiuethan/GenAI-Genesis-Project), [submission](https://devpost.com/software/framed-41c5lm)

Draft bullets:

- Built Frame's camera and scoring pipeline, combining React Native capture with PyTorch aesthetics and composition analysis.
- Added live blur, exposure, and motion coaching, and serialized GPU inference in the photography workflow.
- Integrated gallery scoring and Supabase-backed photo challenges with a four-person team at GenAI Genesis 2026.

### Mist

Keep this in an “in progress” area. Main explicitly includes mock frontend/CLI data and incomplete execution. Your September branch contains a Go/Redis runner for a bounded local NVIDIA/PyTorch benchmark, not a deployed distributed compute service. [Repository](https://github.com/UTMIST/Mist), [authored prototype commit](https://github.com/UTMIST/Mist/commit/7467f53b53a45d5deb704ef66a8d03a4eb433337)

Draft: “Prototyped a Go and Redis GPU job runner with NVIDIA hardware detection, bounded PyTorch benchmarks, and a web interface for verified CPU/GPU results.”

### Thea

The public profile describes a Discord assistant with voice/text interaction, semantic memory, plugin integrations, scheduled automations, and autonomous planning. It has no public repository link. Your technical essay describes a later Claude Agent SDK implementation, while the profile still emphasizes Bedrock. Use the private appendix to reconcile versions before selecting the final stack. [Public profile](https://github.com/qiuethan/qiuethan), [technical essay](https://coherentboi.substack.com/p/the-one-about-thea-pt-the-end)

### Other useful work

- **now:** a self-updating personal status API, with GitHub activity ingestion and cached fallbacks. A useful small tooling project, though not stronger than Misty/archctl. [Repository](https://github.com/qiuethan/now)
- **GradPath:** tutoring-platform work and potential founder experience. [Repository](https://github.com/qiuethan/GradPath)
- **Bench Analytics:** a separate public team contribution with attributable CI/testing work. Do not merge it into Cybermetrics without confirming the relationship. [CI contribution](https://github.com/jfishB/bench_analytics/pull/151)
- **Hart House automation:** concrete Google Sheets/Drive operations, Vision OCR payment-proof processing with manual review, and Tabbycat team/speaker creation. Avoid claiming a complete scheduling engine from the reviewed scripts. [Repository](https://github.com/qiuethan/Hart-House-Debate-Automation)

## Existing hackathon projects to refine

| Project | Confirmed or corrected material | Writing limit |
| --- | --- | --- |
| Identity Matrix | UofTHacks 13, 2026: 1st Place Overall and Best “UofT” Hack. Persistent human/AI handoff, real-time state, agent behavior. [Submission](https://devpost.com/software/temp-sqyptg) | Keep the AI/control/real-time story tied to code and authorship. Do not treat simulated persistence as measured long-term operation. |
| Heimer Academy | 1st Place Overall at Rift Rewind. Champion recommendations and ability comparisons are implemented. [Submission](https://devpost.com/software/idk-evraiq) | 2,000 games and 100,000 calls are resume claims; source alone does not establish actual execution volume. |
| Orbit | Groq and Windsurf prizes at Hack the North 2025. [Submission](https://devpost.com/software/orbit-59jths) | Reviewed recorder transcribes after recording stops. Do not promise live streaming transcription or measured sub-second end-to-end latency. |
| Polaris | Best Game Hack, Hack the 6ix **2025**. Profile/repo description incorrectly says 2024. Devpost credits you with CV pipeline, pose classification, and WebSocket/controller integration. [Submission](https://devpost.com/software/polaris-vlp1wm) | Game graphics/art have teammate attribution. Current server uses JSON at configured 10 FPS; do not repeat binary-protocol or latency claims as measured results. Top-eight finalist needs separate award evidence. |
| Hyacinthe | GeeseHacks 2025: 1st Place Overall plus Best Non-AI Wrapper Hack. [Submission](https://devpost.com/software/hyacinthe) | Navigation prototype; do not imply validated real-world accessibility/safety outcomes. |
| Crosswalk of Shame | Hack the North 2024; object detection and distracted-walking concept. [Submission](https://devpost.com/software/crosswalk-of-shame) | No award established; distinguish tutorial/model reuse and team contributions. |
| GameStoppr | Behavioral blocking/rewards project with Django and desktop/browser-adjacent components. [Submission](https://devpost.com/software/gamestoppr) | Existing “browser extension” label is narrower than the actual system; use the implementation notes. |

## Full owned public repository inventory

Dates below are repository creation and last push, not project employment dates or proof that all intervening time was spent on the project.

| Repository | Created | Last push | Portfolio treatment |
| --- | --- | --- | --- |
| [qiuethan](https://github.com/qiuethan/qiuethan) | 2024-11 | 2026-10 | Profile source; current roles and project pointers. |
| [now](https://github.com/qiuethan/now) | 2026-06 | 2026-10 | Optional tooling project; investigate stale status fields. |
| [neetcode-submissions](https://github.com/qiuethan/neetcode-submissions) | 2026-05 | 2026-08 | Practice archive; omit from featured work. |
| [Portfolio](https://github.com/qiuethan/Portfolio) | 2025-06 | 2026-08 | This site; demonstrate design/implementation through the site itself. |
| [GenAI-Genesis-Project](https://github.com/qiuethan/GenAI-Genesis-Project) | 2026-03 | 2026-03 | Frame; add as a distinct mobile/CV project. |
| [archctl](https://github.com/qiuethan/archctl) | 2025-11 | 2026-02 | Strong featured developer-tool candidate. |
| [Identity-Matrix](https://github.com/qiuethan/Identity-Matrix) | 2026-01 | 2026-01 | Keep; improve personal contribution and award details. |
| [Heimer-Academy](https://github.com/qiuethan/Heimer-Academy) | 2025-10 | 2025-11 | Keep; qualify throughput/volume claims. |
| [Orbit](https://github.com/qiuethan/Orbit) | 2025-09 | 2025-09 | Keep; correct transcription/latency wording. |
| [Polaris](https://github.com/qiuethan/Polaris) | 2025-07 | 2025-08 | Keep; correct year and individual ownership. |
| [RT1M](https://github.com/qiuethan/RT1M) | 2025-06 | 2025-07 | Secondary full-stack project; financial data + conversational updates. |
| [Shop-Buddy](https://github.com/qiuethan/Shop-Buddy) | 2025-07 | 2025-07 | Text-to-solution/product-search app, not CV groceries/allergy profiling. |
| [Bounce-Back-Public](https://github.com/qiuethan/Bounce-Back-Public) | 2025-06 | 2025-07 | Public subset of a private app; model claims need implementation evidence. |
| [Face-Detection-Model](https://github.com/qiuethan/Face-Detection-Model) | 2024-08 | 2024-08 | Explicit tutorial adaptation; archive or learning section. |
| [AI-Notetaker](https://github.com/qiuethan/AI-Notetaker) | 2024-06 | 2024-08 | Audio/Whisper transcription; summarizer file is empty. Early work, not a complete AI notes product. |
| [Hart-House-Debate-Automation](https://github.com/qiuethan/Hart-House-Debate-Automation) | 2024-06 | 2024-08 | Strong community-impact story after clarifying usage and participant metric. |
| [GradPath](https://github.com/qiuethan/GradPath) | 2023-06 | 2023-12 | Founder/tech-lead lead; confirm operation and users. |
| [FRC-Command-Based-2023](https://github.com/qiuethan/FRC-Command-Based-2023) | 2023-08 | 2023-08 | Robotics history; clarify personal role and season. |
| [Hang](https://github.com/qiuethan/Hang) | 2022-05 | 2023-06 | Social/scheduling project on permanent hiatus; archive. |
| [Trace-It](https://github.com/qiuethan/Trace-It) | 2022-06 | 2023-01 | Small Pygame project; optional early-work archive. |
| [Discord-Bots](https://github.com/qiuethan/Discord-Bots) | 2022-09 | 2022-09 | Early bot work; connect to later systems only if useful. |
| [v2](https://github.com/qiuethan/v2) | 2021-11 | 2021-11 | Original UCT website design; historical supporting evidence. |

## Content inconsistencies to resolve

| Current content | Research finding | Proposed treatment |
| --- | --- | --- |
| UTMIST has three older roles but no VP | Fresh profile lists VP Infrastructure; older director/ML roles marked previous | Add VP with confirmed dates; reduce duplicate role bullets. |
| Shopify 140,000+ rollout mixed with prototype | Latest local resume separates 20,000+ live Managed Markets stores from 140,000+ planned redesign stores | Use separate outcomes and confirm post-August changes. |
| UTMIST authentication uses Django | Merged implementation uses Supabase/Next.js and abandoned Django | Replace stale stack and generic bullets. |
| Blueprint uses Node.js/PostgreSQL | Public main uses Django REST Framework/SQLite; DB history changed | Describe actual contribution and confirm deployed DB. |
| Museum of Digital Entertainment | Official name is Museum of Art and Digital Entertainment | Correct employer/project partner name in site and resume. |
| Shop Buddy is CV grocery/allergy app in GitHub profile | Public code is OpenAI text solutions + SerpAPI products | Correct the GitHub profile as well as future portfolio copy. |
| Polaris year 2024 in profile/repo | Event and repository creation establish 2025 | Use 2025 consistently. |
| HHDC 240+ versus 360+ | Conflicting self-reported figures | Confirm tournament, year, participant unit, and cumulative versus single-event scope. |
| Mist described as running ML jobs broadly | Authored prototype is bounded local benchmark; main incomplete | Label in progress. |
| “12 shipped” and “Open Live” | Some entries are hackathon prototypes; many live links are Devpost writeups | Use “selected projects” and distinguish demo/source/writeup links. |
| Generic ML Engineer/MLOps/research claims | No named contribution or publication proof found | Replace with verified project detail or omit generic bullets. |
| now links promise fresh status everywhere | `/now.json` returned 404; discovery/API endpoints work, but writing is stale and absent from discovery | Repair links/data interpretation during implementation. |

## Writing voice and proposed organization

Your strongest existing resume bullets start with the action, name the system, and explain the result: “Owned,” “Built,” “Implemented,” “Removed.” Use that pattern. Keep the humor and first-person informality in the introduction and off-hours sections; the technical evidence is more convincing when it is plain.

Prefer “Built a streaming meeting pipeline…” over “Developed a cutting-edge AI-powered platform…”. Use one meaningful measurement with its denominator and context. “Co-built” or “Led” is more accurate than sole ownership where a team delivered the product. For branch work, use “Prototyped”; for a plan, say “Designing” only if it is still active.

Suggested organization, as an editorial recommendation:

1. Lead experience with Shopify and VP Infrastructure; keep General Dynamics, former UTMIST Director, and Blueprint as substantial earlier roles.
2. Feature a mix of sustained engineering and awards: Misty, archctl, Cybermetrics, Canopy, ChatGPU, and Identity Matrix are the strongest public candidates. The private appendix may change this selection.
3. Keep the rest browsable as project history: Frame, Heimer Academy, Orbit, Polaris, Hyacinthe, RT1M, Shop Buddy, Bounce Back, Hart House, and earlier work.
4. Put Mist and other unfinished work in a clearly labeled current-work area.
5. Link projects from their associated roles so the case studies provide depth without repeating three identical bullets in both sections.

## Implementation map for the later update

The content is duplicated across several surfaces; changing only `portfolio.ts` will not update everything.

| File | Relevant content |
| --- | --- |
| `src/data/portfolio.ts` | Main project, role, skill, bio, and terminal/agent-view data. |
| `src/components/home/ExperienceSection.tsx` | Separate curated role cards, dates, summaries, logos. |
| `src/components/home/WorkSection.tsx` | Separate project ordering, summaries, awards, images, “shipped” label. |
| `src/components/home/Hero.tsx` | Current employer and former-role introduction. |
| `src/components/home/NowSection.tsx` | Old sample work, writing, calendar, and coding-time fallback data. |
| `src/components/commands/AboutCommand.tsx` | Index-based experience selection with stale comments. |
| `src/components/agent/AgentView.tsx` | Uses shared main data, but its live-status links need checking. |
| `index.html` and `public/llms.txt` | Static/crawler introduction and status links. |
| `public/resume.pdf` and `src/data/Resume_EthanQiu_Portfolio.pdf` | Identical August snapshot, separate copies to keep synchronized. |
| `README.md` | Still describes the old terminal-only presentation. |

The current Now API reports zero WakaTime activity and an empty WakaTime username. That does not establish zero coding activity. Its writing endpoint still returns a stale June snapshot despite a later envelope timestamp. Do not use sample feed entries or automated summaries as independent career evidence. [Discovery](https://now.ethanqiu.ca/api), [identity](https://now.ethanqiu.ca/api/identity), [activity](https://now.ethanqiu.ca/api/activity), [writing](https://now.ethanqiu.ca/api/writing)

## Details only you can finish

- The end date of the previous UTMIST ML Engineer role. VP Infrastructure and Infrastructure Developer dates were subsequently confirmed by the user above.
- Shopify outcomes since the August resume, especially the Product Details rollout and what is appropriate to describe publicly.
- What shipped for MADE, when the first usable release happened, and whether 50,000 artifacts is collection size or imported records.
- Current usage for Misty, number of teams served, meeting volume, or measured time saved.
- The correct Hart House participant count and what the automation handled in actual tournaments.
- Your exact work split on Canopy and ChatGPU where shared commits or large imports blur ownership.
- Whether GradPath should be described as an operating venture and whether teaching/robotics deserve experience entries.
- Which privately researched projects you want represented publicly and at what level of detail.

No site code, resume PDF, GitHub profile, deployment, or external page was changed during this research.
