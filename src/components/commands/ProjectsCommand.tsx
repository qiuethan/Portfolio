import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import {
  InteractiveCard,
  CardHeader,
  CardTitle,
  CardContent,
  ButtonContainer,
  ActionButton,
  TechStack,
  TechTag
} from '../shared/StyledComponents';

interface ProjectsCommandProps {
  onNavigate: (command: string) => void;
}

const ProjectsCommand: React.FC<ProjectsCommandProps> = ({ onNavigate }) => {
  return (
    <div>
      {portfolioData.projects.map((project, index) => (
        <InteractiveCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <ButtonContainer>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.github, '_blank')}
              >
                <FaGithub />
                GitHub
              </ActionButton>
              {project.live && (
                <ActionButton
                  className="secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </ActionButton>
              )}
            </ButtonContainer>
          </CardHeader>
          
          <CardContent>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
              {project.description}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
              {project.details}
            </p>
          </CardContent>
          
          <TechStack>
            {project.tech.map((tech, techIndex) => (
              <TechTag key={techIndex}>{tech}</TechTag>
            ))}
          </TechStack>
        </InteractiveCard>
      ))}
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('skills')}
        >
          🛠️ View Skills
        </ActionButton>
      </div>
    </div>
  );
};

export default ProjectsCommand; 