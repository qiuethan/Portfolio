import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TerminalInterface from './components/TerminalInterface';
import NavBar from './components/NavBar';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminalCommand, setTerminalCommand] = useState<string>('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCommandSelect = (command: string) => {
    setTerminalCommand(command);
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}
        >
          <NavBar onCommandSelect={handleCommandSelect} />
          <TerminalInterface selectedCommand={terminalCommand} onCommandExecuted={() => setTerminalCommand('')} />
        </motion.div>
      </AppContainer>
    </>
  );
};

export default App;
