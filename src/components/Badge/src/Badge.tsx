import { cn } from '@/lib/utils';
import * as React from 'react';
import { badgeVariants } from '../constants';
import { BadgeProps } from '../types';

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return <div ref={ref} className={cn(badgeVariants({ variant, className }))} {...props} />;
  },
);
Badge.displayName = 'Badge';

export { Badge };
