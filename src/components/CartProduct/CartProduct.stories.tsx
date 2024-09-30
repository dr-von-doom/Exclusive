import type { Meta, StoryObj } from '@storybook/react';

import CartProduct from './CartProduct';

const meta = {
  component: CartProduct,
} satisfies Meta<typeof CartProduct>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};