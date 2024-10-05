import { getProductById } from "@/services/product.service";
import { Product } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";

export const useGetProductById = (productId: string) => {
  return useQuery<Product, Error>({
    queryKey: ["product", productId],
    queryFn: async () => {
      const product = await getProductById(productId);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    },
  });
}