import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface SkillsCommandProps {
  onNavigate: (command: string) => void;
}

const SkillsCommand: React.FC<SkillsCommandProps> = ({ onNavigate }) => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: portfolioData.skills.languages,
      color: '#58a6ff'
    },
    {
      title: 'Frameworks',
      skills: portfolioData.skills.frameworks,
      color: '#a371f7'
    },
    {
      title: 'Libraries',
      skills: portfolioData.skills.libraries,
      color: '#58a6ff'
    },
    {
      title: 'Tools',
      skills: portfolioData.skills.tools,
      color: '#a371f7'
    }
  ];

  return (
    <>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ color: '#58a6ff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
          Technical Skills
        </h1>
        <p style={{ color: '#8b949e', margin: 0, fontSize: '0.9rem' }}>
          {Object.values(portfolioData.skills).flat().length}+ technologies across full-stack development, ML, and cloud
        </p>
      </div>

      {/* Skills Grid - Compact Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {skillCategories.map((category, index) => (
          <InteractiveCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ padding: '1.25rem' }}
          >
            <h3 style={{ 
              color: category.color, 
              fontSize: '1rem', 
              margin: '0 0 1rem 0',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}>
              {category.title}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    padding: '0.4rem 0.75rem',
                    background: 'rgba(88, 166, 255, 0.1)',
                    border: '1px solid #30363d',
                    borderRadius: '6px',
                    color: '#d4d4d4',
                    fontSize: '0.85rem',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = category.color;
                    e.currentTarget.style.background = `${category.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#30363d';
                    e.currentTarget.style.background = 'rgba(88, 166, 255, 0.1)';
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </InteractiveCard>
        ))}
      </div>

      {/* Call to Action */}
      <ButtonContainer style={{ justifyContent: 'center', marginTop: '1rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('projects')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          🚀 See Projects
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('experience')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          💼 View Experience
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
    </>
  );
};

export default SkillsCommand; 