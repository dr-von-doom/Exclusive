import { useQuery } from "@tanstack/react-query";
import { getProductSummaries } from "@/services/featuredproducts";
import { Product } from "@/types/product.type";

export const useGetProductSummaries = () => {
  return useQuery<Product[], Error>({
    queryKey: ["productSummaries"],
    queryFn: async (): Promise<Product[]> => {
      const productSummaries = await getProductSummaries();
      return productSummaries; 
    },
  });
};

