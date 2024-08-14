import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import PrivateRout from "../components/PrivateRout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CardDetails from "../components/CardDetails";
import CraftItem from "../components/CraftItem";
import AddCraftsList from "../components/AddCraftsList/AddCraftsList";
import HelpDetails from "../components/Help/HelpDetails";
import AddListDetails from "../components/AddCraftsList/AddListDetails";
import MyCraftList from "../components/MyCraftList/MyCraftList";
import MyListUpdate from "../components/MyCraftList/MyListUpdate";
import ErrorPage from "./../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element: (
          <PrivateRout>
            <CardDetails></CardDetails>
          </PrivateRout>
        ),
      },
      {
        path: "/craftItem",
        element: (
          <PrivateRout>
            <CraftItem></CraftItem>
          </PrivateRout>
        ),
      },
      {
        path: "/addListDetails/:id",
        element: <AddListDetails></AddListDetails>,
      },
      {
        path: "/myLitsUpdate/:id",
        element: <MyListUpdate></MyListUpdate>,
      },

      {
        path: "/help",
        element: <HelpDetails></HelpDetails>,
      },
      {
        path: "/craftList",
        element: <MyCraftList></MyCraftList>,
      },
      {
        path: "/addList",
        element: <AddCraftsList />,
      },
    ],
  },
]);
