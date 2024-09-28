import productsData from "@/data/products.json";
import { Product } from "@/types/product.type";
import { ProductCard } from "../ProductCard";

export const FeaturedProductView = () => {
  const topRatedProducts = productsData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <div>
      <h2 className="my-6 text-center text-xl font-bold md:text-4xl">
        Featured Products
      </h2>
      <div
        id="featured-product-container"
        className="mb-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-8"
      >
        {topRatedProducts.map((product) => (
          <ProductCard key={product.id} {...(product as Product)} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductView;
