import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '../src/Combobox';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const Default: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...',
  },
};

export const WithValue: Story = {
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...',
  },
};

export const CustomPlaceholders: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found',
  },
};
