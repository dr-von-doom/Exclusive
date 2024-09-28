import { Product } from "@/types/product.type";
import { apiMethods, requestApi } from "./api";

const route = "products";

export const getAllProducts = async (
  params: {
    categoryId?: number;
    filters?: Record<string, string>;
  },
  options: {
    _page?: number;
    _per_page?: number;
    _sort?: string;
    _order?: "asc" | "desc";
  },
): Promise<Product[]> => {
  const response = await requestApi(route, apiMethods.GET, {
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

  return response as Product[];
};
