import { useId, useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Modal, { ModalKicker, ModalTitle, ModalList, ChipRow, Chip } from '../glass/Modal';
import type { Experience } from '../../data/experience';

const ExpGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ExpCard = styled(Glass)`
  width: 100%;
  text-align: left;
  font-family: var(--body);
  color: var(--ink);
  padding: 20px 24px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;

  .logo {
    position: absolute;
    top: 18px;
    right: 20px;
    width: 36px;
    height: 36px;
    object-fit: contain;
    border-radius: var(--radius-sm);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.9) inset,
      0 -1px 0 rgba(255, 255, 255, 0.35) inset,
      0 24px 48px -20px rgba(26, 33, 48, 0.45);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  .period {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    margin-bottom: 8px;
  }

  .role {
    font-family: var(--display);
    font-weight: 600;
    font-size: 17.5px;
    padding-right: 40px;
  }

  .company {
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .line {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.55;
    margin-bottom: 10px;
  }

  .go {
    font-family: var(--mono);
    font-size: 11.5px;
    font-weight: 500;
    color: var(--accent);
  }
`;

/* compact header: logo chip beside the role instead of a lone mark on a banner */
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding-right: 36px;

  .modal-logo {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    object-fit: contain;
    background-color: rgba(255, 255, 255, 0.55);
    border: 1px solid var(--glass-edge);
    border-radius: var(--radius-sm);
    padding: 10px;
  }

  .modal-company {
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
  }
`;

export default function ExperienceCards({ roles }: { roles: Experience[] }) {
  const titleId = useId();
  const [selected, setSelected] = useState<number | null>(null);
  const open = selected === null ? null : roles[selected];

  return (
    <>
      <ExpGrid>
        {roles.map((r, i) => (
          <ExpCard
            forwardedAs="button"
            type="button"
            key={r.id}
            aria-label={`Read about ${r.title} at ${r.shortCompany ?? r.company}`}
            aria-haspopup="dialog"
            onClick={() => setSelected(i)}
          >
            {r.logo && <img className="logo" src={r.logo} alt="" />}
            <p className="period">{r.period}</p>
            <p className="role">{r.title}</p>
            <p className="company">{r.shortCompany ?? r.company}{r.team && ` · ${r.team} team`}</p>
            <p className="line">{r.summary}</p>
            <span className="go">Details ↗</span>
          </ExpCard>
        ))}
      </ExpGrid>
      {open && (
        <Modal onClose={() => setSelected(null)} labelledBy={titleId}>
          <ModalHeader>
            {open.logo && <img className="modal-logo" src={open.logo} alt="" />}
            <div>
              <ModalKicker style={{ marginBottom: 2, paddingRight: 0 }}>{open.period}</ModalKicker>
              <ModalTitle id={titleId} style={{ marginBottom: 2, paddingRight: 0 }}>{open.title}</ModalTitle>
              <p className="modal-company">{open.shortCompany ?? open.company}{open.team && ` · ${open.team} team`}</p>
            </div>
          </ModalHeader>
          <ModalList>
            {open.responsibilities.map((line) => <li key={line}>{line}</li>)}
          </ModalList>
          <ChipRow>
            {open.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)}
          </ChipRow>
        </Modal>
      )}
    </>
  );
}
