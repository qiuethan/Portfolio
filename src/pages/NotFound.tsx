import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Scene from '../components/glass/Scene';
import SiteNav from '../components/glass/SiteNav';
import SiteFooter from '../components/glass/SiteFooter';
import { Page, PrimaryBtn, GhostBtn } from '../components/glass/primitives';
import usePageNavigation from '../hooks/usePageNavigation';

const Message = styled.main`
  padding: 40px 6px 72px;
  max-width: 640px;

  .code {
    color: var(--accent);
    font: 500 14px var(--mono);
    margin-bottom: 12px;
  }

  h1 {
    font: 600 clamp(32px, 5vw, 48px) / 1.15 var(--display);
    margin-bottom: 18px;
  }

  p { color: var(--ink-soft); }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 26px;
  }
`;

export default function NotFound() {
  usePageNavigation('Page not found — Ethan Qiu');

  return (
    <>
      <Scene />
      <Page>
        <SiteNav />
        <Message id="main-content" tabIndex={-1}>
          <p className="code">404</p>
          <h1>Nothing here yet.</h1>
          <p>That page may have moved, or the link may have a typo.</p>
          <div className="actions">
            <PrimaryBtn as={Link} to="/">Back home</PrimaryBtn>
            <GhostBtn as={Link} to="/work">Browse all work →</GhostBtn>
          </div>
        </Message>
        <SiteFooter />
      </Page>
    </>
  );
}
