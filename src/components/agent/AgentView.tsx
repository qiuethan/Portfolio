// Structured, agent-optimized view of the portfolio. Rendered in place of the
// glass UI when an agent/crawler is detected (see utils/agentDetection). It is
// plain semantic HTML — headings, lists, real <a href> links, no animation or
// canvas — so a model reading the DOM gets everything in one linear pass.
//
// Ordering reflects what an agent evaluating Ethan actually needs first: links &
// resume, then experience, projects, and skills. Live "now" status is a minor
// pointer at the end, not a headline — and off-hours/personal sections are
// intentionally omitted. All content comes from the same portfolioData the human
// site uses, so the two views can never drift apart.

import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';

const { about, contact, experience, projects, skills } = portfolioData;

const Wrap = styled.main`
  max-width: 820px;
  margin: 0 auto;
  padding: 48px 24px 96px;
  font-family: var(--body);
  color: var(--ink);
  line-height: 1.6;

  a {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  h1 {
    font-family: var(--display);
    font-size: 30px;
    letter-spacing: -0.01em;
    margin-bottom: 4px;
  }

  h2 {
    font-family: var(--display);
    font-size: 21px;
    letter-spacing: -0.01em;
    margin: 40px 0 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--ink-faint);
  }

  h3 {
    font-size: 16px;
    margin: 20px 0 2px;
  }

  p { margin: 0 0 10px; }

  ul { margin: 6px 0 10px 22px; }
  li { margin: 2px 0; }

  .role { color: var(--ink-soft); font-size: 15px; }
  .meta { color: var(--ink-soft); font-size: 14px; font-family: var(--mono); }
  .tech { color: var(--ink-soft); font-size: 14px; }
`;

const Banner = styled.aside`
  background: var(--accent-soft);
  border: 1px solid var(--accent);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  margin-bottom: 24px;
  font-size: 14px;

  strong { font-weight: 600; }
  ul { margin: 8px 0 0 22px; }
`;

// De-emphasized footer note — live status is supplementary, not a headline.
const StatusNote = styled.aside`
  margin-top: 48px;
  padding-top: 14px;
  border-top: 1px solid var(--ink-faint);
  font-size: 13px;
  color: var(--ink-soft);
`;

const RESUME = 'https://ethanqiu.ca/resume.pdf';

const AgentView: React.FC = () => (
  <Wrap>
    <Banner>
      <strong>Agent-optimized view.</strong> Structured, text-first
      representation of Ethan Qiu's portfolio for AI agents and crawlers. The
      sections that follow — links &amp; resume, experience, projects, skills —
      are what most agents need.
      <ul>
        <li>
          <a href={RESUME}>resume.pdf</a> — canonical resume (start here)
        </li>
        <li>
          <a href="/llms.txt">/llms.txt</a> — site overview and entry points
        </li>
      </ul>
      Prefer the human-designed site? <a href="/?view=human">Switch to the
      visual view</a>.
    </Banner>

    <header>
      <h1>{about.name}</h1>
      <p className="role">
        {about.role} · {about.location} · {about.university}
      </p>
    </header>

    <section>
      <h2>Links</h2>
      <ul>
        <li>
          Resume: <a href={RESUME}>{RESUME}</a>
        </li>
        <li>
          GitHub: <a href={contact.github}>{contact.github}</a>
        </li>
        <li>
          LinkedIn: <a href={contact.linkedin}>{contact.linkedin}</a>
        </li>
        <li>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Experience</h2>
      {experience.map((job) => (
        <article key={`${job.company}-${job.title}`}>
          <h3>
            {job.title} — {job.company}
          </h3>
          <p className="meta">{job.period}</p>
          <ul>
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <p className="tech">Tech: {job.tech.join(', ')}</p>
        </article>
      ))}
    </section>

    <section>
      <h2>Projects</h2>
      {projects.map((project) => (
        <article key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.details || project.description}</p>
          <p className="tech">Tech: {project.tech.join(', ')}</p>
          <p>
            {project.github && (
              <>
                <a href={project.github}>Source</a>
                {project.live ? ' · ' : ''}
              </>
            )}
            {project.live && <a href={project.live}>Live / writeup</a>}
          </p>
        </article>
      ))}
    </section>

    <section>
      <h2>Skills</h2>
      <p>
        <strong>Languages:</strong> {skills.languages.join(', ')}
      </p>
      <p>
        <strong>Frameworks:</strong> {skills.frameworks.join(', ')}
      </p>
      <p>
        <strong>Libraries:</strong> {skills.libraries.join(', ')}
      </p>
      <p>
        <strong>Tools:</strong> {skills.tools.join(', ')}
      </p>
    </section>

    <section>
      <h2>About</h2>
      {about.bio.split('\n\n').map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </section>

    <StatusNote>
      Current role, availability, and recent coding activity are auto-updated
      hourly at <a href="https://now.ethanqiu.ca/now.md">now.ethanqiu.ca/now.md</a>{' '}
      (<a href="https://now.ethanqiu.ca/now.json">JSON</a>) — check it for
      anything time-sensitive.
    </StatusNote>
  </Wrap>
);

export default AgentView;
