import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelect } from '../src/SingleSelect';
import type { SingleSelectProps } from '../types';

const meta = {
  title: 'Components/Select',
  component: SingleSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value',
      type: { name: 'string', required: false },
    },
    onChange: {
      description: 'Callback when selection changes',
      type: { name: 'function', required: true },
      action: 'selection changed',
    },
    options: {
      control: 'object',
      description: 'Array of select options',
      type: { name: 'array', required: true },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value is selected',
      type: { name: 'string', required: false },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SingleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

const SelectDemo = ({ value: initialValue = '', ...args }: SingleSelectProps) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="space-y-4">
      <SingleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange?.(newValue);
        }}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};

export const Default: Story = {
  render: args => <SelectDemo {...args} />,
  args: {
    options,
    placeholder: 'Select a fruit...',
  },
};

export const WithValue: Story = {
  render: args => <SelectDemo {...args} />,
  args: {
    options,
    value: 'apple',
    placeholder: 'Select a fruit...',
  },
};

export const CustomPlaceholder: Story = {
  render: args => <SelectDemo {...args} />,
  args: {
    options,
    placeholder: 'Choose your favorite fruit',
  },
};

export const WithManyOptions: Story = {
  render: args => <SelectDemo {...args} />,
  args: {
    options: [
      ...options,
      { value: 'pear', label: 'Pear' },
      { value: 'peach', label: 'Peach' },
      { value: 'plum', label: 'Plum' },
      { value: 'kiwi', label: 'Kiwi' },
      { value: 'pineapple', label: 'Pineapple' },
    ],
    placeholder: 'Select a fruit...',
  },
};
