import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const accordionTriggerVariants = cva(
  cn(
    styles.focusRingVisible,
    'flex w-full flex-1 items-center px-4 py-[0.875rem] font-bold transition-all',
  ),
  {
    variants: {
      variant: {
        default: 'bg-base-200 text-black hover:brightness-90',
        primary: 'bg-primary-400 text-white hover:bg-primary-500',
        success: 'bg-success-500 text-white hover:bg-success-600',
        danger: 'bg-danger-400 text-white hover:bg-danger-500',
        warning: 'bg-warning-300 text-black hover:bg-warning-400',
      },
      caretPosition: {
        left: '[&[data-state=open]>svg]:rotate-90',
        right: '[&[data-state=open]>svg]:rotate-180',
      },
    },
    defaultVariants: {
      variant: 'default',
      caretPosition: 'right',
    },
  },
);

export const accordionContentVariants = cva(
  'overflow-hidden px-4 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: {
      variant: {
        default: 'border-base-200',
        primary: 'border-primary-400',
        success: 'border-success-400',
        danger: 'border-danger-400',
        warning: 'border-yellow-300',
      },
      isBordered: {
        true: 'border-b-4 border-l-4 border-r-4',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      isBordered: false,
    },
  },
);
