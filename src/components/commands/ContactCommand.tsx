import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  ContactCard,
  ContactItem,
  ContactIcon,
  ContactInfo,
  ContactLabel,
  ContactValue,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface ContactCommandProps {
  onNavigate: (command: string) => void;
}

const ContactCommand: React.FC<ContactCommandProps> = ({ onNavigate }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: portfolioData.contact.email,
      action: () => window.open(`mailto:${portfolioData.contact.email}`, '_blank')
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/qiuethan',
      action: () => window.open(portfolioData.contact.github, '_blank')
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/qiu-ethan',
      action: () => window.open(portfolioData.contact.linkedin, '_blank')
    }
  ];

  return (
    <ContactCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: '#00ccff', margin: '0 0 0.5rem 0' }}>
          📧 Get In Touch
        </h2>
        <p style={{ color: '#cccccc', margin: 0 }}>
          Let's connect and build something amazing together!
        </p>
      </div>

      {contactItems.map((item, index) => (
        <ContactItem key={index}>
          <ContactIcon>{item.icon}</ContactIcon>
          <ContactInfo>
            <ContactLabel>{item.label}</ContactLabel>
            <ContactValue>{item.value}</ContactValue>
          </ContactInfo>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={item.action}
              style={{ padding: '0.5rem' }}
            >
              {item.label === 'Email' ? '📧' : item.label === 'GitHub' ? '🔗' : '💼'}
            </ActionButton>
            <ActionButton
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => copyToClipboard(item.value)}
              style={{ padding: '0.5rem' }}
            >
              <FaCopy />
            </ActionButton>
          </div>
        </ContactItem>
      ))}

      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        padding: '1rem', 
        background: '#111', 
        borderRadius: '6px',
        border: '1px solid #333'
      }}>
        <p style={{ color: '#00ff00', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
          💡 Quick Tip
        </p>
        <p style={{ color: '#aaa', margin: 0, fontSize: '0.8rem' }}>
          Click the copy button to copy contact info to your clipboard!
        </p>
      </div>

      <ButtonContainer style={{ justifyContent: 'center', marginTop: '2rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('about')}
        >
          👤 Back to About
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('blog')}
        >
          📝 Read Blog
        </ActionButton>
      </ButtonContainer>
    </ContactCard>
  );
};

export default ContactCommand; 