import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithType: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithTransformUppercase: Story = {
  args: {
    transform: 'uppercase',
    placeholder: 'Text will be uppercase',
  },
};

export const WithTransformLowercase: Story = {
  args: {
    transform: 'lowercase',
    placeholder: 'Text will be lowercase',
  },
};

export const WithTransformTrim: Story = {
  args: {
    transform: 'trim',
    placeholder: 'Whitespace will be trimmed',
  },
};

export const WithMultipleTransforms: Story = {
  args: {
    transform: ['trim', 'uppercase'],
    placeholder: 'Text will be trimmed and uppercase',
  },
};
