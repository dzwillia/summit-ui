import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Radio } from '../src/Radio';
import { RadioProps } from '../types';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {},
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ['default', 'tile'],
    },
  },
  decorators: [
    Story => (
      <RadioGroupPrimitive.Root defaultValue="option-1">
        <Story />
      </RadioGroupPrimitive.Root>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const RadioDemo = ({ isChecked: initialValue = false, ...args }: RadioProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(!!initialValue);

  useEffect(() => {
    setIsChecked(!!initialValue);
  }, [initialValue]);

  return (
    <div className="space-y-4">
      <Radio {...args} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      <p className="text-sm text-muted-foreground">
        Radio {isChecked ? 'is selected' : 'is not selected'}
      </p>
    </div>
  );
};

/**
 * Interactive playground for the Radio component.
 * Use the controls to experiment with different props and states.
 */
export const Playground: Story = {
  args: {
    label: 'Radio option',
    id: 'radio-playground',
    value: 'option-playground',
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};

/**
 * The default state of the Radio component.
 * Shows a basic radio button with a label.
 */
export const Default: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Radio option',
    id: 'radio-1',
    value: 'option-1',
  },
};

/**
 * Radio with tile styling.
 * Shows a larger radio option with a title and description.
 */
export const Tile: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Tile Radio',
    description: 'This is a description for the tile radio option',
    id: 'radio-tile',
    value: 'option-tile',
    variant: 'tile',
  },
};

/**
 * Selected tile radio.
 * Demonstrates how a tile radio option appears when selected.
 */
export const TileSelected: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Selected Tile Radio',
    description: 'This tile radio option is selected',
    id: 'radio-tile-selected',
    value: 'option-tile-selected',
    variant: 'tile',
    isChecked: true,
  },
};

/**
 * Disabled tile radio.
 * Shows how a tile radio option appears when it's not interactive.
 */
export const TileDisabled: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled Tile Radio',
    description: 'This tile radio option is disabled',
    id: 'radio-tile-disabled',
    value: 'option-tile-disabled',
    variant: 'tile',
    isDisabled: true,
  },
};

/**
 * Selected radio button.
 * Shows how a standard radio button appears when selected.
 */
export const Selected: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Selected radio',
    id: 'radio-2',
    value: 'option-2',
    isChecked: true,
  },
};

/**
 * Disabled radio button.
 * Demonstrates how a standard radio button appears when disabled.
 */
export const Disabled: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled radio',
    id: 'radio-3',
    value: 'option-3',
    isDisabled: true,
  },
};

/**
 * Disabled and selected radio button.
 * Shows a radio button that is both selected and not interactive.
 */
export const DisabledSelected: Story = {
  render: args => <RadioDemo {...args} />,
  args: {
    label: 'Disabled selected radio',
    id: 'radio-4',
    value: 'option-4',
    isChecked: true,
    isDisabled: true,
  },
};
