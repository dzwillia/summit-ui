import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../src/Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithValue: Story = {
  args: {
    value:
      'This is a pre-filled textarea with some content that demonstrates how it looks with text inside it.',
    placeholder: 'Type your message here...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
  },
};

export const WithRows: Story = {
  args: {
    rows: 8,
    placeholder: 'This textarea has 8 rows...',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.',
    placeholder: 'This textarea is read-only',
  },
};

export const WithCustomStyle: Story = {
  args: {
    className: 'min-h-[200px] font-mono',
    placeholder: 'This textarea has custom styling...',
  },
};
