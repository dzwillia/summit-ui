import type { Meta, StoryObj } from '@storybook/react';
import { Command } from '../src/Command';
import { CommandEmpty } from '../src/CommandEmpty';
import { CommandGroup } from '../src/CommandGroup';
import { CommandInput } from '../src/CommandInput';
import { CommandItem } from '../src/CommandItem';

const meta = {
  title: 'Components/Command',
  component: Command,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default command menu with groups and suggestions.
 * Shows a fully featured command palette with search, groups, and items.
 */
export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
        <CommandItem>Search</CommandItem>
        <CommandItem>Settings</CommandItem>
      </CommandGroup>
      <CommandGroup heading="Recent">
        <CommandItem>Documents</CommandItem>
        <CommandItem>Projects</CommandItem>
        <CommandItem>Tasks</CommandItem>
      </CommandGroup>
    </Command>
  ),
};

/**
 * A simplified command menu without groups.
 * Shows a basic list of commands without categorization.
 */
export const WithoutGroups: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandItem>Item 1</CommandItem>
      <CommandItem>Item 2</CommandItem>
      <CommandItem>Item 3</CommandItem>
    </Command>
  ),
};
