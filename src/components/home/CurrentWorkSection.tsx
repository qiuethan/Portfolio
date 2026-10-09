import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Photo from '../glass/Photo';
import { Section, SectionHead } from '../glass/primitives';
import ExperienceCards from '../work/ExperienceCards';
import WorkDialog from '../work/WorkDialog';
import { currentProjects, currentRoles } from '../../data/home';
import { ProjectProgress } from '../work/ProjectProgress';

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

const ProjectCard = styled(Glass)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  min-width: 0;
  padding: 20px;
  text-align: left;
  font-family: var(--body);
  color: var(--ink);
  .progress { margin: auto 0 0; }
  @media (min-width: 700px) {
    .progress { min-height: 132px; align-content: start; }
    .work-title { min-height: 39px; }
  }
`;

const ProjectLink = styled.button`
  display: block;
  width: 100%;
  padding: 0 0 16px;
  text-align: left;
  font: inherit;
  background: none;
  border: 0;
  cursor: pointer;
  border-radius: var(--radius-sm);
  &:hover .name { text-decoration: underline; text-underline-offset: 4px; }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  .thumb {
    width: 100%;
    height: 144px;
    margin-bottom: 14px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid var(--glass-edge);
  }

  .name {
    display: block;
    margin-bottom: 6px;
    color: var(--accent);
    font: 600 20px var(--display);
  }

  .description {
    display: block;
    color: var(--ink-soft);
    font-size: 14px;
    line-height: 1.55;
  }
`;

export default function CurrentWorkSection() {
  const [params, setParams] = useSearchParams();
  const selected = currentProjects.find((project) => project.id === params.get('project'));
  const select = (id: string | null) => {
    const next = new URLSearchParams(params);
    if (id) next.set('project', id); else next.delete('project');
    setParams(next, { replace: !id });
  };

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
          <ProjectCard forwardedAs="article" key={project.id} aria-label={project.name}>
            <ProjectLink
              type="button"
              aria-label={`Read about ${project.name}`}
              aria-haspopup="dialog"
              onClick={() => select(project.id)}
            >
              <Photo className="thumb" src={project.image} alt="" fit="contain" />
              <span>
                <span className="name">{project.name} ↗</span>
                <span className="description">{project.description}</span>
              </span>
            </ProjectLink>
            <ProjectProgress id={project.id} interactive />
          </ProjectCard>
        ))}
      </ProjectGrid>
      {selected && <WorkDialog project={selected} onClose={() => select(null)} />}
    </Section>
  );
}
