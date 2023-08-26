import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: "",
      children: [
        {
          path: "/",
          element:"",
        },
        {
          path: "/users",
          element: "",
        },
        {
          path: "/products",
          element: "",
        },
      ],
    },
    {
      path: "/login",
      element: ""
    }
  ]);
const MainRoute = () => {
    return <RouterProvider router={router} />
}
export default MainRoute;