import { styles } from '@/lib/styles';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: 'border border-primary-400 text-primary-400 hover:underline',
      primary: 'border border-primary-400 bg-primary-400 text-white hover:bg-primary-500',
      danger: 'border border-danger-400 bg-danger-400 text-white hover:bg-danger-500',
      link: 'text-link underline-offset-4 hover:underline',
      input:
        'border border-input bg-background font-normal hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-base-200 hover:text-black',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-8 px-3 text-sm',
      lg: 'h-12 rounded-md px-8 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
