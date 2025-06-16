import styled from 'styled-components';
import { motion } from 'framer-motion';

// Interactive Card Components
export const InteractiveCard = styled(motion.div)`
  background: #1a1a1a;
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ccff;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
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
  color: #00ccff;
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardContent = styled.div`
  color: #cccccc;
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
  border: 1px solid #00ff00;
  color: #00ff00;
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
    background: #00ff00;
    color: #0a0a0a;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
  
  &.secondary {
    border-color: #00ccff;
    color: #00ccff;
    
    &:hover {
      background: #00ccff;
      color: #0a0a0a;
      box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);
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
  background: #00ff00;
  color: #0a0a0a;
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
      case 'error': return '#ff4444';
      case 'success': return '#00ff00';
      case 'info': return '#00ccff';
      default: return '#cccccc';
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
  color: #00ccff;
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
  background: #1a1a1a;
  border: 1px solid #333;
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ff00;
    background: #222;
    transform: translateY(-2px);
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
  background: #111;
  border-radius: 6px;
  border: 1px solid #333;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ff00;
  }
`;

export const ContactIcon = styled.div`
  color: #00ccff;
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
  color: #00ff00;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ContactValue = styled.div`
  color: #cccccc;
  font-size: 0.9rem;
`;

// Blog Components
export const BlogPost = styled(motion.div)`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  
  &:hover {
    border-color: #00ff00;
  }
`;

export const BlogTitle = styled.h3`
  color: #00ccff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

export const BlogDate = styled.div`
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const BlogContent = styled.div`
  color: #cccccc;
  line-height: 1.6;
  white-space: pre-wrap;
`; 