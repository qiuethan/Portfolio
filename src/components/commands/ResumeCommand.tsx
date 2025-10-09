import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

// Import the resume PDF
import resumePDF from '../../data/EthanQiu_Resume_Linkedin.pdf';

interface ResumeCommandProps {
  onNavigate: (command: string) => void;
}

const ResumeCommand: React.FC<ResumeCommandProps> = ({ onNavigate }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Ethan_Qiu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#58a6ff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
          Resume
        </h1>
        <p style={{ color: '#8b949e', margin: 0, fontSize: '0.9rem' }}>
          Download or view my resume online
        </p>
      </div>

      {/* Quick Info Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem', 
        marginBottom: '2rem' 
      }}>
        <InteractiveCard style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📋</div>
          <h4 style={{ color: '#58a6ff', margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>Current Role</h4>
          <p style={{ color: '#d4d4d4', margin: 0, fontSize: '0.85rem' }}>
            {portfolioData.about.role}
          </p>
        </InteractiveCard>
        
        <InteractiveCard style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎓</div>
          <h4 style={{ color: '#58a6ff', margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>Education</h4>
          <p style={{ color: '#d4d4d4', margin: 0, fontSize: '0.85rem' }}>
            {portfolioData.about.university}
          </p>
        </InteractiveCard>
        
        <InteractiveCard style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
          <h4 style={{ color: '#58a6ff', margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>Location</h4>
          <p style={{ color: '#d4d4d4', margin: 0, fontSize: '0.85rem' }}>
            {portfolioData.about.location}
          </p>
        </InteractiveCard>
      </div>

      {/* Stats Card */}
      <InteractiveCard style={{ 
        padding: '1.5rem', 
        marginBottom: '1.5rem',
        border: '1px solid #58a6ff'
      }}>
        <h3 style={{ 
          color: '#58a6ff', 
          margin: '0 0 1rem 0', 
          textAlign: 'center',
          fontSize: '1rem'
        }}>
          Quick Stats
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '1rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ color: '#58a6ff', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              Experience
            </div>
            <div style={{ color: '#d4d4d4', fontSize: '1.1rem', fontWeight: 600 }}>
              {portfolioData.experience.length} Roles
            </div>
          </div>
          <div>
            <div style={{ color: '#a371f7', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              Projects
            </div>
            <div style={{ color: '#d4d4d4', fontSize: '1.1rem', fontWeight: 600 }}>
              {portfolioData.projects.length} Built
            </div>
          </div>
          <div>
            <div style={{ color: '#58a6ff', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              Technologies
            </div>
            <div style={{ color: '#d4d4d4', fontSize: '1.1rem', fontWeight: 600 }}>
              {Object.values(portfolioData.skills).flat().length}+
            </div>
          </div>
        </div>
      </InteractiveCard>

      {/* Main Action Buttons */}
      <ButtonContainer style={{ justifyContent: 'center', marginBottom: '1rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleView}
          style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
        >
          <FaEye size={14} style={{ marginRight: '0.5rem' }} />
          View Resume
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
        >
          <FaDownload size={14} style={{ marginRight: '0.5rem' }} />
          Download PDF
        </ActionButton>
      </ButtonContainer>

      {/* Navigation Buttons */}
      <ButtonContainer style={{ justifyContent: 'center' }}>
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
          onClick={() => onNavigate('projects')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          🚀 Projects
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

export default ResumeCommand; 