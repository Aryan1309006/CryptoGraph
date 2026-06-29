import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CryptocontextComponent from './context/Cryptocontext.jsx'

createRoot(document.getElementById('root')).render(
 <CryptocontextComponent>
    <App />
  </CryptocontextComponent>,
)
