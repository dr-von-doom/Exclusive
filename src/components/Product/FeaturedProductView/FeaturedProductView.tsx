import { ProductCard } from "../ProductCard";
import { useGetProductSummaries } from "@/hooks/useGetFeaturedProducts";
import { SkeletonLoader } from "./FeaturedProductsSkeleton";

export const FeaturedProductView = () => {
  const { data: topRatedProducts, isLoading, error } = useGetProductSummaries();

  if (isLoading) {
    return <SkeletonLoader />;
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
            <ProductCard key={product.name} {...product} />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductView;
