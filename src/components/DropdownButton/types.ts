import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { buttonVariants } from '../Button/constants';

export type DropdownItemType = DropdownItem | 'separator';

export interface DropdownItem {
  label: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export interface DropdownButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  items: DropdownItemType[];
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  align?: 'start' | 'center' | 'end';
}
