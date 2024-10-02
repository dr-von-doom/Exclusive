import { useQuery } from "@tanstack/react-query";
import { getProductSummaries } from "@/services/featuredproducts";
import { ProductSummary } from "@/services/featuredproducts"; 

export const useGetProductSummaries = () => {
  return useQuery<ProductSummary[], Error>({
    queryKey: ["productSummaries"],
    queryFn: async (): Promise<ProductSummary[]> => {
      const productSummaries = await getProductSummaries();
      console.log("Fetched products:", productSummaries); // Aquí verificamos la respuesta
      return productSummaries; 
    },
  });
};
