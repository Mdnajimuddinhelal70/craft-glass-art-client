import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Root from "../Root/Root";
import PrivateRout from "../components/PrivateRout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CardDetails from "../components/CardDetails";
import CraftItem from "../components/CraftItem";
import AddCraftsList from "../components/AddCraftsList/AddCraftsList";
import HelpDetails from "../components/Help/HelpDetails";


  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: "/",
            element:  <Home></Home>
          },
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
          {
            path: "/productDetails/:id",
            element: <CardDetails></CardDetails>,
          },
          {
            path: "/craftItem",
            element: <CraftItem></CraftItem>,
          },
          {
            path: "/help",
            element: <HelpDetails></HelpDetails>,
          },
          {
            path: "/addLsit",
            element: <PrivateRout>
              <AddCraftsList />
            </PrivateRout>,
          },
        ],
      },
  ]);