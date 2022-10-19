/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StravaProvider from './helpers/context';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StravaProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StravaProvider>,
);
