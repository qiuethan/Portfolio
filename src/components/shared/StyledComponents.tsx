import styled from 'styled-components';
import { motion } from 'framer-motion';

// Interactive Card Components
export const InteractiveCard = styled(motion.div)`
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #58a6ff;
    box-shadow: 0 0 20px rgba(88, 166, 255, 0.15);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const CardTitle = styled.h3`
  color: #58a6ff;
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardContent = styled.div`
  color: #d4d4d4;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const ActionButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #58a6ff;
  color: #58a6ff;
  padding: 0.5rem 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #58a6ff;
    color: #0d1117;
    box-shadow: 0 0 16px rgba(88, 166, 255, 0.4);
  }
  
  &.secondary {
    border-color: #a371f7;
    color: #a371f7;
    
    &:hover {
      background: #a371f7;
      color: #0d1117;
      box-shadow: 0 0 16px rgba(163, 113, 247, 0.4);
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const TechTag = styled.span`
  background: #388bfd;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const OutputLine = styled.div<{ type?: 'input' | 'output' | 'error' | 'success' | 'info' }>`
  margin-bottom: 0.5rem;
  color: ${props => {
    switch (props.type) {
      case 'input': return '#ffffff';
      case 'error': return '#f85149';
      case 'success': return '#58a6ff';
      case 'info': return '#58a6ff';
      default: return '#d4d4d4';
    }
  }};
  white-space: pre-wrap;
  word-break: break-word;
`;

// Skills Components
export const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

export const SkillCategoryTitle = styled.h4`
  color: #58a6ff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
`;

export const SkillItem = styled.div`
  background: #161b22;
  border: 1px solid #30363d;
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #58a6ff;
    background: #1c2128;
    transform: translateY(-2px);
    box-shadow: 0 0 12px rgba(88, 166, 255, 0.15);
  }
`;

// Contact Components
export const ContactCard = styled(InteractiveCard)`
  max-width: 600px;
  margin: 1rem auto;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #0d1117;
  border-radius: 6px;
  border: 1px solid #30363d;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #58a6ff;
    background: #161b22;
  }
`;

export const ContactIcon = styled.div`
  color: #58a6ff;
  font-size: 1.2rem;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const ContactLabel = styled.div`
  color: #58a6ff;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ContactValue = styled.div`
  color: #d4d4d4;
  font-size: 0.9rem;
`;

// Blog Components
export const BlogPost = styled(motion.div)`
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  
  &:hover {
    border-color: #58a6ff;
    box-shadow: 0 0 12px rgba(88, 166, 255, 0.15);
  }
`;

export const BlogTitle = styled.h3`
  color: #58a6ff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

export const BlogDate = styled.div`
  color: #8b949e;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const BlogContent = styled.div`
  color: #d4d4d4;
  line-height: 1.6;
  white-space: pre-wrap;
`; 