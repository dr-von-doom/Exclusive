import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
