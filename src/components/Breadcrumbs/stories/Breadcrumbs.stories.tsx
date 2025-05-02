import type { Meta, StoryObj } from '@storybook/react';
import { Home, Settings, User } from 'lucide-react';
import { Breadcrumbs } from '../src/Breadcrumbs';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Breadcrumbs component.
 * Shows a basic navigation path with text-only items.
 */
export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Documents', href: '/documents' },
      { label: 'Current Page' },
    ],
  },
};

/**
 * Breadcrumbs with icons in the labels.
 * Demonstrates how to enhance navigation items with visual indicators.
 */
export const WithIcons: Story = {
  args: {
    items: [
      {
        label: (
          <span className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </span>
        ),
        href: '/',
      },
      {
        label: (
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            Profile
          </span>
        ),
        href: '/profile',
      },
      {
        label: (
          <span className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            Settings
          </span>
        ),
      },
    ],
  },
};

/**
 * Breadcrumbs with a custom separator.
 * Shows how to customize the separator between navigation items.
 */
export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Categories', href: '/categories' },
      { label: 'Products' },
    ],
    separator: '/',
  },
};

/**
 * Breadcrumbs with long text content.
 * Demonstrates how the component handles longer labels and wrapping.
 */
export const LongContent: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Very Long Category Name That Might Wrap', href: '/category' },
      { label: 'Even Longer Product Name That Definitely Should Wrap' },
    ],
  },
};
