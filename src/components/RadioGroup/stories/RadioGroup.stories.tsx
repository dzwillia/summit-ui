import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../src/RadioGroup';
import type { RadioGroupProps } from '../types';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
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
      description: 'Array of radio options',
      type: { name: 'array', required: true },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the radio group',
      type: { name: 'string', required: false },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const RadioGroupDemo = ({ value: initialValue = '', ...args }: RadioGroupProps) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="space-y-4">
      <RadioGroup
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
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options,
  },
};

export const WithSelection: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options,
    value: 'option2',
  },
};

export const Horizontal: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options,
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options,
    orientation: 'vertical',
  },
};

export const WithManyOptions: Story = {
  render: args => <RadioGroupDemo {...args} />,
  args: {
    options: [
      ...options,
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
      { value: 'option6', label: 'Option 6' },
    ],
  },
};
