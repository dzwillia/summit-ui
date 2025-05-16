import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface TooltipProps
  extends Omit<ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>, 'children'> {
  children: ReactNode;
  content: ReactNode;
  side?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>['side'];
  align?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>['align'];
  offset?: number;
  hasArrow?: boolean;
  className?: string;
}
