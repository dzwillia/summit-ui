import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../Input';
import { FormItem } from '../src/FormItem';

const meta = {
  title: 'Components/FormItem',
  component: FormItem,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof FormItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the FormItem component.
 * Shows a basic form field with a label and input.
 */
export const Default: Story = {
  args: {
    label: 'Email',
    children: <Input type="email" placeholder="Enter your email" />,
  },
};

/**
 * FormItem with hint text.
 * Demonstrates how to provide additional context or instructions for a form field.
 */
export const WithHintText: Story = {
  args: {
    label: 'Password',
    hintText: 'Must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter your password" />,
  },
};

/**
 * FormItem with error state.
 * Shows how validation errors are displayed to the user.
 */
export const WithError: Story = {
  args: {
    label: 'Username',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />,
  },
};

/**
 * FormItem with both hint and error text.
 * Demonstrates how to show both helper text and error messages.
 */
export const WithHintAndError: Story = {
  args: {
    label: 'Email',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input type="email" placeholder="Enter your email" />,
  },
};
