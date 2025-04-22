import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../Input';
import { FormItem } from '../src/FormItem';

const meta = {
  title: 'Components/FormItem',
  component: FormItem,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof FormItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    children: <Input type="email" placeholder="Enter your email" />,
  },
};

export const WithHintText: Story = {
  args: {
    label: 'Password',
    hintText: 'Must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter your password" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    errorText: 'Username is already taken',
    children: <Input placeholder="Choose a username" />,
  },
};

export const WithHintAndError: Story = {
  args: {
    label: 'Email',
    hintText: 'We will never share your email',
    errorText: 'Please enter a valid email address',
    children: <Input type="email" placeholder="Enter your email" />,
  },
};
