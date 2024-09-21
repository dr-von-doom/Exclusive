import type { Meta, StoryObj } from "@storybook/react";

import PaginatedProductList from "./PaginatedProductList";

const meta = {
  component: PaginatedProductList,
} satisfies Meta<typeof PaginatedProductList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    paginatedData: {
      data: [],
      page: 1,
      totalResults: 0,
      totalPages: 0,
    },
    onLoadMore: () => {},
  },
};
