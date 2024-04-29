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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/craftCard.json")
      },
      {
        path:"/craftItem",
        element:<CraftItem></CraftItem>
      },
      {
        path: '/craft',
        element: <DbCraftCards></DbCraftCards>,
        loader: () => fetch('http://localhost:5001/craft')
      },
      {
        path: '/updateCraft/:id',
        element: <UpdateCraft></UpdateCraft>,
        loader: ({params}) => fetch(`http://localhost:5001/craft/${params.id}`)
      }
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
