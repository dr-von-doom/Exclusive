import { PromotionalImageProps } from "@/components/Home/PromotionalImage";
import filtersData from "@/data/filters.json";
import { CategoryFilters } from "@/types/filter.type";
import promotionalImages from "../data/promotional-images.json";

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
