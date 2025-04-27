import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src/DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the DatePicker component.
 * Shows the basic date picker with no pre-selected date.
 */
export const Default: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date',
  },
};

/**
 * DatePicker with a pre-selected date.
 * Demonstrates how the component appears with an initial date value.
 */
export const WithValue: Story = {
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date',
  },
};

/**
 * DatePicker with custom placeholder text.
 * Shows how to customize the placeholder message when no date is selected.
 */
export const CustomPlaceholder: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday',
  },
};
