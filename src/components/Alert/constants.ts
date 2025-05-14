import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative flex w-full items-start border-l-8 text-gray-900 dark:text-gray-100',
  {
    variants: {
      variant: {
        success: 'border-success-400 bg-success-100 dark:bg-success-700 [&>svg]:text-success-400',
        warning: 'border-warning-400 bg-warning-100 dark:bg-warning-700 [&>svg]:text-warning-400',
        danger: 'border-danger-400 bg-danger-100 dark:bg-danger-700 [&>svg]:text-danger-400',
        info: 'border-info-400 bg-info-100 dark:bg-info-700 [&>svg]:text-info-400',
      },
      size: {
        sm: 'px-3 py-2 text-sm [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5',
        default: 'p-4 text-base [&>svg]:mr-3 [&>svg]:h-8 [&>svg]:w-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export const alertHeadingVariants = cva('mb-1 font-bold text-base-700 dark:text-base-100', {
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
