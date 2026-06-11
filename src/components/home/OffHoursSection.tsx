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
      <Photo label="A hobby, mid-action" caption="What this is, in your words" />
      <NoteCard lit>
        <p className="note-title">Debate</p>
        <p className="note-body">
          Years around Hart House debate. I ran the back office for Canada&apos;s
          largest university club, 360+ debaters a tournament, and automated the
          boring parts.
        </p>
      </NoteCard>
      <Photo label="Somewhere you go to think" caption="Where + why it matters" />
      <NoteCard lit>
        <p className="note-title">Teaching</p>
        <p className="note-body">
          Three years teaching Python and Java to 30+ kids back home in Ottawa.
          Patience: permanently leveled up.
        </p>
      </NoteCard>
      <NoteCard lit>
        <p className="note-title">League, as a Dataset</p>
        <p className="note-body">
          I turned my League of Legends habit into Heimer Academy, an AI coach
          that ended up winning the AWS hackathon.
        </p>
      </NoteCard>
      <Photo label="Something you made or love" caption="One honest sentence" />
      <NoteCard lit>
        <p className="note-title">Two Cities</p>
        <p className="note-body">
          Split between Toronto and Ottawa. The skyline at the bottom of this
          page is both of them, stitched together.
        </p>
      </NoteCard>
      <Photo label="A hack weekend, 3am" caption="The team, mid-build" />
    </Collage>
  </Section>
);

export default OffHoursSection;
