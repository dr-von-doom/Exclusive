import { PromotionalImageProps } from "@/components/PromotionalImage";
import categories from "@/data/categories.json";
import filtersData from "@/data/filters.json";
import products from "@/data/products.json";
import { Category } from "@/types/Category";
import { CategoryFilters } from "@/types/Filter";
import {
  CategoryFilterOptions,
  PaginatedData,
  PaginationOptions,
} from "@/types/PaginatedData";
import { Product } from "@/types/Product";
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
  options: PaginationOptions<Product>,
  filters: CategoryFilterOptions | null,
): PaginatedData<Product> => {
  const { page = 1, sortBy, order = "desc" } = options;

  let data = (products as Product[]).filter(
    (product: Product) => product.categoryId === categoryId,
  );

  if (filters) {
    Object.keys(filters).forEach((filter) => {
      const filterSelectedValues = filters[filter];

      data = data.filter((product: Product) => {
        if (!filterSelectedValues.length) return true;
        const productSpecs = product.specs.find((spec) => spec.name === filter);
        return filterSelectedValues.includes(productSpecs?.value ?? "");
      });
    });
  }

  const totalResults = data.length;

  if (sortBy) {
    data = data.sort((a: Product, b: Product) => {
      // Apply the discount if sort is by price
      if (sortBy === "price") {
        const priceA = applyDiscount(a.price, a.discount);
        const priceB = applyDiscount(b.price, b.discount);

        if (order === "asc") {
          return priceA - priceB;
        }
        return priceB - priceA;
      }

      if (order === "asc") {
        return (a[sortBy!] as number) - (b[sortBy!] as number);
      }
      return (b[sortBy!] as number) - (a[options.sortBy!] as number);
    });
  }
  data = data.slice((page - 1) * 10, page * 10);

  return {
    data,
    page,
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
