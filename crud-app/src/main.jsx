import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Timer.jsx'
import Timer from './Timer.jsx'
import Dashboard from './Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Timer/> */}
    <Dashboard/>
  </StrictMode>,
)
