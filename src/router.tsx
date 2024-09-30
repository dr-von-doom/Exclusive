import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkInProgress from "./components/WorkInProgress";
import { ShoppingCartPage } from "./pages/Shopping-cart/ShoppingCartPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/category",
      element: <WorkInProgress />,
    },
    {
      path: "/category/:group",
      element: <WorkInProgress />,
    },
    {
      path: "/category/:group/:category",
      element: <ProductListPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/cart",
      element: <ShoppingCartPage />,
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
