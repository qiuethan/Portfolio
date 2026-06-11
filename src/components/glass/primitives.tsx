import styled, { css } from 'styled-components';

export const Page = styled.div`
  position: relative;
  z-index: 1;
  width: min(92vw, 1400px);
  margin: 0 auto;
  padding: 24px 0 56px;

  @media (max-width: 700px) {
    width: auto;
    padding: 28px 24px 72px;
  }
`;

export const Section = styled.section`
  margin-bottom: 44px;

  @media (max-width: 700px) {
    margin-bottom: 36px;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 14px;
  padding: 0 6px;

  h2 {
    font-family: var(--display);
    font-size: 23px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .note {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--ink-faint);
  }
`;

const btnBase = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--body);
  font-weight: 600;
  font-size: 14.5px;
  padding: 12px 22px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const PrimaryBtn = styled.a`
  ${btnBase}
  /* cobalt-tinted frosted glass */
  background-color: rgba(29, 79, 158, 0.66);
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.28) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    rgba(255, 255, 255, 0.16) 100%
  );
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  border-color: rgba(255, 255, 255, 0.55);
  color: #fff;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.35) inset,
    0 10px 24px -12px rgba(29, 79, 158, 0.55);

  &:hover {
    background-color: rgba(29, 79, 158, 0.82);
  }
`;

export const GhostBtn = styled.a`
  ${btnBase}
  background-color: var(--glass);
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0.08) 38%,
    rgba(255, 255, 255, 0.18) 62%,
    rgba(255, 255, 255, 0.42) 100%
  );
  color: var(--ink);
  border-color: var(--glass-edge);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 10px 24px -14px rgba(26, 33, 48, 0.35);

  &:hover {
    background-color: var(--glass-strong);
  }
`;
