import { PromotionalImageProps } from "@/components/Home/PromotionalImage";
import categories from "@/data/categories.json";
import filtersData from "@/data/filters.json";
import products from "@/data/products.json";
import { Category } from "@/types/category.type";
import { CategoryFilters } from "@/types/filter.type";
import {
  CategoryFilterOptions,
  PaginatedData,
  PaginationOptions,
} from "@/types/paginatedData.type";
import { Product } from "@/types/product.type";
import _ from "lodash";
import promotionalImages from "../data/promotional-images.json";

/**
 * It returns a category based on the category name
 * @param {string} name - Category name
 * @returns {Category | null} - Category object or null
 */
export const getCategoryByName = (name: string): Category | null => {
  return (
    (categories as Category[]).find(
      (category) => _.kebabCase(category.name) === _.kebabCase(name),
    ) ?? null
  );
};

/**
 * It applies a discount to the price
 *
 * @param {number} price original price
 * @param {number} discount discount rate
 * @returns {number} - discounted price
 */
export const applyDiscount = (price: number, discount?: number) => {
  return price - price * (discount ?? 0);
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
  categoryId: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: PaginationOptions<Product>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filters: CategoryFilterOptions | null,
): PaginatedData<Product> => {
  const data = (products as unknown as Product[]).filter(
    (product: Product) => product.categoryId === categoryId,
  );

  const totalResults = data.length;

  return {
    data,
    page: 1,
    totalResults,
    totalPages: Math.ceil(totalResults / 10),
  };
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
