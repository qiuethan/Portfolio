import React from 'react';
import styled from 'styled-components';
import Glass from '../glass/Glass';
import Photo from '../glass/Photo';
import { Section, SectionHead } from '../glass/primitives';

const Collage = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  > * {
    min-height: 190px;
  }

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
  justify-content: space-between;

  .note-title {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .note-body {
    font-size: 13.5px;
    color: var(--ink-soft);
    line-height: 1.55;
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
      <NoteCard lit>
        <p className="note-title">Debate</p>
        <p className="note-body">
          Debating since high school: two straight years at Canadian Nationals,
          then NAUDC once I hit university. These days I run HHHS and keep Hart
          House&apos;s tournaments turning for hundreds of debaters.
        </p>
      </NoteCard>
      <Photo label="Badminton, mid-rally" caption="On the court" />
      <NoteCard lit>
        <p className="note-title">Badminton</p>
        <p className="note-body">
          Three times a week until I tire myself out. Nowhere near varsity
          material, but intramurals have my whole heart.
        </p>
      </NoteCard>
      <NoteCard lit>
        <p className="note-title">Travelling</p>
        <p className="note-body">
          Always plotting the next trip. New cities, worse sleep schedules, and a
          camera roll I never get around to organizing.
        </p>
      </NoteCard>
      <Photo label="Somewhere new" caption="Latest stamp in the passport" />
      <NoteCard lit>
        <p className="note-title">Teaching</p>
        <p className="note-body">
          Three years teaching Python and Java to 30+ kids back home in Ottawa.
          Patience: permanently leveled up.
        </p>
      </NoteCard>
      <Photo label="Teaching, in action" caption="Whiteboard mode" />
    </Collage>
  </Section>
);

export default OffHoursSection;
