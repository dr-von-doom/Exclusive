import { faker } from "@faker-js/faker";
import { Product } from "@/types/Product";

export const products: Product[] = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  rating: faker.number.float({ max: 5, fractionDigits: 1 }),
  totalRatings: faker.number.int({ max: 1000 }),
  price: faker.number.float({ min: 500, max: 1000 }),
  discount: faker.number.float(),
  image: "https://via.placeholder.com/150",
  description: faker.commerce.productDescription(),
  features: Array.from({ length: 5 }, () => faker.commerce.productAdjective()),
  category: "technology",
  subcategory: "computers",
}));
