import type { Meta, StoryObj } from '@storybook/react';

import ShippingMethod from './ShippingMethod';

const meta = {
  component: ShippingMethod,
} satisfies Meta<typeof ShippingMethod>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};