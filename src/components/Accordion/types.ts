import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ComponentPropsWithoutRef } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

type BaseAccordionProps = {
  items: AccordionItem[];
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  className?: string;
  isBordered?: boolean;
};

type SingleAccordionProps = BaseAccordionProps & {
  type: 'single';
  value?: string;
  defaultValue?: string;
  isCollapsible?: boolean;
  onValueChange?: (value: string) => void;
};

type MultipleAccordionProps = BaseAccordionProps & {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  isCollapsible: undefined;
  onValueChange?: (value: string[]) => void;
};

type OmittedAccordionProps = Omit<
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  'type' | 'value' | 'defaultValue' | 'collapsible' | 'onValueChange'
>;

export type AccordionProps =
  | (OmittedAccordionProps & SingleAccordionProps)
  | (OmittedAccordionProps & MultipleAccordionProps);
