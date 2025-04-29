import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../src/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  { id: 'item-1', title: 'Section 1', content: 'Content for section 1' },
  { id: 'item-2', title: 'Section 2', content: 'Content for section 2' },
  { id: 'item-3', title: 'Section 3', content: 'Content for section 3' },
];

const richContentItems = [
  {
    id: 'item-1',
    title: 'What is Summit UI?',
    content: (
      <div className="space-y-2">
        <p>
          Summit UI is a modern React component library built with TypeScript and Tailwind CSS. It
          provides a comprehensive set of accessible, customizable components for building modern
          web applications.
        </p>
        <ul className="list-disc pl-6">
          <li>Built with React and TypeScript</li>
          <li>Styled with Tailwind CSS</li>
          <li>Accessible by default</li>
          <li>Fully customizable</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'item-2',
    title: 'Getting Started',
    content: (
      <div className="space-y-2">
        <p>To get started with Summit UI, install it via npm:</p>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code>npm install summit-ui</code>
        </pre>
      </div>
    ),
  },
];

const longContentItems = [
  {
    id: 'item-1',
    title: 'Terms and Conditions',
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">1. Introduction</h3>
        <p>
          These Website Standard Terms and Conditions written on this webpage shall manage your use
          of our website, Summit UI accessible at https://summit-ui.dev.
        </p>
        <p>
          These Terms will be applied fully and affect your use of this Website. By using this
          Website, you agreed to accept all terms and conditions written in here. You must not use
          this Website if you disagree with any of these Website Standard Terms and Conditions.
        </p>
        <h3 className="text-lg font-semibold">2. Intellectual Property Rights</h3>
        <p>
          Other than the content you own, under these Terms, Summit UI and/or its licensors own all
          the intellectual property rights and materials contained in this Website.
        </p>
        <p>
          You are granted limited license only for purposes of viewing the material contained on
          this Website.
        </p>
        <h3 className="text-lg font-semibold">3. Restrictions</h3>
        <p>You are specifically restricted from all of the following:</p>
        <ul className="list-disc pl-6">
          <li>publishing any Website material in any other media</li>
          <li>selling, sublicensing and/or otherwise commercializing any Website material</li>
          <li>publicly performing and/or showing any Website material</li>
          <li>using this Website in any way that is or may be damaging to this Website</li>
          <li>using this Website contrary to applicable laws and regulations</li>
        </ul>
      </div>
    ),
  },
];

/**
 * The default state of the Accordion component.
 * Shows a basic accordion with multiple sections.
 */
export const Default: Story = {
  args: {
    variant: 'default',
    items: defaultItems,
  },
};

/**
 * Accordion with rich content.
 * Demonstrates how the accordion handles complex content including lists and code blocks.
 */
export const RichContent: Story = {
  args: {
    variant: 'default',
    items: richContentItems,
  },
};

/**
 * Accordion with long content.
 * Shows how the accordion handles extensive content like terms and conditions.
 */
export const LongContent: Story = {
  args: {
    variant: 'default',
    items: longContentItems,
  },
};

/**
 * Accordion with bordered content.
 * Shows sections with borders around the content area.
 */
export const Bordered: Story = {
  args: {
    variant: 'default',
    items: defaultItems,
    isBordered: true,
  },
};

/**
 * Accordion with single expansion.
 * Only allows one section to be open at a time.
 */
export const SingleExpansion: Story = {
  args: {
    variant: 'default',
    items: defaultItems,
    type: 'single',
  },
};

/**
 * Accordion with default open sections.
 * Shows how to pre-open specific sections.
 */
export const DefaultOpen: Story = {
  args: {
    variant: 'default',
    items: defaultItems,
    defaultValue: ['item-1', 'item-2'],
  },
};
