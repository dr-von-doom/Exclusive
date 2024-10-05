import { CategoryFilters } from "@/types/filter.type";
import { Methods } from "@/types/request.type";
import { requestApi } from "./api";


const routes = "filters"

export const getFilters = async (categoryId: string): Promise<CategoryFilters> => {
  const response = await requestApi(routes, Methods.GET , {
    queryParams: {
      categoryId: categoryId
    }
  });

  if (response.length === 0) throw new Error("Filters not found");

  return response[0] as CategoryFilters;
}