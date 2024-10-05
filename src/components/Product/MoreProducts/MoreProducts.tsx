import { YouMightLikeSkeleton } from "@/components/Product/MoreProducts/MoreProductsSkeleton";
import { useGetProducts } from "@/hooks/useGetProducts";
import { Product } from "@/types/product.type";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard";

interface YouMightLikeProps {
  currentCategoryId: number;
}

export const YouMightLike = ({ currentCategoryId }: YouMightLikeProps) => {
  const params = {
    categoryId: currentCategoryId,
  };

  const options = {
    _per_page: 4,
  };

  const { data, isLoading, error } = useGetProducts(params, options);

  if (isLoading) {
    return <YouMightLikeSkeleton />;
  }

  if (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="text-center text-xl">
        Error loading products: {error.message}
      </div>
    );
  }

  const productsToShow: Product[] = (data?.pages || []).flatMap(
    (page) => page.data || [],
  );

  if (!productsToShow.length) {
    return (
      <div className="text-center text-xl">
        No recommended products available
      </div>
    );
  }

  return (
    <div>
      <h2
        className="my-6 pt-4  text-xl font-bold text-center "
        style={{ letterSpacing: "0.02em", wordSpacing: "0.3em" }}
      >
        You Might Also Like
      </h2>

      <div
        id="recommended-product-container"
        className="mb-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-20"
      >
        {productsToShow.map(
          (product) =>
            product.id && (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="cursor-pointer"
              >
                <ProductCard {...product} />
              </Link>
            ),
        )}
      </div>
    </div>
  );
};
