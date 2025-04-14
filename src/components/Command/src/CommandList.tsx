import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';
import { CommandListProps } from '../types';

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

export { CommandList };
