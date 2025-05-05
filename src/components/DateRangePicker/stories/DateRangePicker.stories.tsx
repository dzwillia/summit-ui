import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRangePicker } from '../src/DateRangePicker';
import type { DateRange, DateRangePickerProps } from '../types';

const meta = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const DateRangePickerDemo = ({ value: initialValue = {}, ...args }: DateRangePickerProps) => {
  const [value, setValue] = useState<DateRange>(initialValue);
  return (
    <div className="space-y-4">
      <DateRangePicker {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected range:{' '}
        {value.from ? (
          value.to ? (
            <>
              {value.from.toLocaleDateString()} - {value.to.toLocaleDateString()}
            </>
          ) : (
            value.from.toLocaleDateString()
          )
        ) : (
          'none'
        )}
      </p>
    </div>
  );
};

/**
 * Interactive playground for the DateRangePicker component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
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
 * The default state of the DateRangePicker component.
 * Shows the basic date range picker with no pre-selected dates.
 */
export const Default: Story = {
  render: args => <DateRangePickerDemo {...args} />,
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
  render: args => <DateRangePickerDemo {...args} />,
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
  render: args => <DateRangePickerDemo {...args} />,
  args: {
    value: {},
    onChange: () => {},
    placeholder: {
      from: 'Check-in date',
      to: 'Check-out date',
    },
  },
};
