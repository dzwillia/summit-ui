import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A popover with an arrow pointer.
 * Demonstrates the default popover with a visual indicator pointing to its trigger element.
 * This example includes form elements to show how the popover can contain complex content.
 */
export const WithArrow: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="input">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" hasArrow>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width" className="text-sm">
                Width
              </label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height" className="text-sm">
                Height
              </label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

/**
 * A basic popover without an arrow pointer.
 * Shows a simpler version of the popover for when a visual indicator isn't needed.
 */
export const WithoutArrow: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="input">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p className="text-sm">This is a simple popover without an arrow.</p>
      </PopoverContent>
    </Popover>
  ),
};

/**
 * A popover with custom positioning.
 * Demonstrates how to control the alignment of the popover relative to its trigger.
 */
export const CustomPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="input">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start" hasArrow>
        <p className="text-sm">This popover is aligned to the start.</p>
      </PopoverContent>
    </Popover>
  ),
};
