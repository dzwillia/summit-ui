import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Input component.
 * Shows a basic text input field with placeholder text.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

/**
 * Input with a specific type attribute.
 * Demonstrates using the input as an email field.
 */
export const WithType: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
};

/**
 * Input with a pre-filled value.
 * Shows how the input appears with initial text content.
 */
export const WithValue: Story = {
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...',
  },
};

/**
 * A disabled input field.
 * Shows how the input appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Disabled input',
  },
};

/**
 * Input with automatic text transformation to uppercase.
 * Demonstrates the transform feature for uppercase text.
 */
export const WithTransformUppercase: Story = {
  args: {
    transform: 'uppercase',
    placeholder: 'Text will be uppercase',
  },
};

/**
 * Input with automatic text transformation to lowercase.
 * Demonstrates the transform feature for lowercase text.
 */
export const WithTransformLowercase: Story = {
  args: {
    transform: 'lowercase',
    placeholder: 'Text will be lowercase',
  },
};

/**
 * Input with automatic whitespace trimming.
 * Shows how the transform feature removes leading and trailing spaces.
 */
export const WithTransformTrim: Story = {
  args: {
    transform: 'trim',
    placeholder: 'Whitespace will be trimmed',
  },
};

/**
 * Input with multiple text transformations.
 * Demonstrates combining multiple transform operations.
 */
export const WithMultipleTransforms: Story = {
  args: {
    transform: ['trim', 'uppercase'],
    placeholder: 'Text will be trimmed and uppercase',
  },
};
