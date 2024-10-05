import { getPopularProducts } from "@/services/featuredProducts.service";
import { Product } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";

export const useGetFeaturedProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["productSummaries"],
    queryFn: async (): Promise<Product[]> => {
      const productSummaries = await getPopularProducts();
      return productSummaries;
    },
  });
};
