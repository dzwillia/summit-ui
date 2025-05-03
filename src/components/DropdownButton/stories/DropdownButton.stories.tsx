import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Settings, User } from 'lucide-react';
import { DropdownButton } from '../src/DropdownButton';

const meta = {
  title: 'Components/DropdownButton',
  component: DropdownButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger', 'link', 'input', 'ghost'],
      description: 'The visual style variant of the dropdown button',
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: 'radio',
      description: 'The size of the dropdown button',
    },
    items: {
      control: 'object',
      description: 'The items to be displayed in the dropdown button',
    },
    className: {
      type: 'string',
      description: 'Additional class names to apply to the dropdown button',
    },
  },
} satisfies Meta<typeof DropdownButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the DropdownButton component.
 * Shows a basic dropdown menu with simple text items.
 */
export const Default: Story = {
  args: {
    children: 'Actions',
    items: [
      { label: 'Profile', onClick: () => console.log('Profile clicked') },
      { label: 'Settings', onClick: () => console.log('Settings clicked') },
      { label: 'Logout', onClick: () => console.log('Logout clicked') },
    ],
  },
};

/**
 * A disabled dropdown button.
 * Demonstrates how the component appears when it's not interactive.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Dropdown Button',
    isDisabled: true,
    items: [
      { label: 'Profile', onClick: () => console.log('Profile clicked') },
      { label: 'Settings', onClick: () => console.log('Settings clicked') },
      { label: 'Logout', onClick: () => console.log('Logout clicked') },
    ],
  },
};

/**
 * A dropdown menu with icons next to each item.
 * Shows how to enhance menu items with visual indicators.
 */
export const WithIcons: Story = {
  args: {
    children: 'Menu',
    items: [
      {
        label: 'Profile',
        icon: <User className="h-4 w-4" />,
        onClick: () => console.log('Profile clicked'),
      },
      {
        label: 'Settings',
        icon: <Settings className="h-4 w-4" />,
        onClick: () => console.log('Settings clicked'),
      },
      {
        label: 'Messages',
        icon: <Mail className="h-4 w-4" />,
        onClick: () => console.log('Messages clicked'),
      },
    ],
  },
};

/**
 * A dropdown menu with separators between groups of items.
 * Demonstrates how to organize menu items into logical sections.
 */
export const WithSeparators: Story = {
  args: {
    children: 'Options',
    items: [
      { label: 'View profile', onClick: () => console.log('View profile clicked') },
      { label: 'Settings', onClick: () => console.log('Settings clicked') },
      'separator',
      { label: 'Help', onClick: () => console.log('Help clicked') },
      { label: 'Feedback', onClick: () => console.log('Feedback clicked') },
      'separator',
      { label: 'Logout', onClick: () => console.log('Logout clicked') },
    ],
  },
};

/**
 * A dropdown menu with some disabled items.
 * Shows how to indicate that certain options are not currently available.
 */
export const WithDisabledItems: Story = {
  args: {
    children: 'Options',
    items: [
      { label: 'Active Option', onClick: () => console.log('Active clicked') },
      'separator',
      { label: 'Disabled Option', isDisabled: true },
      'separator',
      { label: 'Another Active', onClick: () => console.log('Another clicked') },
    ],
  },
};

/**
 * A dropdown button with a different visual style.
 * Demonstrates how to change the button's appearance using variants.
 */
export const WithVariant: Story = {
  args: {
    children: 'Settings',
    variant: 'link',
    items: [
      { label: 'Account', onClick: () => console.log('Account clicked') },
      { label: 'Security', onClick: () => console.log('Security clicked') },
      'separator',
      { label: 'Notifications', onClick: () => console.log('Notifications clicked') },
    ],
  },
};

/**
 * A dropdown menu with custom alignment.
 * Shows how to control the positioning of the dropdown menu.
 */
export const WithAlignment: Story = {
  args: {
    children: 'Aligned Menu',
    align: 'end',
    items: [
      { label: 'Right-aligned item 1', onClick: () => console.log('Item 1 clicked') },
      { label: 'Right-aligned item 2', onClick: () => console.log('Item 2 clicked') },
    ],
  },
};
