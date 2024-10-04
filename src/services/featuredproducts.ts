import { Product } from "@/types/product.type";
import { Methods } from "@/types/request.type";
import { requestApi } from "./api";

const route = "products/featured"; 

export const getProductSummaries = async (): Promise<Product[]> => {
  const queryParams: Record<string, string> = {
    limit: '12',
  };

  const response = await requestApi(route, Methods.GET, { queryParams });

  if (!Array.isArray(response)) { 
    throw new Error("Failed to fetch featured products");
  }

  return response.map((product) => ({
    id: product.id, 
    categoryId: product.categoryId, 
    name: product.name,
    price: product.price,
    discount: product.discount,
    imageURL: product.imageURL, 
    description: product.description,
    rating: product.rating,
    totalRatings: product.totalRatings,
    features: product.features,
    specs: product.specs 
  })) as Product[];
};


