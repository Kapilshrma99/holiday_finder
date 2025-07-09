import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App'
import Countrycontxtprovider from './context/Countrycontxtprovider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countrycontxtprovider>
    <App />
    </Countrycontxtprovider>
   </StrictMode>,
)
