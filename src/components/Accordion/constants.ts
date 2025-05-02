import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const accordionVariants = cva('w-full', {
  variants: {
    variant: {
      default: 'space-y-2',
      primary: 'space-y-2',
      success: 'space-y-2',
      danger: 'space-y-2',
      warning: 'space-y-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const accordionTriggerVariants = cva(
  cn(
    styles.focusRingVisible,
    'flex flex-1 items-center justify-between px-4 py-[0.875rem] font-bold transition-all [&[data-state=open]>svg]:rotate-180',
  ),
  {
    variants: {
      variant: {
        default: 'bg-base-200 hover:hover:brightness-90 text-black',
        primary: 'bg-primary-400 hover:bg-primary-500 text-white',
        success: 'bg-success-400 hover:bg-success-500 text-white',
        danger: 'bg-danger-400 hover:bg-danger-500 text-white',
        warning: 'bg-warning-300 hover:bg-warning-400 text-black',
      },
    },
    defaultVariants: {
      variant: 'default',
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
      bordered: {
        true: 'border-l-4 border-r-4 border-b-4',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      bordered: false,
    },
  },
);
