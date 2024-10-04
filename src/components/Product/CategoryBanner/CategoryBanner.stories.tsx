import type { Meta, StoryObj } from "@storybook/react";

import CategoryBanner from "./CategoryBanner";

const meta = {
  component: CategoryBanner,
} satisfies Meta<typeof CategoryBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: {
      id: 1,
      name: "Category Name",
      imageUrl: "https://via.placeholder.com/1920x1080",
      description: "Category Description",
      groupId: 0,
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
