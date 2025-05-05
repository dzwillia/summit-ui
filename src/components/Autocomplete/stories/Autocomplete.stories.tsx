import { mockSearchLibraries } from '@/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const AutocompleteDemo = ({ value: initialValue = '', ...args }: AutocompleteProps) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};

/**
 * Interactive playground for the Autocomplete component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    loadOptions: mockSearchLibraries,
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
  render: args => <AutocompleteDemo {...args} />,
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
  render: args => <AutocompleteDemo {...args} />,
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
