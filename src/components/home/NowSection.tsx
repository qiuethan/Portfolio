import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import { Section, SectionHead } from '../glass/primitives';
import { fetchNow } from '../../data/now';
import type { NowContributions, NowData } from '../../data/now';

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

  @media (min-width: 1100px) {
    grid-template-columns: 1.55fr 1fr;
  }
`;

const SidePanel = styled.div`
  display: grid;
  gap: 14px;

  /* status card stretches so the panel matches the feed's height */
  @media (min-width: 1100px) {
    grid-template-rows: auto 1fr;
  }
`;

const FeedCard = styled(Glass)`
  padding: 18px 26px 8px;

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(26, 33, 48, 0.08);
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

  .entry {
    display: flex;
    gap: 22px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(26, 33, 48, 0.08);
  }

  .entry:last-child {
    border-bottom: none;
  }

  .date {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-faint);
    min-width: 60px;
    padding-top: 3px;
  }

  .body {
    font-size: 15px;
    max-width: 58ch;
  }

  .body a {
    color: var(--accent);
    font-weight: 600;
    text-decoration: none;
  }

  .body a:hover {
    text-decoration: underline;
  }

  .src {
    display: inline-block;
    margin-top: 8px;
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

  .cap {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    margin-bottom: 12px;
  }

  .map {
    display: grid;
    grid-template-rows: repeat(7, 11px);
    grid-auto-flow: column;
    grid-auto-columns: 11px;
    gap: 3px;
  }

  .cell {
    width: 11px;
    height: 11px;
    border-radius: 3px;
    background: var(--accent);
    transition: transform 0.1s;
  }

  .cell:hover {
    transform: scale(1.35);
  }

  @media (max-width: 1100px) {
    .map {
      justify-content: start;
    }
  }
`;

const StatusCard = styled(Glass)`
  padding: 18px 22px;

  .cap {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    margin-bottom: 10px;
  }

  .row {
    display: flex;
    gap: 14px;
    padding: 7px 0;
    font-size: 13.5px;
  }

  .key {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    min-width: 78px;
    padding-top: 2px;
  }

  .val {
    color: var(--ink-soft);
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

const FILTERS: Array<{ key: Kind | 'all'; label: string }> = [
  { key: 'all', label: 'Everything' },
  { key: 'shipping', label: 'Shipping' },
  { key: 'hacking', label: 'Hacking' },
  { key: 'writing', label: 'Writing' },
];

const HEAT_ALPHA = [0.1, 0.32, 0.62, 1];
const HEAT_WEEKS = 12;
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

function buildHeat(c: NowContributions): HeatCell[] {
  return c.calendar.slice(-HEAT_DAYS).map((d) => ({
    level: countToLevel(d.count),
    title: `${d.date} · ${d.count} contribution${d.count === 1 ? '' : 's'}`,
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
  if (data.activity?.wakatime) {
    const wt = data.activity.wakatime;
    rows.push({ key: 'This week', val: `${wt.total} across ${wt.projectCount} projects` });
  }
  if (data.writing[0]) {
    rows.push({ key: 'Writing', val: data.writing[0].title });
  }
  if (data.availability) {
    rows.push({ key: 'Open to', val: data.availability });
  }
  return rows;
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

type LoadState = 'loading' | 'live' | 'error';

const NowSection: React.FC = () => {
  const [filter, setFilter] = useState<Kind | 'all'>('all');
  const [data, setData] = useState<NowData | null>(null);
  const [load, setLoad] = useState<LoadState>('loading');

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
  const isLive = load === 'live' && liveFeed.length > 0;

  const heatCap = data?.contributions
    ? `Last ${HEAT_WEEKS} weeks · ${data.contributions.total_past_year.toLocaleString()} contributions this year · ${data.contributions.current_streak}-day streak`
    : `Last ${HEAT_WEEKS} weeks · sample commit activity`;

  const note =
    load === 'loading'
      ? 'Syncing…'
      : isLive
        ? `Live · synced ${ago(data!.updated)}`
        : 'Sample data · API offline';

  const visible = feed.filter((e) => filter === 'all' || e.kind === filter);

  return (
    <Section id="now">
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
        <span className="note">{note}</span>
      </NowHead>
      <NowGrid>
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
          {visible.map((entry, i) => (
            <div className="entry" key={`${entry.kind}-${entry.date}-${i}`}>
              <span className="date">{entry.date}</span>
              <div className="body">
                {entry.body}
                <br />
                <span className="src">{entry.kind[0].toUpperCase() + entry.kind.slice(1)}</span>
                {entry.src && (
                  <span className={entry.src.llm ? 'src llm' : 'src'}>{entry.src.label}</span>
                )}
              </div>
            </div>
          ))}
        </FeedCard>
        <SidePanel>
          <HeatmapCard>
            <p className="cap">{heatCap}</p>
            <div className="map" role="img" aria-label={`${HEAT_WEEKS} weeks of GitHub contributions`}>
              {heat.map((cell, i) => (
                <span
                  className="cell"
                  key={i}
                  style={{ opacity: HEAT_ALPHA[cell.level] }}
                  title={cell.title}
                />
              ))}
            </div>
          </HeatmapCard>
          <StatusCard>
            <p className="cap">Currently</p>
            {currently.map((row) => (
              <div className="row" key={row.key}>
                <span className="key">{row.key}</span>
                <span className="val">{row.val}</span>
              </div>
            ))}
          </StatusCard>
        </SidePanel>
      </NowGrid>
    </Section>
  );
};

export default NowSection;
