import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ComponentPropsWithoutRef } from 'react';

export type PopoverProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;
export type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>;
export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  hasArrow?: boolean;
}
