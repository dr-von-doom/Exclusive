import type { Meta, StoryObj } from '@storybook/react';

import WorkInProgress from './WorkInProgress';

const meta = {
  component: WorkInProgress,
} satisfies Meta<typeof WorkInProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};