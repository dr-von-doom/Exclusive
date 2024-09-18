export type Product = {
  id: string;
  name: string;
  ratting: number;
  totalRatings: number;
  price: number;
  discount?: number;
  image: string;
  description: string;
  specifications: string[];
  category: string;
};
