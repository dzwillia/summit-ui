import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const meta = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
];

/**
 * The default state of the CheckboxGroup component.
 * Shows a group of checkboxes with no initial selection.
 */
export const Default: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
  },
};

/**
 * CheckboxGroup with pre-selected options.
 * Demonstrates how the group appears with multiple selected checkboxes.
 */
export const WithSelection: Story = {
  args: {
    options,
    value: ['option1', 'option3'],
    onChange: () => {},
  },
};

/**
 * CheckboxGroup in a single column layout.
 * Shows checkboxes stacked vertically in one column.
 */
export const SingleColumn: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
    columns: 1,
  },
};

/**
 * CheckboxGroup in a three-column layout.
 * Demonstrates how checkboxes can be arranged in multiple columns.
 */
export const ThreeColumns: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
    columns: 3,
  },
};
