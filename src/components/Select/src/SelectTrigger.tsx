import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { SelectTriggerProps } from '../types';

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      styles.focusRing,
      'flex h-10 w-full items-center justify-between rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:text-muted-foreground',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export { SelectTrigger };
