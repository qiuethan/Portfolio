import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Courier New', 'Lucida Console', Monaco, monospace;
    background: #0d1117;
    color: #d4d4d4;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Selection colors */
  ::selection {
    background: #58a6ff;
    color: #ffffff;
  }

  ::-moz-selection {
    background: #58a6ff;
    color: #ffffff;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #161b22;
  }

  ::-webkit-scrollbar-thumb {
    background: #30363d;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #484f58;
  }

  /* Terminal cursor animation */
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .cursor {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: #58a6ff;
    animation: blink 1s infinite;
    vertical-align: text-top;
  }

  /* Terminal typing animation */
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  .typing {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #58a6ff;
    animation: typing 2s steps(40, end), blink 1s infinite step-end;
  }

  /* Smooth fade-in animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  /* Links */
  a {
    color: #58a6ff;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #79c0ff;
    text-shadow: 0 0 8px rgba(88, 166, 255, 0.4);
  }

  /* Focus styles */
`;

export default GlobalStyles; 