import { Product } from "@/types/Product";
import ProductCard from "../ProductCard";
import productsData from "@/data/products.json";

export const FeaturedProductView = () => {
  const topRatedProducts = productsData
    .sort((a, b) => b.rating - a.rating) // Ordenar de mayor a menor
    .slice(0, 12); // Tomar los primeros 12

  return (
    <div className="px-28">
      <h2 className="text-xl font-bold mb-4 md:text-2xl">Featured Products</h2>
      <div
        id="featured-product-container"
        className="mx-auto grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-8">
        {topRatedProducts.map((product) => (
          <ProductCard key={product.id} {...product as Product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductView;
