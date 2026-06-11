import React, { useEffect, useRef } from 'react';
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

const Surface = styled.div<{ $lit?: boolean }>`
  ${glassCss}

  ${({ $lit }) =>
    $lit &&
    css`
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(
          340px circle at var(--mx, 50%) var(--my, -40%),
          rgba(255, 255, 255, 0.42),
          transparent 62%
        );
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      }
      &:hover::after {
        opacity: 1;
      }
    `}
`;

type GlassProps = React.AllHTMLAttributes<HTMLElement> & {
  lit?: boolean;
  as?: React.ElementType;
};

/**
 * Frosted glass panel. `lit` adds a radial highlight that follows the
 * pointer (fine pointers only), matching the reference design's .glass.lit.
 */
const Glass: React.FC<GlassProps> = ({ lit = false, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!lit || !el || !window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove);
  }, [lit]);

  return <Surface ref={ref as React.Ref<HTMLDivElement>} $lit={lit} {...rest} />;
};

export default Glass;
