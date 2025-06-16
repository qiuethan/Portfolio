import React from 'react';
import { FaCode, FaTools, FaDatabase, FaCogs } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  CardTitle,
  SkillCategory,
  SkillCategoryTitle,
  SkillGrid,
  SkillItem,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface SkillsCommandProps {
  onNavigate: (command: string) => void;
}

const SkillsCommand: React.FC<SkillsCommandProps> = ({ onNavigate }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: portfolioData.skills.languages
    },
    {
      title: 'Frameworks',
      icon: <FaCogs />,
      skills: portfolioData.skills.frameworks
    },
    {
      title: 'Libraries',
      icon: <FaDatabase />,
      skills: portfolioData.skills.libraries
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: portfolioData.skills.tools
    }
  ];

  return (
    <InteractiveCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CardTitle style={{ marginBottom: '2rem', textAlign: 'center' }}>
        🛠️ Technical Skills
      </CardTitle>
      
      {skillCategories.map((category, index) => (
        <SkillCategory key={index}>
          <SkillCategoryTitle>
            {category.icon}
            {category.title}
          </SkillCategoryTitle>
          <SkillGrid>
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex}>
                {skill}
              </SkillItem>
            ))}
          </SkillGrid>
        </SkillCategory>
      ))}
      
      <ButtonContainer style={{ justifyContent: 'center', marginTop: '2rem' }}>
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

export default SkillsCommand; 