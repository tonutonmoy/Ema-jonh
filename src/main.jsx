import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Orders from './Component/Orders/Orders';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import cartProductsLoader from './Loaders/cartProductsLoader';
import CheckOut from './Component/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
    
      path:'/',
      element: <Shop></Shop>,
      loader: ()=> fetch('http://localhost:5000/totalProduct')
 
    },

    {

      path:"orders",
      element: <Orders></Orders>,
      loader: cartProductsLoader
    },

    {
        path:'inventory',
        element: <Inventory></Inventory>
    },

    {
      path: "/login",
      element: <Login></Login>
    },

    {

      path:'checkOut',
      element: <CheckOut></CheckOut>
    }
  ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
