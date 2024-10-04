import { useQuery } from "@tanstack/react-query";
import { getPopularProducts } from "@/services/featuredproducts";
import { Product } from "@/types/product.type";

export const useGetFeaturedProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["productSummaries"],
    queryFn: async (): Promise<Product[]> => {
      const productSummaries = await getPopularProducts();
      return productSummaries;  
    },
  });
};

