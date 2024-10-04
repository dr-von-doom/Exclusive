import { Product } from "@/types/product.type";
import { Methods } from "@/types/request.type";
import { requestApi } from "./api";

const route = "products/featured";

/**
 * Get popular products
 *
 * @returns {Promise<Product[]>} 
 */
export const getPopularProducts = async (): Promise<Product[]> => {
  const response = await requestApi(route, Methods.GET, {
    queryParams: {
      limit: '12',
    },
  });

  if (!Array.isArray(response)) {
    throw new Error("Failed to fetch featured products");
  }

  return response.map(({ 
    id, 
    categoryId, 
    name, 
    price, 
    discount, 
    imageURL, 
  }) => ({
    id, 
    categoryId, 
    name,
    price,
    discount,
    imageURL, 
  })) as Product[];
};
