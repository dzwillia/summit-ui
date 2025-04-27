import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag, TagInputProps } from '../types';

const meta = {
  title: 'Components/TagInput',
  component: TagInput,
  parameters: {},
  argTypes: {
    value: {
      control: 'object',
      description: 'Array of id/string pairs representing tags',
      type: { name: 'array', value: { name: 'object', value: {} }, required: true },
    },
    delimiterChars: {
      control: 'object',
      description: 'Array delimiter characters to split tags',
      type: { name: 'array', value: { name: 'object', value: {} }, required: false },
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

interface TagInputDemoProps extends TagInputProps {
  initialTags?: Tag[];
  maxTags?: number;
}

const defaultProps = {
  value: [],
  onChange: () => {},
  placeholder: 'Add tags...',
};

const TagInputDemo = ({
  initialTags = [],
  maxTags,
  isDisabled,
  delimiterChars,
}: TagInputDemoProps) => {
  const [tags, setTags] = useState<Tag[]>(initialTags);

  return (
    <div className="space-y-4">
      <TagInput
        value={tags}
        onChange={setTags}
        maxTags={maxTags}
        isDisabled={isDisabled}
        delimiterChars={delimiterChars}
      />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};

/**
 * Interactive playground for the TagInput component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: { value: [], delimiterChars: [], onChange: () => {}, placeholder: 'Add tags...' },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the TagInput component.
 * Shows a tag input with some pre-existing tags for React and TypeScript.
 */
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

/**
 * An empty TagInput.
 * Shows the initial state before any tags are added.
 */
export const Empty: Story = {
  args: {
    value: [],
    onChange: () => {},
    placeholder: 'Add tags...',
  },
  render: () => <TagInputDemo {...defaultProps} />,
};

/**
 * A disabled TagInput.
 * Shows how the component appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    value: [
      { id: '1', text: 'React' },
      { id: '2', text: 'TypeScript' },
    ],
    onChange: () => {},
    placeholder: 'Add tags...',
    isDisabled: true,
  },
  render: () => (
    <TagInputDemo
      {...defaultProps}
      initialTags={[
        { id: '1', text: 'React' },
        { id: '2', text: 'TypeScript' },
      ]}
      isDisabled={true}
    />
  ),
};

/**
 * TagInput with a maximum number of tags.
 * Demonstrates how the component behaves when it reaches its tag limit.
 */
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

/**
 * TagInput with a single delimiter character.
 * Shows how tags can be created using a comma as a separator.
 */
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

/**
 * TagInput with multiple delimiter characters.
 * Demonstrates using multiple characters (comma, space, and pipe) to create tags.
 */
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
