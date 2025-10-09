import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface ProjectsCommandProps {
  onNavigate: (command: string) => void;
}

const ProjectsCommand: React.FC<ProjectsCommandProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ color: '#58a6ff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
          Projects
        </h1>
        <p style={{ color: '#8b949e', margin: 0, fontSize: '0.9rem' }}>
          {portfolioData.projects.length} projects · Full-stack, AI, and Computer Vision
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {portfolioData.projects.map((project, index) => (
          <InteractiveCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            style={{
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Title */}
            <h3 style={{ 
              color: '#58a6ff', 
              fontSize: '1.1rem', 
              margin: '0 0 0.75rem 0',
              fontWeight: 600
            }}>
              {project.name.replace(/🌌|🐾|💰|🛒|📱|🧠|🌐|🤖|🚶|🛡️/g, '').trim()}
            </h3>
            
            {/* Description */}
            <p style={{ 
              color: '#d4d4d4', 
              fontSize: '0.9rem', 
              lineHeight: '1.6', 
              marginBottom: '1rem',
              flex: 1
            }}>
              {project.details.split('🏆')[1]?.split('.')[0] || project.description}
            </p>
            
            {/* Tech Stack - Compact */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.4rem', 
              marginBottom: '1rem' 
            }}>
              {project.tech.slice(0, 4).map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  style={{
                    padding: '0.25rem 0.5rem',
                    background: 'rgba(88, 166, 255, 0.1)',
                    border: '1px solid #30363d',
                    borderRadius: '4px',
                    color: '#8b949e',
                    fontSize: '0.75rem'
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span style={{ color: '#8b949e', fontSize: '0.75rem', alignSelf: 'center' }}>
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
            
            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
              {project.live && (
                <ActionButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.live, '_blank')}
                  style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem', flex: 1 }}
                >
                  <FaExternalLinkAlt size={10} />
                  Demo
                </ActionButton>
              )}
              <ActionButton
                className="secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.github, '_blank')}
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem', flex: 1 }}
              >
                <FaGithub size={10} />
                Code
              </ActionButton>
            </div>
          </InteractiveCard>
        ))}
      </div>
      
      {/* CTA */}
      <ButtonContainer style={{ justifyContent: 'center' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('skills')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          ⚡ View Skills
        </ActionButton>
        <ActionButton
          className="secondary"
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

export default ProjectsCommand; 