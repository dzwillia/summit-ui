import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect } from '../src/MultiSelect';
import type { MultiSelectProps } from '../types';

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

const MultiSelectDemo = ({ value: initialValue = [], ...args }: MultiSelectProps) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <MultiSelect {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};

/**
 * Interactive playground for the MultiSelect component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
};

/**
 * The default state of the MultiSelect component.
 * Shows a searchable dropdown that allows multiple selections from a list of frameworks.
 */
export const Default: Story = {
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
};

/**
 * MultiSelect with pre-selected values.
 * Demonstrates how the component appears with multiple items already selected.
 */
export const WithSelection: Story = {
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: ['react', 'vue'],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
};

/**
 * MultiSelect with custom placeholder text.
 * Shows how to customize the placeholder and search text for better user guidance.
 */
export const CustomPlaceholders: Story = {
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
    placeholder: 'Choose your frameworks',
    searchPlaceholder: 'Search frameworks...',
    emptyMessage: 'No frameworks found',
  },
};

/**
 * MultiSelect with an extended list of options.
 * Demonstrates how the component handles a larger set of choices with scrolling.
 */
export const WithManyOptions: Story = {
  render: args => <MultiSelectDemo {...args} />,
  args: {
    options: [
      ...options,
      { value: 'next', label: 'Next.js' },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'gatsby', label: 'Gatsby' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
    ],
    value: [],
    onChange: () => {},
    placeholder: 'Select frameworks...',
  },
};
