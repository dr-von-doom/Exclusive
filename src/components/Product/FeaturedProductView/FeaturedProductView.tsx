import { useGetFeaturedProducts } from "@/hooks/useGetFeaturedProducts";
import { Product } from "@/types/product.type";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard";
import { FeaturedProductsSkeleton } from "./FeaturedProductsSkeleton";

export const FeaturedProductView = () => {
  const { data: topRatedProducts, isLoading, error } = useGetFeaturedProducts();

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  if (error) {
    return (
      <div className="p-5 text-center text-xl">
        Error loading products: {error.message}
      </div>
    );
  }

  return (
    <div>
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
        {topRatedProducts.map((product) => (
          <Link key={product.id}
            to={`/product/${product.id}`}
            className="cursor-pointer">
            <ProductCard key={product.id} {...(product as Product)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductView;
