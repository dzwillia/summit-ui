import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag, TagInputProps } from '../types';

const meta = {
  title: 'Components/TagInput',
  component: TagInput,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

interface TagInputDemoProps extends TagInputProps {
  initialTags?: Tag[];
  maxTags?: number;
  minTags?: number;
}

const defaultProps = {
  value: [],
  onChange: () => {},
  placeholder: 'Add tags...',
};

const TagInputDemo = ({
  initialTags = [],
  maxTags,
  minTags,
  disabled,
  delimiterChars,
}: TagInputDemoProps) => {
  const [tags, setTags] = useState<Tag[]>(initialTags);
  const errorText =
    minTags && tags.length < minTags ? `Please add at least ${minTags} tags` : undefined;

  return (
    <div className="space-y-4">
      <TagInput
        value={tags}
        onChange={setTags}
        maxTags={maxTags}
        errorText={errorText}
        disabled={disabled}
        delimiterChars={delimiterChars}
      />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};

export const Default: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    placeholder: 'Add tags...',
  },
  render: () => (
    <TagInputDemo
      {...defaultProps}
      initialTags={[
        { id: '1', text: 'React' },
        { id: '2', text: 'TypeScript' },
      ]}
    />
  ),
};

export const Empty: Story = {
  args: {
    value: [],
    onChange: () => {},
    placeholder: 'Add tags...',
  },
  render: () => <TagInputDemo {...defaultProps} />,
};

export const Disabled: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    placeholder: 'Add tags...',
    disabled: true,
  },
  render: () => (
    <TagInputDemo
      {...defaultProps}
      initialTags={[
        { id: '1', text: 'React' },
        { id: '2', text: 'TypeScript' },
      ]}
      disabled={true}
    />
  ),
};

export const WithMaxTags: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    placeholder: 'Add tags...',
    maxTags: 3,
  },
  render: () => (
    <TagInputDemo
      {...defaultProps}
      initialTags={[
        { id: '1', text: 'React' },
        { id: '2', text: 'TypeScript' },
      ]}
      maxTags={3}
    />
  ),
};

export const WithError: Story = {
  args: {
    value: [{ id: '1', text: 'React' }],
    onChange: () => {},
    placeholder: 'Add tags...',
    errorText: 'Please add at least 2 tags',
  },
  render: () => (
    <TagInputDemo {...defaultProps} initialTags={[{ id: '1', text: 'React' }]} minTags={2} />
  ),
};

export const WithSingleDelimiter: Story = {
  args: {
    value: [{ id: '1', text: 'React' }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: ',',
  },
  render: () => (
    <TagInputDemo {...defaultProps} initialTags={[{ id: '1', text: 'React' }]} delimiterChars="," />
  ),
};

export const WithMultipleDelimiters: Story = {
  args: {
    value: [{ id: '1', text: 'React' }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: [',', ' ', '|'],
  },
  render: () => (
    <TagInputDemo
      {...defaultProps}
      initialTags={[{ id: '1', text: 'React' }]}
      delimiterChars={[',', ' ', '|']}
    />
  ),
};
