import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SwitchGroup } from '../src/SwitchGroup';
import type { SwitchGroupProps } from '../types';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

const meta = {
  title: 'Components/SwitchGroup',
  component: SwitchGroup,
  parameters: {},
  argTypes: {
    value: {
      control: 'object',
      description: 'Array of selected switch IDs',
      type: { name: 'array', value: { name: 'string' }, required: false },
    },
    onChange: {
      description: 'Callback when selection changes',
      type: { name: 'function', required: true },
    },
    options: {
      control: 'object',
      description: 'Array of switch options',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    columns: {
      control: 'radio',
      options: [1, 2, 3, 4],
      description: 'Number of columns in the grid',
      type: { name: 'number', required: false },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const SwitchGroupDemo = ({ value: initialValue = [], ...args }: SwitchGroupProps) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <SwitchGroup {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};

/**
 * Interactive playground for the SwitchGroup component.
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
 * The default state of the SwitchGroup component.
 * Shows a group of switches arranged in a single column with no initial selections.
 */
export const Default: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 2,
    value: [],
    onChange: () => {},
  },
};

/**
 * SwitchGroup with pre-selected values.
 * Demonstrates how the group appears with multiple switches toggled on.
 */
export const WithSelection: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    value: ['notifications', 'emails'],
    onChange: () => {},
    columns: 2,
  },
};

/**
 * SwitchGroup in a single column layout.
 * Shows switches stacked vertically in one column.
 */
export const SingleColumn: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 1,
    value: [],
    onChange: () => {},
  },
};

/**
 * SwitchGroup in a three-column layout.
 * Demonstrates how switches can be arranged in multiple columns.
 */
export const ThreeColumns: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 3,
    value: [],
    onChange: () => {},
  },
};

/**
 * SwitchGroup with an extended list of options.
 * Shows how the component handles a larger set of switches, including disabled states.
 */
export const WithManyOptions: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options: [
      ...options,
      { id: 'backup', label: 'Automatic backup' },
      { id: 'location', label: 'Location tracking (disabled)', isDisabled: true },
      { id: 'sync', label: 'Cloud sync' },
      { id: 'analytics', label: 'Usage analytics (disabled)', isDisabled: true },
      { id: 'beta', label: 'Beta features' },
    ],
    columns: 2,
    value: [],
    onChange: () => {},
  },
};
