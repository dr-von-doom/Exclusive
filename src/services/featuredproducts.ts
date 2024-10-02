import { Product } from "@/types/product.type";
import { Methods } from "@/types/request.type";
import { requestApi } from "./api";

export interface ProductSummary {
  name: string;
  price: number;
  discount: number;
  image: string;
}

const route = "products/featured"; 

export const getProductSummaries = async (): Promise<ProductSummary[]> => {
  const queryParams: Record<string, string> = {
    limit: '12',
  };

  const response = await requestApi(route, Methods.GET, { queryParams });


  if (!Array.isArray(response)) { 
    throw new Error("Failed to fetch product summaries");
  }

  return response.map((product: Product) => ({
    name: product.name,
    price: product.price,
    discount: product.discount,
    image: product.imageURL,
  })) as ProductSummary[];
};
