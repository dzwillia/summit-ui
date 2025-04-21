import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Settings, User } from 'lucide-react';
import { DropdownButton } from '../src/DropdownButton';

const meta = {
  title: 'Components/DropdownButton',
  component: DropdownButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownButton>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const WithDisabledItems: Story = {
  args: {
    children: 'Options',
    items: [
      { label: 'Active Option', onClick: () => console.log('Active clicked') },
      'separator',
      { label: 'Disabled Option', disabled: true },
      'separator',
      { label: 'Another Active', onClick: () => console.log('Another clicked') },
    ],
  },
};

export const WithVariant: Story = {
  args: {
    children: 'Settings',
    variant: 'outline',
    items: [
      { label: 'Account', onClick: () => console.log('Account clicked') },
      { label: 'Security', onClick: () => console.log('Security clicked') },
      'separator',
      { label: 'Notifications', onClick: () => console.log('Notifications clicked') },
    ],
  },
};

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
