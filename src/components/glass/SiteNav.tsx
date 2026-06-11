import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Glass from './Glass';

const NavGlass = styled(Glass)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 13px 13px 24px;
  margin-bottom: 40px;
  position: sticky;
  top: 16px;
  z-index: 5;
  border-radius: 999px;

  .links a {
    border-radius: 999px;
  }

  .links a.cta {
    border-radius: 999px;
  }

  /* heavier frost than regular cards — content scrolls directly beneath it */
  background-color: var(--glass-strong);
  -webkit-backdrop-filter: blur(22px) saturate(1.5);
  backdrop-filter: blur(22px) saturate(1.5);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 -1px 0 rgba(255, 255, 255, 0.35) inset,
    0 12px 32px -16px rgba(26, 33, 48, 0.4);

  .wordmark {
    font-family: var(--display);
    font-weight: 600;
    font-size: 17px;
    text-decoration: none;
    color: var(--ink);
  }

  .links {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .links a {
    color: var(--ink-soft);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: var(--radius-sm);
    transition: background 0.15s, color 0.15s;
  }

  .links a:hover {
    background: var(--glass-strong);
    color: var(--ink);
  }

  .links a.cta {
    background-color: rgba(29, 79, 158, 0.66);
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.28) 0%,
      rgba(255, 255, 255, 0.04) 45%,
      rgba(255, 255, 255, 0.16) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.35) inset;
    color: #fff;
    margin-left: 8px;
  }

  .links a.cta:hover {
    background-color: rgba(29, 79, 158, 0.82);
  }

  @media (max-width: 700px) {
    margin-bottom: 32px;

    .links a:not(.cta) {
      display: none;
    }
  }
`;

const SiteNav: React.FC = () => (
  <NavGlass forwardedAs="nav" aria-label="Main">
    <Link className="wordmark" to="/">Ethan Qiu</Link>
    <div className="links">
      <a href="/#now">Now</a>
      <a href="/#work">Projects</a>
      <a href="/#experience">Experience</a>
      <a href="/#off">Off Hours</a>
      <a className="cta" href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
    </div>
  </NavGlass>
);

export default SiteNav;
