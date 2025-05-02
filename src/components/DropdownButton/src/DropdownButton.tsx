import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { DropdownButtonProps } from '../types';

const DropdownButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  DropdownButtonProps
>(
  (
    {
      className,
      children,
      items,
      align = 'start',
      variant = 'default',
      isDisabled = false,
      ...props
    },
    ref,
  ) => (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild disabled={isDisabled}>
        <Button
          ref={ref}
          variant={variant}
          isDisabled={isDisabled}
          className={cn('flex items-center gap-1', className)}
          {...props}
        >
          {children}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={4}
          className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          {items.map((item, index) =>
            item === 'separator' ? (
              <DropdownMenuPrimitive.Separator
                key={`separator-${index}`}
                className="my-1 h-px bg-muted"
              />
            ) : (
              <DropdownMenuPrimitive.Item
                key={item.label}
                disabled={item.isDisabled}
                className={cn(
                  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  item.onClick && 'cursor-pointer',
                )}
                onClick={item.onClick}
              >
                {item.icon ? <span className="mr-2">{item.icon}</span> : null}
                {item.label}
              </DropdownMenuPrimitive.Item>
            ),
          )}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  ),
);
DropdownButton.displayName = 'DropdownButton';

export { DropdownButton };
