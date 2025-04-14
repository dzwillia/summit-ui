import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
import { SelectSeparatorProps } from '../types';

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export { SelectSeparator };
