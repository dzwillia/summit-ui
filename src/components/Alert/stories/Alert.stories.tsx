import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default success alert with standard sizing.
 * Demonstrates a typical success message with both heading and description.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

/**
 * A compact success alert.
 * Shows how the alert appears with reduced padding and font sizes.
 */
export const SuccessSmall: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

/**
 * A compact success alert without an icon.
 * Demonstrates how to hide the status icon while maintaining the alert's structure.
 */
export const SuccessSmallNoIcon: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    className: '[&>svg]:hidden',
  },
};

/**
 * A compact success alert without a heading.
 * Shows the alert's appearance when only displaying the message content.
 */
export const SuccessSmallNoHeading: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
  },
};

/**
 * A compact success alert with an icon but no heading.
 * Demonstrates the layout when combining the icon with message content only.
 */
export const SuccessSmallWithIconNoHeading: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
  },
};

/**
 * A warning alert with standard sizing.
 * Shows how to display cautionary messages that require attention.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.',
  },
};

/**
 * An error alert with standard sizing.
 * Used to communicate critical errors or failures that need immediate attention.
 */
export const Error: Story = {
  args: {
    variant: 'error',
    heading: 'Error',
    children: 'Error: Failed to save changes. Please try again.',
  },
};

/**
 * An information alert with standard sizing.
 * Used for general announcements or updates that aren't critical.
 */
export const Information: Story = {
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.',
  },
};

/**
 * An alert without a heading.
 * Shows how to create a simpler alert when a heading isn't needed.
 */
export const WithoutHeading: Story = {
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.',
  },
};

/**
 * An alert with a custom heading level.
 * Demonstrates how to adjust the semantic heading level for accessibility.
 */
export const CustomHeadingLevel: Story = {
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.',
  },
};

/**
 * An alert with extended content.
 * Shows how the alert handles longer messages while maintaining proper layout.
 */
export const LongContent: Story = {
  args: {
    variant: 'info',
    heading: 'Detailed Information',
    children:
      'This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment.',
  },
};
