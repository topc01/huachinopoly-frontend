import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './components/Routing';
import './styles.css';
import AuthProvider from './components/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <Routing />
  </AuthProvider>
  </React.StrictMode>,
)
