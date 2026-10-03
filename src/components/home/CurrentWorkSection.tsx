import { useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Photo from '../glass/Photo';
import { Section, SectionHead } from '../glass/primitives';
import ExperienceCards from '../work/ExperienceCards';
import WorkDialog from '../work/WorkDialog';
import { currentProjects, currentRoles } from '../../data/home';
import type { Project } from '../../data/projects';

const ProjectHeading = styled.h3`
  margin: 30px 6px 16px;
  font: 600 20px var(--display);
  color: var(--ink);
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProjectLink = styled(Glass)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;
  width: 100%;
  padding: 24px;
  text-align: left;
  font-family: var(--body);
  color: var(--ink);
  cursor: pointer;
  transition: transform 0.15s;

  &:hover { transform: translateY(-3px); }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  .thumb {
    width: 100%;
    aspect-ratio: 16 / 9;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid var(--glass-edge);
  }

  .name {
    display: block;
    margin-bottom: 8px;
    color: var(--accent);
    font: 600 22px var(--display);
  }

  .description {
    display: block;
    color: var(--ink-soft);
    font-size: 14.5px;
    line-height: 1.6;
  }
`;

export default function CurrentWorkSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="current">
      <SectionHead>
        <h2>Current work</h2>
        <span className="note">Where my time goes lately</span>
      </SectionHead>
      <ExperienceCards roles={currentRoles} />
      <ProjectHeading>Currently building</ProjectHeading>
      <ProjectGrid>
        {currentProjects.map((project) => (
          <ProjectLink
            forwardedAs="button"
            type="button"
            key={project.id}
            aria-label={`Read about ${project.name}`}
            aria-haspopup="dialog"
            onClick={() => setSelected(project)}
          >
            <Photo className="thumb" src={project.image} alt="" fit="contain" />
            <span>
              <span className="name">{project.name} ↗</span>
              <span className="description">{project.description}</span>
            </span>
          </ProjectLink>
        ))}
      </ProjectGrid>
      {selected && <WorkDialog project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}
