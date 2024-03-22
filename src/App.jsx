import React from 'react';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';
import { ThemeProvider } from './ThemeContext';

function App() {

  return (
  <ThemeProvider>
    <Navbar />
    <AppRouter />
  </ThemeProvider>
    
  );
}

export default App;
