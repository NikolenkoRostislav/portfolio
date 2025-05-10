import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './utils/i18n/i18n.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
