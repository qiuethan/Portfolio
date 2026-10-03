import { useId } from 'react';
import Modal, { ModalImage, ModalKicker, ModalTitle, ModalText, ModalList, ChipRow, Chip, ModalActions } from '../glass/Modal';
import { PrimaryBtn, GhostBtn } from '../glass/primitives';
import type { WorkItem } from '../../data/projects';
import WorkVisual from '../home/WorkVisual';

export default function WorkDialog({ project, onClose }: { project: WorkItem; onClose: () => void }) {
  const titleId = useId();
  return (
    <Modal onClose={onClose} labelledBy={titleId}>
      {project.image ? (
        <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full image for ${project.name}`}>
          <ModalImage src={project.image} alt={project.imageAlt ?? `${project.name} screenshot`} fit="contain" />
        </a>
      ) : project.visual ? <WorkVisual visual={project.visual} /> : null}
      <ModalKicker>{project.award}</ModalKicker>
      <ModalTitle id={titleId}>{project.name}</ModalTitle>
      {project.question && <ModalText><strong>{project.question}</strong></ModalText>}
      <ModalText>{project.details}</ModalText>
      <ModalList>
        {project.highlights.map((line) => <li key={line}>{line}</li>)}
      </ModalList>
      <ChipRow>
        {project.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)}
      </ChipRow>
      {(project.live || project.github) && (
        <ModalActions>
          {project.live && (
            <PrimaryBtn href={project.live} target="_blank" rel="noopener noreferrer">
              {project.linkLabel ?? 'Visit site'} ↗
            </PrimaryBtn>
          )}
          {project.github && (
            <GhostBtn href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</GhostBtn>
          )}
        </ModalActions>
      )}
    </Modal>
  );
}
