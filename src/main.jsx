import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import CardDetails from './components/CardDetails';
import CraftItem from './components/CraftItem';
import DbCraftCards from './components/DbCraftCards';
import UpdateCraft from './components/UpdateCraft';
import PrivateRout from './components/PrivateRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <PrivateRout> <Home></Home></PrivateRout>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/craft/:id',
        element: <CardDetails></CardDetails>
      },
      {
        path:"/craftItem",
        element:<CraftItem></CraftItem>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
