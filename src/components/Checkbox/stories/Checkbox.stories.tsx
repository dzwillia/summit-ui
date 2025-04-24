import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/Checkbox';

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

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    id: 'terms',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    id: 'checked',
    isChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    id: 'disabled',
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    id: 'disabled-checked',
    isChecked: true,
    isDisabled: true,
  },
};
