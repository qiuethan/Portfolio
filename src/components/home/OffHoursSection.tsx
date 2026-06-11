import React from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Photo from '../glass/Photo';
import { Section, SectionHead } from '../glass/primitives';

const Collage = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  /* every tile is exactly one row tall, so all cards match in size */
  grid-auto-rows: 240px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);

    > *:nth-child(8n + 1) { transform: rotate(-1.2deg); }
    > *:nth-child(8n + 2) { transform: rotate(0.7deg) translateY(8px); }
    > *:nth-child(8n + 3) { transform: rotate(0.5deg); }
    > *:nth-child(8n + 4) { transform: rotate(-0.8deg) translateY(6px); }
    > *:nth-child(8n + 5) { transform: rotate(0.9deg); }
    > *:nth-child(8n + 6) { transform: rotate(-0.5deg) translateY(10px); }
    > *:nth-child(8n + 7) { transform: rotate(-1deg); }
    > *:nth-child(8n + 8) { transform: rotate(0.6deg) translateY(4px); }
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const NoteCard = styled(Glass)`
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  .note-title {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--accent);
    margin-bottom: 10px;
  }

  .note-body {
    font-size: 13.5px;
    color: var(--ink-soft);
    line-height: 1.6;
  }
`;

const OffHoursSection: React.FC = () => (
  <Section id="off">
    <SectionHead>
      <h2>Off Hours</h2>
      <span className="note">The parts a resume leaves out</span>
    </SectionHead>
    <Collage>
      <Photo
        src="/img/photos/debate.jpg"
        alt="Ethan and teammates with their debate tournament awards"
        caption="Hardware from a debate weekend"
      />
      <NoteCard>
        <p className="note-title">Debate</p>
        <p className="note-body">
          Debating since high school, with two straight years at Canadian
          Nationals before NAUDC in university. These days I run HHHS and keep
          Hart House&apos;s tournaments turning for hundreds of debaters every
          season. Old habits die hard.
        </p>
      </NoteCard>
      <Photo label="Badminton, mid-rally" caption="On the court" />
      <NoteCard>
        <p className="note-title">Badminton</p>
        <p className="note-body">
          Three times a week until my legs give out. I&apos;m nowhere near
          varsity material, but intramurals have my whole heart, and I&apos;ll
          chase down every shuttle like it personally owes me money.
        </p>
      </NoteCard>
      <NoteCard>
        <p className="note-title">Travelling</p>
        <p className="note-body">
          I travel every chance I get, and I&apos;m a total sucker for cruising.
          Give me a deck, the open ocean, and absolutely nowhere to be. A dusk
          walk along the Seine doesn&apos;t hurt either.
        </p>
      </NoteCard>
      <Photo
        src="/img/photos/travel-seine.jpg"
        alt="A riverboat on the Seine at dusk in Paris"
        position="center 42%"
        caption="Dusk on the Seine, Paris"
      />
      <NoteCard>
        <p className="note-title">Board Games</p>
        <p className="note-body">
          I collect board games, and the shelf is honestly out of control.
          Mahjong is the house favourite, but I&apos;ll lose a whole evening to
          anything with tiles, cards, meeples, or a board. The more rules I have
          to explain, the happier I am.
        </p>
      </NoteCard>
      <Photo
        src="/img/photos/mahjong.jpg"
        alt="Friends gathered around a mahjong game by the fireplace"
        position="center 62%"
        caption="Mahjong night"
      />
    </Collage>
  </Section>
);

export default OffHoursSection;
