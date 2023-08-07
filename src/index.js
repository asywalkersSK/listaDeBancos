import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BankContextProvider from './context/bankContext';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BankContextProvider>
      <App />
    </BankContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
