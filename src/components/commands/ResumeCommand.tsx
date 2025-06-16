import React from 'react';
import { FaDownload, FaFileAlt, FaEye } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  CardHeader,
  CardTitle,
  CardContent,
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
    <InteractiveCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CardHeader>
        <CardTitle>
          <FaFileAlt />
          📄 Resume
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem', 
          marginBottom: '2rem' 
        }}>
          <div style={{ 
            background: '#111', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            border: '1px solid #333',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
            <h4 style={{ color: '#00ccff', margin: '0 0 0.5rem 0' }}>Current Role</h4>
            <p style={{ color: '#cccccc', margin: 0, fontSize: '0.9rem' }}>
              {portfolioData.about.role}
            </p>
          </div>
          
          <div style={{ 
            background: '#111', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            border: '1px solid #333',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h4 style={{ color: '#00ccff', margin: '0 0 0.5rem 0' }}>Education</h4>
            <p style={{ color: '#cccccc', margin: 0, fontSize: '0.9rem' }}>
              {portfolioData.about.university}
            </p>
          </div>
          
          <div style={{ 
            background: '#111', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            border: '1px solid #333',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
            <h4 style={{ color: '#00ccff', margin: '0 0 0.5rem 0' }}>Location</h4>
            <p style={{ color: '#cccccc', margin: 0, fontSize: '0.9rem' }}>
              {portfolioData.about.location}
            </p>
          </div>
        </div>

        <div style={{ 
          background: '#1a1a1a', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          border: '1px solid #00ff00',
          marginBottom: '1.5rem'
        }}>
          <h4 style={{ color: '#00ff00', margin: '0 0 1rem 0', textAlign: 'center' }}>
            📄 Resume Quick Facts
          </h4>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '1rem',
            textAlign: 'center'
          }}>
            <div>
              <strong style={{ color: '#00ccff' }}>Experience:</strong><br />
              <span style={{ color: '#cccccc' }}>{portfolioData.experience.length}+ Roles</span>
            </div>
            <div>
              <strong style={{ color: '#00ccff' }}>Projects:</strong><br />
              <span style={{ color: '#cccccc' }}>{portfolioData.projects.length}+ Projects</span>
            </div>
            <div>
              <strong style={{ color: '#00ccff' }}>Skills:</strong><br />
              <span style={{ color: '#cccccc' }}>
                {Object.values(portfolioData.skills).flat().length}+ Technologies
              </span>
            </div>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          padding: '1rem', 
          background: '#111', 
          borderRadius: '6px',
          border: '1px solid #333',
          marginBottom: '1.5rem'
        }}>
          <p style={{ color: '#00ff00', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
            💡 Resume Actions
          </p>
          <p style={{ color: '#aaa', margin: 0, fontSize: '0.8rem' }}>
            View online or download PDF for offline viewing and printing
          </p>
        </div>
      </CardContent>
      
      <ButtonContainer style={{ justifyContent: 'center' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleView}
        >
          <FaEye />
          View Resume
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
        >
          <FaDownload />
          Download PDF
        </ActionButton>
      </ButtonContainer>

      <ButtonContainer style={{ justifyContent: 'center', marginTop: '1rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('experience')}
        >
          💼 View Experience
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
    </InteractiveCard>
  );
};

export default ResumeCommand; 