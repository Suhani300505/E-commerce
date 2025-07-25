import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // Tailwind CSS styles
import ShopContextProvider from './Context/ShopContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  
);
