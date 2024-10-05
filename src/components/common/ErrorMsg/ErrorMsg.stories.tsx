import type { Meta, StoryObj } from "@storybook/react";

import ErrorMsg from "./ErrorMsg";

const meta = {
  component: ErrorMsg,
} satisfies Meta<typeof ErrorMsg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Error Title",
    message: "Error Message",
  },
};
