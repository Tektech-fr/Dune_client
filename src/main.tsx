import { StrictMode, ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />) as ReactElement,
  },
  {
    path: "/game",
    element: (<div>Game</div>) as ReactElement,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
