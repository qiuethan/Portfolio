import React from 'react';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface ExperienceCommandProps {
  onNavigate: (command: string) => void;
}

const ExperienceCommand: React.FC<ExperienceCommandProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ color: '#58a6ff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
          Experience
        </h1>
        <p style={{ color: '#8b949e', margin: 0, fontSize: '0.9rem' }}>
          {portfolioData.experience.length} roles · Software Engineering, ML, and Leadership
        </p>
      </div>

      {/* Experience Cards - Compact */}
      {portfolioData.experience.map((exp, index) => (
        <InteractiveCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          style={{ padding: '1.25rem', marginBottom: '1rem' }}
        >
          {/* Header Section */}
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ 
              color: '#58a6ff', 
              fontSize: '1.1rem', 
              margin: '0 0 0.5rem 0',
              fontWeight: 600
            }}>
              {exp.title.replace(/🤖|🧠|⚙️|🛡️|🚀|💻|👨‍🏫/g, '').trim()}
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <span style={{ color: '#a371f7', fontSize: '0.95rem' }}>
                {exp.company}
              </span>
              <span style={{ color: '#8b949e', fontSize: '0.85rem' }}>
                {exp.period}
              </span>
            </div>
          </div>
          
          {/* Responsibilities */}
          <ul style={{ 
            margin: '0 0 1rem 0', 
            paddingLeft: '1.25rem',
            color: '#d4d4d4',
            fontSize: '0.9rem'
          }}>
            {exp.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                {responsibility}
              </li>
            ))}
          </ul>
          
          {/* Tech Stack - Compact */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {exp.tech.map((tech, techIndex) => (
              <span 
                key={techIndex}
                style={{
                  padding: '0.25rem 0.5rem',
                  background: 'rgba(163, 113, 247, 0.1)',
                  border: '1px solid #30363d',
                  borderRadius: '4px',
                  color: '#8b949e',
                  fontSize: '0.75rem'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </InteractiveCard>
      ))}
      
      {/* CTA */}
      <ButtonContainer style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('projects')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          🚀 View Projects
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('skills')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          ⚡ View Skills
        </ActionButton>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('contact')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          📧 Contact
        </ActionButton>
      </ButtonContainer>
    </div>
  );
};

export default ExperienceCommand; 