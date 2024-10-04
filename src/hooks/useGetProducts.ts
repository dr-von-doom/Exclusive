import { getAllProducts } from "@/services/product.service";
import {
  GetAllProductsParams,
  GetAllProductsResponse,
} from "@/types/product.type";
import { PaginationOptions } from "@/types/request.type";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";

export const useGetProducts = (
  params: GetAllProductsParams,
  options: PaginationOptions,
) => {
  return useInfiniteQuery<
    GetAllProductsResponse,
    Error,
    InfiniteData<GetAllProductsResponse, number>,
    QueryKey,
    number
  >({
    queryKey: ["all-products", params],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getAllProducts(params, {
        ...options,
        _page: pageParam,
      });
      return response;
    },
    getNextPageParam: (lastPage) => {
      // Ensure to return next page param correctly
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    enabled: !!params.categoryId,
    initialPageParam: 1,
  });
};
