import NotFoundPage from "@/pages/NotFoundPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WorkInProgress } from "./components/common/WorkInProgress";
import ProductDetailPage from "./pages/Product/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductDetailPage />,
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
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
