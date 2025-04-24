import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Checkbox } from '../src/Checkbox';
import { CheckboxProps } from '../types';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {},
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxDemo = ({ isChecked: initialValue = false, ...args }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);

  useEffect(() => {
    setIsChecked(!!initialValue);
  }, [initialValue]);

  return (
    <div className="space-y-4">
      <Checkbox {...args} isChecked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)} />
      <p className="text-sm text-muted-foreground">
        Checkbox {isChecked ? 'is checked' : 'is unchecked'}
      </p>
    </div>
  );
};

export const Playground: Story = {
  args: {
    label: 'Accept terms and conditions',
    id: 'terms',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

export const Default: Story = {
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Accept terms and conditions',
    id: 'terms2',
  },
};

export const Checked: Story = {
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Checked checkbox',
    id: 'checked',
    isChecked: true,
  },
};

export const Disabled: Story = {
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Disabled checkbox',
    id: 'disabled',
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  render: args => <CheckboxDemo {...args} />,
  args: {
    label: 'Disabled checked checkbox',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true,
  },
};
