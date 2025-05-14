import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { LabelProps } from '../types';

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={cn(styles.text.label, className)} {...props} />
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
