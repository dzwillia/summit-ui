import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';
import type { CheckboxGroupProps } from '../types';

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

const CheckboxGroupDemo = ({ value: initialValue = [], ...args }: CheckboxGroupProps) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <CheckboxGroup {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};

/**
 * Interactive playground for the CheckboxGroup component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the CheckboxGroup component.
 * Shows a group of checkboxes with no initial selection.
 */
export const Default: Story = {
  render: args => <CheckboxGroupDemo {...args} />,
  args: {
    options,
    value: [],
    onChange: () => {},
  },
};

/**
 * CheckboxGroup with pre-selected values.
 * Demonstrates how the group appears with multiple checkboxes selected.
 */
export const WithSelection: Story = {
  render: args => <CheckboxGroupDemo {...args} />,
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
  render: args => <CheckboxGroupDemo {...args} />,
  args: {
    options,
    columns: 1,
    value: [],
    onChange: () => {},
  },
};

/**
 * CheckboxGroup in a three-column layout.
 * Demonstrates how checkboxes can be arranged in multiple columns.
 */
export const ThreeColumns: Story = {
  render: args => <CheckboxGroupDemo {...args} />,
  args: {
    options,
    columns: 3,
    value: [],
    onChange: () => {},
  },
};
