import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Switch } from '../src/Switch';
import { SwitchProps } from '../types';

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

const SwitchDemo = ({ isChecked: initialValue = false, ...args }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);

  useEffect(() => {
    setIsChecked(!!initialValue);
  }, [initialValue]);

  return (
    <div className="space-y-4">
      <Switch {...args} isChecked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)} />
      <p className="text-sm text-muted-foreground">Switch {isChecked ? 'is on' : 'is off'}</p>
    </div>
  );
};

/**
 * Interactive playground for the Switch component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Switch component.
 * Shows a basic toggle switch with a label.
 */
export const Default: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode',
  },
};

/**
 * A switch in its checked state.
 * Demonstrates how the switch appears when toggled on.
 */
export const Checked: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Notifications',
    id: 'notifications',
    isChecked: true,
  },
};

/**
 * A disabled switch.
 * Shows how the switch appears when it's not interactive.
 */
export const Disabled: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Disabled switch',
    id: 'disabled',
    isDisabled: true,
  },
};

/**
 * A disabled switch in its checked state.
 * Demonstrates a non-interactive switch that's toggled on.
 */
export const DisabledChecked: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Disabled checked switch',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true,
  },
};

/**
 * A switch with custom label content.
 * Shows how to use rich content in the switch label.
 */
export const WithCustomLabel: Story = {
  render: args => <SwitchDemo {...args} />,
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
