import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../src/RadioGroup';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
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

export const Default: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
  },
};

export const WithSelection: Story = {
  args: {
    options,
    value: 'option2',
    onChange: () => {},
  },
};

export const Horizontal: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    orientation: 'vertical',
  },
};

export const WithManyOptions: Story = {
  args: {
    options: [
      ...options,
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
      { value: 'option6', label: 'Option 6' },
    ],
    value: '',
    onChange: () => {},
  },
};
