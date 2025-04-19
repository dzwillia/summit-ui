import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src/DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Pick a date',
  },
};

export const WithValue: Story = {
  args: {
    value: new Date('2024-03-15'),
    onChange: () => {},
    placeholder: 'Pick a date',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    placeholder: 'Select your birthday',
  },
};
