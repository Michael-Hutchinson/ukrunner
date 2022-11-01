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
        <link
          type="text/css"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
        />
      </Helmet>
      <GlobalStyle />
      <RouteHandler />
    </HelmetProvider>
  );
}

export default App;
