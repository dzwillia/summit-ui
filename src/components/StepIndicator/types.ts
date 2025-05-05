export interface Step {
  id: string;
  label: string;
  description?: string;
}

export interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'default' | 'sm' | 'lg';
}
