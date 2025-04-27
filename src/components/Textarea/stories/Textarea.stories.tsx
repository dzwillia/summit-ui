import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../src/Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Textarea component.
 * Shows a basic multiline text input field with placeholder text.
 */
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

/**
 * Textarea with pre-filled content.
 * Demonstrates how the component appears with initial text content.
 */
export const WithValue: Story = {
  args: {
    value:
      'This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.',
    placeholder: 'Type your message here...',
  },
};

/**
 * A disabled textarea.
 * Shows how the component appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'This textarea is disabled',
  },
};

/**
 * Textarea with custom height.
 * Demonstrates how to control the initial height using rows.
 */
export const WithRows: Story = {
  args: {
    rows: 8,
    placeholder: 'This textarea has 8 rows...',
  },
};

/**
 * A read-only textarea.
 * Shows how the component appears when content can be viewed but not modified.
 */
export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.',
    placeholder: 'This textarea is read-only',
  },
};

/**
 * Textarea with custom styling.
 * Demonstrates how to apply custom styles using className.
 */
export const WithCustomStyle: Story = {
  args: {
    className: 'min-h-[12rem] font-mono',
    placeholder: 'This textarea has custom styling...',
  },
};
