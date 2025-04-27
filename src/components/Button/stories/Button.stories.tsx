import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The primary button style.
 * This is the main call-to-action button style used throughout the application.
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
  },
};

/**
 * The secondary button style.
 * Used for secondary actions that don't require primary emphasis.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

/**
 * The destructive button style.
 * Used for dangerous or destructive actions like delete operations.
 */
export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
};

/**
 * The outline button style.
 * A more subtle button style with just a border.
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

/**
 * The ghost button style.
 * A minimal button style that only shows on hover.
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

/**
 * The link button style.
 * Makes the button appear as a text link.
 */
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

/**
 * A small-sized button.
 * Used when space is limited or for secondary actions.
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

/**
 * A large-sized button.
 * Used for primary calls to action or when more emphasis is needed.
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

/**
 * An icon button.
 * Square-shaped button typically used for icons or emoji.
 */
export const Icon: Story = {
  args: {
    children: '👋',
    size: 'icon',
  },
};

/**
 * A disabled button state.
 * Shows how the button appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};
