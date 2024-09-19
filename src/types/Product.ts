/** Product type */
export type Product = {
  id: string;
  name: string;
  rating: number;
  totalRatings: number;
  price: number;
  discount?: number;
  image: string;
  description: string;
  specifications: string[];
  category: string;
};
