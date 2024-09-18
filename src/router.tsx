import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    basename: "/exclusive",
  },
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
