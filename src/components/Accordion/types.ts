import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ComponentPropsWithoutRef } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  variant?: 'default';
  defaultValue?: string | string[];
  className?: string;
  isBordered?: boolean;
}
