import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../glass/primitives';
import { portfolioData } from '../../data/portfolio';
import type { WorkItem } from '../../data/projects';
import WorkGallery from './WorkGallery';

const Tabs = styled.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border: 1px solid var(--glass-edge);
  border-radius: 999px;
  background: var(--glass);

  button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 999px;
    padding: 10px 16px;
    background: transparent;
    color: var(--ink-soft);
    font: 500 14px var(--body);
    cursor: pointer;
  }

  button[aria-selected='true'] {
    background: var(--accent);
    color: #fff;
  }

  button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  .count {
    font: 11px var(--mono);
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    display: flex;
    button { flex: 1; justify-content: center; }
  }
`;

const Intro = styled.p`
  max-width: 65ch;
  margin: 0 6px 20px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-soft);
`;

const EXPERIMENTS: WorkItem[] = portfolioData.experiments.map((experiment) => ({
  ...experiment,
  award: experiment.award ?? 'Personal experiment',
}));

const COLLECTIONS = {
  projects: {
    label: 'Projects',
    intro: 'From club infrastructure to hackathon weekends. The things I built, shipped, and learned from.',
    items: portfolioData.projects as WorkItem[],
  },
  experiments: {
    label: 'Experiments',
    intro: 'Side quests with real code. Personal assistants, game worlds, research tools, and tools for building better software.',
    items: EXPERIMENTS,
  },
};
const TABS = ['projects', 'experiments'] as const;
type WorkTab = typeof TABS[number];

const WorkLibrary: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const linkedExperiment = EXPERIMENTS.some((item) => item.id === searchParams.get('project'));
  const linkedProject = portfolioData.projects.some((item) => item.id === searchParams.get('project'));
  const activeTab: WorkTab = linkedExperiment || (!linkedProject && searchParams.get('tab') === 'experiments') ? 'experiments' : 'projects';
  const collection = COLLECTIONS[activeTab];

  const selectTab = (tab: WorkTab) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      next.delete('project');
      next.delete('page');
      if (tab === 'projects') next.delete('tab');
      else next.set('tab', tab);
      return next;
    });
  };

  const navigateTabs = (event: React.KeyboardEvent<HTMLButtonElement>, tab: WorkTab) => {
    let next: WorkTab;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      next = tab === 'projects' ? 'experiments' : 'projects';
    } else if (event.key === 'Home') next = 'projects';
    else if (event.key === 'End') next = 'experiments';
    else return;
    event.preventDefault();
    selectTab(next);
    document.getElementById(`work-tab-${next}`)?.focus();
  };

  return (
    <Section id="work" aria-label="Work library">
      <Tabs role="tablist" aria-label="Work categories">
        {TABS.map((tab) => (
          <button
            key={tab}
            id={`work-tab-${tab}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`work-panel-${tab}`}
            tabIndex={activeTab === tab ? 0 : -1}
            onClick={() => selectTab(tab)}
            onKeyDown={(event) => navigateTabs(event, tab)}
          >
            {COLLECTIONS[tab].label}
            <span className="count">{COLLECTIONS[tab].items.length}</span>
          </button>
        ))}
      </Tabs>
      {TABS.map((tab) => (
        <div
          key={tab}
          id={`work-panel-${tab}`}
          role="tabpanel"
          aria-labelledby={`work-tab-${tab}`}
          hidden={activeTab !== tab}
          tabIndex={0}
        >
          {activeTab === tab && (
            <>
              <Intro>{collection.intro}</Intro>
              <WorkGallery key={tab} items={collection.items} paginated />
            </>
          )}
        </div>
      ))}
    </Section>
  );
};

export default WorkLibrary;
