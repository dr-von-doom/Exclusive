import type { Meta, StoryObj } from '@storybook/react';

import Breadcumb from './Breadcumb';

const meta = {
  component: Breadcumb,
} satisfies Meta<typeof Breadcumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};