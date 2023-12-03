import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <provider>
    <App />
    </provider>
  </React.StrictMode>,
)
