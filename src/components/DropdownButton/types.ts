import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type DropdownItemType = DropdownItem | 'separator';

export interface DropdownItem {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface DropdownButtonProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> {
  items: DropdownItemType[];
  children: ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
}
