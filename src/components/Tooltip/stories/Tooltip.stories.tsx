import { Button } from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {},
  tags: ['autodocs'],
  decorators: [
    Story => (
      <TooltipProvider delayDuration={0}>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Tooltip component.
 * Shows a basic tooltip with text content.
 */
export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip with custom positioning.
 * Shows how to control the placement of the tooltip.
 */
export const CustomPosition: Story = {
  render: () => (
    <Tooltip content="This tooltip appears on the right" side="right" offset={8}>
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip with custom alignment.
 * Demonstrates how to adjust the alignment of the tooltip relative to its trigger.
 */
export const CustomAlignment: Story = {
  render: () => (
    <Tooltip content="This tooltip is start-aligned" align="start">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip without an arrow.
 * Shows how the tooltip appears without the pointing arrow.
 */
export const WithoutArrow: Story = {
  render: () => (
    <Tooltip content="This tooltip has no arrow" hasArrow={false}>
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  ),
};
