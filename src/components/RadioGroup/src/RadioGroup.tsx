import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { Radio } from '../../Radio';
import { RadioGroupProps } from '../types';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ options, value, onChange, className, orientation = 'vertical' }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      value={value}
      onValueChange={onChange}
      className={cn(
        'grid gap-2',
        orientation === 'horizontal' && 'flex flex-row space-x-2',
        orientation === 'vertical' && 'flex flex-col space-y-1',
        className,
      )}
    >
      {options.map(option => (
        <Radio
          key={option.value}
          id={option.value}
          value={option.value}
          label={option.label}
          isChecked={value === option.value}
        />
      ))}
    </RadioGroupPrimitive.Root>
  );
});
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
