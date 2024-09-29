import { PromotionalImageProps } from "@/components/Home/PromotionalImage";
import filtersData from "@/data/filters.json";
import { Category } from "@/types/category.type";
import { CategoryFilters } from "@/types/filter.type";
import promotionalImages from "../data/promotional-images.json";

/**
 * It returns a category based on the category name
 * @param {string} name - Category name
 * @returns {Category | null} - Category object or null
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCategoryByName = (name: string): Category | null => {
  return null;
};

/**
 * It returns a list of products based on the category ID
 *
 * @param {number} categoryId - Category ID
 * @param {object} options - Options for filtering and sorting
 * @param {number} options.page - Page number
 * @param {keyof Product} options.sortBy - Sort by key
 * @param {"asc" | "desc"} options.order - Order
 *
 * @returns {Product[]} - List of products
 */
export const getProductByCategory = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  categoryId: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: object,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filters: object,
) => {
  return {};
};

/**
 * It returns a product based on the category ID
 *
 * @param {number} categoryId Category ID
 * @returns {object[]} - List of filters
 */
export const getFilters = (categoryId: number): CategoryFilters => {
  return filtersData.filter(
    (filter) => filter.categoryId === categoryId,
  )[0] as CategoryFilters;
};

export const getPromotionalImages = () => {
  return promotionalImages as PromotionalImageProps[];
};
