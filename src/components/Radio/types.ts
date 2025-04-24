import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface RadioProps
  extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'checked' | 'disabled'> {
  label?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
}
