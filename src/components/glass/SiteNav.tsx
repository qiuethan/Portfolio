import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Glass from './Glass';

const SkipLink = styled.a`
  position: fixed;
  top: 20px;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -200%);
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  background: var(--ink);
  color: #fff;
  font-weight: 600;
  text-decoration: none;

  &:focus { transform: translate(-50%, 0); }
`;

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
    background-color: rgba(29, 79, 158, 0.96);
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.04) 45%,
      rgba(255, 255, 255, 0.08) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.35) inset;
    color: #fff;
    margin-left: 8px;
  }

  .links a.cta:hover {
    background-color: rgb(29, 79, 158);
  }

  @media (max-width: 900px) {
    .links a { padding: 8px 10px; }
  }

  @media (max-width: 700px) {
    margin-bottom: 32px;

    .links a:not(.cta):not(.work-link) {
      display: none;
    }
  }
`;

const SiteNav: React.FC = () => (
  <>
    <SkipLink href="#main-content">Skip to content</SkipLink>
    <NavGlass forwardedAs="nav" aria-label="Main">
      <Link className="wordmark" to="/">Ethan Qiu</Link>
      <div className="links">
        <Link to="/#now">Now</Link>
        <Link to="/#current">Current</Link>
        <Link className="work-link" to="/work">Work</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#off">Off Hours</Link>
        <a className="cta" href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
      </div>
    </NavGlass>
  </>
);

export default SiteNav;
