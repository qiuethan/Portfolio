import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';

const FooterWrap = styled.footer`
  text-align: center;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-faint);
  line-height: 2;

  a {
    color: var(--accent);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SiteFooter: React.FC = () => (
  <FooterWrap>
    <p>
      {portfolioData.contact.email} ·{' '}
      <a href={portfolioData.contact.github} target="_blank" rel="noopener">GitHub</a> ·{' '}
      <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
    </p>
  </FooterWrap>
);

export default SiteFooter;
