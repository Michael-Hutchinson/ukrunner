import React from 'react';
import GlobalStyle from './App.styles';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Navbar />
      <Activities />
    </div>
  );
}

export default App;
