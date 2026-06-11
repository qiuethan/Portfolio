import React, { useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Photo from '../glass/Photo';
import Modal, { ModalImage, ModalKicker, ModalTitle, ModalText, ChipRow, Chip, ModalActions } from '../glass/Modal';
import { Section, SectionHead, PrimaryBtn, GhostBtn } from '../glass/primitives';
import { portfolioData } from '../../data/portfolio';

const Gallery = styled.div`
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
  display: block;
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

// Card copy is curated; the modal pulls full details from portfolioData.
const findProject = (fragment: string) =>
  portfolioData.projects.find((p) => p.name.includes(fragment));

const PROJECTS = [
  {
    title: 'Identity Matrix',
    award: '1st Place · UofT Hacks 2026',
    desc: 'A persistent multiplayer world where your avatar becomes an independent AI agent after you log off.',
    image: '/img/projects/identity-matrix.png',
  },
  {
    title: 'Heimer Academy',
    award: '1st Overall · AWS Rift Rewind',
    desc: 'AI coaching that recommends League champions from your playstyle, built on 100,000+ model calls.',
    image: '/img/projects/heimer-academy.png',
  },
  {
    title: 'Polaris',
    award: 'Best Game Hack · Hack the 6ix',
    desc: 'A multiplayer fitness game where computer vision turns your body into the controller.',
    image: '/img/projects/polaris.png',
  },
  {
    title: 'Orbit',
    award: 'Best of Groq & Windsurf · Hack the North',
    desc: 'Real-time social intelligence: instant recognition, live transcription, and context-aware follow-ups.',
    image: '/img/projects/orbit.png',
  },
  {
    title: 'Hyacinthe',
    award: '1st Overall · GeeseHacks 2025',
    desc: 'A computer-vision navigator giving visually impaired users real-time environmental awareness.',
    image: '/img/projects/hyacinthe.png',
  },
  {
    title: 'RT1M',
    award: 'Live · rt1m.ethanqiu.ca',
    desc: 'Full-stack financial planning with an AI advisor that updates your plan through conversation.',
    image: '/img/projects/rt1m.png',
  },
  {
    title: 'Shop Buddy',
    award: 'Live · shop-buddy.ethanqiu.ca',
    desc: 'An AI shopping assistant that turns a problem into a step-by-step plan with product recommendations.',
    image: '/img/projects/shop-buddy.png',
  },
  {
    title: 'UTMIST Website',
    award: 'Live · utmist.ca',
    desc: 'The official site for UofT’s Machine Intelligence Student Team, serving 1,000+ students and researchers.',
    image: '/img/projects/utmist.png',
  },
  {
    title: 'Bounce Back',
    award: 'React Native · PyTorch · BERT',
    desc: 'An AI mental-health companion: chat, mood tracking, journaling, and habit-building for the hard stretches.',
    image: '/img/projects/bounce-back.png',
  },
  {
    title: 'Hart House Debate Automation',
    award: 'Python · Automation',
    desc: 'Tournament ops for Canada’s largest university debate club: payments, allocation, and accessibility for 360+ debaters.',
    image: '/img/projects/hart-house.png',
  },
  {
    title: 'Crosswalk of Shame',
    award: 'Hack the North 2024',
    desc: 'Real-time object detection that catches distracted pedestrians before the crosswalk does.',
    image: '/img/projects/crosswalk.png',
  },
  {
    title: 'GameStoppr',
    award: 'React · Django',
    desc: 'Blocks the apps that eat your day and gamifies the habits that don’t.',
    image: '/img/projects/gamestoppr.png',
  },
].map((entry) => ({ ...entry, data: findProject(entry.title) }));

const PER_PAGE = 6;

const WorkSection: React.FC = () => {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const pageCount = Math.ceil(PROJECTS.length / PER_PAGE);
  const visible = PROJECTS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const open = selected === null ? null : PROJECTS[selected];

  return (
    <Section id="work">
      <SectionHead>
        <h2>Projects</h2>
        <span className="note">{PROJECTS.length} shipped · hackathons to production</span>
      </SectionHead>
      <Gallery>
        {visible.map((project, i) => (
          <ProjectCard
            forwardedAs="button"
            type="button"
            key={project.title}
            onClick={() => setSelected(page * PER_PAGE + i)}
          >
            <Photo className="thumb" src={project.image} alt={`${project.title} screenshot`} label="Screenshot" />
            <p className="award">{project.award}</p>
            <p className="title">{project.title}</p>
            <p className="desc">{project.desc}</p>
            <span className="go">Details ↗</span>
          </ProjectCard>
        ))}
      </Gallery>
      <Pager>
        <button
          type="button"
          className="page-btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          aria-label="Previous page"
        >
          ‹
        </button>
        <span className="page-label">Page {page + 1} of {pageCount}</span>
        <button
          type="button"
          className="page-btn"
          onClick={() => setPage(page + 1)}
          disabled={page === pageCount - 1}
          aria-label="Next page"
        >
          ›
        </button>
      </Pager>
      {open && (
        <Modal onClose={() => setSelected(null)}>
          <ModalImage src={open.image} alt={`${open.title} screenshot`} label="Screenshot" />
          <ModalKicker>{open.award}</ModalKicker>
          <ModalTitle>{open.title}</ModalTitle>
          <ModalText>{open.data?.details ?? open.desc}</ModalText>
          {open.data && (
            <ChipRow>
              {open.data.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </ChipRow>
          )}
          <ModalActions>
            {open.data?.live && (
              <PrimaryBtn href={open.data.live} target="_blank" rel="noopener">Open Live ↗</PrimaryBtn>
            )}
            {open.data?.github && (
              <GhostBtn href={open.data.github} target="_blank" rel="noopener">GitHub ↗</GhostBtn>
            )}
          </ModalActions>
        </Modal>
      )}
    </Section>
  );
};

export default WorkSection;
