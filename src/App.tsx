import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import GlobalStyle from './App.styles';
import PageTitles from './constants/PageTitles';
import RouteHandler from './routes/Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{PageTitles.Home}</title>
      </Helmet>
      <GlobalStyle />
      <RouteHandler />
    </HelmetProvider>
  );
}

export default App;
