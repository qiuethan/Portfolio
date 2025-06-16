import React from 'react';
import { portfolioData } from '../../data/portfolio';
import {
  BlogPost,
  BlogTitle,
  BlogDate,
  BlogContent,
  ButtonContainer,
  ActionButton
} from '../shared/StyledComponents';

interface BlogCommandProps {
  onNavigate: (command: string) => void;
}

const BlogCommand: React.FC<BlogCommandProps> = ({ onNavigate }) => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: '#00ccff', margin: '0 0 0.5rem 0' }}>
          📝 Blog Posts
        </h2>
        <p style={{ color: '#cccccc', margin: 0 }}>
          Thoughts on software engineering, AI, and building cool things
        </p>
      </div>

      {portfolioData.blog.map((post) => (
        <BlogPost
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BlogTitle>{post.title}</BlogTitle>
          <BlogDate>{post.date}</BlogDate>
          <BlogContent>{post.content}</BlogContent>
        </BlogPost>
      ))}

      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        padding: '1.5rem', 
        background: '#1a1a1a', 
        borderRadius: '8px',
        border: '1px solid #333'
      }}>
        <p style={{ color: '#00ff00', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
          🚧 More Coming Soon!
        </p>
        <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>
          I'm working on more blog posts about my projects, AI experiments, and software engineering insights. 
          Stay tuned!
        </p>
      </div>

      <ButtonContainer style={{ justifyContent: 'center', marginTop: '2rem' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('projects')}
        >
          🚀 View Projects
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
    </div>
  );
};

export default BlogCommand; 