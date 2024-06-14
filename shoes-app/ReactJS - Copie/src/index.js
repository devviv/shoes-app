import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import  Banner  from './components/Banner';
import  Filter  from './components/Filter';
import  Product  from './components/Product';
import  ShoesDetails  from './components/ShoesDetails';
import  ErrorPage  from './error-page';
import { Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>
      <Navbar />
      <Banner />
      <Filter />
      <Product />
    </div> ,
    errorElement : <ErrorPage />
  },
  {
    path: '/product/:productId',
    element: <div>
    <Navbar />
    <Filter />
    <ShoesDetails />
  </div> ,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
