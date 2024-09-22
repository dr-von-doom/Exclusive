import type { Meta, StoryObj } from '@storybook/react';

import ExploreMoreBanner from './ExploreMoreBanner';

const meta = {
  component: ExploreMoreBanner,
} satisfies Meta<typeof ExploreMoreBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};