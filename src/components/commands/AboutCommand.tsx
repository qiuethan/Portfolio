import React from 'react';
import { FaCode } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  CardHeader,
  CardTitle,
  CardContent,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface AboutCommandProps {
  onNavigate: (command: string) => void;
}

const AboutCommand: React.FC<AboutCommandProps> = ({ onNavigate }) => {
  return (
    <InteractiveCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CardHeader>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          width: '100%'
        }}>
          <CardTitle>
            <FaCode />
            About {portfolioData.about.name}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <strong style={{ color: '#00ccff' }}>Role:</strong><br />
            {portfolioData.about.role}
          </div>
          <div>
            <strong style={{ color: '#00ccff' }}>Location:</strong><br />
            {portfolioData.about.location}
          </div>
          <div>
            <strong style={{ color: '#00ccff' }}>University:</strong><br />
            {portfolioData.about.university}
          </div>
        </div>
        
        <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          {portfolioData.about.bio.split('\n\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
      
      <ButtonContainer>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('experience')}
        >
          💼
          View Experience
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('projects')}
        >
          <FaCode />
          View Projects
        </ActionButton>
      </ButtonContainer>
    </InteractiveCard>
  );
};

export default AboutCommand; 