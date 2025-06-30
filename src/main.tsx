import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AccessibilitySettings from './components/AccessibilitySettings.tsx'
import { ThemeProvider } from './context/themeContext.tsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
{/*       <AccessibilitySettings /> */}
      <Toaster
        position="top-right"
      />
    </ThemeProvider>
  </StrictMode>
);
