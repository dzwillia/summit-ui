import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full border-l-8 text-gray-900 dark:text-gray-100 flex items-start',
  {
    variants: {
      variant: {
        success: 'bg-green-50 border-green-500 [&>svg]:text-green-500 dark:bg-green-950',
        warning: 'bg-yellow-50 border-yellow-500 [&>svg]:text-yellow-500 dark:bg-yellow-950',
        error: 'bg-red-50 border-destructive [&>svg]:text-destructive dark:bg-red-950',
        info: 'bg-blue-50 border-blue-500 [&>svg]:text-blue-500 dark:bg-blue-950',
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

export const alertHeadingVariants = cva('font-semibold mb-1 text-gray-900 dark:text-gray-100', {
  variants: {
    variant: {
      success: '',
      warning: '',
      error: '',
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
