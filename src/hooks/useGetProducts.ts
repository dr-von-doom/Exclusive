import { getAllProducts } from "@/services/product.service";
import { Product } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (
  params: { categoryId?: number; filters?: Record<string, string> },
  options: {
    _page?: number;
    _per_page?: number;
    _sort?: string;
    _order?: "asc" | "desc";
  },
) => {
  return useQuery<Product[], Error>({
    queryKey: ["products", params, options],
    queryFn: async () => await getAllProducts(params, options),
  });
};
