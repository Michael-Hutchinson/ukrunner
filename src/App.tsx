import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './App.styles';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Navbar />
        <Hero />
        <Activities />
      </div>
    </Router>
  );
}

export default App;
