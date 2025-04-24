import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src/Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {},
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    onCheckedChange: {
      action: 'checked changed',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode',
  },
};

export const Checked: Story = {
  args: {
    label: 'Notifications',
    id: 'notifications',
    isChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    id: 'disabled',
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked switch',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true,
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: (
      <div className="flex flex-col">
        <span className="font-bold">Dark Mode</span>
        <span className="text-sm text-muted-foreground">Enable dark mode theme</span>
      </div>
    ),
    id: 'dark-mode',
  },
};
