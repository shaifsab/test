import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/theme';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider> 
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
