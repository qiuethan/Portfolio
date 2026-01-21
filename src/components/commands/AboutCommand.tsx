import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface AboutCommandProps {
  onNavigate: (command: string) => void;
}

const AboutCommand: React.FC<AboutCommandProps> = ({ onNavigate }) => {
  // Top 5 featured projects
  const featuredProjects = portfolioData.projects.slice(0, 5);
  
  // Top 3 experiences: GDMS, UTMIST Director, UTMIST MLE
  const currentExperiences = [
    portfolioData.experience[0], // GDMS
    portfolioData.experience[1], // Engineering Director
    portfolioData.experience[2], // ML Engineer
  ];

  return (
    <>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ color: '#58a6ff', fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>
          {portfolioData.about.name}
        </h1>
        <p style={{ color: '#a371f7', fontSize: '1rem', margin: '0 0 0.25rem 0' }}>
          {portfolioData.about.role}
        </p>
        <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>
          {portfolioData.about.location} • {portfolioData.about.university}
        </p>
      </div>

      {/* Bio Section */}
      <InteractiveCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: '1.5rem', marginBottom: '1.5rem' }}
      >
        <div style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#d4d4d4' }}>
          {portfolioData.about.bio.split('\n\n').map((paragraph, index) => (
            <p key={index} style={{ margin: '0 0 1rem 0' }}>{paragraph}</p>
          ))}
        </div>
      </InteractiveCard>

      {/* Quick Actions */}
      <ButtonContainer style={{ justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('experience')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          💼 Experience
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('resume')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          📄 Resume
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

      {/* Featured Projects Section */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#58a6ff', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
          🚀 Featured Projects
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '0.75rem'
        }}>
          {featuredProjects.map((project, index) => (
            <InteractiveCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ 
                padding: '1rem', 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => onNavigate('projects')}
            >
              <h3 style={{ 
                color: '#58a6ff', 
                fontSize: '0.95rem', 
                margin: '0 0 0.5rem 0',
                fontWeight: 600
              }}>
                {project.name.replace(/🌌|🐾|💰|🛒|📱|🧠|🌐|🤖|🚶|🛡️|🆔|🎮/g, '').trim()}
              </h3>
              <p style={{ 
                color: '#d4d4d4', 
                fontSize: '0.8rem', 
                lineHeight: '1.5', 
                margin: '0 0 0.75rem 0',
                flex: 1
              }}>
                {project.details.split('🏆')[1]?.split('.')[0] || project.description}
              </p>
              <div style={{ display: 'flex', gap: '0.4rem' }} onClick={(e) => e.stopPropagation()}>
                {project.live && (
                  <ActionButton
                    as="a"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ fontSize: '0.7rem', padding: '0.3rem 0.6rem', flex: 1 }}
                  >
                    <FaExternalLinkAlt size={10} />
                  </ActionButton>
                )}
                {project.github && (
                  <ActionButton
                    as="a"
                    href={project.github!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ fontSize: '0.7rem', padding: '0.3rem 0.6rem', flex: 1 }}
                  >
                    <FaGithub size={10} />
                  </ActionButton>
                )}
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>

      {/* Recent Experience Section */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#58a6ff', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
          💼 Recent Experience
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '0.75rem' 
        }}>
          {currentExperiences.map((exp, index) => (
            <InteractiveCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ 
                padding: '1rem', 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => onNavigate('experience')}
            >
              <h3 style={{ 
                color: '#58a6ff', 
                fontSize: '0.9rem', 
                margin: '0 0 0.25rem 0',
                fontWeight: 600
              }}>
                {exp.title.replace(/🤖|🧠|⚙️|🛡️|🚀|💻/g, '').trim()}
              </h3>
              <p style={{ color: '#a371f7', fontSize: '0.8rem', margin: '0 0 0.25rem 0' }}>
                {exp.company}
              </p>
              <p style={{ color: '#8b949e', fontSize: '0.75rem', margin: '0 0 0.75rem 0' }}>
                {exp.period}
              </p>
              <ul style={{ 
                margin: 0, 
                paddingLeft: '1.1rem', 
                color: '#d4d4d4', 
                fontSize: '0.75rem',
                flex: 1
              }}>
                {exp.responsibilities.slice(0, 2).map((resp, respIndex) => (
                  <li key={respIndex} style={{ marginBottom: '0.3rem', lineHeight: '1.4' }}>
                    {resp.length > 70 ? resp.substring(0, 70) + '...' : resp}
                  </li>
                ))}
              </ul>
            </InteractiveCard>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#58a6ff', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
          ⚡ Hobbies & Interests
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
          gap: '0.75rem' 
        }}>
          {[
            { icon: '🏸', name: 'Badminton', color: '#58a6ff' },
            { icon: '💬', name: 'Debate', color: '#a371f7' },
            { icon: '♟️', name: 'Chess', color: '#58a6ff' },
            { icon: '🏆', name: 'Hackathons', color: '#a371f7' }
          ].map((hobby, index) => (
            <InteractiveCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ 
                padding: '1rem', 
                textAlign: 'center',
                border: `1px solid ${hobby.color}33`
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{hobby.icon}</div>
              <div style={{ color: hobby.color, fontSize: '0.85rem', fontWeight: 500 }}>
                {hobby.name}
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <ButtonContainer style={{ justifyContent: 'center' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('projects')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          🚀 All Projects ({portfolioData.projects.length})
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
          onClick={() => onNavigate('experience')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          💼 All Experience ({portfolioData.experience.length})
        </ActionButton>
      </ButtonContainer>
    </>
  );
};

export default AboutCommand; 