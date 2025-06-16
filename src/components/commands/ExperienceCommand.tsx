import React from 'react';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  CardHeader,
  CardTitle,
  CardContent,
  TechStack,
  TechTag,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface ExperienceCommandProps {
  onNavigate: (command: string) => void;
}

const ExperienceCommand: React.FC<ExperienceCommandProps> = ({ onNavigate }) => {
  return (
    <div>
      {portfolioData.experience.map((exp, index) => (
        <InteractiveCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <CardHeader>
            <div>
              <CardTitle>{exp.title}</CardTitle>
              <div style={{ color: '#00ccff', fontSize: '1rem', marginTop: '0.5rem' }}>
                {exp.company}
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {exp.period}
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              {exp.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </CardContent>
          
          <TechStack>
            {exp.tech.map((tech, techIndex) => (
              <TechTag key={techIndex}>{tech}</TechTag>
            ))}
          </TechStack>
        </InteractiveCard>
      ))}
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <ButtonContainer style={{ justifyContent: 'center' }}>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('projects')}
          >
            🚀 View Projects
          </ActionButton>
          <ActionButton
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
          >
            📧 Get In Touch
          </ActionButton>
        </ButtonContainer>
      </div>
    </div>
  );
};

export default ExperienceCommand; 