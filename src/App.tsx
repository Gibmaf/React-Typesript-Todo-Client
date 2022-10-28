import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import React, { FC, ReactElement } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Dashboard } from './pages/dashboard/dashboard';
import { customTheme } from './theme/customTheme';
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';

//Create a client
const queryClient = new QueryClient();
const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
