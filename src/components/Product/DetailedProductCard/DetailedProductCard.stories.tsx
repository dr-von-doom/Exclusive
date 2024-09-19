import type { Meta, StoryObj } from "@storybook/react";

import DetailedProductCard from "./DetailedProductCard";

const meta = {
  component: DetailedProductCard,
} satisfies Meta<typeof DetailedProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "1",
    name: "LENOVO IdeaPad Slim 3",
    rating: 4.5,
    totalRatings: 25,
    price: 830.0,
    discount: 0.361,
    image:
      "https://dr-von-doom.github.io/Exclusive-legacy/images/products/product-00000000.png",
    description: "",
    features: [
      "Full HD resolution, sharper images",
      "Multi-touch screen, easy interaction with your content",
      "MIL-STD-810H military test passed, higher durability",
      "TrueBlock privacy for your camera",
      "Fingerprint reader, easy and secure access",
    ],
    category: "computers",
  },
};
