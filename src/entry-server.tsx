import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { ThemeProvider } from './context/ThemeContext';

export function render() {
  return renderToString(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
}
