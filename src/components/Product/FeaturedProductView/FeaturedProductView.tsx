import { ProductCard } from "../ProductCard";
import { useGetProductSummaries } from "@/hooks/useGetFeaturedProducts";
import { FeaturedProductsSkeleton } from "./FeaturedProductsSkeleton";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types/product.type";

export const FeaturedProductView = () => {
  const navigate = useNavigate();
  const { data: topRatedProducts, isLoading, error } = useGetProductSummaries();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}/category/${product.categoryId}`);
  };

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div>
      <h2
        className="my-6 text-center text-xl font-bold md:text-4xl"
        style={{ letterSpacing: "0.07em", wordSpacing: "0.3em" }}
      >
        Best Selling Products
      </h2>

      <div
        id="featured-product-container"
        className="mb-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-8"
      >
        {topRatedProducts && topRatedProducts.length > 0 ? (
          topRatedProducts.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
              <ProductCard {...product} />
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductView;
