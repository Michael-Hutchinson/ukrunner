/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { StravaProvider } from './helpers/StravaContext';

const container = document.getElementById('root');
const root = createRoot(container!);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <StravaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StravaProvider>
  </QueryClientProvider>,
);
