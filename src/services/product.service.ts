import {
  GetAllProductsParams,
  GetAllProductsResponse,
} from "@/types/product.type";
import { Methods, PaginationOptions } from "@/types/request.type";
import { requestApi } from "./api";

const route = "products";

/**
 * Get all products from the API
 *
 * @param {GetAllProductsParams} params - Query params
 * @param {PaginationOptions} options - Pagination options
 * @returns {Promise<Product[]>} - List of products
 */
export const getAllProducts = async (
  params: GetAllProductsParams,
  options: PaginationOptions,
): Promise<GetAllProductsResponse> => {
  const response = await requestApi(`${route}/paginated`, Methods.GET, {
    queryParams: {
      categoryId: params.categoryId?.toString() ?? "",
      ...Object.fromEntries(
        Object.entries(params.filters ?? {}).map(([key, value]) => [
          key,
          value?.toString(),
        ]),
      ),
      ...Object.fromEntries(
        Object.entries(options).map(([key, value]) => [key, value?.toString()]),
      ),
    },
  });

  return response as GetAllProductsResponse;
};
