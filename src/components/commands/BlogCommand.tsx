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
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#58a6ff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
          Blog
        </h1>
        <p style={{ color: '#8b949e', margin: 0, fontSize: '0.9rem' }}>
          Thoughts on software engineering, AI, and building cool things
        </p>
      </div>

      {/* Blog Posts */}
      {portfolioData.blog.map((post) => (
        <BlogPost
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ padding: '1.5rem', marginBottom: '1.5rem' }}
        >
          <BlogTitle style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            {post.title}
          </BlogTitle>
          <BlogDate style={{ marginBottom: '1rem' }}>{post.date}</BlogDate>
          <BlogContent style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
            {post.content}
            {' '}<a href={post.url} target="_blank" rel="noopener noreferrer">Read on Substack ↗</a>
          </BlogContent>
        </BlogPost>
      ))}

      {/* More writing */}
      <div style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        background: '#161b22', 
        borderRadius: '8px',
        border: '1px solid #30363d',
        marginBottom: '1.5rem'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧</div>
        <h3 style={{ color: '#58a6ff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
          More on Substack
        </h3>
        <p style={{ color: '#8b949e', margin: 0, fontSize: '0.9rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          <a href="https://coherentboi.substack.com" target="_blank" rel="noopener noreferrer">Read my essays ↗</a>
        </p>
      </div>

      {/* CTA */}
      <ButtonContainer style={{ justifyContent: 'center' }}>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('projects')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          🚀 View Projects
        </ActionButton>
        <ActionButton
          className="secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('contact')}
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
        >
          📧 Get In Touch
        </ActionButton>
      </ButtonContainer>
    </div>
  );
};

export default BlogCommand;
