import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./styles/index.css";
import { router } from "./app/router";
import { LoadingFallback } from "./app/components/LoadingFallback";

createRoot(document.getElementById("root")!).render(
  <RouterProvider
    router={router}
    fallbackElement={<LoadingFallback variant="page" label="Loading..." />}
  />
);