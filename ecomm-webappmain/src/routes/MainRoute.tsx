import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Base from "../pages/Base/Base";

const MainRoute = () => {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Base />,
         children: [
            {
               path: "/",
               element: <Home />,
            },
            {
               path: "/product",
               element: <Product />,
            },
         ],
      },
      {
         path: "/login",
         element: <Login />,
      },
   ]);

   return <RouterProvider router={router} />;
};

export default MainRoute;
