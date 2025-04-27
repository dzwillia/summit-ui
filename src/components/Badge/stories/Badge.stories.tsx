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

/**
 * The default state of the Badge component.
 * This shows the basic appearance with default styling.
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

/**
 * A badge with secondary styling.
 * This variant is useful for less prominent or supplementary information.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

/**
 * A badge with destructive styling.
 * This variant is typically used for error states or warning indicators.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

/**
 * A badge with outline styling.
 * This variant provides a more subtle appearance with just a border.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

/**
 * A badge with custom styling applied through className.
 * This demonstrates how the badge can be customized using Tailwind classes.
 */
export const WithCustomClass: Story = {
  args: {
    children: 'Custom',
    className: 'bg-blue-500 text-white',
  },
};
