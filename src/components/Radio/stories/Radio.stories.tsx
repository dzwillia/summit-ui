import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';
import { RadioProps } from '../types';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {},
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  decorators: [
    Story => (
      <RadioGroupPrimitive.Root defaultValue="option-1">
        <Story />
      </RadioGroupPrimitive.Root>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const RadioDemo = ({ isChecked: initialValue = false, ...args }: RadioProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(!!initialValue);

  useEffect(() => {
    setIsChecked(!!initialValue);
  }, [initialValue]);

  return (
    <div className="space-y-4">
      <Radio {...args} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};

export const Playground: Story = {
  args: {
    label: 'Radio option',
    id: 'radio-playground',
    value: 'option-playground',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

export const Default: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Radio option',
    id: 'radio-1',
    value: 'option-1',
  },
};

export const Selected: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Selected radio',
    id: 'radio-2',
    value: 'option-2',
    isChecked: true,
  },
};

export const Disabled: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled radio',
    id: 'radio-3',
    value: 'option-3',
    isDisabled: true,
  },
};

export const DisabledSelected: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled selected radio',
    id: 'radio-4',
    value: 'option-4',
    isChecked: true,
    isDisabled: true,
  },
};
