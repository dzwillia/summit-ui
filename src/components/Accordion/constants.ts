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
    'flex flex-1 items-center justify-between px-4 py-[0.875rem] font-bold transition-all hover:brightness-90 [&[data-state=open]>svg]:rotate-180',
  ),
  {
    variants: {
      variant: {
        default: 'bg-gray-100',
        primary: 'bg-primary text-primary-foreground',
        success: 'bg-green-100 text-green-900',
        danger: 'bg-destructive text-destructive-foreground',
        warning: 'bg-yellow-100 text-yellow-900',
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
        default: 'border-gray-100',
        primary: 'border-primary',
        success: 'border-green-100',
        danger: 'border-destructive',
        warning: 'border-yellow-100',
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
