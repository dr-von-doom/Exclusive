import NotFoundPage from "@/pages/NotFoundPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <p>h1</p>,
    },
    {
      path: "/category",
      element: <p>test 1</p>,
    },
    {
      path: "/category/:group",
      element: <p>test 2</p>,
    },
    {
      path: "/category/:group/:category",
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
