import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '../src/DateRangePicker';

const meta = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

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
