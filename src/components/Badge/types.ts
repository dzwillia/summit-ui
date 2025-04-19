import { VariantProps } from 'class-variance-authority';
import { badgeVariants } from './constants';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
