import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import {
  accordionContentVariants,
  accordionTriggerVariants,
  accordionVariants,
} from '../constants';
import { AccordionProps } from '../types';

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(
  (
    {
      className,
      items,
      defaultValue,
      type = 'multiple',
      variant = 'default',
      isBordered = false,
      ...props
    },
    ref,
  ) => {
    return (
      <AccordionPrimitive.Root
        ref={ref}
        type={type}
        defaultValue={defaultValue}
        collapsible={type === 'single'}
        className={cn(accordionVariants({ variant }), className)}
        {...props}
      >
        {items.map(item => (
          <AccordionPrimitive.Item key={item.id} value={item.id}>
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className={accordionTriggerVariants({ variant })}>
                {item.title}
                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content
              className={accordionContentVariants({ variant, bordered: isBordered })}
            >
              <div className="py-4">{item.content}</div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    );
  },
);
Accordion.displayName = 'Accordion';

export { Accordion };
