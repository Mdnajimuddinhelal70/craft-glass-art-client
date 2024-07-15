import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { router } from "./Routes/Routes";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto w-full">
        <RouterProvider router={router} />
      </div>
    </div>
    </AuthProvider>
  </React.StrictMode>
);
