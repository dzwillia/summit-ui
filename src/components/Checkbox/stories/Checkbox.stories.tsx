import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {},
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
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    id: 'disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    id: 'disabled-checked',
    disabled: true,
    checked: true,
  },
};
