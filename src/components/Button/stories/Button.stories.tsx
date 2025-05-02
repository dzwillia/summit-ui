import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger', 'link'],
      description: 'The visual style variant of the dropdown button',
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: 'radio',
      description: 'The size of the dropdown button',
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the accordion',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default button style.
 * This is the main call-to-action button style used throughout the application.
 */
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
};

/**
 * The primary button style.
 * This is the main call-to-action button style used throughout the application.
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

/**
 * The danger button style.
 * Used for dangerous or destructive actions like delete operations.
 */
export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
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
 * A disabled button state.
 * Shows how the button appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};
