import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
