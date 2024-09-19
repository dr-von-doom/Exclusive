// services/productService.ts
import { Product } from '../types/Product';
import { FeaturedProducts } from '../data/FeaturedProducts';

export const getFeaturedProducts = (): Product[] => {
  return FeaturedProducts;
};
