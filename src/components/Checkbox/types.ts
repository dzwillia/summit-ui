import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'checked' | 'disabled'> {
  label?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
}
