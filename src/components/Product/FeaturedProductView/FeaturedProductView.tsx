import { Product } from "@/types/Product";
import ProductCard from "../ProductCard";
import productsData from "@/data/products.json";

export const FeaturedProductView = () => {
  const topRatedProducts = productsData
    .sort((a, b) => b.rating - a.rating) 
    .slice(0, 12); 

  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-4 md:text-4xl">Featured Products</h2>
      <div
        id="featured-product-container"
        className="grid grid-cols-[repeat(auto-fit,300px)] gap-8 justify-center mb-8">
        {topRatedProducts.map((product) => (
          <ProductCard key={product.id} {...product as Product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductView;
