import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import { Skeleton, skeletonPulse } from '../glass/Skeleton';
import { Section, SectionHead } from '../glass/primitives';
import { fetchNow } from '../../data/now';
import type { NowContributions, NowData } from '../../data/now';

// The Now section is dense (feed + calendar + stats) and not worth the
// vertical cost on phones — hide it there. The nav link is already hidden too.
const NowWrap = styled(Section)`
  @media (max-width: 700px) {
    display: none;
  }
`;

const NowHead = styled(SectionHead)`
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .note {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }

  /* status dot: pulses while syncing, solid once live, muted on fallback */
  .dot {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    flex-shrink: 0;
    background: var(--ink-faint);
  }
  .dot.loading {
    background: var(--accent);
    animation: ${skeletonPulse} 1.2s ease-in-out infinite;
  }
  .dot.live {
    background: #2f8f6b;
  }
`;

const BetaPill = styled.span`
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid rgba(29, 79, 158, 0.25);
  border-radius: 999px;
  padding: 3px 9px;
  line-height: 1;
`;

const InfoTip = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  border: 1px solid var(--glass-edge);
  background: var(--glass);
  color: var(--ink-soft);
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  cursor: help;

  .tip {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 5;
    width: 250px;
    padding: 11px 13px;
    text-align: left;
    white-space: normal;
    font-family: var(--body);
    font-size: 12.5px;
    line-height: 1.5;
    color: var(--ink-soft);
    background: var(--glass-strong);
    border: 1px solid var(--glass-edge);
    border-radius: var(--radius-sm);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    backdrop-filter: blur(16px) saturate(1.4);
    box-shadow: 0 16px 40px -20px rgba(26, 33, 48, 0.45);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition: opacity 0.15s, transform 0.15s, visibility 0.15s;
    pointer-events: none;
  }

  &:hover .tip,
  &:focus-visible .tip {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NowGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr;

  /* on desktop the side panel (calendar + status) sets the row height and
     the feed column stretches to match it, scrolling internally */
  @media (min-width: 1100px) {
    grid-template-columns: 1.25fr 1fr;
    align-items: stretch;
  }
`;

/* desktop: a relatively-positioned cell so the absolutely-filled stack below
   takes the side panel's height instead of dictating its own */
const LeftCol = styled.div`
  min-width: 0;

  @media (min-width: 1100px) {
    position: relative;
  }
`;

/* feed (flexible, scrolls) on top, calendar pinned beneath it */
const LeftStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;

  @media (min-width: 1100px) {
    position: absolute;
    inset: 0;
  }
`;

const SidePanel = styled.div`
  display: grid;
  gap: 14px;
  align-content: start;

  /* the side rail drives the row height; the left column matches it */
  @media (min-width: 1100px) {
    min-height: 480px;
  }
`;

const FeedCard = styled(Glass)`
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 18px 26px;

  /* take the remaining height above the calendar and scroll internally */
  @media (min-width: 1100px) {
    flex: 1 1 auto;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(26, 33, 48, 0.08);
    flex-shrink: 0;
  }

  /* the scrollable region; keeps the chips pinned */
  .feed {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 14px;
    /* tuck the scrollbar against the card edge */
    margin-right: -14px;
    padding-right: 10px;
    scrollbar-width: thin;
    scrollbar-color: rgba(26, 33, 48, 0.22) transparent;
  }

  .feed::-webkit-scrollbar {
    width: 8px;
  }

  .feed::-webkit-scrollbar-thumb {
    background: rgba(26, 33, 48, 0.18);
    border-radius: 999px;
  }

  .feed::-webkit-scrollbar-track {
    background: transparent;
  }

  .chip {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-soft);
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid var(--glass-edge);
    border-radius: var(--radius-sm);
    padding: 4px 12px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }

  .chip:hover {
    background: var(--glass-strong);
    color: var(--ink);
  }

  .chip.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
  }

  /* each item is its own card: subtle frosted fill, a kind-colored left
     accent, and a hover lift */
  .entry {
    position: relative;
    display: flex;
    gap: 18px;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    transition: background 0.15s, transform 0.15s, border-color 0.15s;
  }

  /* straight vertical accent — runs down the flat part of the left edge so
     it doesn't follow the card's rounded corners */
  .entry::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 3px;
    border-radius: 3px;
    background: var(--ink-faint);
  }

  .entry:hover {
    background: rgba(255, 255, 255, 0.6);
    border-top-color: var(--glass-edge);
    border-right-color: var(--glass-edge);
    border-bottom-color: var(--glass-edge);
    transform: translateX(2px);
  }

  .entry[data-kind='shipping']::before {
    background: var(--accent);
  }
  .entry[data-kind='hacking']::before {
    background: #6d4aa7;
  }
  .entry[data-kind='writing']::before {
    background: #2f8f6b;
  }

  .date {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-faint);
    min-width: 52px;
    padding-top: 2px;
  }

  .body {
    font-size: 14.5px;
    line-height: 1.55;
  }

  .body a {
    color: var(--accent);
    font-weight: 600;
    text-decoration: none;
  }

  .body a:hover {
    text-decoration: underline;
  }

  /* kind label, colored to match the item's accent */
  .kind {
    display: inline-block;
    margin-top: 9px;
    margin-right: 6px;
    font-family: var(--mono);
    font-size: 11px;
    border-radius: var(--radius-sm);
    padding: 2px 9px;
    border: 1px solid transparent;
  }
  .kind.shipping {
    color: var(--accent);
    background: var(--accent-soft);
    border-color: rgba(29, 79, 158, 0.25);
  }
  .kind.hacking {
    color: #6d4aa7;
    background: rgba(109, 74, 167, 0.1);
    border-color: rgba(109, 74, 167, 0.25);
  }
  .kind.writing {
    color: #2f8f6b;
    background: rgba(47, 143, 107, 0.1);
    border-color: rgba(47, 143, 107, 0.25);
  }

  .src {
    display: inline-block;
    margin-top: 9px;
    margin-right: 6px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-soft);
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid var(--glass-edge);
    border-radius: var(--radius-sm);
    padding: 2px 9px;
  }

  .src.llm {
    color: var(--accent);
    background: var(--accent-soft);
    border-color: rgba(29, 79, 158, 0.25);
  }

  @media (max-width: 700px) {
    .entry {
      flex-direction: column;
      gap: 6px;
    }
  }
`;

const HeatmapCard = styled(Glass)`
  padding: 18px 22px;

  /* keeps its height in the flex column so the feed takes the rest */
  @media (min-width: 1100px) {
    flex-shrink: 0;
  }

  .cap {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    margin-bottom: 14px;
    line-height: 1.5;
  }

  /* calendar on the left, stat readouts filling the wide space on the right */
  .heat-body {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media (min-width: 1100px) {
    .heat-body {
      flex-direction: row;
      align-items: center;
      gap: 28px;
    }
  }

  /* cells scale via the container's aspect-ratio (set inline from HEAT_WEEKS) */
  .map {
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 4px;
    width: 100%;
  }

  /* the graph fills the wide space; stats sit in a column to its right */
  @media (min-width: 1100px) {
    .map {
      flex: 1 1 auto;
      width: auto;
      min-width: 0;
    }
  }

  .heat-stats {
    display: flex;
    gap: 26px;
    flex-shrink: 0;
  }

  @media (min-width: 1100px) {
    .heat-stats {
      flex-direction: column;
      gap: 16px;
    }
  }

  .stat .num {
    display: block;
    font-family: var(--display);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.1;
  }

  .stat .lbl {
    font-family: var(--mono);
    font-size: 10.5px;
    color: var(--ink-faint);
  }

  .cell {
    border-radius: 3px;
    background: var(--accent);
    transition: transform 0.1s;
    cursor: pointer;
  }

  .cell:hover {
    transform: scale(1.2);
    outline: 1px solid var(--accent);
    outline-offset: 1px;
  }

  /* loading state: a grey ghost calendar that breathes as one block */
  .map.skeleton {
    animation: ${skeletonPulse} 1.5s ease-in-out infinite;
  }
  .map.skeleton .cell {
    background: rgba(26, 33, 48, 0.12);
    cursor: default;
  }
  .map.skeleton .cell:hover {
    transform: none;
    outline: none;
  }

  /* single floating tooltip, positioned over the hovered square */
  .celltip {
    position: absolute;
    z-index: 10;
    transform: translate(-50%, calc(-100% - 9px));
    white-space: nowrap;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink);
    background: var(--glass-strong);
    border: 1px solid var(--glass-edge);
    border-radius: var(--radius-sm);
    padding: 5px 9px;
    pointer-events: none;
    -webkit-backdrop-filter: blur(12px) saturate(1.4);
    backdrop-filter: blur(12px) saturate(1.4);
    box-shadow: 0 10px 26px -14px rgba(26, 33, 48, 0.5);
  }
`;

const WakaCard = styled(Glass)`
  padding: 18px 22px;

  .cap {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    margin-bottom: 12px;
  }

  .top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  .total {
    font-family: var(--display);
    font-size: 21px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .avg {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    text-align: right;
    line-height: 1.5;
  }

  /* small section label between the time, projects, and languages blocks */
  .sub {
    font-family: var(--mono);
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--ink-faint);
    margin-bottom: 8px;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }

  .proj {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    background: var(--accent-soft);
    border: 1px solid rgba(29, 79, 158, 0.25);
    border-radius: var(--radius-sm);
    padding: 3px 10px;
    text-decoration: none;
    transition: background 0.15s;
  }

  a.proj:hover {
    background: rgba(29, 79, 158, 0.16);
  }

  .proj.muted {
    color: var(--ink-soft);
    background: rgba(255, 255, 255, 0.55);
    border-color: var(--glass-edge);
  }

  .lang + .lang {
    margin-top: 9px;
  }

  .lang-head {
    display: flex;
    justify-content: space-between;
    font-size: 12.5px;
    margin-bottom: 4px;
  }

  .lang-name {
    color: var(--ink-soft);
  }

  .lang-pct {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
  }

  .bar {
    height: 6px;
    border-radius: 999px;
    background: rgba(26, 33, 48, 0.08);
    overflow: hidden;
  }

  .bar > span {
    display: block;
    height: 100%;
    border-radius: 999px;
    background: var(--accent);
  }
`;

const StatusCard = styled(Glass)`
  padding: 18px 22px;

  .cap {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    margin-bottom: 6px;
  }

  .row {
    display: flex;
    gap: 14px;
    padding: 9px 0;
    font-size: 13.5px;
    border-top: 1px solid rgba(26, 33, 48, 0.07);
  }

  .row:first-of-type {
    border-top: none;
  }

  .key {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    min-width: 76px;
    flex-shrink: 0;
    padding-top: 2px;
  }

  .val {
    color: var(--ink-soft);
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    .row {
      flex-direction: column;
      gap: 2px;
    }
  }
`;

type Kind = 'shipping' | 'hacking' | 'writing';

type FeedEntry = {
  ts: number;
  date: string;
  kind: Kind;
  body: React.ReactNode;
  src: { label: string; llm: boolean } | null;
};

type HeatCell = { level: number; title: string };
type StatusRow = { key: string; val: string };
type WakaView = {
  total: string;
  dailyAverage: string;
  projects: Array<{ name: string; url?: string }>;
  privateCount: number;
  langs: Array<{ name: string; pct: number }>;
} | null;

const FILTERS: Array<{ key: Kind | 'all'; label: string }> = [
  { key: 'all', label: 'Everything' },
  { key: 'shipping', label: 'Shipping' },
  { key: 'hacking', label: 'Hacking' },
  { key: 'writing', label: 'Writing' },
];

const HEAT_ALPHA = [0.1, 0.32, 0.62, 1];
const HEAT_WEEKS = 26;
const HEAT_DAYS = HEAT_WEEKS * 7;

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: '2-digit', timeZone: 'UTC' });

const clip = (s: string, n = 150) => {
  const t = s.replace(/\s+/g, ' ').trim();
  return t.length > n ? `${t.slice(0, n).trimEnd()}…` : t;
};

const ago = (iso: string) => {
  const mins = Math.round((Date.now() - Date.parse(iso)) / 60000);
  if (!Number.isFinite(mins) || mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
};

const countToLevel = (n: number) => (n === 0 ? 0 : n <= 3 ? 1 : n <= 8 ? 2 : 3);

// --- live → view-model adapters -------------------------------------------

function buildFeed(data: NowData): FeedEntry[] {
  const projects: FeedEntry[] = data.projects
    .filter((p) => p.pushed_at)
    .map((p) =>
      p.private
        ? {
            ts: Date.parse(p.pushed_at),
            date: fmtDate(p.pushed_at),
            kind: 'hacking' as const,
            body: clip(p.summary ?? 'Private project in progress.'),
            src: { label: 'Private repo · summarized by an LLM', llm: true },
          }
        : {
            ts: Date.parse(p.pushed_at),
            date: fmtDate(p.pushed_at),
            kind: 'shipping' as const,
            body: (
              <>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener">{p.name}</a>
                ) : (
                  p.name
                )}
                {p.description ? ` — ${p.description}` : ''}
              </>
            ),
            src: { label: p.language ? `Public · ${p.language}` : 'Public · GitHub', llm: false },
          },
    );

  const writing: FeedEntry[] = data.writing.map((w) => ({
    ts: Date.parse(w.published_at),
    date: fmtDate(w.published_at),
    kind: 'writing' as const,
    body: (
      <>
        <a href={w.url} target="_blank" rel="noopener">{w.title}</a>
        {w.excerpt ? ` — ${clip(w.excerpt, 120)}` : ''}
      </>
    ),
    src: { label: 'Substack', llm: false },
  }));

  return [...projects, ...writing].sort((a, b) => b.ts - a.ts).slice(0, 8);
}

const fmtFullDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

function buildHeat(c: NowContributions): HeatCell[] {
  return c.calendar.slice(-HEAT_DAYS).map((d) => ({
    level: countToLevel(d.count),
    title: `${fmtFullDate(d.date)} · ${d.count} contribution${d.count === 1 ? '' : 's'}`,
  }));
}

function buildCurrently(data: NowData): StatusRow[] {
  const rows: StatusRow[] = [];
  const latest = data.projects.find((p) => p.recently_active) ?? data.projects[0];
  if (latest) {
    rows.push({
      key: 'Building',
      val: latest.private
        ? clip(latest.summary ?? 'Something private', 90)
        : clip(`${latest.name}${latest.description ? ` — ${latest.description}` : ''}`, 90),
    });
  }
  if (data.stack?.languages.length) {
    rows.push({ key: 'Stack', val: data.stack.languages.slice(0, 4).map((l) => l.name).join(' · ') });
  }
  if (data.writing[0]) {
    rows.push({ key: 'Writing', val: data.writing[0].title });
  }
  if (data.availability) {
    rows.push({ key: 'Open to', val: data.availability });
  }
  return rows;
}

// WakaTime tracks active coding time (what's actually being worked on),
// independent of commits. Labels arrive as "TypeScript (47%)".
function parseLangs(raw: string[]): Array<{ name: string; pct: number }> {
  return raw
    .map((s) => {
      const m = s.match(/^(.*?)\s*\((\d+(?:\.\d+)?)%\)$/);
      return m ? { name: m[1].trim(), pct: parseFloat(m[2]) } : null;
    })
    .filter((x): x is { name: string; pct: number } => x !== null);
}

function buildWaka(data: NowData): WakaView {
  const wt = data.activity?.wakatime;
  if (!wt || !wt.total || wt.seconds <= 0) return null;
  // WakaTime only reports a project *count*; the named repos come from
  // /projects (recently_active). Private repos withhold names, so collapse
  // them into a count.
  const active = data.projects.filter((p) => p.recently_active);
  return {
    total: wt.total,
    dailyAverage: wt.dailyAverage,
    projects: active
      .filter((p) => !p.private)
      .slice(0, 4)
      .map((p) => ({ name: p.name ?? 'Repo', url: p.url })),
    privateCount: active.filter((p) => p.private).length,
    langs: parseLangs(wt.languages).slice(0, 5),
  };
}

// --- sample fallback (shown only if the API can't be reached) --------------

const SAMPLE_FEED: FeedEntry[] = [
  {
    ts: 0,
    date: 'Jun 08',
    kind: 'shipping',
    body: (
      <>
        Building Shopify&apos;s Managed Markets publishing experience: sellability
        status, restriction reasons, and AI-powered explanations across 190+ countries.
      </>
    ),
    src: { label: 'Private repo · summarized by an LLM', llm: true },
  },
  {
    ts: 0,
    date: 'Jun 04',
    kind: 'hacking',
    body: (
      <>
        Polishing <a href="https://github.com/qiuethan/Identity-Matrix" target="_blank" rel="noopener">Identity Matrix</a> after
        the UofT Hacks win. Avatars keep living as AI agents after you log off.
      </>
    ),
    src: { label: 'Public · GitHub', llm: false },
  },
  {
    ts: 0,
    date: 'May 27',
    kind: 'writing',
    body: <>The one about maturity — notes on growing up faster than the room expects.</>,
    src: { label: 'Substack', llm: false },
  },
];

// Deterministic sample pattern, repeated to fill the grid.
const HEAT_PATTERN = [0, 1, 2, 1, 0, 3, 2, 1, 2, 0, 1, 3, 3, 2, 1, 0, 2, 1, 3, 2, 0, 1, 2, 3, 1, 2, 0, 1];
const SAMPLE_HEAT: HeatCell[] = Array.from({ length: HEAT_DAYS }, (_, i) => {
  const level = HEAT_PATTERN[(i + (i % 5)) % HEAT_PATTERN.length];
  return { level, title: `${level * 3} commits (sample)` };
});

const SAMPLE_CURRENTLY: StatusRow[] = [
  { key: 'Building', val: 'Agentic product-details prototype @ Shopify' },
  { key: 'Hacking on', val: 'Identity Matrix v2: smarter agents, bigger world' },
  { key: 'Writing', val: 'The one about maturity' },
  { key: 'Open to', val: 'Interesting opportunities and conversations' },
];

const SAMPLE_WAKA: WakaView = {
  total: '12 hrs 40 mins',
  dailyAverage: '1 hr 48 mins',
  projects: [
    { name: 'Identity-Matrix', url: 'https://github.com/qiuethan/Identity-Matrix' },
    { name: 'Portfolio', url: 'https://github.com/qiuethan/Portfolio' },
  ],
  privateCount: 2,
  langs: [
    { name: 'TypeScript', pct: 46 },
    { name: 'Python', pct: 27 },
    { name: 'CSS', pct: 14 },
    { name: 'Other', pct: 13 },
  ],
};

// --- loading skeletons -----------------------------------------------------
// Shown while the API is in flight, so the first paint is the real card frames
// (not sample data that then swaps under the visitor). Each mirrors the shape
// of the card it stands in for to avoid layout shift when data lands.

// Per-entry body widths, so the feed placeholder looks like text, not bars.
const SK_FEED_ROWS = ['94%', '72%', '88%', '64%', '80%'];
// Faint opacity texture for the ghost calendar cells (the grid also pulses).
const SK_HEAT = [0.4, 0.85, 0.55, 1, 0.3, 0.7, 0.5];
const SK_LANG = ['72%', '54%', '38%', '22%'];
const SK_STATUS = ['82%', '66%', '74%', '58%'];

const SkeletonFeed: React.FC = () => (
  <FeedCard aria-busy="true" aria-label="Loading recent activity">
    <div className="chips">
      {FILTERS.map((f) => (
        <span key={f.key} className="chip" style={{ cursor: 'default' }}>
          {f.label}
        </span>
      ))}
    </div>
    <div className="feed">
      {SK_FEED_ROWS.map((w, i) => (
        <div className="entry" key={i}>
          <span className="date">
            <Skeleton $w="40px" $h="12px" />
          </span>
          <div className="body" style={{ flex: 1, minWidth: 0 }}>
            <Skeleton $block $w={w} $h="13px" style={{ marginBottom: 7 }} />
            <Skeleton $block $w={i % 2 ? '52%' : '70%'} $h="13px" style={{ marginBottom: 12 }} />
            <Skeleton $w="58px" $h="18px" $radius="var(--radius-sm)" />
            <Skeleton $w="128px" $h="18px" $radius="var(--radius-sm)" style={{ marginLeft: 6 }} />
          </div>
        </div>
      ))}
    </div>
  </FeedCard>
);

const SkeletonHeatmap: React.FC = () => (
  <HeatmapCard aria-busy="true" aria-label="Loading contribution calendar">
    <Skeleton $w="200px" $h="11px" style={{ marginBottom: 14 }} />
    <div className="heat-body">
      <div className="map skeleton" style={{ aspectRatio: `${HEAT_WEEKS} / 7` }}>
        {Array.from({ length: HEAT_DAYS }, (_, i) => (
          <span className="cell" key={i} style={{ opacity: SK_HEAT[i % SK_HEAT.length] }} />
        ))}
      </div>
      <div className="heat-stats">
        {[0, 1, 2].map((i) => (
          <div className="stat" key={i}>
            <Skeleton $block $w="36px" $h="20px" style={{ marginBottom: 6 }} />
            <Skeleton $block $w="52px" $h="10px" />
          </div>
        ))}
      </div>
    </div>
  </HeatmapCard>
);

const SkeletonWaka: React.FC = () => (
  <WakaCard aria-busy="true" aria-label="Loading coding stats">
    <Skeleton $w="120px" $h="11px" style={{ marginBottom: 12 }} />
    <div className="top">
      <Skeleton $w="140px" $h="21px" />
      <Skeleton $w="74px" $h="28px" />
    </div>
    <Skeleton $w="68px" $h="10px" style={{ marginBottom: 8 }} />
    <div className="projects">
      <Skeleton $w="96px" $h="22px" $radius="var(--radius-sm)" />
      <Skeleton $w="74px" $h="22px" $radius="var(--radius-sm)" />
      <Skeleton $w="60px" $h="22px" $radius="var(--radius-sm)" />
    </div>
    <Skeleton $w="68px" $h="10px" style={{ marginBottom: 10 }} />
    {SK_LANG.map((w, i) => (
      <div className="lang" key={i}>
        <div className="lang-head">
          <Skeleton $w="84px" $h="12px" />
          <Skeleton $w="28px" $h="11px" />
        </div>
        <div className="bar">
          <span style={{ width: w, background: 'rgba(26, 33, 48, 0.14)' }} />
        </div>
      </div>
    ))}
  </WakaCard>
);

const SkeletonStatus: React.FC = () => (
  <StatusCard aria-busy="true" aria-label="Loading status">
    <Skeleton $w="80px" $h="11px" style={{ marginBottom: 6 }} />
    {SK_STATUS.map((w, i) => (
      <div className="row" key={i}>
        <span className="key">
          <Skeleton $w="58px" $h="11px" />
        </span>
        <Skeleton $w={w} $h="13px" style={{ marginTop: 2 }} />
      </div>
    ))}
  </StatusCard>
);

type LoadState = 'loading' | 'live' | 'error';

const NowSection: React.FC = () => {
  const [filter, setFilter] = useState<Kind | 'all'>('all');
  const [data, setData] = useState<NowData | null>(null);
  const [load, setLoad] = useState<LoadState>('loading');
  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(null);
  // ticks every 30s purely to re-render so the "synced Xm ago" relative
  // timestamp stays current — the fetch itself only runs once on mount
  const [, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let alive = true;
    fetchNow()
      .then((d) => {
        if (alive) {
          setData(d);
          setLoad('live');
        }
      })
      .catch(() => {
        if (alive) setLoad('error');
      });
    return () => {
      alive = false;
    };
  }, []);

  const liveFeed = data ? buildFeed(data) : [];
  const feed = liveFeed.length ? liveFeed : SAMPLE_FEED;
  const heat = data?.contributions ? buildHeat(data.contributions) : SAMPLE_HEAT;
  const liveCurrently = data ? buildCurrently(data) : [];
  const currently = liveCurrently.length ? liveCurrently : SAMPLE_CURRENTLY;
  // live coding time if available; otherwise the sample (but never sample over real)
  const waka = (data ? buildWaka(data) : null) ?? (data ? null : SAMPLE_WAKA);
  const isLive = load === 'live' && liveFeed.length > 0;

  const contrib = data?.contributions;
  const heatCap = contrib
    ? `GitHub contributions · last ${HEAT_WEEKS} weeks`
    : `Sample contributions · last ${HEAT_WEEKS} weeks`;
  const heatStats = contrib
    ? [
        { num: String(contrib.current_streak), lbl: 'day streak' },
        { num: contrib.last_30_days.toLocaleString(), lbl: 'last 30d' },
        { num: contrib.total_past_year.toLocaleString(), lbl: 'this year' },
      ]
    : [
        { num: '8', lbl: 'day streak' },
        { num: '175', lbl: 'last 30d' },
        { num: '1,336', lbl: 'this year' },
      ];

  const loading = load === 'loading';
  const status = loading ? 'loading' : isLive ? 'live' : 'error';
  const note = loading
    ? 'Syncing…'
    : isLive
      ? `Live · synced ${ago(data!.updated)}`
      : 'Sample data · API offline';

  const visible = feed.filter((e) => filter === 'all' || e.kind === filter);

  return (
    <NowWrap id="now">
      <NowHead>
        <div className="title">
          <h2>Now</h2>
          <BetaPill>Beta</BetaPill>
          <InfoTip tabIndex={0} role="note" aria-label="What is Now?">
            i
            <span className="tip">
              A live feed of what I&apos;m shipping, hacking, and writing — auto-pulled hourly from my
              GitHub repos, commits, and Substack. Private work is anonymized and summarized by an LLM.
              Falls back to sample data if the API is offline.
            </span>
          </InfoTip>
        </div>
        <span className="note">
          <span className={`dot ${status}`} aria-hidden="true" />
          {note}
        </span>
      </NowHead>
      <NowGrid>
        <LeftCol>
          <LeftStack>
            {loading ? (
              <>
                <SkeletonFeed />
                <SkeletonHeatmap />
              </>
            ) : (
              <>
            <FeedCard>
              <div className="chips" role="tablist" aria-label="Filter the feed">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    className={filter === f.key ? 'chip active' : 'chip'}
                    onClick={() => setFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="feed">
                {visible.map((entry, i) => (
                  <div className="entry" data-kind={entry.kind} key={`${entry.kind}-${entry.date}-${i}`}>
                    <span className="date">{entry.date}</span>
                    <div className="body">
                      {entry.body}
                      <br />
                      <span className={`kind ${entry.kind}`}>
                        {entry.kind[0].toUpperCase() + entry.kind.slice(1)}
                      </span>
                      {entry.src && (
                        <span className={entry.src.llm ? 'src llm' : 'src'}>{entry.src.label}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FeedCard>
            <HeatmapCard>
              <p className="cap">{heatCap}</p>
              <div className="heat-body">
                <div
                  className="map"
                  role="img"
                  aria-label={`${HEAT_WEEKS} weeks of GitHub contributions`}
                  style={{ aspectRatio: `${HEAT_WEEKS} / 7` }}
                >
                  {heat.map((cell, i) => (
                    <span
                      className="cell"
                      key={i}
                      style={{ opacity: HEAT_ALPHA[cell.level] }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        setTip({
                          text: cell.title,
                          x: el.offsetLeft + el.offsetWidth / 2,
                          y: el.offsetTop,
                        });
                      }}
                      onMouseLeave={() => setTip(null)}
                    />
                  ))}
                </div>
                <div className="heat-stats">
                  {heatStats.map((s) => (
                    <div className="stat" key={s.lbl}>
                      <span className="num">{s.num}</span>
                      <span className="lbl">{s.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
              {tip && (
                <span className="celltip" style={{ left: tip.x, top: tip.y }}>
                  {tip.text}
                </span>
              )}
            </HeatmapCard>
              </>
            )}
          </LeftStack>
        </LeftCol>
        <SidePanel>
          {loading ? (
            <>
              <SkeletonWaka />
              <SkeletonStatus />
            </>
          ) : (
            <>
          {waka && (
            <WakaCard>
              <p className="cap">Coding this week</p>
              <div className="top">
                <span className="total">{waka.total}</span>
                <span className="avg">
                  {waka.dailyAverage}/day
                  <br />
                  via WakaTime
                </span>
              </div>
              {(waka.projects.length > 0 || waka.privateCount > 0) && (
                <>
                  <p className="sub">Working on</p>
                  <div className="projects">
                    {waka.projects.map((p) =>
                      p.url ? (
                        <a className="proj" href={p.url} target="_blank" rel="noopener" key={p.name}>
                          {p.name}
                        </a>
                      ) : (
                        <span className="proj" key={p.name}>
                          {p.name}
                        </span>
                      ),
                    )}
                    {waka.privateCount > 0 && (
                      <span className="proj muted">
                        +{waka.privateCount} private
                      </span>
                    )}
                  </div>
                </>
              )}
              <p className="sub">Languages</p>
              {waka.langs.map((l) => (
                <div className="lang" key={l.name}>
                  <div className="lang-head">
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-pct">{l.pct}%</span>
                  </div>
                  <div className="bar">
                    <span style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </WakaCard>
          )}
          <StatusCard>
            <p className="cap">Currently</p>
            {currently.map((row) => (
              <div className="row" key={row.key}>
                <span className="key">{row.key}</span>
                <span className="val">{row.val}</span>
              </div>
            ))}
          </StatusCard>
            </>
          )}
        </SidePanel>
      </NowGrid>
    </NowWrap>
  );
};

export default NowSection;
