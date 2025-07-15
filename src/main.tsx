import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//css
import "./app/styles/reset.scss";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app/router/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
