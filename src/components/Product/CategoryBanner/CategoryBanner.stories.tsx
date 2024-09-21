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
      name: "Category",
      groupId: 1,
      description: "Category description",
    },
  },
};
