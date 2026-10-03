import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Scene from '../components/glass/Scene';
import SiteNav from '../components/glass/SiteNav';
import SiteFooter from '../components/glass/SiteFooter';
import WorkLibrary from '../components/work/WorkLibrary';
import { Page } from '../components/glass/primitives';
import usePageNavigation from '../hooks/usePageNavigation';

const Header = styled.header`
  margin: 0 6px 28px;

  a {
    display: inline-block;
    margin-bottom: 24px;
    color: var(--accent);
    font: 500 12px var(--mono);
    text-decoration: none;
  }

  a:hover { text-decoration: underline; }

  h1 {
    font-family: var(--display);
    font-size: clamp(34px, 5vw, 52px);
    font-weight: 600;
    letter-spacing: -0.03em;
    margin-bottom: 10px;
  }

  p {
    max-width: 60ch;
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.6;
  }
`;

export default function Work() {
  usePageNavigation('All work — Ethan Qiu');

  return (
    <>
      <Scene />
      <Page>
        <SiteNav />
        <main id="main-content" tabIndex={-1}>
          <Header>
            <Link to="/#work">← Back to selected work</Link>
            <h1>All work</h1>
            <p>The longer version. Club infrastructure, hackathon weekends, and experiments I keep coming back to.</p>
          </Header>
          <WorkLibrary />
        </main>
        <SiteFooter />
      </Page>
    </>
  );
}
