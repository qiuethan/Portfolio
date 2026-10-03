import styled from 'styled-components';
import type { ProjectVisual } from '../../data/projects';

const Visual = styled.div<{ $tone: ProjectVisual['tone'] }>`
  --visual-ink: ${({ $tone }) => $tone === 'green' ? '#2b6653' : $tone === 'amber' ? '#835e28' : '#315f91'};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 150px;
  margin-bottom: 14px;
  overflow: hidden;
  border: 1px solid var(--glass-edge);
  border-radius: var(--radius-sm);
  color: var(--visual-ink);
  background:
    radial-gradient(ellipse at 50% 110%, color-mix(in srgb, var(--visual-ink) 16%, transparent), transparent 75%),
    repeating-linear-gradient(0deg, transparent 0 23px, rgba(26, 33, 48, 0.035) 23px 24px),
    repeating-linear-gradient(90deg, transparent 0 23px, rgba(26, 33, 48, 0.035) 23px 24px),
    rgba(255, 255, 255, 0.35);

  .mark {
    font-family: var(--mono);
    font-size: 38px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.08em;
  }

  .steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-family: var(--mono);
    font-size: 10px;
  }

  .step {
    padding: 4px 7px;
    border: 1px solid color-mix(in srgb, var(--visual-ink) 22%, transparent);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.55);
  }
`;

export default function WorkVisual({ visual }: { visual: ProjectVisual }) {
  return (
    <Visual $tone={visual.tone} aria-hidden="true">
      <span className="mark">{visual.mark}</span>
      <div className="steps">
        {visual.steps.map((step, i) => (
          <span key={step}>
            {i > 0 && <span>→ </span>}
            <span className="step">{step}</span>
          </span>
        ))}
      </div>
    </Visual>
  );
}
