import { useGetProducts } from '@/components/Hooks/useGetProducts'; 
import { ProductCard } from '../ProductCard'; 
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types/product.type';
import { SkeletonCard } from '@/components/Product/MoreProducts/MoreProductsSkeleton';

export const YouMightLike = () => {
  const navigate = useNavigate();
  
  const params = {
    categoryId: null, 
  };
  
  const options = {
    _per_page: 4, 
  };

  const { data, isLoading, error } = useGetProducts(params, options);

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}/category/${product.categoryId}`);
  };

  if (isLoading) {
    return <SkeletonCard />;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  const productsToShow: Product[] = data?.pages.flatMap(page => page.products) || [];

  if (!productsToShow.length) {
    return <div>No products available</div>;
  }

  
  return (
    <div>
      <h2 className="my-6 text-xl font-bold md:text-4xl" style={{ letterSpacing: "0.07em", wordSpacing: "0.3em" }}>
        You Might Like
      </h2>

      <div
        id="recommended-product-container"
        className="mb-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-8"
      >
        {productsToShow.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};
