import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { PrimeReactProvider } from "primereact/api";
import { Link } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <PrimeReactProvider value={{ unstyled: false, pt: {} }}>
   <App />
</PrimeReactProvider>
  </React.StrictMode>,
)
