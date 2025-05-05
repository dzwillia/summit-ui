import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from '../src/DatePicker';
import type { DatePickerProps } from '../types';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const DatePickerDemo = ({ value: initialValue, ...args }: DatePickerProps) => {
  const [value, setValue] = useState<Date | undefined>(initialValue);
  return (
    <div className="space-y-4">
      <DatePicker {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected date: {value ? value.toLocaleDateString() : 'none'}
      </p>
    </div>
  );
};

/**
 * Interactive playground for the DatePicker component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the DatePicker component.
 * Shows the basic date picker with no pre-selected date.
 */
export const Default: Story = {
  render: args => <DatePickerDemo {...args} />,
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
  render: args => <DatePickerDemo {...args} />,
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
  render: args => <DatePickerDemo {...args} />,
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday',
  },
};
