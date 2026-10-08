import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Photo from '../glass/Photo';
import type { WorkItem } from '../../data/projects';
import WorkVisual from '../home/WorkVisual';
import WorkDialog from './WorkDialog';
import { ProjectProgress } from './ProjectProgress';

const Gallery = styled.div`
  scroll-margin-top: 100px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(Glass)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  font-family: var(--body);
  color: var(--ink);
  padding: 20px 22px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.9) inset,
      0 -1px 0 rgba(255, 255, 255, 0.35) inset,
      0 24px 48px -20px rgba(26, 33, 48, 0.45);
  }

  /* thumbnail well blends with the glass instead of sitting as a dark slab */
  .thumb {
    height: 150px;
    margin-bottom: 14px;
    background-color: rgba(255, 255, 255, 0.3);
    background-image: repeating-linear-gradient(
      45deg,
      rgba(26, 33, 48, 0.08) 0 1px,
      transparent 1px 9px
    );
    border: 1px solid var(--glass-edge);
  }

  & > * { width: 100%; }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  .award {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    margin-bottom: 4px;
  }

  .title {
    font-family: var(--display);
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 6px;
  }

  .desc {
    font-size: 13.5px;
    color: var(--ink-soft);
    line-height: 1.55;
    margin-bottom: 10px;
  }

  .go {
    font-family: var(--mono);
    font-size: 11.5px;
    font-weight: 500;
    color: var(--accent);
    display: inline-block;
    margin-top: auto;
    padding-top: 6px;
  }
`;

const Pager = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 18px;

  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    font-size: 16px;
    color: var(--ink);
    background-color: var(--glass);
    border: 1px solid var(--glass-edge);
    border-radius: 999px;
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    backdrop-filter: blur(16px) saturate(1.4);
    cursor: pointer;
    transition: background 0.15s, transform 0.15s;
  }

  .page-btn:hover:not(:disabled) {
    background-color: var(--glass-strong);
    transform: translateY(-1px);
  }

  .page-btn:disabled {
    opacity: 0.35;
    cursor: default;
  }

  .page-label {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--ink-soft);
  }
`;

const PER_PAGE = 6;

export default function WorkGallery({ items, paginated = false }: { items: WorkItem[]; paginated?: boolean }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [params, setParams] = useSearchParams();
  const selectedIndex = items.findIndex((item) => item.id === params.get('project'));
  const selected = items[selectedIndex];
  const pageCount = paginated ? Math.ceil(items.length / PER_PAGE) : 1;
  const requestedPage = Number(params.get('page') ?? 1) - 1;
  const page = selectedIndex >= 0 && paginated ? Math.floor(selectedIndex / PER_PAGE) : Math.max(0, Math.min(Number.isInteger(requestedPage) ? requestedPage : 0, pageCount - 1));
  const visible = paginated ? items.slice(page * PER_PAGE, (page + 1) * PER_PAGE) : items;

  const select = (id: string | null) => {
    const next = new URLSearchParams(params);
    if (id) next.set('project', id);
    else { next.delete('project'); if (paginated) next.set('page', String(page + 1)); }
    setParams(next, { replace: !id });
  };

  const changePage = (next: number) => {
    const nextParams = new URLSearchParams(params);
    nextParams.delete('project');
    nextParams.set('page', String(next + 1));
    setParams(nextParams);
    galleryRef.current?.focus({ preventScroll: true });
    galleryRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' });
  };

  return (
    <>
      <Gallery ref={galleryRef} tabIndex={-1}>
        {visible.map((project) => (
          <ProjectCard
            forwardedAs="button"
            type="button"
            key={project.id}
            aria-label={`Read about ${project.name}`}
            aria-haspopup="dialog"
            onClick={() => select(project.id)}
          >
            {project.image ? (
              <Photo className="thumb" src={project.image} alt="" fit={project.imageFit} position={project.imagePosition} />
            ) : project.visual ? <WorkVisual visual={project.visual} /> : null}
            <p className="award">{project.award}</p>
            <p className="title">{project.name}</p>
            <p className="desc">{project.description}</p>
            <ProjectProgress id={project.id} />
            <span className="go">Explore ↗</span>
          </ProjectCard>
        ))}
      </Gallery>
      {pageCount > 1 && (
        <Pager>
          <button
            type="button"
            className="page-btn"
            onClick={() => changePage(page - 1)}
            disabled={page === 0}
            aria-label="Previous page"
          >‹</button>
          <span className="page-label" aria-live="polite">Page {page + 1} of {pageCount}</span>
          <button
            type="button"
            className="page-btn"
            onClick={() => changePage(page + 1)}
            disabled={page === pageCount - 1}
            aria-label="Next page"
          >›</button>
        </Pager>
      )}
      {selected && <WorkDialog project={selected} onClose={() => select(null)} />}
    </>
  );
}
