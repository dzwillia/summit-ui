import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ComponentPropsWithoutRef } from 'react';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

type SharedProps = {
  items: AccordionItem[];
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  caretPosition?: 'left' | 'right';
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  isBordered?: boolean;
};

type SingleOrAccordionProps = {
  mode: 'accordion' | 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

type MultipleProps = {
  mode: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

type OmittedPrimitiveProps = Omit<
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  'type' | 'value' | 'defaultValue' | 'onValueChange'
>;

export type AccordionProps =
  | (SharedProps & OmittedPrimitiveProps & SingleOrAccordionProps)
  | (SharedProps & OmittedPrimitiveProps & MultipleProps);
