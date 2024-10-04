import type { Meta, StoryObj } from '@storybook/react';

import PurchaseSummary from './PurchaseSummary';

const meta = {
  component: PurchaseSummary,
} satisfies Meta<typeof PurchaseSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};