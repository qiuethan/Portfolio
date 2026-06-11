import React from 'react';
import styled, { css } from 'styled-components';

export const glassCss = css`
  position: relative;
  background-color: var(--glass);
  /* diagonal sheen so the pane reads as glass even over quiet backgrounds */
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0.08) 38%,
    rgba(255, 255, 255, 0.18) 62%,
    rgba(255, 255, 255, 0.42) 100%
  );
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  backdrop-filter: blur(16px) saturate(1.4);
  border: 1px solid var(--glass-edge);
  border-radius: var(--radius);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 -1px 0 rgba(255, 255, 255, 0.35) inset,
    0 16px 40px -20px rgba(26, 33, 48, 0.35);
`;

const Surface = styled.div`
  ${glassCss}
`;

type GlassProps = React.AllHTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

/** Frosted glass panel. */
const Glass: React.FC<GlassProps> = (props) => <Surface {...props} />;

export default Glass;
