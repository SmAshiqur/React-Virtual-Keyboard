import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CustomKeyboard from './simple-keyboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CustomKeyboard/>
  </React.StrictMode>
);

