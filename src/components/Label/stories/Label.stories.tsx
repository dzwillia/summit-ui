import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'input-id',
    children: 'Input Label',
  },
};

export const Required: Story = {
  args: {
    children: 'Required Field',
    className: 'after:content-["*"] after:ml-0.5 after:text-red-500',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    className: 'opacity-50 cursor-not-allowed',
  },
};
