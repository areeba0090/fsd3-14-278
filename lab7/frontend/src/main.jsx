import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'      // whatever main.jsx will include it will automatically include index.css in it.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
