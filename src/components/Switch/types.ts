import * as SwitchPrimitives from '@radix-ui/react-switch';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, 'checked' | 'disabled'> {
  label?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
}
