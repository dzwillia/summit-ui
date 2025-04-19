import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelect } from '../src/SingleSelect';

const meta = {
  title: 'Components/Select',
  component: SingleSelect,
  parameters: {
    layout: 'centered',
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

export const Default: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
};

export const WithValue: Story = {
  args: {
    options,
    value: 'apple',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your favorite fruit',
  },
};

export const WithManyOptions: Story = {
  args: {
    options: [
      ...options,
      { value: 'pear', label: 'Pear' },
      { value: 'peach', label: 'Peach' },
      { value: 'plum', label: 'Plum' },
      { value: 'kiwi', label: 'Kiwi' },
      { value: 'pineapple', label: 'Pineapple' },
    ],
    value: '',
    onChange: () => {},
    placeholder: 'Select a fruit...',
  },
};
