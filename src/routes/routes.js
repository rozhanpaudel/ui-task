import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllBeer from "../pages/AllBeer";
import MyBeer from "../pages/MyBeer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllBeer />,
  },
  {
    path: "/mybeers",
    element: <MyBeer />,
  },
]);

function DeployRoutes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default DeployRoutes;
