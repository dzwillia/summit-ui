import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full border-l-8 text-gray-900 dark:text-gray-100 flex items-start',
  {
    variants: {
      variant: {
        success: 'bg-success-100 border-success-400 [&>svg]:text-success-400 dark:bg-success-700',
        warning: 'bg-warning-100 border-warning-400 [&>svg]:text-warning-400 dark:bg-warning-700',
        danger: 'bg-danger-100 border-danger-400 [&>svg]:text-danger-400 dark:bg-danger-700',
        info: 'bg-info-100 border-info-400 [&>svg]:text-info-400 dark:bg-info-700',
      },
      size: {
        sm: 'py-2 px-3 text-sm [&>svg]:h-5 [&>svg]:w-5 [&>svg]:mr-2',
        default: 'p-4 text-base [&>svg]:h-8 [&>svg]:w-8 [&>svg]:mr-3',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export const alertHeadingVariants = cva('font-bold mb-1 text-base-700 dark:text-base-100', {
  variants: {
    variant: {
      success: '',
      warning: '',
      danger: '',
      info: '',
    },
    size: {
      sm: 'text-base',
      default: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
