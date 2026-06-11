import React, { useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import { Section, SectionHead } from '../glass/primitives';

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

type Kind = 'shipping' | 'hacking' | 'reading' | 'leading';

// Placeholder data until the auto-update pipeline (GitHub Action + LLM
// summarizer) is wired up.
const ENTRIES: Array<{
  date: string;
  kind: Kind;
  body: React.ReactNode;
  src: { label: string; llm: boolean } | null;
}> = [
  {
    date: 'Jun 08',
    kind: 'shipping',
    body: (
      <>
        Building Shopify&apos;s Managed Markets publishing experience: sellability
        status, restriction reasons, and AI-powered explanations across 190+ countries.
      </>
    ),
    src: { label: 'Private repo · written by an LLM', llm: true },
  },
  {
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
    date: 'Jun 01',
    kind: 'reading',
    body: <>Reading Designing Data-Intensive Applications, ch. 9. Notes coming to the writing page.</>,
    src: null,
  },
  {
    date: 'May 27',
    kind: 'leading',
    body: (
      <>
        Wrapped UTMIST&apos;s Flybits project: an agentic credit-card recommender built
        with LangChain and vector search, one of four industry teams I coordinated.
      </>
    ),
    src: { label: 'Private repo · written by an LLM', llm: true },
  },
  {
    date: 'May 24',
    kind: 'shipping',
    body: (
      <>
        UofT Blueprint&apos;s inventory platform for the Museum of Digital Entertainment
        hit production with 50,000+ artifacts catalogued.
      </>
    ),
    src: { label: 'Public · GitHub', llm: false },
  },
];

const FILTERS: Array<{ key: Kind | 'all'; label: string }> = [
  { key: 'all', label: 'Everything' },
  { key: 'shipping', label: 'Shipping' },
  { key: 'hacking', label: 'Hacking' },
  { key: 'leading', label: 'Leading' },
  { key: 'reading', label: 'Reading' },
];

// Deterministic sample pattern, repeated to fill 12 weeks (84 days).
const HEAT_PATTERN = [0, 1, 2, 1, 0, 3, 2, 1, 2, 0, 1, 3, 3, 2, 1, 0, 2, 1, 3, 2, 0, 1, 2, 3, 1, 2, 0, 1];
const HEAT_LEVELS = Array.from({ length: 84 }, (_, i) => HEAT_PATTERN[(i + (i % 5)) % HEAT_PATTERN.length]);
const HEAT_ALPHA = [0.1, 0.3, 0.6, 1];

const CURRENTLY = [
  { key: 'Building', val: 'Agentic product-details prototype @ Shopify' },
  { key: 'Hacking on', val: 'Identity Matrix v2: smarter agents, bigger world' },
  { key: 'Reading', val: 'Designing Data-Intensive Applications, ch. 9' },
  { key: 'In queue', val: 'Next hackathon season, already scouting teams' },
];

const NowSection: React.FC = () => {
  const [filter, setFilter] = useState<Kind | 'all'>('all');
  const visible = ENTRIES.filter((e) => filter === 'all' || e.kind === filter);

  return (
    <Section id="now">
      <SectionHead>
        <h2>Now</h2>
        <span className="note">Sample data · auto-updates coming</span>
      </SectionHead>
      <NowGrid>
        <FeedCard lit>
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
          {visible.map((entry) => (
            <div className="entry" key={entry.date}>
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
          <HeatmapCard lit>
            <p className="cap">Last 12 weeks · public + private commits</p>
            <div className="map" role="img" aria-label="12 weeks of commit activity, sample data">
              {HEAT_LEVELS.map((level, i) => (
                <span
                  className="cell"
                  key={i}
                  style={{ opacity: HEAT_ALPHA[level] }}
                  title={`${level * 3} commits (sample)`}
                />
              ))}
            </div>
          </HeatmapCard>
          <StatusCard lit>
            <p className="cap">Currently</p>
            {CURRENTLY.map((row) => (
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
