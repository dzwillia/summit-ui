import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '../src/Autocomplete';

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockLoadOptions = async (query: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { value: '1', label: `Result 1 for ${query}` },
    { value: '2', label: `Result 2 for ${query}` },
    { value: '3', label: `Result 3 for ${query}` },
  ];
};

export const Default: Story = {
  args: {
    loadOptions: mockLoadOptions,
    value: '',
    onChange: () => {},
    placeholder: 'Search...',
  },
};

export const WithStaticOptions: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    value: '',
    onChange: () => {},
    placeholder: 'Select an option...',
  },
};
