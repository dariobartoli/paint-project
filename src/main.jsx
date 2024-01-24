import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CasaProvider } from './context/CasaContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CasaProvider>
      <App/>
    </CasaProvider>
  </React.StrictMode>,
)
