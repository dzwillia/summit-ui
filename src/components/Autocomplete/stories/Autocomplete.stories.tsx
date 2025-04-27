import { mockLoadOptions, mockSearchLibraries } from '@/mocks';
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

/**
 * Interactive playground for the Checkbox component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    loadOptions: mockLoadOptions,
    value: '',
    onChange: () => {},
    placeholder: 'Search...',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Autocomplete component with async loading of options.
 * This demonstrates the basic functionality with a search input that loads results after a delay.
 * Search for "React" to see results.
 */
export const Default: Story = {
  args: {
    loadOptions: mockSearchLibraries,
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
