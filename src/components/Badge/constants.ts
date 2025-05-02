import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-base-200 text-black',
        primary: 'border-transparent bg-primary-400 text-white',
        success: 'border-transparent bg-success-400 text-white',
        danger: 'border-transparent bg-danger-400 text-white',
        warning: 'border-transparent bg-warning-300 text-black',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
