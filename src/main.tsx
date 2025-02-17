import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AccessibilitySettings from './components/AccessibilitySettings.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AccessibilitySettings />
  </StrictMode>,
)
