import NotFoundPage from "@/pages/NotFoundPage";
import ProductDetailPage from "@/pages/Product/ProductDetailPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WorkInProgress } from "./components/common/WorkInProgress";
import HomePage from "./pages/HomePage";

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
    path: "/category/:group/:category/:productId",
    element: <ProductDetailPage />,
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
