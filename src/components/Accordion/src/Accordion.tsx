import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { accordionContentVariants, accordionTriggerVariants } from '../constants';
import { AccordionProps } from '../types';

const AccordionItems = ({
  items,
  variant,
  caretPosition,
  isBordered,
  triggerClassName,
  contentClassName,
}: Pick<
  AccordionProps,
  'items' | 'variant' | 'caretPosition' | 'isBordered' | 'triggerClassName' | 'contentClassName'
>) => (
  <>
    {items.map(item => (
      <AccordionPrimitive.Item key={item.id} value={item.id}>
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger
            className={cn(accordionTriggerVariants({ variant, caretPosition }), triggerClassName)}
          >
            {caretPosition === 'left' ? (
              <ChevronRight className="mr-2 h-5 w-5 shrink-0 text-inherit transition-transform duration-200" />
            ) : null}
            <span className="flex-1 text-left">{item.title}</span>
            {caretPosition === 'right' ? (
              <ChevronDown className="ml-2 h-5 w-5 shrink-0 text-inherit transition-transform duration-200" />
            ) : null}
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content
          className={cn(accordionContentVariants({ variant, isBordered }), contentClassName)}
        >
          <div className="py-4">{item.content}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    ))}
  </>
);

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(
  (
    {
      className,
      triggerClassName,
      contentClassName,
      items,
      mode,
      value,
      defaultValue,
      variant = 'default',
      isBordered = false,
      caretPosition = 'right',
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const sharedProps = {
      ref,
      className: cn('space-y-2', className),
      ...props,
    };

    const itemProps = {
      items,
      variant,
      caretPosition,
      isBordered,
      triggerClassName,
      contentClassName,
    };

    if (mode === 'multiple') {
      return (
        <AccordionPrimitive.Root
          type="multiple"
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          {...sharedProps}
        >
          <AccordionItems {...itemProps} />
        </AccordionPrimitive.Root>
      );
    }

    return (
      <AccordionPrimitive.Root
        type="single"
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        collapsible={mode === 'single'}
        {...sharedProps}
      >
        <AccordionItems {...itemProps} />
      </AccordionPrimitive.Root>
    );
  },
);
Accordion.displayName = 'Accordion';

export { Accordion };
