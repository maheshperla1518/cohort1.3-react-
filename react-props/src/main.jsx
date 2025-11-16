import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserApp from './newApp.jsx'
import NewApp from './newApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App /> */}
    
     <NewApp/>
  
  </StrictMode>,
)

