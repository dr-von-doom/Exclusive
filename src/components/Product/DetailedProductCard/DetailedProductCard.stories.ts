import type { Meta, StoryObj } from "@storybook/react";

import DetailedProductCard from "./DetailedProductCard";

const meta = {
  component: DetailedProductCard,
} satisfies Meta<typeof DetailedProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
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
  },
};

export const Loading: Story = {
  args: {
    product: {
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
    isLoading: true,
  },
};
