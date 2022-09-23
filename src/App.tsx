import React from 'react';
import GlobalStyle from './App.styles';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Activities />
    </div>
  );
}

export default App;
