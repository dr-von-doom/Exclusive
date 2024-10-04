import type { Meta, StoryObj } from "@storybook/react";

import PaginatedProductList from "./PaginatedProductList";

const meta = {
  component: PaginatedProductList,
} satisfies Meta<typeof PaginatedProductList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        id: 1,
        name: "Product Name",
        categoryId: 1,
        imageURL: "https://via.placeholder.com/1920x1080",
        description: "Product Description",
        rating: 4.5,
        totalRatings: 10,
        price: 350,
        discount: 0.1,
        features: ["Feature 1", "Feature 2", "Feature 3"],
        specs: {},
      },
    ],
    totalProducts: 10,
    hasNextPage: true,
    onLoadMore: () => {},
    onSort: () => {},
  },
};

export const ProductsNotFound: Story = {
  args: {
    products: [],
    totalProducts: 0,
    hasNextPage: false,
    onLoadMore: () => {},
    onSort: () => {},
  },
};

export const Loading: Story = {
  args: {
    products: [],
    totalProducts: 0,
    hasNextPage: false,
    onLoadMore: () => {},
    onSort: () => {},
    isLoading: true,
  },
};
