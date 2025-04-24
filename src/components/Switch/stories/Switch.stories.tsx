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

export const Playground: Story = {
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

export const Default: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Airplane Mode',
    id: 'airplane-mode',
  },
};

export const Checked: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Notifications',
    id: 'notifications',
    isChecked: true,
  },
};

export const Disabled: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Disabled switch',
    id: 'disabled',
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  render: args => <SwitchDemo {...args} />,
  args: {
    label: 'Disabled checked switch',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true,
  },
};

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
