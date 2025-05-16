import { cn } from '@/lib/utils';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
import { TooltipProps } from '../types';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Root>, TooltipProps>(
  (
    {
      children,
      content,
      side = 'top',
      align = 'center',
      offset = 2,
      hasArrow = true,
      className,
      ...props
    },
    ref,
  ) => (
    <TooltipPrimitive.Root {...props}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        ref={ref}
        side={side}
        align={align}
        sideOffset={offset}
        className={cn(
          'z-50 overflow-hidden rounded-sm bg-base-700 px-2 py-1.5 text-xs text-white fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
      >
        {content}
        {hasArrow ? (
          <TooltipPrimitive.Arrow width={11} height={5} className="fill-base-700 stroke-base-700" />
        ) : null}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  ),
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipProvider };
