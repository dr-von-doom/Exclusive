import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryFilled: Story = {
  args: {
    children: "Click me",
    filled: true,
    type: "primary",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    children: "Click me",
    filled: false,
    type: "primary",
  },
};

export const SecondaryFilled: Story = {
  args: {
    children: "Click me",
    filled: true,
    type: "secondary",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Click me",
    filled: false,
    type: "secondary",
  },
};
