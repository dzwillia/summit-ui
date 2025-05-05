import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox } from '../src/Combobox';
import type { ComboboxProps } from '../types';

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

const ComboboxDemo = ({ value: initialValue = '', ...args }: ComboboxProps) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Combobox {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};

/**
 * Interactive playground for the Combobox component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Combobox component.
 * Shows a searchable dropdown with framework options.
 */
export const Default: Story = {
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Select framework...',
  },
};

/**
 * Combobox with a pre-selected value.
 * Demonstrates how the component appears with an initial selection.
 */
export const WithValue: Story = {
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: 'react',
    onChange: () => {},
    placeholder: 'Select framework...',
  },
};

/**
 * Combobox with custom placeholder text.
 * Shows how to customize the placeholder and search text.
 */
export const CustomPlaceholders: Story = {
  render: args => <ComboboxDemo {...args} />,
  args: {
    options,
    value: '',
    onChange: () => {},
    placeholder: 'Choose your framework',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found',
  },
};
