import styled, { keyframes } from 'styled-components';

// Slow opacity breath for large blocks (grids, whole cards) where animating a
// background sweep on every child would be wasteful.
export const skeletonPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// Diagonal light sweep for individual bars.
const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

/**
 * Shimmering placeholder bar. Width / height / radius are props so one
 * primitive stands in for text lines, chips, stat numbers, and pills.
 * Honors prefers-reduced-motion (GlobalStyles also kills the animation).
 */
export const Skeleton = styled.span<{
  $w?: string;
  $h?: string;
  $radius?: string;
  $block?: boolean;
}>`
  display: ${({ $block }) => ($block ? 'block' : 'inline-block')};
  width: ${({ $w }) => $w ?? '100%'};
  height: ${({ $h }) => $h ?? '12px'};
  border-radius: ${({ $radius }) => $radius ?? '6px'};
  background: linear-gradient(
    100deg,
    rgba(26, 33, 48, 0.05) 30%,
    rgba(26, 33, 48, 0.12) 50%,
    rgba(26, 33, 48, 0.05) 70%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: rgba(26, 33, 48, 0.08);
  }
`;
