import type { Meta, StoryObj } from '@storybook/react';
import { SwitchGroup } from '../src/SwitchGroup';

const meta = {
  title: 'Components/SwitchGroup',
  component: SwitchGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

export const Default: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
  },
};

export const WithSelection: Story = {
  args: {
    options,
    value: ['notifications', 'emails'],
    onChange: () => {},
  },
};

export const SingleColumn: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
    columns: 1,
  },
};

export const ThreeColumns: Story = {
  args: {
    options,
    value: [],
    onChange: () => {},
    columns: 3,
  },
};

export const WithManyOptions: Story = {
  args: {
    options: [
      ...options,
      { id: 'backup', label: 'Automatic backup' },
      { id: 'sync', label: 'Cloud sync' },
      { id: 'analytics', label: 'Usage analytics' },
      { id: 'beta', label: 'Beta features' },
    ],
    value: [],
    onChange: () => {},
  },
};
