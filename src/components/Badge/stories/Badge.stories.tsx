import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom',
    className: 'bg-blue-500 text-white',
  },
};
