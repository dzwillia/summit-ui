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
 * A badge with primary styling.
 * This variant is typically used for highlighting important information.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

/**
 * A badge with success styling.
 * This variant is typically used to indicate successful actions or statuses.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

/**
 * A badge with warning styling.
 * This variant is typically used to indicate caution or warnings.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Success',
  },
};

/**
 * A badge with danger styling.
 * This variant is typically used to indicate errors or critical issues.
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
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
    className: 'bg-purple-700 text-white',
  },
};
