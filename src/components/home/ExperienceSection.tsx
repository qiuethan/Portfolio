import { Section, SectionHead } from '../glass/primitives';
import ExperienceCards from '../work/ExperienceCards';
import { pastRoles } from '../../data/home';

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHead>
        <h2>Past experience</h2>
        <span className="note">The teams and work that got me here</span>
      </SectionHead>
      <ExperienceCards roles={pastRoles} />
    </Section>
  );
}
