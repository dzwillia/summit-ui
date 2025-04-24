import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../src/Radio';

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

export const Default: Story = {
  args: {
    label: 'Radio option',
    id: 'radio-1',
    value: 'option-1',
  },
};

export const Selected: Story = {
  args: {
    label: 'Selected radio',
    id: 'radio-2',
    value: 'option-2',
    isChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    id: 'radio-3',
    value: 'option-3',
    isDisabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    label: 'Disabled selected radio',
    id: 'radio-4',
    value: 'option-4',
    isChecked: true,
    isDisabled: true,
  },
};
