import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  ContactCard,
  ContactIcon,
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
    <>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#58a6ff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
          Get In Touch
        </h1>
        <p style={{ color: '#8b949e', margin: 0, fontSize: '0.9rem' }}>
          Let's connect and build something amazing together
        </p>
      </div>

      {/* Contact Cards - Sleek Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {contactItems.map((item, index) => (
          <ContactCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ padding: '1.5rem' }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <ContactIcon style={{ fontSize: '1.5rem' }}>{item.icon}</ContactIcon>
              <div style={{ flex: 1 }}>
                <ContactLabel style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  {item.label}
                </ContactLabel>
                <ContactValue style={{ fontSize: '0.95rem' }}>
                  {item.value}
                </ContactValue>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={item.action}
                style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', flex: 1 }}
              >
                Open
              </ActionButton>
              <ActionButton
                className="secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(item.value)}
                style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', flex: 1 }}
              >
                <FaCopy size={12} />
                Copy
              </ActionButton>
            </div>
          </ContactCard>
        ))}
      </div>

      {/* CTA */}
      <ButtonContainer style={{ justifyContent: 'center' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('resume')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          📄 Download Resume
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('projects')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          🚀 View Projects
        </ActionButton>
      </ButtonContainer>
    </>
  );
};

export default ContactCommand; 