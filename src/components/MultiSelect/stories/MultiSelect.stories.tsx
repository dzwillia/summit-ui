import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from '../src/MultiSelect';

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

/**
 * The default state of the MultiSelect component.
 * Shows a searchable dropdown that allows multiple selections from a list of frameworks.
 */
export const Default: Story = {
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
