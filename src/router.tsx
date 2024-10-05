import NotFoundPage from "@/pages/NotFoundPage";
import ProductDetailPage from "@/pages/Product/ProductDetailPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WorkInProgress } from "./components/common/WorkInProgress";
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/Shopping-cart/ShoppingCartPage";

const router = createBrowserRouter([
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
    path: "/product/:productId/category/:categoryId",
    element: <ProductDetailPage />,
  },
  {
    path: "/cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
