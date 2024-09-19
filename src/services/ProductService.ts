import { SMALL_PAGE_SIZE } from "@/conts";
import { products } from "@/data/products";
import { Product } from "@/types/Product";

export const getProductBySubCategory = (
  subcategory: string,
  options: {
    page?: number;
    pageSize?: number;
    sortBy?: keyof Product;
    order?: "asc" | "desc";
  },
) => {
  const { page = 1 } = options;
  const { pageSize = SMALL_PAGE_SIZE } = options;

  let data = products.filter(
    (product: Product) => product.subcategory === subcategory,
  );
  const totalResults = data.length;

  if (options.sortBy) {
    data = data.sort((a: Product, b: Product) => {
      if (options.order === "asc") {
        return (a[options.sortBy!] as number) - (b[options.sortBy!] as number);
      }
      return (b[options.sortBy!] as number) - (a[options.sortBy!] as number);
    });
  }

  data = data.slice((page - 1) * pageSize, page * pageSize);

  return {
    data,
    meta: {
      page,
      totalResults,
      totalPages: Math.ceil(totalResults / pageSize),
    },
  };
};
