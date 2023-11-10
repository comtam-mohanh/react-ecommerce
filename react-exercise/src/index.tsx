import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Authentication } from './pages/Authentication/Authentication';
import { ProductDetailPage } from './pages/ProductsDetailPage/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ProductsPage /> */}
    <Authentication />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
