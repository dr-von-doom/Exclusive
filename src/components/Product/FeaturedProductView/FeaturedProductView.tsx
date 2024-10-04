import { ProductCard } from "../ProductCard";
import { useGetFeaturedProducts } from "@/hooks/useGetFeaturedProducts";
import { FeaturedProductsSkeleton } from "./FeaturedProductsSkeleton";
import { Link } from "react-router-dom"; 
import { Product } from "@/types/product.type";

export const FeaturedProductView = () => {
  const { data: topRatedProducts, isLoading, error } = useGetFeaturedProducts();

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  if (error) {
    return <div className="text-center p-5 text-xl">Error loading products: {error.message}</div>;
  }

  return (
    <div>
      <FeaturedProductsSkeleton />
      <h2
        className="my-6 text-center text-xl font-bold md:text-4xl"
        style={{ wordSpacing: "0.3em" }}
      >
        Best Selling Products
      </h2>

      <div
        id="featured-product-container"
        className="mb-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-8"
      >
        {topRatedProducts && topRatedProducts.length > 0 ? (
          topRatedProducts.map((product: Product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}/category/${product.categoryId}`} 
              className="block" 
            >
              <ProductCard {...product} />
            </Link>
          ))
        ) : (
          <div  className="text-center p-5 text-xl">No featured products available</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductView;
