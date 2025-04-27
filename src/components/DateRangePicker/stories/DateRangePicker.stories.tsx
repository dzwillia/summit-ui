import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '../src/DateRangePicker';

const meta = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the DateRangePicker component.
 * Shows the basic date range picker with no pre-selected dates.
 */
export const Default: Story = {
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date',
    },
  },
};

/**
 * DateRangePicker with pre-selected date range.
 * Demonstrates how the component appears with initial start and end dates.
 */
export const WithValue: Story = {
  args: {
    value: {
      from: new Date('2024-03-15'),
      to: new Date('2024-03-20'),
    },
    onChange: () => {},
    placeholder: {
      from: 'Start date',
      to: 'End date',
    },
  },
};

/**
 * DateRangePicker with custom placeholder text.
 * Shows how to customize the placeholder messages for both start and end dates.
 */
export const CustomPlaceholders: Story = {
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date',
    },
  },
};
