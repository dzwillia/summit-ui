import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../src/Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {},
  tags: ['autodocs'],
  args: {
    mode: 'single',
    variant: 'default',
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['multiple', 'single'],
      description:
        'The mode of the accordion. Determines how many sections can be expanded at one time',
      table: {
        defaultValue: {
          summary: 'single',
        },
        type: {
          summary: 'single | multiple',
        },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger', 'warning'],
      description: 'The visual style variant of the accordion',
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: 'default | primary | success | danger | warning',
        },
      },
    },
    caretPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'The position of the caret icon',
      table: {
        defaultValue: {
          summary: 'right',
        },
        type: {
          summary: 'left | right',
        },
      },
    },
    items: {
      control: 'object',
      description: 'The items to be displayed in the accordion',
      type: { name: 'boolean', required: true },
      table: {
        type: {
          summary: 'AccordionItem[]',
        },
      },
    },
    isBordered: {
      control: 'boolean',
      description: 'Whether to show borders around the content area',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    isCollapsible: {
      control: 'boolean',
      description: 'Whether the accordion can be fully collapsed (only applies to single mode)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the accordion',
    },
    triggerClassName: {
      type: 'string',
      description: 'Additional class names to apply to the accordion trigger',
    },
    contentClassName: {
      type: 'string',
      description: 'Additional class names to apply to the accordion content',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleItems = [
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
        <pre className="rounded-md bg-gray-100 p-2">
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
    items: exampleItems,
  },
};

/**
 * Primary variant of the Accordion component.
 * Uses the primary color scheme for a more prominent appearance.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    items: [exampleItems[0]],
  },
};

/**
 * Success variant of the Accordion component.
 * Uses green colors to indicate positive or successful content.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    items: [exampleItems[0]],
  },
};

/**
 * Warning variant of the Accordion component.
 * Uses yellow colors to indicate cautionary content.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    items: [exampleItems[0]],
  },
};

/**
 * Danger variant of the Accordion component.
 * Uses red colors to indicate dangerous or destructive content.
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    items: [exampleItems[0]],
  },
};

/**
 * Accordion with custom trigger and content class names.
 * Demonstrates how to apply custom styles to the trigger and content areas.
 */
export const CustomClasses: Story = {
  args: {
    items: [exampleItems[0]],
    triggerClassName: 'bg-[#551c9a] text-white hover:bg-[#551c9a]/80',
    contentClassName: 'bg-[#551c9a]/10 text-[#551c9a] font-semibold',
  },
};

/**
 * Accordion with custom titles.
 * Demonstrates how to use custom React elements in accordion titles.
 */
export const CustomTitle: Story = {
  args: {
    items: [
      {
        id: 'item-1',
        title: (
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-green-500" />
            <span>Online Status</span>
          </div>
        ),
        content: 'This section demonstrates a title with custom React elements.',
      },
      {
        id: 'item-2',
        title: (
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-500">Important:</span>
            <span>System Updates</span>
          </div>
        ),
        content: 'Another example of a custom title with styled components.',
      },
    ],
  },
};

/**
 * Accordion with bordered content.
 * Shows sections with borders around the content area.
 */
export const Bordered: Story = {
  args: {
    items: exampleItems,
    isBordered: true,
  },
};

/**
 * Accordion with rich content.
 * Demonstrates how the accordion handles complex content including lists and code blocks.
 */
export const RichContent: Story = {
  args: {
    items: richContentItems,
  },
};

/**
 * Accordion with long content.
 * Shows how the accordion handles extensive content like terms and conditions.
 */
export const LongContent: Story = {
  args: {
    items: longContentItems,
  },
};

/**
 * Accordion with single expansion.
 * Only allows one section to be open at a time.
 */
export const SingleExpansion: Story = {
  args: {
    mode: 'single',
    items: exampleItems,
  },
};

/**
 * Accordion with single expansion that cannot be fully collapsed once expanded.
 * Only allows one section to be open at a time.
 */
export const AccordionExpansion: Story = {
  args: {
    mode: 'single',
    isCollapsible: false,
    items: exampleItems,
  },
};

/**
 * Accordion with default open sections.
 * Shows how to pre-open specific sections.
 */
export const DefaultOpen: Story = {
  args: {
    items: exampleItems,
    defaultValue: ['item-1', 'item-2'],
  },
};

/**
 * Accordion with custom caret position.
 * Demonstrates how to change the position of the caret icon.
 */
export const LeftCaret: Story = {
  args: {
    items: exampleItems,
    caretPosition: 'left',
  },
};
