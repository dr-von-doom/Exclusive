import { faker } from "@faker-js/faker";
import categories from "../src/data/categories.json";
import filters from "../src/data/filters.json";
import { Product, Spec } from "../src/types/Product";
import { Filter } from "../src/types/Filter";
import fs from "fs";

const products: Product[] = [];

categories.forEach((category, i) => {
  const categoryFilters = filters.find(
    (f) => f.categoryId === category.id,
  ) as Filter;

  const p = [...Array(30)].map(
    (_, j): Product =>
      ({
        id: i + 1 + j,
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        rating: faker.number.float({ min: 0, max: 5, fractionDigits: 1 }),
        totalRatings: faker.number.int({ min: 0, max: 1000 }),
        imageURL: "https://via.placeholder.com/150",
        categoryId: i + 1,
        price: faker.number.int({ min: 100, max: 1000 }),
        discount: faker.number.float({ min: 0, max: 0.95, fractionDigits: 2 }),
        features: [...Array(faker.number.int({ min: 3, max: 5 })).keys()].map(
          () => faker.lorem.sentence(),
        ),
        specs: categoryFilters?.filters.map(
          (f): Spec => ({
            name: f.name,
            value:
              f.options[
                faker.number.int({ min: 0, max: f.options.length - 1 })
              ],
          }),
        ) as Spec[],
      }) as Product,
  );

  products.push(...p);
});

// Save to JSON file
const json = JSON.stringify(products);
fs.writeFileSync("../src/data/products.json", json);
