import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products/:category/:subcategory/",
      element: <ProductListPage />,
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
