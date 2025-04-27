import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Label component.
 * Shows a basic text label without any additional styling.
 */
export const Default: Story = {
  args: {
    children: 'Label',
  },
};

/**
 * Label with htmlFor attribute.
 * Demonstrates proper accessibility connection with form inputs.
 */
export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'input-id',
    children: 'Input Label',
  },
};

/**
 * Label indicating a required field.
 * Shows how to add a required indicator using CSS classes.
 */
export const Required: Story = {
  args: {
    children: 'Required Field',
    className: 'after:content-["*"] after:ml-0.5 after:text-red-500',
  },
};

/**
 * A disabled label state.
 * Shows how the label appears when associated with a disabled form element.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    className: 'opacity-50 cursor-not-allowed',
  },
};
