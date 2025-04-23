import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

const meta = {
  title: 'Components/TagInput',
  component: TagInput,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TagInputDemo = () => {
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', text: 'React' },
    { id: '2', text: 'TypeScript' },
  ]);

  return (
    <div className="space-y-4">
      <TagInput value={tags} onChange={setTags} />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};

export const Default: Story = {
  render: () => <TagInputDemo />,
};

export const Empty: Story = {
  args: {
    value: [],
    onChange: () => {},
  },
};

export const WithMaxTags: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    maxTags: 3,
    placeholder: 'Add up to 3 tags...',
  },
};

export const WithError: Story = {
  args: {
    value: [{ id: '1', text: 'React' }],
    onChange: () => {},
    errorText: 'Please add at least 2 tags',
  },
};

export const Disabled: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    disabled: true,
  },
};
