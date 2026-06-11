import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import AgentView from './components/agent/AgentView';
import { isAgentVisitor } from './utils/agentDetection';

const App: React.FC = () => {
  // Decided once at mount — user-agent and the ?view= override don't change
  // mid-session, and we don't want the view flipping under the visitor.
  const [isAgent] = useState(isAgentVisitor);

  if (isAgent) {
    return (
      <>
        <GlobalStyles />
        <AgentView />
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
