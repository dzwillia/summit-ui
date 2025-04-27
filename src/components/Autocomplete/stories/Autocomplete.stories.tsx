import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '../src/Autocomplete';

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {},
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

/**
 * The default state of the Autocomplete component with async loading of options.
 * This demonstrates the basic functionality with a search input that loads results after a delay.
 */
export const Default: Story = {
  args: {
    loadOptions: mockLoadOptions,
    value: '',
    onChange: () => {},
    placeholder: 'Search...',
  },
};

/**
 * An example of the Autocomplete component with static options instead of async loading.
 * This shows how the component behaves with a predefined list of options.
 */
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
