import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/payment",
    element: <App />,
  },
  {
    path: "/customers",
    element: <App />,
  },
  {
    path: "/messages",
    element: <App />,
  },
  {
    path: "/product",
    element: <App />,
  },
  {
    path: "/invoice",
    element: <App />,
  },
  {
    path: "/analytics",
    element: <App />,
  },
  {
    path: "/settings",
    element: <App />,
  },
  {
    path: "/security",
    element: <App />,
  },
  {
    path: "/help",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
