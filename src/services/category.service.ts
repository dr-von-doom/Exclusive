import { Category } from "@/types/category.type";
import { Methods } from "@/types/request.type";
import { requestApi } from "./api";

const route = "categories";

/**
 * Get category by name
 *
 * @param {string} categoryName - Category name
 * @returns {Promise<Category>} - Category
 */
export const getCategoryByName = async (
  categoryName: string,
): Promise<Category> => {
  const response = await requestApi(route, Methods.GET, {
    queryParams: {
      name: categoryName,
    },
  });

  if (response.length === 0) throw new Error("Category not found");

  if (response.length > 1) throw new Error("Multiple categories found");

  return response[0] as Category;
};
