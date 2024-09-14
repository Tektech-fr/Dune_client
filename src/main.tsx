import { StrictMode, ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Game from "./screens/Game";
import Intro from "./screens/Intro";
import Menu from "./screens/Menu";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Intro />) as ReactElement,
  },
  {
    path: "/game",
    element: (<Game />) as ReactElement,
  },
  {
    path: "/menu",
    element: (<Menu />) as ReactElement,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
