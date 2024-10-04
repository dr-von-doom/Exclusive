import filtersData from "@/data/filters.json";
import { CategoryFilters } from "@/types/filter.type";

/**
 * It returns a product based on the category ID
 *
 * @param {number} categoryId Category ID
 * @returns {object[]} - List of filters
 */
export const getFilters = (categoryId: number): CategoryFilters => {
  return (filtersData as CategoryFilters[]).filter(
    (filter: CategoryFilters) => filter.categoryId === categoryId,
  )[0] as CategoryFilters;
};
