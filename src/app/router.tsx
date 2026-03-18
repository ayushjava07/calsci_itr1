import { createBrowserRouter } from "react-router";
import { RootLayout } from "./routes/RootLayout";
import { LandingPage } from "./routes/LandingPage";
import { LoadingFallback } from "./components/LoadingFallback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    hydrateFallbackElement: (
      <LoadingFallback variant="page" label="Loading..." />
    ),
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "privacy",
        lazy: async () => {
          const mod = await import("./routes/PrivacyPage");
          return { Component: mod.PrivacyPage };
        },
      },
      {
        path: "terms",
        lazy: async () => {
          const mod = await import("./routes/TermsPage");
          return { Component: mod.TermsPage };
        },
      },
      {
        path: "cookies",
        lazy: async () => {
          const mod = await import("./routes/CookiesPage");
          return { Component: mod.CookiesPage };
        },
      },
    ],
  },
]);

