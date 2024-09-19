import { useEffect, useState } from 'react';
import { getFeaturedProducts } from "@/services/featured-product-service";
import { Product } from "@/types/Product"
import ProductCard from "../ProductCard"

export const FeaturedProductView = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Obtener los productos cuando el componente se monta
    const fetchProducts = async () => {
      const featuredProducts = getFeaturedProducts();
      setProducts(featuredProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4">
      <h2 className="text-xl md:text-2xl font-bold">Featured Products</h2>
      <div id="featured-product-container" className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 mx-auto">
          {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}


export default FeaturedProductView;