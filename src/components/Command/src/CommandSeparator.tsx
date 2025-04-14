import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';
import { CommandSeparatorProps } from '../types';

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export { CommandSeparator };
