import { getAllProducts } from "@/services/product.service";
import {
  GetAllProductsParams,
  GetAllProductsResponse,
} from "@/types/product.type";
import { PaginationOptions } from "@/types/request.type";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (
  params: GetAllProductsParams,
  options: PaginationOptions,
) => {
  return useQuery<GetAllProductsResponse, Error>({
    queryKey: ["products", params, options],
    queryFn: async () => await getAllProducts(params, options),
  });
};
