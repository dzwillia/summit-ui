import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
import { SelectLabelProps } from '../types';

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export { SelectLabel };
