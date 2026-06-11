import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Photo from '../glass/Photo';
import { PrimaryBtn, GhostBtn } from '../glass/primitives';
import { portfolioData } from '../../data/portfolio';

const HeroWrap = styled.header`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 36px;
  align-items: center;
  margin-bottom: 44px;

  .kicker {
    font-family: var(--mono);
    font-size: 12.5px;
    color: var(--ink-soft);
    margin-bottom: 14px;
  }

  .kicker b {
    color: var(--accent);
    font-weight: 500;
  }

  h1 {
    font-family: var(--display);
    font-size: clamp(40px, 6.6vw, 68px);
    font-weight: 650;
    line-height: 1.05;
    letter-spacing: -0.015em;
    margin-bottom: 16px;
    max-width: 18ch;
  }

  .lede {
    font-size: 17px;
    color: var(--ink-soft);
    max-width: 55ch;
    margin-bottom: 22px;
  }

  .lede strong {
    color: var(--ink);
    font-weight: 600;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  /* text column caps at a readable width; the photo stack absorbs the rest
     so there's no dead zone between them */
  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 700px) minmax(340px, 1fr);
    gap: 48px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-bottom: 36px;
  }
`;

const PhotoStack = styled.div`
  position: relative;
  height: 340px;

  .p1 {
    position: absolute;
    width: 82%;
    height: 240px;
    top: 0;
    right: 0;
    transform: rotate(2deg);
  }

  .p2 {
    position: absolute;
    width: 72%;
    height: 180px;
    bottom: 0;
    left: 0;
    transform: rotate(-2.5deg);
  }

  /* third photo peeks out behind the stack on wide screens */
  .p3 {
    display: none;
    position: absolute;
    width: 40%;
    height: 130px;
    top: 14px;
    left: -10px;
    transform: rotate(-4deg);
  }

  @media (min-width: 1100px) {
    height: 440px;

    .p1 {
      height: 320px;
      width: 78%;
    }

    .p2 {
      height: 240px;
      width: 68%;
    }

    .p3 {
      display: block;
      width: 34%;
      height: 150px;
    }
  }

  @media (max-width: 700px) {
    height: 260px;
    max-width: 360px;
  }
`;

const IdCard = styled(Glass)`
  position: absolute;
  right: -6px;
  bottom: 38px;
  z-index: 2;
  padding: 12px 16px;
  font-family: var(--mono);
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--ink);
  transform: rotate(1deg);

  .clock {
    color: var(--accent);
  }
`;

function torontoTime(): string {
  return new Intl.DateTimeFormat('en-CA', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Toronto',
  }).format(new Date());
}

const Hero: React.FC = () => {
  const [time, setTime] = useState(torontoTime);

  useEffect(() => {
    const id = setInterval(() => setTime(torontoTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <HeroWrap>
      <div>
        <p className="kicker">Software Engineer · Toronto · Hopeless Romantic · <b>Currently @ Shopify</b></p>
        <h1>I commit daily,<br />even if they don&apos;t.</h1>
        <p className="lede">
          I&apos;m Ethan. I build <strong>AI tooling and full-stack systems</strong>.
          Software engineer intern at Shopify, CS at UofT, previously General Dynamics
          and leading teams at UTMIST and UofT Blueprint.
        </p>
        <div className="cta-row">
          <PrimaryBtn href="/resume.pdf" target="_blank" rel="noopener">Download resume</PrimaryBtn>
          <GhostBtn href={portfolioData.contact.github} target="_blank" rel="noopener">GitHub</GhostBtn>
          <GhostBtn href={portfolioData.contact.linkedin} target="_blank" rel="noopener">LinkedIn</GhostBtn>
        </div>
      </div>
      <PhotoStack aria-label="Photos of Ethan and Toronto">
        <Photo className="p3" label="A hack weekend" />
        <Photo
          className="p1"
          src="/img/photos/me-toronto.jpg"
          alt="Ethan in front of the Toronto skyline"
        />
        <Photo
          className="p2"
          src="/img/photos/cn-tower.jpg"
          alt="The CN Tower framed between downtown Toronto towers"
          position="center 32%"
        />
        <IdCard>
          Ethan Qiu<br />
          43.65°N, 79.38°W<br />
          <span className="clock">{time}</span> in Toronto
        </IdCard>
      </PhotoStack>
    </HeroWrap>
  );
};

export default Hero;
