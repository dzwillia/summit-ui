import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { PopoverContentProps } from '../types';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverArrow = PopoverPrimitive.Arrow;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = 'center', sideOffset = 4, hasArrow, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(styles.popover, className)}
      {...props}
    >
      {children}
      {hasArrow ? (
        <PopoverArrow className="stroke-border fill-popover stroke-[1px]" width={11} height={5} />
      ) : null}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
