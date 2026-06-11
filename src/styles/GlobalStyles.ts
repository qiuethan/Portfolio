import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --ink: #1a2130;
    --ink-soft: #525c6e;
    --ink-faint: #8793a3;
    --accent: #1d4f9e;
    --accent-soft: rgba(29, 79, 158, 0.1);
    --bg: #e6edf5;
    --glass: rgba(255, 255, 255, 0.38);
    --glass-strong: rgba(255, 255, 255, 0.68);
    --glass-edge: rgba(255, 255, 255, 0.85);
    /* one radius scale everywhere: cards 14, controls/photos 8 */
    --radius: 14px;
    --radius-sm: 8px;
    --display: "Bricolage Grotesque", system-ui, sans-serif;
    --body: "Instrument Sans", system-ui, sans-serif;
    --mono: "IBM Plex Mono", ui-monospace, monospace;
    --photo-bg: #dde3ea;
    --hatch: repeating-linear-gradient(45deg, rgba(26,33,48,0.18) 0 1px, transparent 1px 9px);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--body);
    color: var(--ink);
    background: var(--bg);
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::selection { background: var(--accent); color: #fff; }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; animation: none !important; }
    html { scroll-behavior: auto; }
  }
`;

export default GlobalStyles;
