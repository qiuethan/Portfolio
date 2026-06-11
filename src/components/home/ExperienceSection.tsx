import React, { useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Modal, { ModalImage, ModalKicker, ModalTitle, ModalText, ModalList, ChipRow, Chip } from '../glass/Modal';
import { Section, SectionHead } from '../glass/primitives';
import { portfolioData } from '../../data/portfolio';

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

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.9) inset,
      0 -1px 0 rgba(255, 255, 255, 0.35) inset,
      0 24px 48px -20px rgba(26, 33, 48, 0.45);
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

// Card copy is curated; the modal pulls the full bullet list from portfolioData.
const findRole = (fragment: string) =>
  portfolioData.experience.find((e) => e.title.includes(fragment) || e.company.includes(fragment));

const ROLES = [
  {
    period: 'Apr 2026 - Present',
    role: 'Software Engineer Intern',
    company: 'Shopify',
    line: 'Variant publishing and bulk-edit flows for 140,000+ stores; built the core prototype of the agentic-commerce Product Details redesign.',
    data: findRole('Shopify'),
  },
  {
    period: 'May - Aug 2025',
    role: 'Software Engineer (Co-op)',
    company: 'General Dynamics Mission Systems',
    line: 'Spearheaded a modular Python automation framework that cut regression runtime in half; tooling adopted by three engineering teams.',
    data: findRole('General Dynamics'),
  },
  {
    period: 'May 2025 - Apr 2026',
    role: 'Engineering Director, Industry',
    company: 'UTMIST',
    line: 'Led four industry projects and 20+ developers, including an agentic credit-card recommender for Flybits and pricing models for Amicare.',
    data: findRole('Engineering Director'),
  },
  {
    period: 'May 2025 - Apr 2026',
    role: 'Project Lead',
    company: 'UofT Blueprint',
    line: 'Shipped a 50,000-artifact inventory platform for the Museum of Digital Entertainment with 10 developers; first release in six weeks.',
    data: findRole('UofT Blueprint'),
  },
];

const ExperienceSection: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const open = selected === null ? null : ROLES[selected];

  return (
    <Section id="experience">
      <SectionHead>
        <h2>Experience</h2>
        <span className="note">The highlights · full history in the resume</span>
      </SectionHead>
      <ExpGrid>
        {ROLES.map((r, i) => (
          <ExpCard
            lit
            forwardedAs="button"
            type="button"
            key={r.company + r.role}
            onClick={() => setSelected(i)}
          >
            <p className="period">{r.period}</p>
            <p className="role">{r.role}</p>
            <p className="company">{r.company}</p>
            <p className="line">{r.line}</p>
            <span className="go">Details ↗</span>
          </ExpCard>
        ))}
      </ExpGrid>
      {open && (
        <Modal onClose={() => setSelected(null)}>
          <ModalImage label={`${open.company} photo`} />
          <ModalKicker>{open.period}</ModalKicker>
          <ModalTitle>{open.role}</ModalTitle>
          <ModalText style={{ marginBottom: 10, fontWeight: 600, color: 'var(--accent)' }}>
            {open.company}
          </ModalText>
          {open.data ? (
            <ModalList>
              {open.data.responsibilities.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ModalList>
          ) : (
            <ModalText>{open.line}</ModalText>
          )}
          {open.data && (
            <ChipRow>
              {open.data.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </ChipRow>
          )}
        </Modal>
      )}
    </Section>
  );
};

export default ExperienceSection;
