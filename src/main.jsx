import React from 'react'
import ErrorPage from './error-page.jsx'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 
import LoginPage from './LoginPage.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Profile from './Profile.jsx';
 const router = createBrowserRouter([
 {
   path: '/',
   element:<MainLayout/>,
   errorElement:<ErrorPage/>,
   children:[
    {
      path:'/profile',
      element:<Profile/>,
      errorElement:<ErrorPage/>
    },
    {path:'/dashboard',
    element:<h1>User Dashboard</h1>,
    errorElement:<ErrorPage/>
   },
   {path:'/ecommerce',
    element:<h1></h1>,
    errorElement:<ErrorPage/>
   },
   {path:'/user',
    element:<h1>User</h1>,
    errorElement:<ErrorPage/>
   },
   {path:'/documentation',
    element:<h1>Documentation</h1>,
    errorElement:<ErrorPage/>
   }
   ]
 },
 {
  path:'/login',
  element:<LoginPage/>,
  errorElement:<ErrorPage/>
 },
 
 ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
