import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AboutCommand from './commands/AboutCommand';
import ProjectsCommand from './commands/ProjectsCommand';
import SkillsCommand from './commands/SkillsCommand';
import ExperienceCommand from './commands/ExperienceCommand';
import ContactCommand from './commands/ContactCommand';
import BlogCommand from './commands/BlogCommand';
import ResumeCommand from './commands/ResumeCommand';
import { OutputLine } from './shared/StyledComponents';

const FullScreenTerminal = styled.div`
  flex: 1;
  background: #0d1117;
  padding: 2rem;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  width: 100%;
  height: calc(100vh - 60px);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TerminalWindow = styled.div`
  width: 100%;
  height: 100%;
  background: #0d1117;
  border: 2px solid #30363d;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(88, 166, 255, 0.15);
`;

const TerminalHeader = styled.div`
  background: #161b22;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #30363d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TerminalButton = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TerminalTitle = styled.span`
  color: #58a6ff;
  font-size: 0.9rem;
`;

const TerminalBody = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  font-size: 0.9rem;
  line-height: 1.6;
  scroll-behavior: smooth;
`;

const InputLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Prompt = styled.span`
  color: #58a6ff;
  margin-right: 0.5rem;
  user-select: none;
`;

const CommandInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  flex: 1;
  caret-color: #58a6ff;
`;

interface Command {
  input: string;
  output: string[] | React.ReactNode;
  type?: 'output' | 'error' | 'success' | 'info';
}

interface TerminalInterfaceProps {
  selectedCommand?: string;
  onCommandExecuted?: () => void;
}

const TerminalInterface: React.FC<TerminalInterfaceProps> = ({ 
  selectedCommand, 
  onCommandExecuted 
}) => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const availableCommands = {
    help: () => [
      'Available commands:',
      '  about      - Learn about me',
      '  projects   - View my projects',
      '  skills     - See my technical skills',
      '  experience - View my work experience',
      '  contact    - Get my contact information',
      '  resume     - Download my resume',
      '  blog       - Read my blog posts',
      '  clear      - Clear the terminal',
      '',
      'Type any command to get started!'
    ],
    about: () => <AboutCommand onNavigate={navigateToCommand} />,
    projects: () => <ProjectsCommand onNavigate={navigateToCommand} />,
    skills: () => <SkillsCommand onNavigate={navigateToCommand} />,
    experience: () => <ExperienceCommand onNavigate={navigateToCommand} />,
    contact: () => <ContactCommand onNavigate={navigateToCommand} />,
    resume: () => <ResumeCommand onNavigate={navigateToCommand} />,
    blog: () => <BlogCommand onNavigate={navigateToCommand} />,
    clear: () => {
      // This won't be called due to special handling in executeCommand
      return [];
    }
  };

  const navigateToCommand = (command: string) => {
    executeCommand(command);
  };

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    
    // Special handling for clear command
    if (trimmedInput === 'clear') {
      setCommands([]);
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      onCommandExecuted?.();
      return;
    }

    const newCommand: Command = {
      input: input,
      output: [],
      type: 'output'
    };

    if (trimmedInput === '') {
      newCommand.output = [];
    } else if (availableCommands[trimmedInput as keyof typeof availableCommands]) {
      const result = availableCommands[trimmedInput as keyof typeof availableCommands]();
      newCommand.output = result;
      newCommand.type = 'success';
    } else {
      newCommand.output = [
        `Command not found: ${input}`,
        'Type "help" to see available commands.'
      ];
      newCommand.type = 'error';
    }

    // Clear previous commands and show only the current one
    setCommands([newCommand]);
    
    // Add to command history
    if (trimmedInput !== '') {
      setCommandHistory(prev => [...prev, input]);
    }
    
    setHistoryIndex(-1);
    onCommandExecuted?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(currentInput);
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  // Auto-execute selected command from navbar
  useEffect(() => {
    if (selectedCommand) {
      executeCommand(selectedCommand);
    }
  }, [selectedCommand]);

  // Auto-focus input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Auto-scroll to top when new command is executed
  useEffect(() => {
    if (terminalBodyRef.current) {
      // Small delay to ensure content is rendered before scrolling
      setTimeout(() => {
        terminalBodyRef.current?.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [commands]);

  // Welcome message and auto-load about
  useEffect(() => {
    // Auto-execute the about command on load
    executeCommand('about');
  }, []);

  return (
    <FullScreenTerminal>
      <TerminalWindow>
        <TerminalHeader>
          <TerminalButtons>
            <TerminalButton color="#ff5f56" />
            <TerminalButton color="#ffbd2e" />
            <TerminalButton color="#27ca3f" />
          </TerminalButtons>
          <TerminalTitle>ethan@portfolio:~$</TerminalTitle>
        </TerminalHeader>
        
        <TerminalBody ref={terminalBodyRef}>
          {commands.map((command, index) => (
            <div key={index}>
              {command.input && (
                <OutputLine type="input">
                  <Prompt>ethan@portfolio:~$</Prompt>
                  {command.input}
                </OutputLine>
              )}
              
              {Array.isArray(command.output) ? (
                command.output.map((line, lineIndex) => (
                  <OutputLine key={lineIndex} type={command.type}>
                    {line}
                  </OutputLine>
                ))
              ) : (
                <div style={{ margin: '1rem 0' }}>
                  {command.output}
                </div>
              )}
            </div>
          ))}
          
          <form onSubmit={handleSubmit}>
            <InputLine>
              <Prompt>ethan@portfolio:~$</Prompt>
              <CommandInput
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command..."
                autoComplete="off"
                spellCheck="false"
              />
            </InputLine>
          </form>
        </TerminalBody>
      </TerminalWindow>
    </FullScreenTerminal>
  );
};

export default TerminalInterface; 