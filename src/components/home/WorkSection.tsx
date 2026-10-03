import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section, SectionHead, GhostBtn } from '../glass/primitives';
import WorkGallery from '../work/WorkGallery';
import { selectedProjects } from '../../data/home';

const Browse = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;
`;

export default function WorkSection() {
  return (
    <Section id="work">
      <SectionHead>
        <h2>Selected work</h2>
        <span className="note">Six projects worth a closer look</span>
      </SectionHead>
      <WorkGallery items={selectedProjects} />
      <Browse>
        <GhostBtn as={Link} to="/work">Browse all work →</GhostBtn>
      </Browse>
    </Section>
  );
}
