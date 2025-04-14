import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithoutRef } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SingleSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
export type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
export type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
