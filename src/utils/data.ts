import { Category } from "@/types/Category";
import categories from "@/data/categories.json";
import products from "@/data/products.json";
import { Product } from "@/types/Product";
import _ from "lodash";
import { PaginatedData, PaginationOptions } from "@/types/PaginatedData";

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
): PaginatedData<Product> => {
  const { page = 1, sortBy, order = "desc" } = options;

  let data = (products as Product[]).filter(
    (product: Product) => product.categoryId === categoryId,
  );
  const totalResults = data.length;

  if (sortBy) {
    data = data.sort((a: Product, b: Product) => {
      // Apply the discount if sort is by price
      if (sortBy === "price") {
        const priceA = a.price - a.price * (a.discount ?? 0);
        const priceB = b.price - b.price * (b.discount ?? 0);

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
