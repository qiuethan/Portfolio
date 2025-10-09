import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const NavContainer = styled.nav`
  background: #161b22;
  border-bottom: 2px solid #30363d;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const Logo = styled.div`
  color: #58a6ff;
  font-weight: bold;
  font-size: 1.1rem;
  
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-left: 1.5rem;
  
  @media (max-width: 1024px) {
    margin-left: 1rem;
  }
  
  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const SocialButton = styled(motion.a)`
  background: transparent;
  border: 1px solid #a371f7;
  color: #a371f7;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #a371f7;
    color: #0d1117;
    box-shadow: 0 0 16px rgba(163, 113, 247, 0.4);
  }
  
  @media (max-width: 1024px) {
    padding: 0.3rem;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem;
    font-size: 0.7rem;
  }
`;

const NavButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #58a6ff;
  color: #58a6ff;
  padding: 0.5rem 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #58a6ff;
    color: #0d1117;
    box-shadow: 0 0 16px rgba(88, 166, 255, 0.4);
  }
  
  @media (max-width: 1024px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.65rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem 0.4rem;
    font-size: 0.6rem;
  }
`;



interface NavBarProps {
  onCommandSelect?: (command: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onCommandSelect }) => {
  const commands = [
    { label: 'about', description: 'About me' },
    { label: 'experience', description: 'Work experience' },
    { label: 'projects', description: 'My projects' },
    { label: 'skills', description: 'My skills' },
    { label: 'contact', description: 'Contact me' },
    { label: 'blog', description: 'My blog posts' },
    { label: 'resume', description: 'Download resume' },
    { label: 'help', description: 'All commands' }
  ];

  const handleCommandClick = (command: string) => {
    if (onCommandSelect) {
      onCommandSelect(command);
    } else {
      // Fallback: try to find terminal input and paste command
      const terminalInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (terminalInput) {
        terminalInput.value = command;
        terminalInput.focus();
        
        // Trigger input event to notify React
        const event = new Event('input', { bubbles: true });
        terminalInput.dispatchEvent(event);
      }
    }
  };

  return (
    <NavContainer>
      <Logo>ethanqiu:~$</Logo>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavButtons>
          {commands.map((cmd, index) => (
            <NavButton
              key={cmd.label}
              onClick={() => handleCommandClick(cmd.label)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              title={cmd.description}
            >
              {cmd.label}
            </NavButton>
          ))}
        </NavButtons>
        
        <SocialButtons>
          <SocialButton
            href="mailto:ethanqiu@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Email"
          >
            <FaEnvelope />
          </SocialButton>
          <SocialButton
            href="https://github.com/qiuethan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="GitHub"
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            href="https://linkedin.com/in/qiu-ethan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="LinkedIn"
          >
            <FaLinkedin />
          </SocialButton>
        </SocialButtons>
      </div>
    </NavContainer>
  );
};

export default NavBar; 