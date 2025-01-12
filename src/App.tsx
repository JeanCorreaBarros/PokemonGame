import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import AppContent from './components/AppContent';

function App() {
  return (
    <PokemonProvider>
      <Router>
        <AppContent />
      </Router>
    </PokemonProvider>
  );
}

export default App;

