import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type DropdownItemType = DropdownItem | 'separator';

export interface DropdownItem {
  label: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export interface DropdownButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>, 'disabled'> {
  items: DropdownItemType[];
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  align?: 'start' | 'center' | 'end';
  variant?: 'default' | 'outline' | 'destructive' | 'secondary' | 'ghost' | 'link';
}
