import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../Button';
import { StepIndicator } from '../src/StepIndicator';

const meta = {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  {
    id: '1',
    label: 'Account',
    description: 'Create your account',
  },
  {
    id: '2',
    label: 'Profile',
    description: 'Complete your profile',
  },
  {
    id: '3',
    label: 'Review',
    description: 'Review your information',
  },
  {
    id: '4',
    label: 'Complete',
    description: 'Registration completed',
  },
];

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="space-y-8">
      <StepIndicator steps={steps} currentStep={currentStep} />
      <div className="flex gap-4">
        <Button
          variant="default"
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          isDisabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
          isDisabled={currentStep === steps.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

/**
 * Interactive demo of the StepIndicator component.
 * Shows how the component updates as users progress through steps.
 */
export const Interactive: Story = {
  render: () => <InteractiveDemo />,
  args: {
    steps,
    currentStep: 1,
  },
};

/**
 * The default horizontal layout of the StepIndicator.
 */
export const Default: Story = {
  args: {
    steps,
    currentStep: 1,
  },
};

/**
 * Small size variant of the StepIndicator.
 */
export const Small: Story = {
  args: {
    steps,
    currentStep: 1,
    size: 'sm',
  },
};

/**
 * Large size variant of the StepIndicator.
 */
export const Large: Story = {
  args: {
    steps,
    currentStep: 1,
    size: 'lg',
  },
};

/**
 * Vertical layout of the StepIndicator.
 */
export const Vertical: Story = {
  args: {
    steps,
    currentStep: 2,
    orientation: 'vertical',
  },
};

/**
 * StepIndicator with all steps completed.
 */
export const Completed: Story = {
  args: {
    steps,
    currentStep: 4,
  },
};

/**
 * StepIndicator with simple steps (no descriptions).
 */
export const SimpleSteps: Story = {
  args: {
    steps: [
      { id: '1', label: 'Cart' },
      { id: '2', label: 'Delivery' },
      { id: '3', label: 'Payment' },
    ],
    currentStep: 1,
  },
};
